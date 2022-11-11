import './StatisticCardGrid.scss'
import Carousel from '../Carousel/Carousel'
import { getScreenWidth } from '../../utils/getScreenWidth'
import { useEffect, useState } from 'react'

export const StatisticCard = ({ body, statistic, title }) => {
  return (
    <div className='statistic-card'>
      <div className='statistic-card__content'>
        <h6 className='statistic-card__title'>{title}</h6>
        <p className='statistic-card__body'>
          <span className='statistic-card__statistic'>{statistic}</span>
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
    <div className={`statistic-card-grid ${modifier}`}>{[cards]}</div>
  )
}

export default StatisticCardGrid
