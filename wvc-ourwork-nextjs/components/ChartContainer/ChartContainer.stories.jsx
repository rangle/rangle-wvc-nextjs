import React from 'react'

import { ChartContainer } from './ChartContainer'

export default {
  title: 'Example/ChartContainer',
  component: ChartContainer
}

const Template = (args) => <ChartContainer {...args} />

export const Default = Template.bind({})
Default.args = {
  controlTitle: 'Explore our investments and results',
  footnote: 'Date as of footnote',
  chartType: 'line'
}

export const WithBarSample = Template.bind({})
WithBarSample.args = {
  controlTitle: 'Explore our investments and results',
  footnote: 'Date as of footnote',
  chartType: 'bar'
}

export const WithDoughnutSample = Template.bind({})
WithDoughnutSample.args = {
  controlTitle: 'Explore our investments and results',
  footnote: 'Date as of footnote',
  chartType: 'doughnut'
}

export const WithStackedBarSample = Template.bind({})
WithStackedBarSample.args = {
  controlTitle: 'Explore our investments and results',
  footnote: 'Date as of footnote',
  chartType: 'stackedBar'
}
