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
import { numFormatter } from '../../utils/convertNumbers'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
)

interface Options {
  responsive: boolean
  aspectRatio?: number
  plugins?: boolean | any
  scales?: any
}

export function BarChart({
  data,
  labels,
  colours,
  withAxes,
  yStepSize,
  aspectRatio = 1,
  topBarLabels = false,
  bottomLabelTitle = '',
  bottomLabelSubtitle = '',
}) {

  const bottomTitle = [bottomLabelTitle, bottomLabelSubtitle]

  const options: Options = {
    responsive: true,
    aspectRatio: aspectRatio,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: bottomLabelTitle,
        text: bottomTitle,
        position: 'bottom',
        font: {
          size: 18
        }
      },
      datalabels: {
        display: topBarLabels,
        color: '#333333',
        anchor: 'end',
        align: 'end',
        font: {
          size: 20,
          weight: '400',
          family: 'Lato'
        },
        formatter: function (value, context) {
          // if the data received ends with %, add "%" to the bar labels
          if (data[0][data[0].length-1] === '%') {
            return value + '%'
          } return value
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: withAxes ? ChartJS.defaults.borderColor : 'transparent'
        },
        ticks: {
          font: {
            size: withAxes ? 14 : 20,
            family: 'Lato'
          },
          color: '#333333'
        },
        title: {
          display: true
        }
      },
      y: {
        display: withAxes,
        grid: {
          display: true,
          drawOnChartArea: false // to still have the tick marks
        },
        ticks: {
          callback: function (value, index, ticks) {
            return numFormatter(value)
          },
          stepSize: yStepSize,
          font: {
            size: 14
          },
          color: '#333333'
        },
        grace: topBarLabels ? '25%' : ''
      }
    }
  }

  const chartData = {
    labels,
    datasets: [
      {
        data: data.map(ea => parseFloat(ea)),
        backgroundColor: colours,
        maxBarThickness: 40
      }
    ]
  }

  return <Bar options={options} data={chartData} />
}
