import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { HomepageDoughnutChart } from './HomepageDoughnut'

export default {
  title: 'Example/Charts/HomepageDoughnut',
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
  component: HomepageDoughnutChart
}

const Template = (args) => <HomepageDoughnutChart {...args} />

export const Default = Template.bind({})
Default.args = {
  title: '',
  titlePosition: 'top',
  displayLegend: true,
  legendPosition: 'right',
  aspectRatio: 2,
  cutout: 90,
  colors: [
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
