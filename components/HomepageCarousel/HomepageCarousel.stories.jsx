import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'
import Video from '../Video/Video'

import HomepageCarousel from './HomepageCarousel'

export default {
  title: 'Example/HomepageCarousel',
  component: HomepageCarousel
}

const Template = (args) => <HomepageCarousel {...args} />

export const FeatureCards = Template.bind({})
FeatureCards.args = {
  title: 'Did you know?',
  cards: [
    <FeatureCard
      title={
        "ONE: Our Christian faith is an essential part of World Vision's holistic approach."
      }
      description={
        "84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups."
      }
      imgSrc={
        'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg'
      }
      imgAlt={'sample alt text'}
    />,
    <FeatureCard
      title={
        "TWO: Our Christian faith is an essential part of World Vision's holistic approach."
      }
      description={
        "84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups."
      }
      imgSrc={
        'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg'
      }
      imgAlt={'sample alt text'}
    />,
    <FeatureCard
      title={
        "THREE: Our Christian faith is an essential part of World Vision's holistic approach."
      }
      description={
        "84% of the world's population identifies with a religious group, so our faith often brings us credibility in local communities, creating trust and mutual respect within diverse faith groups."
      }
      imgSrc={
        'https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/homepage-girl-Katia-Honduras_optimized.jpg?ext=.jpg'
      }
      imgAlt={'sample alt text'}
    />
  ]
}

export const Videos = Template.bind({})
Videos.args = {
  cards: [
    <Video
      backgroundImage='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
      src='https://www.youtube.com/watch?v=RYTFzGkb-5A'
    />,
    <Video
      backgroundImage='https://www.worldvision.ca/WorldVisionCanada/media/Homepage-assets/wvc-homepage-supporting-banner-gift-impact-three-frames-chickens.jpg'
      src='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
    />,
    <Video
      backgroundImage='https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg'
      src='https://www.youtube.com/watch?v=RYTFzGkb-5A'
    />
  ]
}
