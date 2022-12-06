import parse from 'html-react-parser'

import Tooltip from '../Tooltip/Tooltip'
import styles from './SummaryBlock.module.scss'

const SummaryBlock = ({
  direction = 'horizontal',
  highlights,
  order = 'title-first'
}) => {
  return (
    <div
      className={`${styles['summary-block']} ${
        styles[`summary-block--${direction}`]
      }`}
    >
      {highlights.map((highlight) => {
        return (
          <div
            key={highlight.value}
            className={`${styles['summary-block__highlight']} ${
              styles[`summary-block__highlight--${order}`]
            }`}
          >
            <div className={styles['summary-block__highlight-title-container']}>
              <p>{highlight.title}</p>
              {highlight.tooltip && <Tooltip content={highlight.tooltip} />}
            </div>
            <p>{parse(highlight.value || '')}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SummaryBlock
