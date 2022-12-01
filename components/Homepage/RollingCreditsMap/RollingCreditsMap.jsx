import styles from './RollingCreditsMap.module.scss'

import { animate, useInView } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react'
import MapHeaderContainer from '../../MapChart/MapChartHeader/MapHeaderContainer'

const RollingCreditsMap = ({ imageAlt, imageSrc, mapCreditsData }) => {
  return (
    // MAP ON ITS OWN...
    // <div>
    //   <MapHeaderContainer
    //     className={styles['rolling-credits-map__bg-image']} // may not need this class
    //     showHeaderControls={true} // should be false until rolling credits end
    //     showMarkers={true} // should be false until rolling credits end
    //     isDark={true}
    //     duration={1000}
    //     padding={40}
    //     showEmptyPrograms={false}
    //     legendText={'Explore our work around the world'}
    //     countryDropdownLabel={'Countries'}
    //     programDropdownLabel={'Program Type'}
    //     interactive={false}
    //   />
    // </div>

    <div className={styles['rolling-credits-map']}>
      <div className={styles['rolling-credits-map__relative-wrapper']}>
        <div className={styles['rolling-credits-map__bg-outer']}>
          <div className={styles['rolling-credits-map__bg-inner']}>
            {/* position fixed background image -- can we treat the map the same? */}
            {/* <img
              className={styles['rolling-credits-map__bg-image']}
              src={imageSrc}
              alt=''
            /> */}
            <div>
              <MapHeaderContainer
                // className={styles['rolling-credits-map__bg-image']}  // may not need this class
                showHeaderControls={true} // should be false until rolling credits end
                showMarkers={false} // should be false until rolling credits end
                isDark={true}
                duration={1000}
                padding={40}
                showEmptyPrograms={false}
                legendText={'Explore our work around the world'}
                countryDropdownLabel={'Countries'}
                programDropdownLabel={'Program Type'}
                interactive={false}
                zoom={1}
              />
            </div>
          </div>
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
      <div> map goes here</div>
    </div>
  )
}

export default RollingCreditsMap
