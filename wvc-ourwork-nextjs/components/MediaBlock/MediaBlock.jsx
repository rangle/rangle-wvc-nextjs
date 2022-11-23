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
      <div className={styles[`media-block__content`]}>
        <h2 className={styles[`media-block__title`]}>{title}</h2>
        <p className={styles[`media-block__body`]}>{body}</p>
      </div>
      <div className={styles[`media-block__media`]}>
        {imageSrc && (
          <img
            className={styles[`media-block__image`]}
            src={imageSrc}
            alt={imageAlt}
          />
        )}
        {videoSrc && (
          <Video src={videoSrc} backgroundImage={videoBackgroundImage} />
        )}
      </div>
    </div>
  )
}

export default MediaBlock
