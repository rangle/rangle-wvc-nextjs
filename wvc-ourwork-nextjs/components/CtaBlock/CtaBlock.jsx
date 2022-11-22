import styles from './CtaBlock.module.scss'
import Button from '../Button/Button'

const CtaContainer = ({
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
      {showTitleOutside && <h2 className={styles['cta-block-title']}>{title}</h2>}
      <div
        className={`${styles['cta-block-body-container']} ${
          !showBody ? styles['cta-block-body-container--title'] : ''
        }`}
      >
        {showTitleInside && (
          <h2
            className={`${styles['cta-block-title cta-block-title--fw']} ${
              showBody ? styles['cta-block-title--mb'] : ''
            }`}
          >
            {title}
          </h2>
        )}
        {showBody && <p className={styles['cta-block-body']}>{body}</p>}
        <div className={styles['cta-block-cta']}><Button label={buttonLabel} url={buttonUrl} /></div>
      </div>
    </>
  )
}

const CtaBlock = ({
  body,
  buttonLabel,
  buttonUrl,
  imageUrl,
  imageUrlAlt,
  title
}) => {
  return (
    <div className={styles['cta-block']}>
      <div
        className={`${styles['cta-block-container--content']} ${
          !body ? styles['cta-block-container--content-title-only'] : ''
        }`}
      >
        <CtaContainer
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
          className={`${styles['cta-block-container--image']} ${
            !body ? styles['cta-block-container--image-title-only'] : ''
          }`}
        >
          <img src={imageUrl} alt={imageUrlAlt} />
        </div>
      )}
    </div>
  )
}

export default CtaBlock
