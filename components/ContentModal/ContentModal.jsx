import React from 'react'
import styles from './ContentModal.module.scss'
import Modal from 'react-modal'
import Video from '../Video/Video'
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

const exitIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none'>
    <path
      fill='#fff'
      d='M2.3 19.1.9 17.7 8.6 10 .9 2.3 2.3.9 10 8.6 17.7.9l1.4 1.4-7.7 7.7 7.7 7.7-1.4 1.4-7.7-7.7-7.7 7.7Z'
    />
  </svg>
)

const ContentModal = ({
  closeModal,
  ctaLabel,
  ctaShortLabel,
  ctaUrl,
  imgSrc,
  imgAlt,
  label1,
  label2,
  label3,
  label4,
  highlight1,
  highlight2,
  highlight3,
  modalAriaLabel,
  modalIsOpen,
  title,
  videoSrc
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={modalAriaLabel}
        className={styles['overlay']}
        onAfterOpen={() => {
          document.body.style.top = `-${window.scrollY}px`
          document.body.style.position = 'fixed'
        }}
        onAfterClose={() => {
          const scrollY = document.body.style.top
          document.body.style.position = ''
          document.body.style.top = ''
          window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }}
        style={{
          overlay: { zIndex: 100 }
        }}
      >
        <div className={styles['content-modal']}>
          <div className={styles['content-modal__heading-container']}>
            <button
              className={styles['content-modal__exit-button']}
              onClick={closeModal}
            >
              {exitIcon}
            </button>
            <h1 className={styles['content-modal__heading']}>{title}</h1>
          </div>
          <Image
            className={styles['content-modal__image']}
            src={imgSrc}
            alt={imgAlt}
            fill
          />
          <div className={styles['content-modal__content-container']}>
            <div className={styles['content-modal__content-flex']}>
              <div className={styles['content-modal__text-container']}>
                <div className={styles['content-modal__text']}>
                  <p>
                    {label1}
                    <span>{highlight1}</span>
                    {label2}
                  </p>
                  <p>
                    <span>{highlight2}</span>
                    {label3}
                    <span>{highlight3}</span>
                    {label4}
                  </p>
                </div>
                {ctaUrl && (
                  <div className={styles['content-modal__cta-container']}>
                    <CtaLink
                      className={styles['content-modal__cta-short']}
                      // TODO: update this when table gets fixed
                      url={`/areas-of-focus/${ctaUrl}`}
                    >
                      {ctaShortLabel}
                      {ctaArrow}
                    </CtaLink>
                    <CtaLink
                      className={styles['content-modal__cta']}
                      // TODO: update this when table gets fixed
                      url={`/areas-of-focus/${ctaUrl}`}
                    >
                      {ctaLabel}
                    </CtaLink>
                  </div>
                )}
              </div>
              <div className={styles['content-modal__media-container']}>
                <Video
                  src={videoSrc}
                  backgroundImage='/MediaBlockBackground.png'
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

Modal.setAppElement('body')

export default ContentModal
