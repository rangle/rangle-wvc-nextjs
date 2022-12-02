import React from 'react'
import ReportCard from '../ReportCard/ReportCard'
import ReportCardGrid from './ReportCardGrid'

export default {
  title: 'Example/ReportCardGrid',
  component: ReportCardGrid
}
const Template = (args) => <ReportCardGrid {...args} />

export const Default = Template.bind({})
Default.args = {
  cards: [
    <ReportCard
      title='Report'
      url='https://worldvision.ca/'
      imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
      alt='My image alt text.'
    />,
    <ReportCard
      title='Report'
      url='https://worldvision.ca/'
      imageSrc='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
      alt='My image alt text.'
    />
  ]
}
