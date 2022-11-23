import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LogoBlock from './LogoBlock'

export default {
  title: 'Example/LogoBlock',
  component: LogoBlock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' }
  }
} as ComponentMeta<typeof LogoBlock>

const Template: ComponentStory<typeof LogoBlock> = (args) => (
  <div style={{ paddingTop: '50px' }}>
    <LogoBlock {...args} />
  </div>
)
export const Default = Template.bind({})
Default.args = {
  title: 'Our Partners',
  ctaLabel:
    'Learn more about our focus to achieve UN’s Sustainable Development Goals',
  ctaUrl: 'https://www.worldvision.ca',
  logos: [
    {
      alt: 'Logo alt text',
      src: '/logo1.svg',
      url: 'https://www.worldvision.ca'
    },
    {
      alt: 'Logo alt text',
      src: '/logo2.svg',
      url: 'https://www.worldvision.ca'
    },
    {
      alt: 'Logo alt text',
      src: '/logo3.svg',
      url: 'https://www.worldvision.ca'
    },
    {
      alt: 'Logo alt text',
      src: '/logo4.svg',
      url: 'https://www.worldvision.ca'
    }
  ]
}

export const NoCTA = Template.bind({})
NoCTA.args = {
  title: 'Our Partners',
  ctaLabel: '',
  ctaUrl: '',
  logos: [
    {
      alt: 'Logo alt text',
      src: '/logo1.svg',
      url: 'https://www.worldvision.ca'
    },
    {
      alt: 'Logo alt text',
      src: '/logo2.svg',
      url: 'https://www.worldvision.ca'
    },
    {
      alt: 'Logo alt text',
      src: '/logo3.svg',
      url: 'https://www.worldvision.ca'
    },
    {
      alt: 'Logo alt text',
      src: '/logo4.svg',
      url: 'https://www.worldvision.ca'
    }
  ]
}
