import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LineChart } from './LineChart'

export default {
  title: 'Example/Charts/LineChart',
  argTypes: {
    titlePosition: {
      options: ['top', 'bottom'],
      control: { type: 'select' }
    },
  },
  component: LineChart
}

const Template = (args) => LineChart(args)

export const WithAxes = Template.bind({})
WithAxes.args = {
  withAxes: true,
  yStepSize: 100000,
  aspectRatio: 0.8,
  showTopBarLabels: false,
  ariaLabel: 'Bar Chart Reading Comprehension',
  colours: ['rgb(231, 96, 12)'],
  labels: ['2019', '2020', '2021'],
  data: [480000, 410000, 250000]
}

export const WithoutAxesWithIndvTopBarLabel = Template.bind({})
WithoutAxesWithIndvTopBarLabel.args = {
  withAxes: false,
  yStepSize: 10,
  aspectRatio: 0.8,
  showTopBarLabels: true,
  title: 'Reading Comprehension',
  subTitle: 'Eravur Pattu, Sri Lanka',
  titlePosition: 'top',
  colours: ['rgb(231, 96, 12)', 'rgb(255, 166, 102)', 'rgb(255, 225, 204)'],
  labels: ['2021', '2013'],
  data: ['83.5%', '74.1%']
}
