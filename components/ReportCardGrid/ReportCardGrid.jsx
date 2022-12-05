import styles from './ReportCardGrid.module.scss'

const ReportCardGrid = ({ cards }) => {
  let modifier = ''

  if (cards.length < 3) {
    if (cards.length === 2) {
      modifier = 'report-card-grid--duo'
    } else {
      modifier = 'report-card-grid--single'
    }
  }

  return (
    <div className={`${styles['report-card-grid']} ${styles[modifier]}`}>
      {[cards]}
    </div>
  )
}

export default ReportCardGrid
