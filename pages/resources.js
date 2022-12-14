import React, { useState } from 'react'
import styles from './filter-pages.module.scss'
import MediaCard from '../components/MediaCard/MediaCard'
import Dropdown from '../components/Dropdown/Dropdown'
import { getScreenWidth } from '../utils/getScreenWidth'

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

  const filters = ['Country', 'Area of Focus', /*'Partner',*/ 'Year']
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
    // Partner: [...new Set(props.partners)],
    Year: [
      ...new Set(props.resourcesData.map((resource) => resource.YEAR))
    ].map((year) => ({ VALUE: year, LABEL: year }))
  }

  const [selectedOptions, updateOptions] = useState({})

  const resources = props.resourcesData.filter((resource) => {
    const filters = Object.keys(selectedOptions).filter(
      (option) => selectedOptions[option] !== 'All'
    )

    return filters
      .map((filter) => {
        const value = selectedOptions[filter]

        if (filter === 'Area of Focus') {
          return (
            resource.AREA_OF_FOCUS_1_CODE === value ||
            resource.AREA_OF_FOCUS_2_CODE === value ||
            resource.AREA_OF_FOCUS_3_CODE === value
          )
        }

        if (filter === 'Country') {
          return (
            resource.COUNTRY_CODE_1 === value ||
            resource.COUNTRY_CODE_2 === value ||
            resource.COUNTRY_CODE_3 === value ||
            resource.COUNTRY_CODE_4 === value ||
            resource.COUNTRY_CODE_5 === value
          )
        }

        if (filter === 'Year') {
          return resource.YEAR === value
        }
      })
      .every((isSelected) => isSelected)
  })

  return (
    <div className={styles['programs-container']}>
      <div
        className={[styles['heading-content'], styles['resources']].join(' ')}
      >
        <h1 className={styles['title']}>{props.title}</h1>

        <p className={styles['intro']}>{props.body}</p>
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
                      { label: 'All', value: null },
                      ...options[filter].map((option) => ({
                        label: option.LABEL,
                        value: option.VALUE
                      }))
                    ]}
                    updateSelection={(value) => {
                      updateOptions({
                        ...selectedOptions,
                        [filter]: value
                      })
                    }}
                  />
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
        {/* TODO: add to snowflake */}
        {resources.length < 1 && (
          <p className={styles['result-not-found']}>No results found</p>
        )}
        <div className={styles['result-grid']}>
          {resources
            .slice(0, smallScreen ? resultsToShowMobile : resultsToShowDesktop)
            .map((resource, index) => (
              <MediaCard
                alt={resource.ICON_ALT}
                body={resource.RESOURCE_BODY}
                iconSrc={resource.ICON_URL}
                labels={[resource.RESOURCE_SUBTYPE]}
                title={resource.RESOURCE_TITLE}
                url={resource.RESOURCE_URL}
              />
            ))}
        </div>
        {(smallScreen ? resultsToShowMobile : resultsToShowDesktop) <
          resources.length && (
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
  } = require('../utils/snowflake')

  const { rows: areasOfFocusData } = await getSnowflakeData({
    sqlText: `select NAVIGATION_SUBMENU, HEADER_TITLE, CURRENT_URL from AREAS_OF_FOCUS order by NAVIGATION_ORDER`
  })

  const { rows: countriesData } = await getSnowflakeData({
    sqlText: `select HEADER_TITLE, URL, NAVIGATION_REGIONS from COUNTRIES where URL is not null order by HEADER_TITLE ASC`
  })

  const { rows: controlData } = await getSnowflakeData({
    sqlText: `select * from CONTROL where LEVEL = 'countries' or LEVEL = 'navigation' or LEVEL = 'resources_filter'`
  })

  const partners = await getSnowflakeData({
    sqlText: `select PARTNER_NAME from PARTNERS`
  })

  const { rows: disclaimerData } = await getSnowflakeData({
    sqlText: `select TEXT from CONTROL where WHAT = 'disclaimer'`
  })

  const { rows: resourcesData } = await getSnowflakeData({
    sqlText: `select * from RESOURCES ORDER BY YEAR DESC`
  })

  const { rows: countryOptions } = await getSnowflakeData({
    sqlText: `select HEADER_TITLE as label, COUNTRY_CODE as value from COUNTRIES`
  })

  const { rows: areasOfFocusOptions } = await getSnowflakeData({
    sqlText: `select HEADER_TITLE as label, AREA_ID as value from AREAS_OF_FOCUS `
  })

  return {
    props: {
      countryOptions,
      areasOfFocusOptions,
      partners: partners.rows.map((ea) => ea.PARTNER_NAME),
      navigation: transformNavigationData(
        controlData,
        areasOfFocusData,
        countriesData
      ),
      disclaimer: disclaimerData[0].TEXT,
      resourcesData,
      title:
        controlData.find((control) => control.WHAT === 'header_title')?.TEXT ||
        '',
      body: controlData.find((control) => control.WHAT === 'body')?.TEXT || '',
      TITLETAG:
        controlData.find((control) => control.WHAT === 'titletag')?.TEXT || '',
      METADATA:
        controlData.find((control) => control.WHAT === 'metatag')?.TEXT || ''
    }
  }
}
