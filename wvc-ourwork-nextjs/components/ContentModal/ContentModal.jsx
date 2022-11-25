import React, { useState } from 'react'
import styles from './ContentModal.module.scss'
import Modal from 'react-modal'
import Video from '../Video/Video'

const ctaArrow = (
  <svg xmlns='http://www.w3.org/2000/svg' width='8' height='12'>
    <path
      fill-rule='evenodd'
      d='M4.823 6 0 1.487 1.589 0 8 6l-6.411 6L0 10.513 4.823 6Z'
      clip-rule='evenodd'
    />
  </svg>
)

const ContentModal = ({
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
  title
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00'
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
        className={styles['overlay']}
      >
        <div className={styles['content-modal']}>
          <div className={styles['content-modal__heading-container']}>
            <h1 className={styles['content-modal__heading']}>{title}</h1>
          </div>
          <img
            className={styles['content-modal__image']}
            src={imgSrc}
            alt={imgAlt}
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
                <div className={styles['content-modal__cta-container']}>
                  <a
                    className={styles['content-modal__cta-short']}
                    href={ctaUrl}
                  >
                    {ctaShortLabel}
                    {ctaArrow}
                  </a>
                  <a className={styles['content-modal__cta']} href={ctaUrl}>
                    {ctaLabel}
                    {ctaArrow}
                  </a>
                </div>
              </div>
              <div className={styles['content-modal__media-container']}>
                <Video
                  src='https://www.youtube.com/watch?v=RYTFzGkb-5A'
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

export default ContentModal
