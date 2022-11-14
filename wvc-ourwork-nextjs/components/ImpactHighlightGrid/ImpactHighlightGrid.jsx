import './ImpactHighlightGrid.scss'

export const ImpactHighlight = ({
  firstLabel,
  highlight,
  secondLabel,
  title,
  year
}) => {
  return (
    <div className='impact-highlight'>
      <div className='impact-highlight__content'>
        <h6 className='impact-highlight__title'>{title}</h6>
        {firstLabel && <p className='impact-highlight__label'>{firstLabel}</p>}
        <span className='impact-highlight__highlight'>{highlight}</span>
        {secondLabel && (
          <p className='impact-highlight__label'>{secondLabel}</p>
        )}
        <span className='impact-highlight__year'>{year}</span>
      </div>
    </div>
  )
}

const ImpactHighlightGrid = ({ impactHighlights }) => {
  return (
    <div className='impact-highlight-grid'>
      {impactHighlights.map((item) => {
        return <ImpactHighlight {...item} key={item.highlight} />
      })}
    </div>
  )
}

export default ImpactHighlightGrid
