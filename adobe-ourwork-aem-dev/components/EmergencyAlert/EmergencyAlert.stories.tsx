import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EmergencyAlert, { EmergencyAlertProps } from './EmergencyAlert'

export default {
  title: 'Example/EmergencyAlert',
  parameters: {
    layout: 'fullscreen'
  },
  component: EmergencyAlert
} as ComponentMeta<typeof EmergencyAlert>

const Template: ComponentStory<EmergencyAlertProps> = (
  args: EmergencyAlertProps
) => <EmergencyAlert {...args} />

const defaultArgs: EmergencyAlertProps = {
  title: 'Important notice',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  buttonLabel: 'Close'
}

export const Default = Template.bind({})
Default.args = defaultArgs
