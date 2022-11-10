import './StatisticCard.scss'

const StatisticCard = ({ body, statistic, title }) => {
  return (
    <div className='statistic-card'>
      <div className='statistic-card__content'>
        <h6 className='statistic-card__title'>{title}</h6>
        <p className='statistic-card__body'>
          <span className='statistic-card__statistic'>{statistic}</span>
          {body}
        </p>
      </div>
    </div>
  )
}

export default StatisticCard
