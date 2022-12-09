import React from 'react'
import styles from './MapStatistics.module.scss'
import Tooltip from '../../Tooltip/Tooltip'

const MapStatisticsBlock = ({ title, statistic, tooltip, isLead }) => {
  return (
    <div className={styles['map-statistics-block']}>
      <p className={styles['map-statistics-block__body']}>
        <span
          className={
            styles[
              `map-statistics-block__statistic${isLead ? '--large' : ''}`
            ]
          }
        >
          {statistic}
        </span>
      </p>
      <h6 className={styles[`map-statistics-block__title`]}>
        {title} <Tooltip content={tooltip} />
      </h6>
    </div>
  )
}

export { MapStatisticsBlock }
