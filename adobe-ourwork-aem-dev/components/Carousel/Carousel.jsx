import { useState } from 'react'
import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProgramCard from '../ProgramCard/ProgramCard'
import { PrevIcon, NextIcon } from './icons'

import './Carousel.scss'
import 'swiper/scss'

const Carousel = ({ altText = 'Carousel of program cards', cards, title }) => {
  const slideTotal = cards.length
  const [activeSlideNumber, setActiveSlideNumber] = useState(1)

  return (
    <div className='carousel'>
      <div className='carousel--header'>
        <h2>{title}</h2>
        <div className='carousel-nav-container-desktop'>
          <p className='carousel-pagination'>
            Slide {activeSlideNumber}/{slideTotal}
          </p>
          <div
            className='carousel-nav-button carousel-nav-button-previous'
            tabIndex={-1}
          >
            <PrevIcon className='carousel-nav-button--icon' />
            <p className='carousel-nav-button--label'>Previous</p>
          </div>
          <div
            className='carousel-nav-button carousel-nav-button-next'
            tabIndex={-1}
          >
            <p className='carousel-nav-button--label'>Next</p>
            <NextIcon className='carousel-nav-button--icon' />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        allowTouchMove={false}
        navigation={{
          prevEl: '.carousel-nav-button-previous',
          nextEl: '.carousel-nav-button-next'
        }}
        slidesPerView={'auto'}
        a11y={{
          containerMessage: altText
        }}
        onSlideChange={(swiper) => {
          setActiveSlideNumber(swiper.realIndex + 1)
        }}
        loop
        loopedSlides={slideTotal}
      >
        {cards &&
          cards.length &&
          cards.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <ProgramCard
                  body={card.body}
                  image={card.image}
                  labels={card.labels}
                  title={card.title}
                  url={card.url}
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
      <div className='carousel-nav-container-mobile'>
        <div
          className='carousel-nav-button carousel-nav-button-previous carousel-nav-button-previous--mobile'
          tabIndex={-1}
        >
          <PrevIcon className='carousel-nav-button--icon' />
          <p className='carousel-nav-button--label'>Previous</p>
        </div>
        <p className='carousel-pagination'>
          Slide {activeSlideNumber}/{slideTotal}
        </p>
        <div
          className='carousel-nav-button carousel-nav-button-next'
          tabIndex={-1}
        >
          <p className='carousel-nav-button--label'>Next</p>
          <NextIcon className='carousel-nav-button--icon' />
        </div>
      </div>
    </div>
  )
}

export default Carousel
