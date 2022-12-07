import { BarChart } from '../components/Charts/BarChart/BarChart'
import { LineChart } from '../components/Charts/LineChart/LineChart'
import { StackedBarChart } from '../components/Charts/StackedBarChart/StackedBarChart'
import { DoughnutChart } from '../components/Charts/DoughnutChart/DoughnutChart'

export const getGraph = (graphNumber, props) => {
  // get the chart (indicator code) to plot from the first unique three
  let graphToPlot = [
    ...new Set(
      props.changeGraphs.map(
        (ea, idx) => props.changeGraphs[idx].INDICATOR_CODE
      )
    )
  ].slice(0, 3)[graphNumber]

  // get the rows to be plotted for one chart
  let rowsToPlot = Object.keys(props.changeGraphs)
    .map((ea) => props.changeGraphs[ea])
    .filter((ea) => ea.INDICATOR_CODE == graphToPlot)
    // sort with TARGET at the end
    .sort((a, b) => a.YEAR_OR_TARGET.localeCompare(b.YEAR_OR_TARGET))

  let args = {
    title: `${rowsToPlot[0].GRAPH_STATEMENT}`,
    aspectRatio: 0.8,
    ariaLabe: 'Bar Chart Reading Comprehension',
    withAxes: false,
    aspectRatio: 0.8,
    colors: [
      'rgb(255, 166, 102)',
      'rgb(231, 96, 12)',
      // 'rgb(255, 136, 51)',
      'rgb(102, 102, 102)',
      'rgb(153, 153, 153)'
    ],
    data: rowsToPlot.map((ea) =>
      ea.UNIT_OF_MEASUREMENT === 'percentage' ? `${ea.VALUE}%` : ea.VALUE
    ),
    labels: rowsToPlot.map((ea) => ea.YEAR_OR_TARGET),
    showTopBarLabels: true,
    subTitle: `${rowsToPlot[0].LOCATION ? rowsToPlot[0].LOCATION : ''}${
      rowsToPlot[0].COUNTRY ? ', ' + rowsToPlot[0].COUNTRY : ' '
    }`,
    // TODO: They might divide this title into three,
    // so if so it will become an array:
    // title: [`${rowsToPlot[0].GRAPH_STATEMENT_1}`, ${rowsToPlot[0].GRAPH_STATEMENT_2}, ${rowsToPlot[0].GRAPH_STATEMENT_3}]
    title: `${rowsToPlot[0].GRAPH_STATEMENT}`,
    ariaLabel: `${rowsToPlot[0].GRAPH_ALT}`
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

  switch (rowsToPlot[0].CHART_TYPE) {
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