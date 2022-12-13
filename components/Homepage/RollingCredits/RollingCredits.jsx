import styles from './RollingCredits.module.scss'
import React from 'react'
import dynamic from 'next/dynamic'

import FeatureCard from '../../FeatureCard/FeatureCard'

// The carousel is imported without SSR to ensure the id of the carousel matches on both client & server
const HomepageCarouselNoSSR = dynamic(
  () => import('../../HomepageCarousel/HomepageCarousel'),
  {
    ssr: false
  }
)

const RollingCredits = ({ title, credits, imageSrc, featureCardData }) => {
  const cards = featureCardData.map((card) => (
    <FeatureCard
      key={card.title}
      title={card.title}
      description={card.description}
      imgSrc={card.imgSrc}
      imgAlt={card.imgAlt}
    />
  ))

  return (
    <div className={styles['rolling-credits']}>
      <div className={styles['rolling-credits__relative-wrapper']}>
        <div className={styles['rolling-credits__bg-outer']}>
        </div>
        <div>
          {credits &&
            credits.map((credit) => {
              return (
                <div
                  key={credit.highlight}
                  className={styles['rolling-credits__content']}
                >
                  <h2 className={styles['rolling-credits__text']}>
                    {credit.pretext}
                    <span>{credit.highlight}</span>
                    {credit.subtext}
                  </h2>
                </div>
              )
            })}

          {/* CAROUSEL */}
          <div className={styles['rolling-credits__content']}>
            <div className={styles['rolling-credits__carousel-container']}>
              <HomepageCarouselNoSSR title={title} cards={cards} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RollingCredits
