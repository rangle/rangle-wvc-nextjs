export const getSnowflakeData = async (options) => {
  const snowflake = require('snowflake-sdk')
  const { promisify } = require('util')
  const connection = await snowflake.createConnection({
    account: process.env.SNOWFLAKE_ACCOUNT,
    username: process.env.SNOWFLAKE_USERNAME,
    password: process.env.SNOWFLAKE_PASSWORD,
    database: process.env.SNOWFLAKE_DATABASE,
    warehouse: process.env.SNOWFLAKE_WAREHOUSE,
    schema: process.env.SNOWFLAKE_SCHEMA
  })

  const connectAsync = promisify(connection.connect)
  await connectAsync()

  async function connExecuteAsync(options) {
    return new Promise((resolve, reject) => {
      connection.execute({
        ...options,
        complete: function (err, stmt, rows) {
          if (err) {
            reject(err)
          } else {
            resolve({ stmt, rows })
          }
        }
      })
    })
  }

  return connExecuteAsync(options)
}

export const transformNavigationData = (
  controlData,
  areasOfFocusData,
  countriesData
) => {
  const navData = controlData.filter(
    (control) => control.LEVEL === 'navigation'
  )

  const subNavMenuItems = navData
    .filter((navRow) => navRow.WHAT.includes('subnav_label_'))
    .sort(
      (a, b) =>
        parseInt(a.WHAT.split('subnav_label_')[1]) -
        parseInt(b.WHAT.split('subnav_label_')[1])
    )
    .map((navRow) => ({
      hasSubMenu: false,
      isLink: true,
      label: navRow.TEXT || '',
      url: navRow.URL || ''
    }))

  // Sort Countries by Region
  const regions = {
    // TODO: update to use id
    Africa: countriesData.filter(
      (country) => country.NAVIGATION_REGIONS === 'Africa'
    ),
    'Asia and Pacific': countriesData.filter(
      (country) => country.NAVIGATION_REGIONS === 'Asia and Pacific'
    ),
    'Latin America': countriesData.filter(
      (country) => country.NAVIGATION_REGIONS === 'Latin America'
    ),
    'Middle East and Eastern Europe': countriesData.filter(
      (country) =>
        country.NAVIGATION_REGIONS === 'Middle East and Eastern Europe'
    )
  }

  // Sort Countries by Region
  const areasOfFocusCategories = {
    // TODO: update to use id
    Sectors: areasOfFocusData.filter(
      (areaOfFocus) => areaOfFocus.NAVIGATION_SUBMENU === 'Sectors'
    ),
    'Featured Themes': areasOfFocusData.filter(
      (areaOfFocus) => areaOfFocus.NAVIGATION_SUBMENU === 'Featured Themes'
    )
  }

  // Areas of focus nav data
  subNavMenuItems[0] = {
    ...subNavMenuItems[0],
    hasSubMenu: true,
    isLink: false,
    subMenuData: Object.keys(areasOfFocusCategories).map((category) => ({
      list: areasOfFocusCategories[category].map((areaOfFocus) => ({
        label: areaOfFocus.HEADER_TITLE,
        url: areaOfFocus.CURRENT_URL
      })),
      name: category,
      subMenu: 'Areas of Focus'
    }))
  }

  // Countries nav data
  subNavMenuItems[1] = {
    ...subNavMenuItems[1],
    hasSubMenu: true,
    isLink: false,
    subMenuData: Object.keys(regions).map((region) => ({
      list: regions[region].map((country) => ({
        label: country.HEADER_TITLE,
        url: country.URL
      })),
      name: region,
      subMenu: 'Countries'
    }))
  }

  return subNavMenuItems
}

export const transformResultsData = (data) => {
  const byYear = {}

  data.forEach((result) => {
    if (!byYear[result.YEAR]) {
      byYear[result.YEAR] = {}
    }

    if (byYear[result.YEAR][result.RESULTS_SUBHEADER]) {
      byYear[result.YEAR][result.RESULTS_SUBHEADER].push(result)
    } else {
      byYear[result.YEAR][result.RESULTS_SUBHEADER] = [result]
    }
  })
  return Object.keys(byYear)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map((year) => ({ year, areasOfFocus: byYear[year] }))
}
