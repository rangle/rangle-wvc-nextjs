import React, { MouseEvent, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import {
  Doughnut,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent
} from 'react-chartjs-2'
// import { Options } from '../BarChart/BarChart.type'

ChartJS.register(ArcElement, ChartDataLabels)

export const DoughnutChart = ({
  data,
  labels,
  colours,
  aspectRatio = 1,
  title = '',
  subTitle = '',
  titlePosition = 'top',
  displayLegend = true,
  legendPosition = 'right',
  cutout = 90,
  isDarkMode = false,
  ariaLabel = 'Doughnut Chart'
}) => {
  const fullTitle = [title, subTitle]

  const [display, setDisplay] = useState('First nothing')

  const printElementAtEvent = (element) => {
    if (!element.length) return

    // console.log('element', element)

    const { datasetIndex, index } = element[0]

    // console.log('element[0]', element[0])

    // console.log('datasetIndex', datasetIndex)
    // console.log('index', index)


    console.log(chartData.labels[index], chartData.datasets[datasetIndex].data[index])
    // console.log('chartData.labels[index]', chartData.labels[index])
    // console.log('chartData.datasets[datasetIndex].data[index]', chartData.datasets[datasetIndex].data[index])


    setDisplay(`OPEN MODAL FOR ${chartData.labels[index]}`)
  }

  const chartRef = useRef(null)

  const onClick = (event) => {
    console.log('onClick')
    const { current: chart } = chartRef

    console.log('chart', chart)

    if (!chart) {
      return
    }

    printElementAtEvent(getElementAtEvent(chart, event))
  }

  const options = {
    responsive: true,
    aspectRatio: aspectRatio,
    plugins: {
      legend: {
        display: displayLegend,
        position: legendPosition,
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          padding: 30,
          color: isDarkMode ? '#eee' : '#000000'
        }
      },
      title: {
        display: title,
        text: fullTitle,
        position: titlePosition,
        font: {
          size: 18
        },
        color: '#000000',
        padding: 30
      },
      datalabels: {
        display: false
      }
    },
    cutout: cutout
  }

  const chartData = {
    labels: labels.map((label, idx) => `${label}  ${data[idx]}`),
    datasets: [
      {
        data: data.map((ea) => parseFloat(ea)),
        backgroundColor: colours,
        hoverOffset: 8,
        borderWidth: 0,
        tooltip: {
          callbacks: {
            label: (context) => context.label
          }
        }
      }
    ]
  }

  return (
    <div>
      <div style={{fontSize: '22px'}}> {display}</div>
      <Doughnut
      ref={chartRef}
        options={options}
        data={chartData}
        aria-label={ariaLabel}
        onClick={onClick}
      />
    </div>
  )
}
