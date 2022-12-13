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
import { convertPercentage, numFormatter } from '../../../utils/convertNumbers'
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
        color: getTitleColor(titlePosition, isDarkMode, '#fff', '#ccc', '#666'),
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
        color: getTitleColor(titlePosition, isDarkMode, '#ccc', '#fff', '#333'),
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
          if (value[0] === '0') {
            return convertPercentage(value)
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
        data: data.map((ea) => parseFloat(ea).toFixed(2)),
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

const getTitleColor = (
  titlePosition,
  isDarkMode,
  topDark,
  bottomDark,
  bottomLight
) => {
  if (titlePosition === 'top') {
    // if the title is on the top, just change the darkmode color
    return isDarkMode ? topDark : ''
  } else {
    // if title is on the bottom, this becomes subtitle, so change colors to match subtitle
    return isDarkMode ? bottomDark : bottomLight
  }
}
