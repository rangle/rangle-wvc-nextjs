import './CtaBlock.scss'
import Button from '../Button/Button'

const CtaBlock = ({
  body,
  buttonLabel,
  buttonUrl,
  imageUrl,
  imageUrlAlt,
  title
}) => {
  const ContentContainer = ({
    showTitleInside,
    showTitleOutside,
    showBody,
    title,
    body,
    buttonLabel,
    buttonUrl
  }) => {
    return (
      <>
        {showTitleOutside && <h2 className='cta-block-title'>{title}</h2>}
        <div
          className={`cta-block-body-container ${
            !showBody ? 'cta-block-body-container--title' : ''
          }`}
        >
          {showTitleInside && (
            <h2
              className={`cta-block-title cta-block-title--fw ${
                showBody ? 'mb' : ''
              }`}
            >
              {title}
            </h2>
          )}
          {showBody && <p>{body}</p>}
          <Button label={buttonLabel} url={buttonUrl} />
        </div>
      </>
    )
  }

  return (
    <div className='cta-block'>
      <div className={`cta-block-container--content ${!body ? 'no-body' : ''}`}>
        <ContentContainer
          showTitleInside={!body || (body && !imageUrl)}
          showTitleOutside={body && imageUrl}
          showBody={!!body}
          title={title}
          body={body}
          buttonLabel={buttonLabel}
          buttonUrl={buttonUrl}
        />
      </div>
      {imageUrl && (
        <div
          className={`cta-block-container--image ${!body ? 'image-sm' : ''}`}
        >
          <img src={imageUrl} alt={imageUrlAlt} />
        </div>
      )}
    </div>
  )
}

export default CtaBlock
