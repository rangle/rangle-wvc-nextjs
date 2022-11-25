import React from 'react'

import Video from './Video'

export default {
  title: 'Example/Video',
  component: Video
}

const Template = (args) => <Video {...args} />

export const Youtube = Template.bind({})
Youtube.args = {
  backgroundImage:
    'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
  src: 'https://www.youtube.com/watch?v=RYTFzGkb-5A'
}

export const MP4 = Template.bind({})
MP4.args = {
  backgroundImage:
    'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/wvc-homepage-supporting-banner-gift-impact-three-frames-chickens.jpg',
  src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
}
