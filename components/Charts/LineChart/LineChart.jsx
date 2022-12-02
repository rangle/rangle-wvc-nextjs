import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  SubTitle
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { Line } from 'react-chartjs-2'
import { numFormatter } from '../../../utils/convertNumbers'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  SubTitle,
  ChartDataLabels
)

export function LineChart({
  data,
  labels,
  colors,
  withAxes,
  yStepSize,
  aspectRatio = 1,
  titlePosition = 'top',
  isDarkMode = false,
  title = '',
  ariaLabel = '',
  displayLegend = false,
  maintainAspectRatio = true
}) {
  const options = {
    responsive: true,
    aspectRatio: aspectRatio,
    maintainAspectRatio: maintainAspectRatio,
    plugins: {
      legend: {
        display: displayLegend
      },
      title: {
        display: title,
        text: title,
        position: titlePosition,
        font: {
          size: 18
        },
        padding: {
          top: title && titlePosition === 'top' ? 10 : 30,
          bottom: title && titlePosition === 'top' ? 30 : 10
        },
        color: isDarkMode ? '#ffffff' : ''
      },
      datalabels: {
        display: false
      }
    },
    elements: {
      line: {
        borderWidth: 2,
        borderColor: colors
      },
      point: {
        radius: 5,
        backgroundColor: colors
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: withAxes
            ? isDarkMode
              ? '#999999'
              : ChartJS.defaults.borderColor
            : 'transparent'
        },
        ticks: {
          font: {
            size: withAxes ? 14 : 20,
            family: 'Lato'
          },
          color: isDarkMode ? '#cccccc' : '#333333'
        },
        title: {
          display: true
        }
      },
      y: {
        display: withAxes,
        grid: {
          display: true,
          drawOnChartArea: false, // to still show the tick marks but remove grid lines
          color: isDarkMode ? '#999999' : ChartJS.defaults.borderColor,
          borderColor: isDarkMode ? '#999999' : ChartJS.defaults.borderColor
        },
        ticks: {
          callback: function (value, index, ticks) {
            return numFormatter(value)
          },
          stepSize: yStepSize,
          font: {
            size: 14
          },
          color: isDarkMode ? '#cccccc' : '#333333'
        },
        suggestedMin: 0
      }
    }
  }

  const chartData = {
    labels: withAxes ? [''].concat(labels) : labels,
    datasets: [
      {
        data: withAxes
          ? [null].concat(data).map((ea) => parseFloat(ea))
          : data.map((ea) => parseFloat(ea)),
        borderColor: colors
      }
    ]
  }

  return (
    <Line
      options={options}
      data={chartData}
      aria-label={ariaLabel}
      data-testid='line-chart'
    />
  )
}
