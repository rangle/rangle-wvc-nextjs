import styles from './Charts.module.scss'
import { getGraph } from '../../../utils/getGraphs'
import { HomepageDoughnutChart } from '../../Charts/HomepageDoughnut/HomepageDoughnut'

const Charts = ({ sectorData }) => {
  const colors = sectorData?.map((item) => item.color)
  const labels = sectorData?.map((item) => item.title)
  const data = sectorData?.map((item) => item.percentage)

  return (
    <div className={styles['charts-container']}>
      <div className={styles['title']}>
        <h>How donations were invested in 2021</h>
      </div>

      <div className={styles['section-title']}>
        Program expenditure by sector
      </div>
      {sectorData && sectorData.length && (
        <HomepageDoughnutChart
          displayLegend={true}
          colors={colors}
          labels={labels}
          data={data}
          ariaLabel={'Doughnut chart for sector overview'}
        />
      )}
    </div>
  )
}

export default Charts
