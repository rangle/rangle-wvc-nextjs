import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BarChart } from './BarChart'

export default {
  title: 'Example/BarChart',
  component: BarChart
} as ComponentMeta<typeof BarChart>

const Template: ComponentStory<typeof BarChart> = (args) => BarChart(args)

export const WithAxes = Template.bind({})
WithAxes.args = {
  colours: ['rgb(231, 96, 12)'],
  labels: ['Girls', 'Boys', 'Women', 'Men'],
  data: [480000, 410000, 250000, 220000],
  withAxes: true,
  yStepSize: 100000,
  aspectRatio: 0.8,
  topBarLabels: false
}

export const WithoutAxesWithIndvTopBarLabel = Template.bind({})
WithoutAxesWithIndvTopBarLabel.args = {
  colours: ['rgb(231, 96, 12)', 'rgb(255, 166, 102)', 'rgb(255, 225, 204)'],
  labels: ['2021', '2013'],
  data: ['83.5%', '74.1%'],
  withAxes: false,
  yStepSize: 10,
  aspectRatio: 0.5,
  topBarLabels: true,
  bottomLabelTitle: 'Reading Comprehension',
  bottomLabelSubtitle: 'Eravur Pattu, Sri Lanka'
}
