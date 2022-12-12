import styles from './StoryCardGrid.module.scss'
import { getScreenWidth } from '../../utils/getScreenWidth'
import { useEffect, useState } from 'react'
import CtaLink from '../CtaLink/CtaLink'
import Image from 'next/image'

const ctaArrow = (
  <svg xmlns='http://www.w3.org/2000/svg' width='8' height='12'>
    <path
      fillRule='evenodd'
      d='M4.823 6 0 1.487 1.589 0 8 6l-6.411 6L0 10.513 4.823 6Z'
      clipRule='evenodd'
    />
  </svg>
)

export const StoryCard = ({ body, imgSrc, imgAlt, linkUrl, linkLabel }) => {
  return (
    <div className={styles['story-card']}>
      <div className={styles['story-card__img-container']}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          className={styles['story-card__img']}
          fill
        />
      </div>
      <div className={styles['story-card__content-container']}>
        <p>{body}</p>
        <CtaLink url={linkUrl}>
          {linkLabel}
          {ctaArrow}
        </CtaLink>
      </div>
    </div>
  )
}

const StoryCardGrid = ({ title, cards }) => {
  if (!cards.length) return

  const screenWidth = getScreenWidth()
  const [isMobile, setIsMobile] = useState()

  useEffect(() => {
    if (screenWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [screenWidth])

  return (
    <div className={styles['story-card-grid']}>
      <h3>{title}</h3>
      {isMobile ? cards[0] : cards}
    </div>
  )
}

export default StoryCardGrid
