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
  return (
    <div className='cta-block'>
      <div className='cta-block-container--content'>
        <h2>{title}</h2>
        <div className='cta-block-body-container'>
          <p>{body}</p>
          <Button label={buttonLabel} url={buttonUrl} />
        </div>
      </div>
      <div className='cta-block-container--image'>
        <img src={imageUrl} alt={imageUrlAlt} />
      </div>
    </div>
  )
}

export default CtaBlock
