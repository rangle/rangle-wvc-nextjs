import React from 'react'
import StoryCardGrid, { StoryCard } from './StoryCardGrid'

export default {
  title: 'Example/StoryCardGrid',
  component: StoryCardGrid
}
const Template = (args) => <StoryCardGrid {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Stories',
  cards: [
    <StoryCard
      body='1 In partnership with the World Food Programme, we provided $67 million in cash-based programming in 2021, helping 1,190,972 people meet their immediate survival needs.'
      imgSrc={'/StoryCardImg.png'}
      imgAlt='Alt text is important'
      storyUrl='https://www.worldvision.ca'
    />,
    <StoryCard
      body='2 Sed ullamcorper interdum nisi, suscipit euismod odio lacinia vitae. Donec lorem sem, sodales vel vestibulum nec, porttitor sit amet nisi. Pellentesque venenatis nec velit sit amet dictum. Aenean nec augue eu ligula molestie porta. Nullam feugiat sodales justo eu commodo. Quisque dictum viverra sagittis. In quis elementum enim. Suspendisse pharetra enim a velit posuere, vitae efficitur magna luctus. Nullam vulputate elit et risus gravida, sed pellentesque felis porta. Cras odio nibh, efficitur quis nulla eget, faucibus porttitor lorem. Phasellus interdum ipsum eu bibendum congue. Praesent nec eros sed neque eleifend sollicitudin sit amet vel tortor. Phasellus et tristique ex.'
      imgSrc={'/StoryCardImg.png'}
      imgAlt='Alt text is important'
      storyUrl='https://www.worldvision.ca'
    />,
    <StoryCard
      body='3 Sed ullamcorper interdum nisi, suscipit euismod odio lacinia vitae. Donec lorem sem, sodales vel vestibulum nec, porttitor sit amet nisi. '
      imgSrc={'/StoryCardImg.png'}
      imgAlt='Alt text is important'
      storyUrl='https://www.worldvision.ca'
    />
  ]
}
