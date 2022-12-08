import styles from './Charts.module.scss'

const Charts = () => {
  return (
    <div className={styles['charts-container']}>
      <div className={styles['title']}>
        <h>How donations were invested in 2021</h>
      </div>

      <div className={styles['section-title']}> program expenditure by sector</div>
    </div>
  )
}

export default Charts
