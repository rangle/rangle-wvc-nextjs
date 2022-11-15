import './SummaryBlock.scss'

const SummaryBlock = ({ direction = 'horizontal', highlights }) => {
  return (
    <div className={`summary-block summary-block--${direction}`}>
      {highlights.map((highlight) => {
        return (
          <div key={highlight.value} className='summary-block__highlight'>
            <p className='summary-block__highlight--title'>{highlight.title}</p>
            <p className='summary-block__highlight--value'>{highlight.value}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SummaryBlock
