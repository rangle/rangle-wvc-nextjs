import { useEffect, useState } from 'react'

import styles from './ChartContainer.module.scss'
import Dropdown from '../Dropdown/Dropdown'
import { getGraph } from '../../utils/getGraphs'

export const ChartContainer = ({ controlTitle, isDarkMode, chartData }) => {
  const [chartToRender, setChartToRender] = useState()
  const [disclaimer, setDisclaimer] = useState(chartData[0].GRAPH_DISCLAIMER)

  const getOptions = () => {
    let rowOptions = chartData.map((ea) => {
      return {
        title: `${ea.GRAPH_STATEMENT ? ea.GRAPH_STATEMENT : ''} ${
          ea.GRAPH_STATEMENT_02 ? ea.GRAPH_STATEMENT_02 : ''
        } ${ea.GRAPH_STATEMENT_03 ? ea.GRAPH_STATEMENT_03 : ''}`,
        id: ea.INDICATOR_CODE
      }
    })
    const uniqueIds = new Set(rowOptions.map((item) => item.id))
    let controlOptions = [...uniqueIds]
      .map((id) => rowOptions.find((item) => item.id === id))
      .filter(Boolean)

    return controlOptions
  }

  useEffect(() => {
    let obj = chartData.find((o) => o.INDICATOR_CODE === chartToRender)

    if (obj) {
      setDisclaimer(obj.GRAPH_DISCLAIMER)
    }
  }, [chartToRender])

  return (
    <div
      className={styles['chart-control-section-container']}
      style={{
        backgroundImage: `url('/D155.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className={styles['chart-container']}>
        <div className={styles['chart-container-control']}>
          <h2 className={styles['chart-title']}>{controlTitle}</h2>
          <Dropdown
            id='selectId'
            isDark={isDarkMode}
            hideLabel
            options={getOptions().map((option) => ({
              label: option.title,
              value: option.id
            }))}
            updateSelection={(e) => setChartToRender(e)}
            dropdownLabel={controlTitle}
          />
          {disclaimer && (
            <div>
              <p className={styles['chart-container-control__footnote']}>
                {disclaimer}
              </p>
            </div>
          )}
        </div>
        <div className={styles['chart-container-chart']}>
          {getGraph(0, chartData, chartToRender, true)}
        </div>
      </div>
    </div>
  )
}
