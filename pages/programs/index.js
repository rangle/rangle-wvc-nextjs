import React, { useState } from 'react'
import styles from '../filter-pages.module.scss'
import MediaCard from '../../components/MediaCard/MediaCard'
import Dropdown from '../../components/Dropdown/Dropdown'
import { getScreenWidth } from '../../utils/getScreenWidth'

export default function ProgramFilter(props) {
  const DEFAULT_DESKTOP_INITIAL_RESULT = 9
  const DEFAULT_MOBILE_INITIAL_RESULT = 6
  const DEFAULT_MOBILE_INITIAL_FILTERS = 2

  const [resultsToShowDesktop, setResultsToShowDesktop] = useState(
    DEFAULT_DESKTOP_INITIAL_RESULT
  )
  const [resultsToShowMobile, setResultsToShowMobile] = useState(
    DEFAULT_MOBILE_INITIAL_RESULT
  )
  const [filtersToShowMobile, setFiltersToShowMobile] = useState(
    DEFAULT_MOBILE_INITIAL_FILTERS
  )

  const [selectedOptions, updateOptions] = useState({})
  // TODO: filter labels should come from snowflake
  const filters = [
    'Country',
    'Area of Focus',
    // TODO: need partner id
    // 'Partner',
    'Status',
    'Program Type'
  ]
  const screenWidth = getScreenWidth()
  const smallScreen = screenWidth < 768

  const showMoreResults = () => {
    setResultsToShowDesktop(
      resultsToShowDesktop + DEFAULT_DESKTOP_INITIAL_RESULT
    )
    setResultsToShowMobile(resultsToShowMobile + DEFAULT_MOBILE_INITIAL_RESULT)
  }

  const showMoreFilters = () => {
    setFiltersToShowMobile(filters.length)
  }

  const options = {
    Country: props.countryOptions,
    'Area of Focus': props.areasOfFocusOptions,
    Partner: [...new Set(props.partners)],
    Status: props.statusOptions,
    'Program Type': props.programTypeOptions
  }

  const programIds = [
    ...new Set(
      props.programsReference
        .filter((program) => {
          const filters = Object.keys(selectedOptions).filter(
            (option) => selectedOptions[option] !== 'All'
          )

          return filters
            .map((filter) => {
              const value = selectedOptions[filter]

              if (filter === 'Area of Focus') {
                return (
                  program.AREA_OF_FOCUS_CODE_01 === value ||
                  program.AREA_OF_FOCUS_CODE_02 === value
                )
              }

              if (filter === 'Country') {
                return program.COUNTRYCODE === value
              }

              if (filter === 'Program Type') {
                return program.PROGRAM_TYPE_CODE === value
              }

              if (filter === 'Status') {
                return program.STATUS_CODE === value
              }
            })
            .every((isSelected) => isSelected)
        })
        .map((program) => program.IVS_PROGRAM_CODE)
    )
  ]

  return (
    <div className={styles['programs-container']}>
      <div className={styles['heading-content']}>
        <h1 className={styles['title']}>Programs</h1>

        <p className={styles['intro']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing
          elit ut aliquam purus sit amet. Turpis egestas maecenas pharetra
          convallis posuere morbi. Nulla facilisi cras fermentum odio eu. Elit
          ut aliquam purus sit amet luctus. Nullam non nisi est sit amet
          facilisis.
        </p>
        <div className={styles['filters-container']}>
          <div className={styles['filter-container']}>
            {filters
              .slice(0, smallScreen ? filtersToShowMobile : filters.length)
              .map((filter, index) => (
                <div className={styles['filter-dropdown']}>
                  <Dropdown
                    dropdownLabel={filter}
                    id='selectId'
                    options={[
                      // TODO: need to add to snowflake
                      { label: 'All', value: null },
                      ...options[filter].map((ea) => ({
                        label: ea.LABEL,
                        value: ea.VALUE
                      }))
                    ]}
                    value={selectedOptions[filter]}
                    updateSelection={(value) => {
                      updateOptions({
                        ...selectedOptions,
                        [filter]: value
                      })
                    }}
                  />{' '}
                </div>
              ))}
          </div>
          {smallScreen && filtersToShowMobile < filters.length && (
            <div className={styles['show-more']}>
              <a onClick={showMoreFilters}> More filters </a>
            </div>
          )}
        </div>
      </div>

      <div className={styles['result-body']}>
        <div className={styles['result-grid']}>
          {programIds
            .slice(0, smallScreen ? resultsToShowMobile : resultsToShowDesktop)
            .map((id, index) => {
              const program = props.programs[id]
              return (
                <MediaCard
                  alt='My image alt text.'
                  body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                  imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                  labels={['Health', 'Canada']}
                  title={program.HEADER_TITLE}
                  url={`/${program.URL}`}
                />
              )
            })}
        </div>
        {(smallScreen ? resultsToShowMobile : resultsToShowDesktop) <
          programIds.length && (
          <div className={styles['show-more']}>
            <a onClick={showMoreResults}> Show more </a>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const {
    getSnowflakeData,
    transformNavigationData
  } = require('../../utils/snowflake')

  const { rows: countriesData } = await getSnowflakeData({
    sqlText: `select * from COUNTRIES where URL is not null order by HEADER_TITLE ASC`
  })

  const { rows: areasOfFocusData } = await getSnowflakeData({
    sqlText: `select * from AREAS_OF_FOCUS order by HEADER_TITLE ASC`
  })

  const partners = await getSnowflakeData({
    sqlText: `select PARTNER_NAME from PARTNERS`
  })

  // This contains program by countries (contains duplicate programs)
  const programsReference = await getSnowflakeData({
    sqlText: `select STATUS_CODE, COUNTRYCODE, AREA_OF_FOCUS_CODE_01, AREA_OF_FOCUS_CODE_02, PROGRAM_TYPE_CODE, HEADER_TITLE, PROGRAMS.IVS_PROGRAM_CODE from MAP INNER JOIN PROGRAMS ON MAP.IVS_PROGRAM_CODE=PROGRAMS.IVS_PROGRAM_CODE`
  })

  // This contains all unique programs
  const { rows: programsData } = await getSnowflakeData({
    sqlText: `select * from PROGRAMS`
  })

  const { rows: controlData } = await getSnowflakeData({
    sqlText: `select * from CONTROL where LEVEL = 'countries' or LEVEL = 'navigation'`
  })

  const { rows: disclaimerData } = await getSnowflakeData({
    sqlText: `select TEXT from CONTROL where WHAT = 'disclaimer'`
  })

  const { rows: statusOptions } = await getSnowflakeData({
    sqlText: `select MIN(STATUS_LABEL) as label, STATUS_CODE as value from PROGRAMS group by STATUS_CODE`
  })

  const { rows: countryOptions } = await getSnowflakeData({
    sqlText: `select COUNTRY as label, MIN(COUNTRYCODE) as value from MAP INNER JOIN PROGRAMS ON MAP.IVS_PROGRAM_CODE=PROGRAMS.IVS_PROGRAM_CODE group by COUNTRY`
  })

  // const { rows: areasOfFocusOptions1 } = await getSnowflakeData({
  //   sqlText: `select MIN(AREAS_OF_FOCUS.HEADER_TITLE) as label, AREA_ID as value from PROGRAMS INNER JOIN AREAS_OF_FOCUS ON PROGRAMS.AREA_OF_FOCUS_CODE_01=AREAS_OF_FOCUS.AREA_ID group by AREA_ID`
  // })

  // const { rows: areasOfFocusOptions2 } = await getSnowflakeData({
  //   sqlText: `select MIN(AREAS_OF_FOCUS.HEADER_TITLE) as label, AREA_ID as value from PROGRAMS INNER JOIN AREAS_OF_FOCUS ON PROGRAMS.AREA_OF_FOCUS_CODE_02=AREAS_OF_FOCUS.AREA_ID group by AREA_ID`
  // })

  const { rows: areasOfFocusOptions } = await getSnowflakeData({
    sqlText: `select AREA_ID as value, HEADER_TITLE as label from AREAS_OF_FOCUS`
  })

  const { rows: programTypeOptions } = await getSnowflakeData({
    sqlText: `select PROGRAM_TYPE_CODE as value, MIN(SUMMARY_01_VALUE) as label from PROGRAMS group by PROGRAM_TYPE_CODE`
  })

  const programs = {}

  programsData.forEach((program) => {
    programs[program.IVS_PROGRAM_CODE] = program
  })

  return {
    props: {
      partners: partners.rows.map((ea) => ea.PARTNER_NAME),
      programsReference: programsReference.rows,
      programs,
      navigation: transformNavigationData(
        controlData,
        areasOfFocusData,
        countriesData
      ),
      disclaimer: disclaimerData[0].TEXT,
      statusOptions,
      countryOptions,
      // TODO: remove duplicates, this doesn't work right now
      // areasOfFocusOptions: [
      //   ...new Set(areasOfFocusOptions1.concat(areasOfFocusOptions2))
      // ],
      areasOfFocusOptions,
      programTypeOptions
    }
  }
}
