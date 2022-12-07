import ProgramPage from '../../containers/ProgramPage'

export default function Program(props) {
  return <ProgramPage {...props} />
}

export async function getStaticPaths() {
  const { getSnowflakeData } = require('../../utils/snowflake')
  const { rows } = await getSnowflakeData({
    sqlText: `select * from PROGRAMS where URL not LIKE 'programs/%'`
  })
  return {
    paths: rows
      .map((program) => {
        if (program.URL) {
          return {
            params: {
              countrySlug: program.URL.split('/')[0],
              programSlug: program.URL.split('/')[1]
            }
          }
        }
      })
      .filter((path) => path),
    fallback: false
  }
}

export async function getStaticProps({ params: { countrySlug, programSlug } }) {
  const {
    getSnowflakeData,
    transformResultsData,
    transformNavigationData
  } = require('../../utils/snowflake')

  const changeGraphs = await getSnowflakeData({
    sqlText: `select * from GRAPHS
    where LEVEL = 'programs'
    and DATA_PANEL = 'change_graph'`
    // TODO: add the program code filter
    // and IVS_PROGRAM_CODE is '....'
  })

  const { rows: areasOfFocusData } = await getSnowflakeData({
    sqlText: `select * from AREAS_OF_FOCUS order by HEADER_TITLE ASC`
  })

  const { rows: countriesData } = await getSnowflakeData({
    sqlText: `select * from COUNTRIES where URL is not null order by HEADER_TITLE ASC`
  })

  const { rows: controlData } = await getSnowflakeData({
    sqlText: `select * from CONTROL where LEVEL = 'programs' or LEVEL = 'navigation'`
  })

  const { rows: disclaimerData } = await getSnowflakeData({
    sqlText: `select TEXT from CONTROL where WHAT = 'disclaimer'`
  })

  const { rows: programs } = await getSnowflakeData({
    sqlText: `select * from PROGRAMS where URL = '${countrySlug}/${programSlug}'`
  })

  const currentProgram = programs[0]

  const { rows: resultsData } = await getSnowflakeData({
    sqlText: `select * from STATEMENTS where LEVEL = 'programs' and IVS_PROGRAM_CODE = '${currentProgram.IVS_PROGRAM_CODE}'`
  })

  const { rows: resourcesData } = await getSnowflakeData({
    sqlText: `select * from RESOURCES where ${Array(4)
      .fill('')
      .map((val, index) => {
        const resourceId = currentProgram[`RESOURCEID_0${index + 1}`]
        return `RESOURCEID = '${resourceId}'`
      })
      .join(' or ')}`
  })

  const { rows: partnerData } = await getSnowflakeData({
    sqlText: `select * from PARTNERS where PROGRAM_CODE = '${currentProgram.IVS_PROGRAM_CODE}'`
  })

  const { rows: mapData } = await getSnowflakeData({
    sqlText: `select * from MAP where IVS_PROGRAM_CODE = '${currentProgram.IVS_PROGRAM_CODE}'`
  })

  return {
    props: {
      ...currentProgram,
      navigation: transformNavigationData(
        controlData,
        areasOfFocusData,
        countriesData
      ),
      results: transformResultsData(resultsData),
      controls:
        controlData.filter((control) => control.LEVEL === 'programs') || [],
      disclaimer: disclaimerData[0].TEXT,
      highlightedResults:
        resultsData.filter((result) => result.DATA_PANEL === 'yes') || [],
      resources: resourcesData || [],
      partners: partnerData || [],
      mapData: mapData || [],
      changeGraphs: [...changeGraphs.rows]
    }
  }
}