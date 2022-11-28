import { useState } from 'react'
import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useId } from 'react-id-generator'

import styles from './Carousel.module.scss'

export const PrevIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='12'
        cy='12'
        r='11.4'
        strokeWidth='1.2'
        className={styles['nav-button-background']}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22.8C17.9647 22.8 22.8 17.9647 22.8 12C22.8 6.03532 17.9647 1.2 12 1.2C6.03532 1.2 1.2 6.03532 1.2 12C1.2 17.9647 6.03532 22.8 12 22.8ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z'
        className={styles['nav-button-border']}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.7416 8.41024C15.1435 8.8865 15.0683 9.58627 14.5737 9.97323L11.9836 11.9998L14.5737 14.0263C15.0683 14.4132 15.1435 15.113 14.7416 15.5893C14.3398 16.0655 13.6131 16.1379 13.1185 15.751L9.42624 12.8621C9.15657 12.6511 9 12.3343 9 11.9998C9 11.6652 9.15657 11.3484 9.42624 11.1374L13.1185 8.24855C13.6131 7.86159 14.3398 7.93398 14.7416 8.41024Z'
        className={styles['nav-button-arrow']}
      />
    </svg>
  )
}

export const NextIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='12'
        cy='12'
        r='11.4'
        strokeWidth='1.2'
        className={styles['nav-button-background']}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22.8C17.9647 22.8 22.8 17.9647 22.8 12C22.8 6.03532 17.9647 1.2 12 1.2C6.03532 1.2 1.2 6.03532 1.2 12C1.2 17.9647 6.03532 22.8 12 22.8ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z'
        className={styles['nav-button-border']}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.25837 15.5895C8.85652 15.1133 8.9317 14.4135 9.42627 14.0265L12.0164 12L9.42627 9.97348C8.9317 9.58652 8.85652 8.88674 9.25837 8.41048C9.66021 7.93423 10.3869 7.86183 10.8815 8.2488L14.5738 11.1377C14.8434 11.3486 15 11.6654 15 12C15 12.3346 14.8434 12.6514 14.5738 12.8623L10.8815 15.7512C10.3869 16.1382 9.66021 16.0658 9.25837 15.5895Z'
        className={styles['nav-button-arrow']}
      />
    </svg>
  )
}

const Carousel = ({ cards, title }) => {
  const slideTotal = cards.length
  const [activeSlideNumber, setActiveSlideNumber] = useState(1)
  const id = useId()

  return (
    <div id={`carousel-${id}`} className={styles['carousel']}>
      <div className={styles['carousel--header']}>
        {title && <h2>{title}</h2>}
        <div className={styles['carousel-nav-container-desktop']}>
          <p className={styles['carousel-pagination']}>
            Slide {activeSlideNumber}/{slideTotal}
          </p>
          <div
            id='carousel-nav-button-previous'
            className={`${styles['carousel-nav-button']} ${styles['carousel-nav-button-previous']}`}
            tabIndex={-1}
          >
            <PrevIcon className={styles['carousel-nav-button--icon']} />
            <p className={styles['carousel-nav-button--label']}>Previous</p>
          </div>
          <div
            id='carousel-nav-button-next'
            className={`${styles['carousel-nav-button']} ${styles['carousel-nav-button-next']}`}
            tabIndex={-1}
          >
            <p className={styles['carousel-nav-button--label']}>Next</p>
            <NextIcon className={styles['carousel-nav-button--icon']} />
          </div>
        </div>
      </div>
      <Swiper
        id={`swiper-${id}`}
        modules={[Navigation, A11y]}
        allowTouchMove={false}
        navigation={{
          prevEl: `#carousel-${id} #carousel-nav-button-previous`,
          nextEl: `#carousel-${id} #carousel-nav-button-next`
        }}
        slidesPerView={'auto'}
        onSlideChange={(swiper) => {
          setActiveSlideNumber(swiper.realIndex + 1)
        }}
        loop
        loopedSlides={slideTotal}
      >
        {cards &&
          cards.length &&
          cards.map((card) => {
            const slideId = useId()
            return (
              <SwiperSlide key={slideId} className='swiper-slide-template'>
                {card}
              </SwiperSlide>
            )
          })}
      </Swiper>
      <div className={styles['carousel-nav-container-mobile']}>
        <div
          id='carousel-nav-button-previous'
          className={`${styles['carousel-nav-button']} ${styles['carousel-nav-button-previous']} ${styles['carousel-nav-button-previous--mobile']}`}
          tabIndex={-1}
        >
          <PrevIcon className={styles['carousel-nav-button--icon']} />
          <p className={styles['carousel-nav-button--label']}>Previous</p>
        </div>
        <p className={styles['carousel-pagination']}>
          Slide {activeSlideNumber}/{slideTotal}
        </p>
        <div
          id='carousel-nav-button-next'
          className={`${styles['carousel-nav-button']} ${styles['carousel-nav-button-next']}`}
          tabIndex={-1}
        >
          <p className={styles['carousel-nav-button--label']}>Next</p>
          <NextIcon className={styles['carousel-nav-button--icon']} />
        </div>
      </div>
    </div>
  )
}

export default Carousel
