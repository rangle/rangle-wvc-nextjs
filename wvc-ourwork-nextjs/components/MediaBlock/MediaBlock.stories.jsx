import React from 'react'

import MediaBlock from './MediaBlock'

export default {
  title: 'Example/MediaBlock',
  component: MediaBlock
}

const image = {
  src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
  alt: 'My image alt text.'
}

const Template = (args) => <MediaBlock {...args} />

export const VideoBlock = Template.bind({})
VideoBlock.args = {
  title: 'This community is graduating',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, turpis et hendrerit pulvinar, odio purus lacinia felis, a semper eros turpis quis turpis. Curabitur sodales velit at fusce.',
  videoSrc: 'https://www.youtube.com/watch?v=RYTFzGkb-5A',
  videoBackgroundImage: image.src
}

export const ImageBlock = Template.bind({})
ImageBlock.args = {
  title: 'This community is graduating',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, turpis et hendrerit pulvinar, odio purus lacinia felis, a semper eros turpis quis turpis. Curabitur sodales velit at fusce.',
  image: image.src
}
