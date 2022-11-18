import { useState, useEffect, useCallback } from 'react'
import './HeroBlock.scss'

import HeroCountry from '../../assets/HeroCountry.png'
import HeroSector from '../../assets/HeroSector.png'
import HeroProgram from '../../assets/HeroProgram.png'

import Button from '../Button/Button'
import SummaryBlock from '../SummaryBlock/SummaryBlock'
import MapChartCountries from '../MapChart/MapChartCountry'
import { getScreenWidth } from '../../utils/getScreenWidth'

const HeroBlock = ({
  body,
  children,
  countryCode,
  ctaLabel,
  ctaUrl,
  highlights,
  page,
  sectorImgAlt,
  sectorImgSrc,
  summaryDirection = 'horizontal',
  title
}) => {
  const screenWidth = getScreenWidth()
  const [imgSrc, setImgSrc] = useState(HeroProgram)
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
      setImgSrc(HeroSector)
    } else if (page === 'country') {
      setImgSrc(HeroCountry)
    } else if (page === 'program') {
      setImgSrc(HeroProgram)
    }
  }, [[page]])

  return (
    <div className='hero-block'>
      <div className='hero-block__hero-container'>
        <div className='hero-block__top-container'>
          {page === 'sector' && sectorImgSrc && (
            <img
              src={sectorImgSrc}
              alt={sectorImgAlt}
              className='hero-block__sector-image'
            />
          )}
          {page === 'country' && countryCode && (
            <div className='hero-block__map-container'>
              <MapChartCountries
                countryCode={countryCode}
                zoomLevel={mapZoomLevel}
              />
            </div>
          )}
        </div>
        <div
          className={`hero-block__main-content hero-block__main-content--${page}`}
        >
          <img src={imgSrc} alt='' aria-hidden />
          <div className='hero-block__hero-content'>
            <h1 className='hero-block__title'>{title}</h1>
            {body && <p className='hero-block__body'>{body}</p>}
            <Button label={ctaLabel} url={ctaUrl} />
          </div>
        </div>
      </div>
      <div className='hero-block__summary-container'>
        <div
          className={`hero-block__summary-block hero-block__summary-block--${page}`}
        >
          <SummaryBlock
            highlights={highlights}
            order={page === 'sector' ? 'reverse' : 'title-first'}
            direction={summaryDirection}
          />
        </div>
        <div className='hero-block__children-container'>{children}</div>
      </div>
    </div>
  )
}

export default HeroBlock
