import styles from './MediaBlock.module.scss'
import Video from '../Video/Video'

const MediaBlock = ({ videoSrc, videoBackgroundImage, image, title, body }) => {
  return (
    <div className={styles[`media-block`]}>
      <div className={styles[`media-block__content`]}>
        <h2 className={styles[`media-block__title`]}>{title}</h2>
        <p className={styles[`media-block__body`]}>{body}</p>
      </div>
      <div className={styles[`media-block__media`]}>
        {image && <img className={styles[`media-block__image`]} src={image} />}
        {videoSrc && (
          <Video src={videoSrc} backgroundImage={videoBackgroundImage} />
        )}
      </div>
    </div>
  )
}

export default MediaBlock
