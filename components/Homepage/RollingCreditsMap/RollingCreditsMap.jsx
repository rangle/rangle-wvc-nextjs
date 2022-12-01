import styles from './RollingCreditsMap.module.scss'

import { animate, useInView } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react'

const RollingCreditsMap = ({ imageAlt, imageSrc, mapCreditsData }) => {
  return (
    <div className={styles['rolling-credits-map']}>
      <div className={styles['rolling-credits-map__relative-wrapper']}>
        <div className={styles['rolling-credits-map__bg-outer']}>
          <div className={styles['rolling-credits-map__bg-inner']}>
            <img
              className={styles['rolling-credits-map__bg-image']}
              src={imageSrc}
              alt=''
            />
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
    </div>
  )
}

export default RollingCreditsMap
