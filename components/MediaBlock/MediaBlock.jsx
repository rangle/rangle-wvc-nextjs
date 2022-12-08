import styles from './MediaBlock.module.scss'
import Video from '../Video/Video'

const MediaBlock = ({
  videoSrc,
  videoBackgroundImage,
  imageAlt,
  imageSrc,
  title,
  body
}) => {
  return (
    <div className={styles[`media-block`]}>
      <div className={styles['media-block__container']}>
        <div className={styles[`media-block__container__content`]}>
          <h2 className={styles[`media-block__container__title`]}>{title}</h2>
          <p className={styles[`media-block__container__body`]}>{body}</p>
        </div>
        <div className={styles[`media-block__container__media`]}>
          {imageSrc && (
            <img
              className={styles[`media-block__container__image`]}
              src={imageSrc}
              alt={imageAlt}
            />
          )}
          {videoSrc && (
            <Video
              src={videoSrc}
              backgroundImage={
                videoBackgroundImage ? videoBackgroundImage : null
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MediaBlock
