import './ProgramCard.scss'

const ProgramCard = ({ body, image, labels, title, url }) => {
  const labelList = Array.from(labels.values()).join(', ')

  return (
    <a
      href={url}
      className='program-card'
      aria-label={`Link to program page on the topics of ${labelList} with the title ${title}`}
    >
      <div className='program-card-container'>
        <div className='program-card-container--image'>
          <img src={image.src} alt={image.alt} />
        </div>
        <div className='program-card-container--content'>
          <h5 className='truncate'>{title}</h5>
          <p className='program-card-container-body truncate'>{body}</p>
          <p className='program-card-labels truncate'>{labelList}</p>
        </div>
      </div>
    </a>
  )
}

export default ProgramCard
