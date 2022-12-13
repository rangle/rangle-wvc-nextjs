import { useEffect, useState } from 'react'
import Image from 'next/image'

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

  // For Google Tag Manager custom event
  const getOptionLabel = (e) => {
    let row = chartData.find((o) => o.INDICATOR_CODE === e)
    return `${row.GRAPH_STATEMENT} ${row.GRAPH_STATEMENT_02} ${row.GRAPH_STATEMENT_03}`
  }

  useEffect(() => {
    let obj = chartData.find((o) => o.INDICATOR_CODE === chartToRender)

    if (obj) {
      setDisclaimer(obj.GRAPH_DISCLAIMER)
    }
  }, [chartToRender])

  return (
    <div className={styles['chart-control-section-container']}>
      <div className={styles['background-container']}>
        <Image
          src={'/D155.png'}
          alt=''
          className={styles['background-image']}
          fill
        />
      </div>
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
            updateSelection={(e) => {
              window.dataLayer.push({
                event: "Website Events",
                event_category: "dropdown",
                event_action: `${controlTitle} Charts`,
                event_label: `${getOptionLabel(e)}`
              })
              setChartToRender(e)
            }}
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
