import React from 'react'

import FeatureCard from './FeatureCard'

export default {
  title: 'Example/FeatureCard',
  component: FeatureCard
}

const Template = (args) => <FeatureCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title:
    "Our Christian faith is an essential part of World Vision's holistic approach.",
  description:
    "84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups.",
  imgSrc:
    'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg',
  imgAlt: 'sample alt text'
}
