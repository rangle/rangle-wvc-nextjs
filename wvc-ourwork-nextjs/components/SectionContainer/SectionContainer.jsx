import './SectionContainer.scss'

const SectionContainer = ({ alt, content, src, title }) => {
  return (
    <section className='section-container'>
      <picture className='section-container__picture'>
        <img className='section-container__image' src={src} alt={alt} />
      </picture>
      <div className='section-container__content-wrapper'>
        <div className='section-container__heading-layout-wrapper'>
          <div className='section-container__heading-container'>
            <h2 className='section-container__heading'>{title}</h2>
          </div>
        </div>
        <div className='section-container__content'>{content}</div>
      </div>
    </section>
  )
}

export default SectionContainer
