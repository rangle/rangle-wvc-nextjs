import { useState, useEffect } from 'react'
import styles from './HeroBlock.module.scss'

import Button from '../Button/Button'
import SummaryBlock from '../SummaryBlock/SummaryBlock'
import MapChartCountries from '../MapChart/MapChartCountry/MapChartCountry'
import { getScreenWidth } from '../../utils/getScreenWidth'
import Image from 'next/image'

const HeroBlock = ({
  body,
  children,
  countryCode,
  ctaLabel,
  ctaUrl,
  highlights,
  markerCoordinates,
  page,
  sectorImgAlt,
  sectorImgSrc,
  summaryDirection = 'horizontal',
  title
}) => {
  const screenWidth = getScreenWidth()
  const [imgSrc, setImgSrc] = useState('/HeroProgram.png')
  const [mapZoomLevel, setMapZoomLevel] = useState(4)

  useEffect(() => {
    if (screenWidth < 1024 && screenWidth > 769) {
      setMapZoomLevel(3)
    } else if (screenWidth < 768) {
      setMapZoomLevel(2)
    } else {
      setMapZoomLevel(4)
    }
  }, [screenWidth])

  useEffect(() => {
    if (page === 'sector') {
      setImgSrc('/HeroSector.png')
    } else if (page === 'country') {
      setImgSrc('/HeroCountry.png')
    } else if (page === 'program') {
      setImgSrc('/HeroProgram.png')
    }
  }, [page])

  return (
    <div className={styles['hero-block']}>
      <div className={styles['hero-block__hero-container']}>
        <div className={styles['hero-block__top-container']}>
          {page === 'sector' && sectorImgSrc && (
            <Image
              src={sectorImgSrc}
              alt={sectorImgAlt}
              className={styles['hero-block__top-container--image']}
              fill
              priority
            />
          )}
          {page === 'country' && countryCode && (
            <div className={styles['hero-block__map-container']}>
              <MapChartCountries
                countryCode={countryCode}
                zoomLevel={mapZoomLevel}
                interactive={false}
                markerCoordinates={markerCoordinates}
              />
            </div>
          )}
          {page === 'program' && (
            <div className={styles['hero-block__map-container']}>
              <MapChartCountries
                countryCode={countryCode}
                markerCoordinates={markerCoordinates}
                interactive={false}
                zoomLevel={mapZoomLevel}
              />
            </div>
          )}
        </div>
        <div
          className={`${styles['hero-block__main-content']} ${
            styles[`hero-block__main-content--${page}`]
          }`}
        >
          <div
            className={styles['hero-block__background-image-container']}
            style={{
              backgroundImage: `url('${imgSrc}')`
            }}
          >
            <div className={styles['hero-block__hero-content']}>
              <h1 className={styles['hero-block__title']}>{title}</h1>
              {body && <p className={styles['hero-block__body']}>{body}</p>}
              <div className={styles['hero-block__cta']}>
                <Button label={ctaLabel} url={ctaUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {highlights.length > 0 && (
        <div className={styles['hero-block__summary-container']}>
          <div
            className={`${styles['hero-block__summary-block']} ${
              styles[`hero-block__summary-block--${page}`]
            }`}
          >
            <SummaryBlock
              highlights={highlights}
              order={page === 'sector' ? 'reverse' : 'title-first'}
              direction={summaryDirection}
            />
          </div>
          <div className={styles['hero-block__children-container']}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroBlock
