import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import StatisticCard from './StatisticCard'

export default {
  title: 'Example/StatisticCard',
  component: StatisticCard
}
const Template = (args) => <StatisticCard {...args} />

export const Default = Template.bind({})
Default.args = {
  body: 'people learned how to protect themselves against COVID-19',
  statistic: '4,940,488',
  title: 'Progress'
}
