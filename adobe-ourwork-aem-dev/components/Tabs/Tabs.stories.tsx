import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tabs from './Tabs'
import { Item } from 'react-stately'
export default {
  title: 'Example/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs aria-label='History of Ancient Rome' {...args}>
    <Item key='FoR' title='Founding of Rome'>
      Arma virumque cano, Troiae qui primus ab oris.
    </Item>
    <Item key='MaR' title='Monarchy and Republic'>
      Senatus Populusque Romanus.
    </Item>
    <Item key='Emp' title='Empire'>
      Alea jacta est.
    </Item>
    <Item key='InputTest' title='Has Input'>
      <label>
        Leave a note for Jane: <input type='text' />
      </label>
    </Item>
  </Tabs>
)

export const Default = Template.bind({})

Default.args = {
  isDarkMode: false
}

export const DarkMode = Template.bind({})

DarkMode.args = {
  isDarkMode: true
}
