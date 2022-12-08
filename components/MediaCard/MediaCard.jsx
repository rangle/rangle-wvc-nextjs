import parse from 'html-react-parser'

import styles from './MediaCard.module.scss'

const MediaCard = ({
  ariaLabel,
  title,
  body,
  labels,
  url,
  iconSrc,
  imageSrc,
  alt
}) => {
  const labelList = labels ? Array.from(labels.values()).join(', ') : ''

  return (
    <a
      href={url}
      className={styles['media-card']}
      aria-label={ariaLabel || `Link to ${title}`}
    >
      <div className={styles['media-card__media-container']}>
        {iconSrc && (
          <div className={styles['media-card__icon-container']}>
            <img
              className={styles['media-card__icon']}
              src={iconSrc}
              alt={alt}
            />
          </div>
        )}
        {imageSrc && (
          <div className={styles['media-card__image-container']}>
            <img
              className={styles['media-card__image']}
              src={imageSrc}
              alt={alt}
            />
          </div>
        )}
      </div>
      <div className={styles['media-card__content']}>
        <div>
          <h5
            className={`${styles['media-card__title']} ${styles['truncate']}`}
          >
            {title}
          </h5>
          <p className={`${styles['media-card__body']} ${styles['truncate']}`}>
            {parse(body || '')}
          </p>
        </div>
        <p className={`${styles['media-card__labels']} ${styles['truncate']}`}>
          {labelList}
        </p>
      </div>
    </a>
  )
}

export default MediaCard
