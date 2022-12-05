import React, { useState } from 'react'
import styles from './filter-pages.module.scss'
import MediaCard from '../components/MediaCard/MediaCard'
import Dropdown from '../components/Dropdown/Dropdown'
import { getScreenWidth } from '../utils/getScreenWidth'
import { getSnowflakeData } from '../utils/snowflake'

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

// TODO: results below would come from filtering actual data
  const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] 
  const filters = ['Country', 'Area of Focus', 'Partner', 'Year']
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
    Country: [...new Set(props.countries)],
    'Area of Focus': [...new Set(props.areasOfFocus)],
    Partner: [...new Set(props.partners)],
    Year: [...new Set(props.programs.map((ea) => ea.TIMELINE_TAG_02))]
  }

  return (
    <div className={styles['programs-container']}>
      <div
        className={[styles['heading-content'], styles['resources']].join(' ')}
      >
        <h1 className={styles['title']}>Resources</h1>

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
                    options={options[filter].map((ea) => ({
                      label: ea,
                      value: ea
                    }))}
                    updateSelection={() => {}}
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
          {results
            .slice(0, smallScreen ? resultsToShowMobile : resultsToShowDesktop)
            .map((result, index) => (
              <MediaCard
                alt='My image alt text.'
                body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!'
                imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
                labels={['Health', 'Canada']}
                title='Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"'
                url='https://worldvision.ca/'
              />
            ))}
        </div>
        {(smallScreen ? resultsToShowMobile : resultsToShowDesktop) <
          results.length && (
          <div className={styles['show-more']}>
            <a onClick={showMoreResults}> Show more </a>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const countries = await getSnowflakeData({
    sqlText: `select HEADER_TITLE from COUNTRIES`
  })

  const areasOfFocus = await getSnowflakeData({
    sqlText: `select HEADER_TITLE from AREAS_OF_FOCUS`
  })

  const partners = await getSnowflakeData({
    sqlText: `select PARTNER_NAME from PARTNERS`
  })

  const programs = await getSnowflakeData({
    sqlText: `select * from PROGRAMS`
  })

  return {
    props: {
      countries: countries.rows.map((ea) => ea.HEADER_TITLE),
      areasOfFocus: areasOfFocus.rows.map((ea) => ea.HEADER_TITLE),
      partners: partners.rows.map((ea) => ea.PARTNER_NAME),
      programs: programs.rows
    }
  }
}
