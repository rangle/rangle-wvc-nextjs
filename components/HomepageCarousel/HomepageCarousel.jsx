import { Navigation, A11y, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './HomepageCarousel.module.scss'
import { useId } from 'react-id-generator'

export const PrevIcon = () => {
  return (
    <svg
      width='45'
      height='45'
      viewBox='0 0 44 45'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        stroke='#E7600C'
        strokeWidth={1}
        cx='22'
        cy='22.5'
        r='22'
        transform='rotate(-180 22 22.5)'
      />
      <path
        d='M15.2929 21.7929C14.9024 22.1834 14.9024 22.8166 15.2929 23.2071L21.6569 29.5711C22.0474 29.9616 22.6805 29.9616 23.0711 29.5711C23.4616 29.1805 23.4616 28.5474 23.0711 28.1569L17.4142 22.5L23.0711 16.8431C23.4616 16.4526 23.4616 15.8195 23.0711 15.4289C22.6805 15.0384 22.0474 15.0384 21.6569 15.4289L15.2929 21.7929ZM28 21.5L16 21.5L16 23.5L28 23.5L28 21.5Z'
        fill='#E7600C'
      />
    </svg>
  )
}

export const NextIcon = () => {
  return (
    <svg
      width='45'
      height='45'
      viewBox='0 0 44 45'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle stroke='#E7600C' strokeWidth={1} cx='22' cy='22.5' r='22' />
      <path
        d='M28.7071 23.2071C29.0976 22.8166 29.0976 22.1834 28.7071 21.7929L22.3431 15.4289C21.9526 15.0384 21.3195 15.0384 20.9289 15.4289C20.5384 15.8195 20.5384 16.4526 20.9289 16.8431L26.5858 22.5L20.9289 28.1569C20.5384 28.5474 20.5384 29.1805 20.9289 29.5711C21.3195 29.9616 21.9526 29.9616 22.3431 29.5711L28.7071 23.2071ZM16 23.5L28 23.5L28 21.5L16 21.5L16 23.5Z'
        fill='#E7600C'
      />
    </svg>
  )
}

const HomepageCarousel = ({ cards, title }) => {
  const id = useId()

  return (
    <div id={`carousel-${id}`} className={styles['homepage-carousel']}>
      {title && <h2 className={styles['homepage-carousel-title']}>{title}</h2>}
      <div className={styles['homepage-carousel__container']}>
        <button
          id='carousel-nav-button-previous'
          className={`${styles['homepage-carousel-nav-button']} ${styles['homepage-carousel-nav-button--desktop']}`}
          tabIndex={-1}
        >
          <PrevIcon className={styles['carousel-nav-button--icon']} />
        </button>
        <Swiper
          className={styles['homepage-carousel__swiper']}
          id={`swiper-${id}`}
          navigation={{
            prevEl: `#carousel-${id} #carousel-nav-button-previous`,
            nextEl: `#carousel-${id} #carousel-nav-button-next`
          }}
          modules={[Navigation, A11y, Pagination]}
          pagination
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
        >
          {cards &&
            cards.length &&
            cards.map((card) => {
              const slideId = useId()
              return <SwiperSlide key={slideId}>{card}</SwiperSlide>
            })}
        </Swiper>
        <button
          id='carousel-nav-button-next'
          className={`${styles['homepage-carousel-nav-button']} ${styles['homepage-carousel-nav-button--desktop']}`}
          tabIndex={-1}
        >
          <NextIcon className={styles['carousel-nav-button--icon']} />
        </button>
      </div>

      {/* Mobile Nav buttons */}
      <div className={styles['mobile-nav-button-container']}>
        <button
          id='carousel-nav-button-previous'
          className={`${styles['homepage-carousel-nav-button']} ${styles['homepage-carousel-nav-button--mobile']}`}
          tabIndex={-1}
        >
          <PrevIcon className={styles['carousel-nav-button--icon']} />
        </button>
        <button
          id='carousel-nav-button-next'
          className={`${styles['homepage-carousel-nav-button']} ${styles['homepage-carousel-nav-button--mobile']}`}
          tabIndex={-1}
        >
          <NextIcon className={styles['carousel-nav-button--icon']} />
        </button>
      </div>
    </div>
  )
}

export default HomepageCarousel
