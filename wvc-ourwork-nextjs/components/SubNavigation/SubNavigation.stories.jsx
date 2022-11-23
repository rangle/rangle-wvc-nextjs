import React from 'react'

import SubNavigation from './SubNavigation'

import countryData from './SampleCountryData'
import areasOfFocusData from './SampleAreaOfFocusData'

export default {
  title: 'Example/SubNavigation',
  component: SubNavigation
}

const Template = (args) => <SubNavigation {...args} />

export const Default = Template.bind({})
Default.args = {
  navItems: [
    {
      label: 'Areas of focus',
      subMenuItems: areasOfFocusData // json from the areas_of_focus snowflake table
    },
    {
      label: 'Country',
      subMenuItems: countryData // json from the countries snowflake table
    },
    {
      label: 'Programs',
      url: '/our-work/programs'
    },
    {
      label: 'Resources',
      url: '/our-work/resources'
    }
  ]
}
