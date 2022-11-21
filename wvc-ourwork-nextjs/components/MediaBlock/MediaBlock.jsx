import styles from './MediaBlock.module.scss'

const MediaBlock = ({ videoSrc, videoBackgroundImage, image, title, body }) => {
  return (
    <div className={styles[`media-block`]}>
      <div className={styles[`media-block__content`]}>
        <h2 className={styles[`media-block__title`]}>{title}</h2>
        <p className={styles[`media-block__body`]}>{body}</p>
      </div>
      <div>{image && <img src={image} />}</div>
    </div>
  )
}

export default MediaBlock
