import React from 'react'
import StatisticCardGrid, { StatisticCard } from './StatisticCardGrid'

export default {
  title: 'Example/StatisticCardGrid',
  component: StatisticCardGrid
}
const Template = (args) => <StatisticCardGrid {...args} />

export const Default = Template.bind({})
Default.args = {
  cards: [
    <StatisticCard
      body='people learned how to protect themselves against COVID-19'
      statistic='4,940,488'
      title='Progress'
    />,
    <StatisticCard
      body='malnourished children were admitted to nutrition programs'
      statistic='1,020'
      title='Progress'
    />,
    <StatisticCard
      body='communities updated their disaster preparedness plans to provide guidance during emergencies'
      statistic='242'
      title='Progress'
    />
  ]
}
