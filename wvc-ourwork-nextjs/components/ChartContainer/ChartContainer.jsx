import { useState } from 'react'

import './ChartContainer.scss'
import Dropdown from '../Dropdown/Dropdown'
import { BarChart } from '../Charts/BarChart/BarChart'
import { LineChart } from '../Charts/LineChart/LineChart'
import { DoughnutChart } from '../Charts/DoughnutChart/DoughnutChart'
import { StackedBarChart } from '../Charts/StackedBarChart/StackedBarChart'

export const ChartContainer = ({
  footnote,
  controlTitle,
  isDarkMode,
  chartType = 'line'
}) => {
  const [chartToRender, setChartToRender] = useState(chartType)
  const controlOptions = [
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
    {
        title: 'Reading Comprehension / StackedBar',
        chartType: 'stackedBar'
    }
  ]

  const chartArgs = {
    colours: ['rgb(231, 96, 12)'],
    labels: ['Girls', 'Boys', 'Women', 'Men'],
    data: [48000, 41000, 99000, 20000],
    withAxes: true,
    yStepSize: 10000,
    title: 'People Reached',
    aspectRatio: 0.9,
    ariaLabel: 'People Reached bar graph',
    titlePosition: 'top',
    displayLegend: false
  }

  const doughnutArgs = {
    ...chartArgs,
    colours: [
    'rgb(153, 153, 153)',
    'rgb(102, 102, 102)',
    'rgb(255, 136, 51)',
    'rgb(231, 96, 12)'
    ],
    legendPosition: 'bottom',
    displayLegend: true
  }

  const stackedBarArgs = {
    ...chartArgs,
    colours: [
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
    displayLegend: true,
  }

  let chartComponent
  switch (chartToRender) {
    case 'bar':
      chartComponent = <BarChart {...chartArgs} />
      break
    case 'line':
      chartComponent = <LineChart {...chartArgs} />
      break
    case 'doughnut':
      chartComponent = <DoughnutChart {...doughnutArgs} />
      break
    case 'stackedBar':
      chartComponent = <StackedBarChart {...stackedBarArgs} />
      break
    default:
      chartComponent = <BarChart {...chartArgs} />
  }

  return (
    <div className='chart-container'>
      <div className='chart-container-control'>
        {controlTitle && (
          <div className='chart-container-control__title'>{controlTitle}</div>
        )}
        <Dropdown
          id='selectId'
          isDark={isDarkMode}
          options={controlOptions.map((option) => ({
            label: option.title,
            value: option.chartType
          }))}
          updateSelection={(e)=>setChartToRender(e)}
          dropdownLabel={controlTitle}
        />
        {footnote && (
          <p className='chart-container-control__footnote'>{footnote}</p>
        )}
      </div>
      <div className='chart-container-chart'>{chartComponent}</div>
    </div>
  )
}
