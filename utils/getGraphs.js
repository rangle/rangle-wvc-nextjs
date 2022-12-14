import { BarChart } from '../components/Charts/BarChart/BarChart'
import { LineChart } from '../components/Charts/LineChart/LineChart'
import { StackedBarChart } from '../components/Charts/StackedBarChart/StackedBarChart'
import { DoughnutChart } from '../components/Charts/DoughnutChart/DoughnutChart'

export const getTitleArray = (statement, statement_02, statement_03) => {
  let title = []

  if (statement) {
    title.push(statement)
  }
  if (statement_02) {
    title.push(statement_02)
  }
  if (statement_03) {
    title.push(statement_03)
  }
  return title
}

export const getGraph = (graphNumber, graphData, idCode, chartContainer) => {
  if (!graphData) {
    return null
  }
  // get the indicator code (/chart) to plot
  let graphToPlot =
    idCode ||
    [...new Set(graphData.map((ea, idx) => graphData[idx].INDICATOR_CODE))][
      graphNumber
    ]

  // return if there are no unique indicator codes
  if (!graphToPlot) {
    return null
  }
  // get the rows to be plotted for one chart
  let rowsToPlot = Object.keys(graphData)
    .map((ea) => graphData[ea])
    .filter((ea) => ea.INDICATOR_CODE === graphToPlot)
    // sort with TARGET at the end
    .sort((a, b) => a.YEAR_OR_TARGET.localeCompare(b.YEAR_OR_TARGET))

  let args = {
    title: `${rowsToPlot[0]?.GRAPH_STATEMENT}`,
    aspectRatio: 0.8,
    ariaLabe: 'Bar Chart Reading Comprehension',
    withAxes: !!idCode || !!chartContainer,
    aspectRatio: 0.8,
    colors: [
      'rgb(255, 166, 102)',
      'rgb(231, 96, 12)',
      'rgb(102, 102, 102)',
      'rgb(153, 153, 153)',
      // 'rgb(204, 204, 204)',
      'rgb(255, 136, 51)'
    ],
    data: rowsToPlot.map((ea) =>
      ea.UNIT_OF_MEASUREMENT === 'percentage' ? `${ea.VALUE}%` : ea.VALUE
    ),
    labels: [
      ...new Set(
        rowsToPlot.map((ea) =>
          ea.CHART_TYPE === 'pie_chart' ? ea.DISAGGREGATION : ea.YEAR_OR_TARGET
        )
      )
    ],
    showTopBarLabels: true,
    subTitle: `${rowsToPlot[0]?.LOCATION ? rowsToPlot[0]?.LOCATION : ''}${
      rowsToPlot[0]?.LOCATION && rowsToPlot[0]?.COUNTRY ? ', ' : ''
    }${rowsToPlot[0]?.COUNTRY ? rowsToPlot[0]?.COUNTRY : ' '}`,
    title: getTitleArray(
      rowsToPlot[0]?.GRAPH_STATEMENT,
      rowsToPlot[0]?.GRAPH_STATEMENT_02,
      rowsToPlot[0]?.GRAPH_STATEMENT_03
    ),
    ariaLabel: `${rowsToPlot[0]?.GRAPH_ALT}`,
    maintainAspectRatio: !chartContainer
  }

  let legends = {}
  let data

  const transformStackedData = () => {
    // NOTE: For stacked bar chart,
    // # of legends should match the number of arrays inside data
    // # of labels should match the number of VALUES inside each array
    rowsToPlot.forEach((ea) => {
      if (legends[ea.DISAGGREGATION]) {
        legends[ea.DISAGGREGATION] = legends[ea.DISAGGREGATION].concat(ea.VALUE)
      } else {
        legends[ea.DISAGGREGATION] = [ea.VALUE]
      }
    })

    data = Object.values(legends).map((ea) => ea)

    return { data, legends }
  }

  switch (rowsToPlot[0]?.CHART_TYPE) {
    case 'bar_chart':
      return <BarChart {...args} />
    case 'line':
      return <LineChart {...args} />
    case 'pie_chart':
      return <DoughnutChart {...args} />
    case 'stacked_chart':
      transformStackedData()
      args.legends = Object.keys(legends)
      args.data = data
      args.subTitle = ''
      return <StackedBarChart {...args} />
    default:
      return <BarChart {...args} />
  }
}
