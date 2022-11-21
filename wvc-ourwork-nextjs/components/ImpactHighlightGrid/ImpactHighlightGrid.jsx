import styles from './ImpactHighlightGrid.module.scss'

export const ImpactHighlight = ({
  firstLabel,
  highlight,
  secondLabel,
  title,
  year
}) => {
  return (
    <div className={styles['impact-highlight']}>
      <div className={styles['impact-highlight__content']}>
        <h6 className={styles['impact-highlight__title']}>{title}</h6>
        {firstLabel && <p className={styles['impact-highlight__label']}>{firstLabel}</p>}
        <span className={styles['impact-highlight__highlight']}>{highlight}</span>
        {secondLabel && (
          <p className={styles['impact-highlight__label']}>{secondLabel}</p>
        )}
        <span className={styles['impact-highlight__year']}>{year}</span>
      </div>
    </div>
  )
}

const ImpactHighlightGrid = ({ impactHighlights }) => {
  return (
    <div className={styles['impact-highlight-grid']}>
      {impactHighlights.map((item) => {
        return <ImpactHighlight {...item} key={item.highlight} />
      })}
    </div>
  )
}

export default ImpactHighlightGrid
