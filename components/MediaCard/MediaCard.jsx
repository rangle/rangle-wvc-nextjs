import parse from 'html-react-parser'
import CtaLink from '../CtaLink/CtaLink'
import Image from 'next/image'

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
    <CtaLink
      className={styles['media-card']}
      url={url}
      ariaLabel={ariaLabel || `Link to ${title}`}
    >
      <div className={styles['media-card__media-container']}>
        {iconSrc && (
          <div className={styles['media-card__icon-container']}>
            <Image
              className={styles['media-card__icon']}
              src={iconSrc}
              alt={alt}
              width={64}
              height={64}
            />
          </div>
        )}
        {imageSrc && (
          <div className={styles['media-card__image-container']}>
            <Image
              className={styles['media-card__image']}
              src={imageSrc}
              alt={alt}
              fill
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
    </CtaLink>
  )
}

export default MediaCard
