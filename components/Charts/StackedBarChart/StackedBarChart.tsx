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

export function StackedBarChart({
  data,
  labels,
  colors,
  withAxes,
  yStepSize,
  aspectRatio = 1,
  title = '',
  subTitle = '',
  titlePosition = 'top',
  displayLegend = true,
  legends = [],
  stackedBar = true,
  legendPosition = 'bottom',
  ariaLabel = '',
  isDarkMode = false,
  maintainAspectRatio = true
}) {
  const fullTitle = [title, subTitle]

  const options: Options = {
    responsive: true,
    aspectRatio: aspectRatio,
    maintainAspectRatio: maintainAspectRatio,
    plugins: {
      legend: {
        display: displayLegend,
        position: legendPosition,
        labels: {
          boxWidth: 15,
          boxHeight: 15,
          color: isDarkMode ? '#ffffff' : '#000000'
        }
      },
      title: {
        display: title,
        text: fullTitle,
        position: titlePosition,
        font: {
          size: 18
        },
        color: isDarkMode ? '#ffffff' : '#000000',
        padding: {
          top: title && titlePosition == 'top' ? 10 : 30,
          bottom: title && titlePosition == 'top' ? 30 : 10
        }
      },
      datalabels: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: withAxes
            ? isDarkMode
              ? '#cccccc'
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
        },
        stacked: stackedBar
      },
      y: {
        display: withAxes,
        grid: {
          display: true, // to still show the tick marks
          drawOnChartArea: false,
          borderColor: isDarkMode ? '#cccccc' : ChartJS.defaults.borderColor,
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
          color: isDarkMode ? '#cccccc' : '#333333'
        },
        grace: displayLegend && legendPosition === 'top' ? '25%' : '',
        stacked: stackedBar
      }
    }
  }

  const chartData = {
    labels,
    datasets: data.map((eaData, idx) => {
      return {
        label: legends[idx],
        data: eaData.map((ea) => parseFloat(ea)),
        backgroundColor: colors[idx],
        maxBarThickness: 40
      }
    })
  }

  return (
    <Bar
      options={options}
      data={chartData}
      aria-label={ariaLabel}
      data-testid='stacked-bar-chart'
    />
  )
}
