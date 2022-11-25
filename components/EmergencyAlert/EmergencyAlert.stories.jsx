import React from 'react'

import EmergencyAlert from './EmergencyAlert'

export default {
  title: 'Example/EmergencyAlert',
  parameters: {
    layout: 'fullscreen'
  },
  component: EmergencyAlert
}

const Template = (args) => <EmergencyAlert {...args} />

const defaultArgs = {
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  buttonLabel: 'Close',
  title: 'Important notice',
  url: 'https://www.worldvision.ca/'
}

export const Default = Template.bind({})
Default.args = defaultArgs
