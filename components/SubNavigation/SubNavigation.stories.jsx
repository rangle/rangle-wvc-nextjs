import React from 'react'

import SubNavigation from './SubNavigation'

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
      hasSubMenu: true,
      subMenuData: [
        {
          name: 'Sectors',
          subMenu: 'Areas of Focus',
          list: [
            {label: 'Child Protection and Participation', url: '/child-protection'},
            {label: 'Education', url: '/education'},
            {label: 'Health', url: '/health'},
            {label: 'Livelihoods', url: '/food'},
            {label: 'Water, Sanitation and Hygiene', url: '/clean-water'}
          ]
        },
        {
          name: 'Featured Themes',
          subMenu: 'Areas of Focus',
          list: [
            {label: 'Climate Change', url: '/climate-change'},
            {label: 'Emergency Response', url: '/emergency-response'},
            {label: 'Faith and Development', url: '/faith-and-development'},
            {label: 'Gender Equality and Social Inclusion', url: '/gender-equality'},
          ]
        },
      ]
    },
    {
      label: 'Countries',
      hasSubMenu: true,
      subMenuData: [
        {
          name: 'Africa',
          subMenu: 'Countries',
          list: [
            {label: 'Angola', url: '/angola'},
            {label: 'Burundi', url: '/burundi'},
            {label: 'Central African Republic', url: '/central-african-republic'},
            {label: 'Chad', url: '/chad'},
            {label: 'Democratic Republic of the Congo', url: '/democratic-republic-of-the-congo'}
          ]
        },
        {
          name: 'Asia and Pacific',
          subMenu: 'Countries',
          list: [
            {label: 'Bangladesh', url: '/bangladesh'},
            {label: 'Cambodia', url: '/cambodia'},
            {label: 'China', url: '/china'},
            {label: 'India', url: '/india'},
          ]
        },
        {
          name: 'Latin America',
          subMenu: 'Countries',
          list: [
            {label: 'Bolivia', url: '/bolivia'},
            {label: 'Brazil', url: '/brazil'},
            {label: 'Colombia', url: '/colombia'},
            {label: 'Dominican Republic', url: '/dominican-republic'},
          ]
        },
        {
          name: 'Middle East and Eastern Europe',
          subMenu: 'Countries',
          list: [
            {label: 'Afghanistan', url: '/afghanistan'},
            {label: 'Armenia', url: '/armenia'},
            {label: 'Georgia', url: '/georgia'},
            {label: 'Iraq', url: '/iraq'},
          ]
        }
      ]
    },
    {
      label: 'Programs',
      url: '/our-work/programs',
      isLink: true
    },
    {
      label: 'Resources',
      url: '/our-work/resources',
      isLink: true
    }
  ]
}
