import React, { useRef } from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { Doughnut, getElementAtEvent } from 'react-chartjs-2'

ChartJS.register(ArcElement, ChartDataLabels)

export const HomepageDoughnutChart = ({
  data,
  labels,
  colors,
  aspectRatio = 1,
  title = '',
  subTitle = '',
  titlePosition = 'top',
  displayLegend = true,
  legendPosition = 'right',
  cutout = 90,
  isDarkMode = false,
  ariaLabel = 'Doughnut Chart',
  openModal
}) => {
  const fullTitle = [title, subTitle]

  const chartRef = useRef(null)

  const onClick = (event) => {
    const { current: chart } = chartRef
    const element = getElementAtEvent(chart, event)
    if (!element.length) return
    const { index } = element[0]

    openModal(chartData.labels[index].split('  ')[0])
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
    cutout: cutout,
    layout: {
      padding: 10
    }
  }

  const chartData = {
    labels: labels.map((label, idx) => `${label}  ${data[idx]}`),
    datasets: [
      {
        data: data.map((ea) => parseFloat(ea)),
        backgroundColor: colors,
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
