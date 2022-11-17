import React from 'react'

import MediaCard from './MediaCard'
import iconFile from '../../assets/icons/conference.svg'

export default {
  title: 'Example/MediaCard',
  component: MediaCard
}

const image = {
  src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
  alt: 'My image alt text.'
}

const icon = {
  src: iconFile,
  alt: 'My icon alt text.'
}

const Template = (args) => <MediaCard {...args} />

export const CardWithImage = Template.bind({})
CardWithImage.args = {
  title:
    'Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!',
  labels: ['Health', 'Canada'],
  url: 'https://worldvision.ca/',
  imageSrc: image.src,
  iconSrc: '',
  alt: image.alt
}

export const CardWithIcon = Template.bind({})
CardWithIcon.args = {
  title: 'Vision for Vulnerable Youth Initiative',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!',
  labels: ['Conference'],
  url: 'https://worldvision.ca/',
  iconSrc: icon.src,
  imageSrc: '',
  alt: icon.alt
}
