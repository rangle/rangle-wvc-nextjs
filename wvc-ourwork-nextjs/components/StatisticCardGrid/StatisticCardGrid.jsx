import styles from './StatisticCardGrid.module.scss'
import Carousel from '../Carousel/Carousel'
import { getScreenWidth } from '../../utils/getScreenWidth'
import { useEffect, useState } from 'react'

export const StatisticCard = ({ body, statistic, title }) => {
  return (
    <div className={styles['statistic-card']}>
      <div className={styles['statistic-card__content']}>
        <h6 className={styles['statistic-card__title']}>{title}</h6>
        <p className={styles['statistic-card__body']}>
          <span className={styles['statistic-card__statistic']}>{statistic}</span>
          {body}
        </p>
      </div>
    </div>
  )
}

const StatisticCardGrid = ({ cards }) => {
  const screenWidth = getScreenWidth()
  const [isMobile, setIsMobile] = useState()
  let modifier = ''

  if (cards.length < 3) {
    if (cards.length === 2) {
      modifier = 'statistic-card-grid--duo'
    } else {
      modifier = 'statistic-card-grid--single'
    }
  }

  useEffect(() => {
    if (screenWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [screenWidth])

  return isMobile ? (
    <Carousel cards={cards} />
  ) : (
    <div className={`${styles['statistic-card-grid']} ${styles[modifier]}`}>{[cards]}</div>
  )
}

export default StatisticCardGrid
