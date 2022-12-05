import styles from './ReportCard.module.scss'

const ReportCard = ({ ariaLabel, title, url, imageSrc, alt }) => {
  return (
    <a
      href={url}
      className={styles['report-card']}
      aria-label={ariaLabel || `Link to ${title}`}
    >
      <div className={styles['report-card__media-container']}>
        {imageSrc && (
          <div className={styles['report-card__image-container']}>
            <img
              className={styles['report-card__image']}
              src={imageSrc}
              alt={alt}
            />
          </div>
        )}
      </div>
      <div className={styles['report-card__content']}>
        <h5 className={styles['report-card__title']}>{title}</h5>
      </div>
    </a>
  )
}

export default ReportCard
