import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { Bar } from 'react-chartjs-2'
import { numFormatter } from '../../../utils/convertNumbers'
import { Options } from '../charts.type'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
)

export function BarChart({
  data,
  labels,
  colors,
  withAxes,
  yStepSize,
  aspectRatio = 1,
  showTopBarLabels = false,
  isDarkMode = false,
  title = '',
  subTitle = '',
  titlePosition = 'bottom',
  ariaLabel = '',
  maintainAspectRatio = true
}) {
  const options: Options = {
    responsive: true,
    aspectRatio: aspectRatio,
    maintainAspectRatio: maintainAspectRatio,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: title,
        text: titlePosition === 'top' ? title : subTitle,
        position: titlePosition,
        color:
          titlePosition === 'top'
            ? // if the title is on the top, just change the darkmode color
            !isDarkMode
              ? ''
              : '#ffffff'
            : // if title is on the bottom, this becomes subtitle, so change colors to match subtitle
            !isDarkMode
              ? '#666666'
              : '#cccccc',
        font: {
          size: titlePosition === 'top' ? 18 : 12,
          weight: titlePosition === 'top' ? 'bold' : 'normal'
        },
        padding: {
          top: title && titlePosition == 'top' ? 10 : 30,
          bottom: title && titlePosition == 'top' ? 30 : 10
        }
      },
      subtitle: {
        display: subTitle,
        text: titlePosition === 'top' ? subTitle : title,
        position: titlePosition,
        color:
          titlePosition === 'top'
            ? // if the subtitle is on the top, just change the darkmode color
            !isDarkMode
              ? ''
              : '#cccccc'
            : // if subtitle is on the bottom, this becomes the title, so change colors to match title
            !isDarkMode
              ? '#333333'
              : '#ffffff',
        font: {
          size: titlePosition === 'top' ? 12 : 18,
          weight: titlePosition === 'top' ? 'normal' : 'bold'
        }
      },
      datalabels: {
        display: showTopBarLabels,
        color: isDarkMode ? '#ffffff' : '#333333',
        anchor: 'end',
        align: 'end',
        font: {
          size: 18,
          weight: '400',
          family: 'Lato'
        },
        formatter: function (value, context) {
          // if the data received ends with %, add "%" to the top bar labels
          if (data[0][data[0].length - 1] === '%') {
            return `${value * 100}%`
          }
          return numFormatter(value)
        }
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
          color: isDarkMode ? '#ffffff' : '#333333'
        },
        title: {
          display: true
        }
      },
      y: {
        display: withAxes,
        grid: {
          display: true,
          drawOnChartArea: false, // to still have the tick marks whilst not showing the grid
          borderColor: isDarkMode ? '#999999' : ChartJS.defaults.borderColor,
          color: isDarkMode ? '#999999' : ChartJS.defaults.borderColor
        },
        ticks: {
          callback: function (value, index, ticks) {
            return numFormatter(value)
          },
          stepSize: yStepSize,
          font: {
            size: 14
          },
          color: isDarkMode ? '#ffffff' : '#333333'
        },
        grace: showTopBarLabels ? '25%' : ''
      }
    }
  }

  const chartData = {
    labels,
    datasets: [
      {
        data: data.map((ea) => parseFloat(ea)),
        backgroundColor: colors,
        maxBarThickness: 40
      }
    ]
  }

  return (
    <Bar
      options={options}
      data={chartData}
      aria-label={ariaLabel}
      data-testid='bar-chart'
    />
  )
}
