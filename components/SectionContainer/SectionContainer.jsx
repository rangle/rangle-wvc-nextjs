import styles from './SectionContainer.module.scss'

const SectionContainer = ({ alt, children, src, title, isDarkMode }) => {
  return (
    <section className={styles['section-container']}>
      <picture className={styles['section-container__picture']}>
        <img className={styles['section-container__image']} src={src} alt={alt} />
      </picture>
      <div className={styles[`section-container__content-wrapper${isDarkMode ? '--dark' : ''}`]}>
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
