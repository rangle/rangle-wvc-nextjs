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
import { Options } from '../BarChart/BarChart.type'

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
  colours,
  withAxes,
  yStepSize,
  aspectRatio = 1,
  title = '',
  subTitle = '',
  titlePosition = 'top',
  displayLegend = true,
  legends = [],
  stackedBar = false,
  legendPosition = 'bottom'
}) {
  const fullTitle = [title, subTitle]

  const options: Options = {
    responsive: true,
    aspectRatio: aspectRatio,
    plugins: {
      legend: {
        display: displayLegend,
        position: legendPosition,
        labels: {
          boxWidth: 15,
          boxHeight: 15,
          padding: 30,
          color: '#000000'
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
        },
        stacked: stackedBar
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
        backgroundColor: colours[idx],
        maxBarThickness: 40
      }
    })
  }

  return <Bar options={options} data={chartData} />
}
