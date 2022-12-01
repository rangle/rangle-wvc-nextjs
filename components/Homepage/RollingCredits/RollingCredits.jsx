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

const RollingCredits = ({ children }) => {
  return (
    <div className={styles['rolling-credits']}>
      <div className={styles['rolling-credits__relative-wrapper']}>
        <div className={styles['rolling-credits__bg-outer']}>
          <div className={styles['rolling-credits__bg-inner']}>
            <img
              className={styles['rolling-credits__bg-image']}
              src='/homepage/rollingCredits/rolling-credits-background.jpg'
              alt=''
            />
          </div>
        </div>
        <div>
          <div className={styles['rolling-credits__content']}>
            <h2 className={styles['rolling-credits__text']}>
              Canadians know us best for our community-based child sponsorship
              programs.
            </h2>
          </div>
          <div className={styles['rolling-credits__content']}>
            <h2 className={styles['rolling-credits__text']}>
              We’re proud of our sponsorship programs. And we do so much more!
            </h2>
          </div>
          <div className={styles['rolling-credits__content']}>
            <h2 className={styles['rolling-credits__text']}>
              Canadians know us best for our community-based child sponsorship
              programs.
            </h2>
          </div>

          {/* CAROUSEL */}
          <div className={styles['rolling-credits__content']}>
            <div className={styles['rolling-credits__carousel-container']}>
              <HomepageCarouselNoSSR
                title='Did you know?'
                cards={[
                  <FeatureCard
                    title={
                      "Our Christian faith is an essential part of World Vision's holistic approach."
                    }
                    description={
                      "84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups."
                    }
                    imgSrc={
                      'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg'
                    }
                    imgAlt={'sample alt text'}
                  />,
                  <FeatureCard
                    title={
                      "Our Christian faith is an essential part of World Vision's holistic approach."
                    }
                    description={
                      "84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups."
                    }
                    imgSrc={
                      'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg'
                    }
                    imgAlt={'sample alt text'}
                  />,
                  <FeatureCard
                    title={
                      "Our Christian faith is an essential part of World Vision's holistic approach."
                    }
                    description={
                      "84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups."
                    }
                    imgSrc={
                      'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg'
                    }
                    imgAlt={'sample alt text'}
                  />
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RollingCredits
