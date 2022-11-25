import Tooltip from '../Tooltip/Tooltip'
import styles from './SummaryBlock.module.scss'

const SummaryBlock = ({
  direction = 'horizontal',
  highlights,
  order = 'title-first'
}) => {
  return (
    <div className={`${styles['summary-block']} ${styles[`summary-block--${direction}`]}`}>
      {highlights.map((highlight) => {
        return (
          <div
            key={highlight.value}
            className={`${styles['summary-block__highlight']} ${styles[`summary-block__highlight--${order}`]}`}
          >
            <div className={styles['summary-block__highlight-title-container']}>
              <p className={styles['summary-block__highlight--title']}>
                {highlight.title}
              </p>
              {highlight.tooltip && <Tooltip content={highlight.tooltip} />}
            </div>
            <p className={styles['summary-block__highlight--value']}>{highlight.value}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SummaryBlock
