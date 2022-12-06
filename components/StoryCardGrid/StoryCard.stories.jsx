import React from 'react'
import { StoryCard } from './StoryCardGrid'

export default {
  title: 'Example/StoryCard',
  component: StoryCard
}
const Template = (args) => {
  return (
    <div>
      <StoryCard {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  body: '3 Sed ullamcorper interdum nisi, suscipit euismod odio lacinia vitae. Donec lorem sem, sodales vel vestibulum nec, porttitor sit amet nisi.',
  imgSrc: '/StoryCardImg.png',
  imgAlt: 'Alt text is important',
  linkUrl: 'https://www.worldvision.ca',
  linkLabel: 'Read more'
}

export const LongBody = Template.bind({})
LongBody.args = {
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat volutpat sodales. Cras sollicitudin vel ligula semper rhoncus. Nam eu imperdiet metus, nec aliquam diam. Aenean ullamcorper iaculis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer eget metus vehicula, fringilla lacus et, pellentesque lorem. Aliquam varius nec tortor vel suscipit. Aenean imperdiet diam ac lectus posuere iaculis. Nullam maximus nisi sapien, congue finibus elit condimentum non. Aenean a leo leo. Nam at eros in libero bibendum mollis. Phasellus dolor felis, volutpat vel euismod et, elementum id metus. Duis tincidunt leo ac nibh pulvinar, a luctus erat pretium. Praesent tincidunt gravida eros ut aliquam.',
  imgSrc: '/StoryCardImg.png',
  imgAlt: 'Alt text is important',
  linkUrl: 'https://www.worldvision.ca',
  linkLabel: 'Read more'
}
