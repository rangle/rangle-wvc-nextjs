import React from 'react'
import styles from './MapStatistics.module.scss'
import Tooltip from '../../Tooltip/Tooltip'

//FIXME tooltips are not implemented
const MapStatistics = ({ mapStatistics }) => {
  return (
    <MapStatisticsContainer>
      {mapStatistics?.map(({ title, statistic, tooltip }, index) => (
        <MapStatisticsBlock
          key={title}
          title={title}
          statistic={statistic}
          tooltip={tooltip}
          isLead={index === 0}
        />
      ))}
    </MapStatisticsContainer>
  )
}
const MapStatisticsContainer = ({ children }) => {
  return <div className={styles['map-statistics-block-grid']}>{children}</div>
}
const MapStatisticsBlock = ({ title, statistic, tooltip, isLead }) => {
  return (
    <div className={styles['map-statistics-block']}>
      <div className={styles['map-statistics-block_content']}>
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
    </div>
  )
}

export { MapStatisticsBlock, MapStatisticsContainer, MapStatistics }
