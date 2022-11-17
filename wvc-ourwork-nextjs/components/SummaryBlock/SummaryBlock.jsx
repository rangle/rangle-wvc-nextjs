import Tooltip from '../Tooltip/Tooltip'
import './SummaryBlock.scss'

const SummaryBlock = ({
  direction = 'horizontal',
  highlights,
  order = 'title-first'
}) => {
  return (
    <div className={`summary-block summary-block--${direction}`}>
      {highlights.map((highlight) => {
        return (
          <div
            key={highlight.value}
            className={`summary-block__highlight summary-block__highlight--${order}`}
          >
            <div className='summary-block__highlight-title-container'>
              <p className='summary-block__highlight--title'>
                {highlight.title}
              </p>
              {highlight.tooltip && <Tooltip content={highlight.tooltip} />}
            </div>
            <p className='summary-block__highlight--value'>{highlight.value}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SummaryBlock
