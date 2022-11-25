import React from 'react'

import Tooltip from './Tooltip'

export default {
  title: 'Example/Tooltip',
  component: Tooltip
}

const Template = (args) => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  content: 'Here is some tooltip content'
}
