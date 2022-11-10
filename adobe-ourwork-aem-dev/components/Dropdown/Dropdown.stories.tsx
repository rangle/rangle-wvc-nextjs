import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Dropdown, { DropdownProps } from './Dropdown'

export default {
  title: 'Example/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<DropdownProps> = (args: DropdownProps) => (
  <div
    style={{
      background: args.isDark ? '#333333' : '#f5f5f5',
      padding: '24px 32px'
    }}
  >
    <Dropdown {...args} />
  </div>
)

const defaultArgs: DropdownProps = {
  dropdownLabel: 'Dropdown Label',
  id: 'selectId',
  isDark: false,
  options: [
    {
      label: 'Option 1',
      value: 'option 1'
    },
    {
      label: 'Option 2',
      value: 'option 2'
    },
    {
      label: 'Option 3',
      value: 'option 3'
    },
    {
      label: 'Option 4',
      value: 'option 4'
    }
  ],
  updateSelection: (value: string) => {
    alert(`Value chosen: ${value}`)
  }
}

export const Default = Template.bind({})
Default.args = defaultArgs
