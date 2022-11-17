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
  chartType = 'line',
  controlOptionsProp
}) => {
  const [chartToRender, setChartToRender] = useState(chartType)

  const controlOptionsSample = [
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

  let controlOptions = controlOptionsProp || controlOptionsSample

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
    displayLegend: false,
    maintainAspectRatio: false
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
    displayLegend: true
  }

  const chartComponent = (chartType) => {
    switch (chartType) {
      case 'bar':
        return <BarChart {...chartArgs} />
      case 'line':
        return <LineChart {...chartArgs} />
      case 'doughnut':
        return <DoughnutChart {...doughnutArgs} />
      case 'stackedBar':
        return <StackedBarChart {...stackedBarArgs} />
      default:
        chartComponent = <BarChart {...chartArgs} />
    }
  }

  return (
    <div className='chart-control-section-container'>
      <div className='chart-container'>
        <div className='chart-container-control'>
          <Dropdown
            id='selectId'
            isDark={isDarkMode}
            options={controlOptions.map((option) => ({
              label: option.title,
              value: option.chartType
            }))}
            updateSelection={(e) => setChartToRender(e)}
            dropdownLabel={controlTitle}
          />
          {footnote && (
            <div className='chart-container-control__footnote'>
              <p>{footnote}</p>
            </div>
          )}
        </div>
        <div className='chart-container-chart'>
          {chartComponent(chartToRender)}
        </div>
      </div>
    </div>
  )
}
