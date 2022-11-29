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

export const transformResultsData = (data) => {
  const byYear = {}

  data.forEach((result) => {
    if (!byYear[result.YEAR]) {
      byYear[result.YEAR] = {}
    }

    if (byYear[result.YEAR][result.AREA_OF_FOCUS]) {
      byYear[result.YEAR][result.AREA_OF_FOCUS].push(result)
    } else {
      byYear[result.YEAR][result.AREA_OF_FOCUS] = [result]
    }
  })
  return Object.keys(byYear)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map((year) => ({ year, areasOfFocus: byYear[year] }))
}
