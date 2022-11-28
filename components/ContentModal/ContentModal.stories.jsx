import React from 'react'
import Video from '../Video/Video'

import ContentModal from './ContentModal'

export default {
  title: 'Example/ContentModal',
  component: ContentModal,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <ContentModal {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Livelihoods',
  imgSrc: '/modalImage.jpg',
  imgAlt: 'Alt text',
  label1: 'In partnership with the World Food Programme',
  label2: 'received food assistance',
  label3: 'people were active members in',
  label4: 'savings groups',
  highlight1: '3,320,279 people',
  highlight2: '48,424',
  highlight3: '2951',
  ctaLabel: 'Learn more about  our livelihoods work',
  ctaShortLabel: 'Learn more',
  ctaUrl: 'https://www.worldvision.ca'
}
