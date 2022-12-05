import { useState } from 'react'

import styles from './ChartContainer.module.scss'
import Dropdown from '../Dropdown/Dropdown'
import { BarChart } from '../Charts/BarChart/BarChart'
import { LineChart } from '../Charts/LineChart/LineChart'
import { DoughnutChart } from '../Charts/DoughnutChart/DoughnutChart'
import { StackedBarChart } from '../Charts/StackedBarChart/StackedBarChart'

export const ChartContainer = ({
  footnote,
  controlTitle,
  isDarkMode,
  chartType = 'line',
  controlOptionsProp
}) => {
  const [chartToRender, setChartToRender] = useState(chartType)

  // The below are hardcoded `-Sample` data for now so we can see the charts
  // The [real] data will be coming from an api, and it will be formatted
  // in a way that is specific to the chart type.
  // We will create this data transform function once we have the api data received

  const controlOptionsSample = [
    {
      title: 'Reading Comprehension / StackedBar',
      chartType: 'stackedBar'
    },
    {
      title: 'People Reached / Line',
      chartType: 'line'
    },
    {
      title: 'Reading Comprehension / Bar',
      chartType: 'bar'
    },
    {
      title: 'People Reached / Doughnut',
      chartType: 'doughnut'
    },
  ]

  let controlOptions = controlOptionsProp || controlOptionsSample

  const chartArgsSample = {
    colors: ['rgb(231, 96, 12)'],
    labels: ['Girls', 'Boys', 'Women', 'Men'],
    data: [48000, 41000, 99000, 20000],
    withAxes: true,
    yStepSize: 10000,
    title: 'People Reached',
    aspectRatio: 0.9,
    ariaLabel: 'People Reached bar graph',
    titlePosition: 'top',
    displayLegend: false,
    maintainAspectRatio: false
  }

  const doughnutArgsSample = {
    ...chartArgsSample,
    colors: [
      'rgb(153, 153, 153)',
      'rgb(102, 102, 102)',
      'rgb(255, 136, 51)',
      'rgb(231, 96, 12)'
    ],
    legendPosition: 'bottom',
    displayLegend: true
  }

  const stackedBarArgsSample = {
    ...chartArgsSample,
    colors: [
      'rgb(153, 153, 153)',
      'rgb(102, 102, 102)',
      'rgb(255, 136, 51)',
      'rgb(231, 96, 12)'
    ],
    labels: ['2019', '2020', '2020'],
    data: [
      [27000, 27000, 30000],
      [30000, 30000, 40000],
      [40000, 50000, 60000],
      [37000, 40000, 45000]
    ],
    legends: ['Men', 'Women', 'Boys', 'Girls'],
    displayLegend: true
  }

  const chartComponent = (chartType) => {
    switch (chartType) {
      case 'bar':
        return <BarChart {...chartArgsSample} />
      case 'line':
        return <LineChart {...chartArgsSample} />
      case 'doughnut':
        return <DoughnutChart {...doughnutArgsSample} />
      case 'stackedBar':
        return <StackedBarChart {...stackedBarArgsSample} />
      default:
        return <BarChart {...chartArgsSample} />
    }
  }

  return (
    <div
      className={styles['chart-control-section-container']}
      style={{ backgroundImage: `url('/D155.png')` }}
    >
      <div className={styles['chart-container']}>
        <div className={styles['chart-container-control']}>
          <h2 className={styles['chart-title']}>{controlTitle}</h2>
          <Dropdown
            id='selectId'
            isDark={isDarkMode}
            hideLabel
            options={controlOptions.map((option) => ({
              label: option.title,
              value: option.chartType
            }))}
            updateSelection={(e) => setChartToRender(e)}
            dropdownLabel={controlTitle}
          />
          {footnote && (
            <div className={styles['chart-container-control__footnote']}>
              <p>{footnote}</p>
            </div>
          )}
        </div>
        <div className={styles['chart-container-chart']}>
          {chartComponent(chartToRender)}
        </div>
      </div>
    </div>
  )
}
