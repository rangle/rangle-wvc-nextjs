import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DoughnutChart } from './DoughnutChart'

export default {
  title: 'Example/Charts/DoughnutChart',
  argTypes: {
    titlePosition: {
      options: ['top', 'bottom'],
      control: { type: 'select' }
    },
    legendPosition: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'select' }
    }
  },
  component: DoughnutChart
} as ComponentMeta<typeof DoughnutChart>

const Template: ComponentStory<typeof DoughnutChart> = (args) => (
  <div
  style={{
    background: args.isDarkMode ? '#333333' : '',
  }}
  >
    <DoughnutChart {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: '',
  titlePosition: 'top',
  displayLegend: true,
  legendPosition: 'right',
  aspectRatio: 2,
  cutout: 90,
  colours: [
    'rgb(231, 96, 12)',
    'rgb(255, 166, 102)',
    'rgb(255, 195, 153)',
    'rgb(231, 96, 12)'
  ],
  labels: [
    'Development Programming',
    'Protected Emergencies & Fragile Contexts',
    'Emergencies Response I-III'
  ],
  data: ['90%', '6%', '4%'],
  isDarkMode: false,
  ariaLabel: 'Doughnut chart for development program'
}

export const Darkmode = Template.bind({})
Darkmode.args = {
  title: '',
  titlePosition: 'top',
  displayLegend: true,
  legendPosition: 'left',
  aspectRatio: 2,
  cutout: 90,
  colours: [
    'rgb(231, 96, 12)',
    'rgb(255, 166, 102)',
    'rgb(255, 195, 153)',
    'rgb(231, 96, 12)'
  ],
  labels: [
    'Development Programming',
    'Protected Emergencies & Fragile Contexts',
    'Emergencies Response I-III'
  ],
  data: ['90%', '6%', '4%'],
  isDarkMode: true,
  ariaLabel: 'Doughnut chart for development program'
}
