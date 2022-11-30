import React, { useState } from 'react'
import styles from './programs.module.scss'
import MediaCard from '../components/MediaCard/MediaCard'
import Dropdown from '../components/Dropdown/Dropdown'
import { getScreenWidth } from '../utils/getScreenWidth'

export default function ProgramFilter() {
  const DEFAULT_DESKTOP_INITIAL_RESULT = 9
  const DEFAULT_MOBILE_INITIAL_RESULT = 6
  const DEFAULT_MOBILE_INITIAL_FILTERS = 2

  const [resultsToShowDesktop, setResultsToShowDesktop] = useState(
    DEFAULT_DESKTOP_INITIAL_RESULT
  )
  const [resultsToShowMobile, setResultsToShowMobile] = useState(
    DEFAULT_MOBILE_INITIAL_RESULT
  )
  const [filtersToShowMobile, setFiltersToShowMobile] = useState(DEFAULT_MOBILE_INITIAL_FILTERS)

  const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const filters = [1, 2, 3, 4, 5]
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
                    dropdownLabel='Dropdown Label'
                    id='selectId'
                    options={[
                      {
                        label: 'Option 1',
                        value: 'option 1'
                      },
                      {
                        label: 'Option 2',
                        value: 'option 2'
                      },
                      {
                        label: 'Option 3',
                        value: 'option 3'
                      },
                      {
                        label: 'Option 4',
                        value: 'option 4'
                      }
                    ]}
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
