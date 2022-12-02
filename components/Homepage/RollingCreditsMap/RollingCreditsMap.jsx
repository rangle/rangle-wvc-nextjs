import styles from './RollingCreditsMap.module.scss'

import React from 'react'
import MapHeaderContainer from '../../MapChart/MapChartHeader/MapHeaderContainer'

const RollingCreditsMap = ({ mapCreditsData }) => {
  return (
    <div className={styles['rolling-credits-map']}>
      <div className={styles['rolling-credits-map__relative-wrapper']}>
        <div className={styles['rolling-credits-map__bg-outer']}>
          <div className={styles['rolling-credits-map__bg-inner']}></div>
        </div>
        <div>
          {mapCreditsData &&
            mapCreditsData.map((credit) => {
              return (
                <div
                  key={credit}
                  className={styles['rolling-credits-map__content']}
                >
                  <h2 className={styles['rolling-credits-map__text']}>
                    {credit}
                  </h2>
                </div>
              )
            })}
        </div>
      </div>
      <div>
        <MapHeaderContainer
          showHeaderControls={true}
          showMarkers={false}
          isDark={true}
          duration={1000}
          padding={40}
          showEmptyPrograms={false}
          legendText={'Explore our work around the world'}
          countryDropdownLabel={'Countries'}
          programDropdownLabel={'Program Type'}
          interactive={false}
          zoom={1.25}
        />
      </div>
    </div>
  )
}

export default RollingCreditsMap
