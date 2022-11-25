import React from 'react'
import { StatisticCard } from './StatisticCardGrid'

export default {
  title: 'Example/StatisticCard',
  component: StatisticCard
}
const Template = (args) => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <StatisticCard {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  body: 'people learned how to protect themselves against COVID-19',
  statistic: '4,940,488',
  title: 'Progress'
}
