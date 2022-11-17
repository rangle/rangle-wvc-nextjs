import './MediaCard.scss'

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
  const labelList = Array.from(labels.values()).join(', ')

  return (
    <a
      href={url}
      className='media-card'
      aria-label={ariaLabel || `Link to ${title}`}
    >
      <div>
        <div className='media-card__media-container'>
          {iconSrc && (
            <div className='media-card__icon-container'>
              <img className='media-card__icon' src={iconSrc} alt={alt} />
            </div>
          )}
          {imageSrc && (
            <div className='media-card__image-container'>
              <img className='media-card__image' src={imageSrc} alt={alt} />
            </div>
          )}
        </div>
        <div className='media-card__content'>
          <h5 className='media-card__title truncate'>{title}</h5>
          <p className='media-card__body truncate'>{body}</p>
          <p className='media-card__labels truncate'>{labelList}</p>
        </div>
      </div>
    </a>
  )
}

export default MediaCard
