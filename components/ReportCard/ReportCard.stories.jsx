import React from 'react'

import ReportCard from './ReportCard'

export default {
  title: 'Example/ReportCard',
  component: ReportCard
}

const image = {
  src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
  alt: 'My image alt text.'
}

const Template = (args) => <ReportCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Report',
  url: 'https://worldvision.ca/',
  imageSrc: image.src,
  alt: image.alt
}
