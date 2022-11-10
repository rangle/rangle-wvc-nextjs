import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { Doughnut } from 'react-chartjs-2'
import { Options } from '../BarChart/BarChart.type'

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

  const options: Options = {
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
    <div className={`${isDarkMode ? 'doughnut-container--dark' : ''}`}>
      <Doughnut options={options} data={chartData} aria-label={ariaLabel} />
    </div>
  )
}
