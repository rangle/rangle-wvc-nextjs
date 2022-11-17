import { useState, useEffect } from 'react'
import './HeroBlock.scss'

import HeroCountry from '../../assets/HeroCountry.png'
import HeroSector from '../../assets/HeroSector.png'
import HeroProgram from '../../assets/HeroProgram.png'

import Button from '../Button/Button'
import SummaryBlock from '../SummaryBlock/SummaryBlock'

const HeroBlock = ({
  body,
  children,
  ctaLabel,
  ctaUrl,
  highlights,
  page,
  sectorImgAlt,
  sectorImgSrc,
  summaryDirection = 'horizontal',
  title
}) => {
  const [imgSrc, setImgSrc] = useState(HeroProgram)

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
        </div>
        <div className='hero-block__background-img'>
          <img src={imgSrc} alt='' aria-hidden />
          <div className='hero-block__hero-content'>
            <h1 className='hero-block__title'>{title}</h1>
            {body && <p className='hero-block__body'>{body}</p>}
            <Button label={ctaLabel} url={ctaUrl} />
          </div>
        </div>
      </div>
      <div className='hero-block__summary-container'>
        <div className='hero-block__summary-block'>
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
