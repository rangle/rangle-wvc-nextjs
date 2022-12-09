import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, ChartDataLabels)

export const DoughnutChart = ({
  data,
  labels,
  colors,
  aspectRatio = 1,
  title = '',
  titlePosition = 'top',
  displayLegend = true,
  legendPosition = 'right',
  isDarkMode = false,
  ariaLabel = 'Doughnut Chart',
  isMobile = false,
  maintainAspectRatio = true
}) => {

  const options = {
    responsive: true,
    aspectRatio: aspectRatio,
    maintainAspectRatio: maintainAspectRatio,
    plugins: {
      legend: {
        display: displayLegend,
        position: isMobile ? 'bottom' : legendPosition,
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          color: isDarkMode ? '#eee' : '#000000'
        }
      },
      title: {
        display: title,
        text: title,
        position: titlePosition,
        font: {
          size: 18
        },
        color: '#000000',
        padding: {
          top: title && titlePosition == 'top' ? 10 : 30,
          bottom: title && titlePosition == 'top' ? 30 : 10
        }
      },
      datalabels: {
        display: false
      }
    },
    layout: {
      padding: 10
    }
  }

  const chartData = {
    labels: labels.map(
      (label, idx) =>
        `${label}:  ${
          data[idx][data[idx].length - 1] === '%'
            ? `${data[idx].slice(0, -1) * 100}%`
            : data[idx]
        }`
    ),
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
    <Doughnut
      options={options}
      data={chartData}
      aria-label={ariaLabel}
      data-testid='doughnut-chart'
    />
  )
}
