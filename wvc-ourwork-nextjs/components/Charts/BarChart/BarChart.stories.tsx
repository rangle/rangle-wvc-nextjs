import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BarChart } from './BarChart'

export default {
  title: 'Example/Charts/BarChart',
  argTypes: {
    titlePosition: {
      options: ['top', 'bottom'],
      control: { type: 'select' }
    }
  },
  component: BarChart
} as ComponentMeta<typeof BarChart>

const Template: ComponentStory<typeof BarChart> = (args) => (
  <div
    style={{
      background: args.isDarkMode ? '#333333' : '',
      padding: '24px 32px'
    }}
  >
    <BarChart {...args} />
  </div>
)

export const WithAxes = Template.bind({})
WithAxes.args = {
  withAxes: true,
  yStepSize: 100000,
  aspectRatio: 0.8,
  showTopBarLabels: false,
  isDarkMode: false,
  title: 'Reading Comprehension',
  subTitle: 'Eravur Pattu, Sri Lanka',
  titlePosition: 'top',
  ariaLabel: 'Bar Chart Reading Comprehension',
  colours: ['rgb(231, 96, 12)'],
  labels: ['Girls', 'Boys', 'Women', 'Men'],
  data: [480000, 410000, 250000, 220000]
}

export const WithoutAxesWithIndvTopBarLabel = Template.bind({})
WithoutAxesWithIndvTopBarLabel.args = {
  withAxes: false,
  yStepSize: 10,
  aspectRatio: 0.8,
  showTopBarLabels: true,
  isDarkMode: false,
  title: 'Reading Comprehension',
  subTitle: 'Eravur Pattu, Sri Lanka',
  titlePosition: 'bottom',
  ariaLabel: 'Bar Chart Reading Comprehension',
  colours: ['rgb(231, 96, 12)', 'rgb(255, 166, 102)', 'rgb(255, 225, 204)'],
  labels: ['2021', '2013'],
  data: ['83.5%', '74.1%']
}

export const Darkmode = Template.bind({})
Darkmode.args = {
  withAxes: true,
  yStepSize: 100000,
  aspectRatio: 0.8,
  showTopBarLabels: false,
  isDarkMode: true,
  title: 'Reading Comprehension',
  subTitle: 'Eravur Pattu, Sri Lanka',
  titlePosition: 'top',
  ariaLabel: 'Bar Chart Reading Comprehension',
  colours: ['rgb(231, 96, 12)'],
  labels: ['Girls', 'Boys', 'Women', 'Men'],
  data: [480000, 410000, 250000, 220000]
}
