import styles from './SectionContainer.module.scss'
import Image from 'next/image'

const SectionContainer = ({ alt, children, src, title, isDarkMode }) => {
  return (
    <section className={styles['section-container']}>
      {src && (
        <picture className={styles['section-container__picture']}>
          <Image
            className={styles['section-container__image']}
            src={src}
            alt={alt}
            fill
          />
        </picture>
      )}
      <div
        className={
          styles[
            `section-container__content-wrapper${isDarkMode ? '--dark' : ''}`
          ]
        }
      >
        <div className={styles['section-container__heading-layout-wrapper']}>
          <div className={styles['section-container__heading-container']}>
            <h2 className={styles['section-container__heading']}>{title}</h2>
          </div>
        </div>
        <div className={styles['section-container__content']}>{children}</div>
      </div>
    </section>
  )
}

export default SectionContainer
