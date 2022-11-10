import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
//   BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  SubTitle,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { Line } from 'react-chartjs-2'
import { numFormatter } from '../../../utils/convertNumbers'
// import { Options } from './BarChart/BarChart.type'

ChartJS.register(
  CategoryScale,
  LinearScale,
//   BarElement,
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
  colours,
  withAxes,
  yStepSize,
  aspectRatio = 1,
  showTopBarLabels = false,
  title = '',
  subTitle = '',
  ariaLabel = ''
}) {
  const fullTitle = [title, subTitle]

  const options = {
    responsive: true,
    aspectRatio: aspectRatio,
    plugins: {
      legend: {
        display: false,
        // labels: {
        //     usePointStyle: true,
        // }
      }
      //   title: {
      //     display: title,
      //     text: fullTitle,
      //     position: 'bottom',
      //     font: {
      //       size: 18
      //     }
      //   },
      //   datalabels: {
      //     display: showTopBarLabels,
      //     color: '#333333',
      //     anchor: 'end',
      //     align: 'end',
      //     font: {
      //       size: 20,
      //       weight: '400',
      //       family: 'Lato'
      //     },
      //     formatter: function (value, context) {
      //       // if the data received ends with %, add "%" to the top bar labels
      //       if (data[0][data[0].length - 1] === '%') {
      //         return value + '%'
      //       }
      //       return value
      //     }
      //   }
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
        fill: false,
        borderColor: colours[0],
        backgroundColor: colours[1]
      },
      point: {
        radius: 0,
        hoverRadius: 0,
        hitRadius: 0,
        hoverBorderWidth: 0
      }
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        },
    },
    // scales: {
    //   x: {
    //     grid: {
    //       display: false,
    //       borderColor: withAxes ? ChartJS.defaults.borderColor : 'transparent'
    //     },
    //     ticks: {
    //       font: {
    //         size: withAxes ? 14 : 20,
    //         family: 'Lato'
    //       },
    //       color: '#333333'
    //     },
    //     title: {
    //       display: true
    //     }
    //   },
    //   y: {
    //     display: withAxes,
    //     grid: {
    //       display: true,
    //       drawOnChartArea: false // to still have the tick marks
    //     },
    //     ticks: {
    //       callback: function (value, index, ticks) {
    //         return numFormatter(value)
    //       },
    //       stepSize: yStepSize,
    //       font: {
    //         size: 14
    //       },
    //       color: '#333333'
    //     },
    //     grace: showTopBarLabels ? '25%' : ''
    //   }
    // }
  }

  const chartData = {
    labels,
    datasets: [
      {
        data: data.map((ea) => parseFloat(ea)),
        backgroundColor: colours,
        maxBarThickness: 40
      }
    ]
  }

  return <Line options={options} data={chartData} aria-label={ariaLabel} />
}
