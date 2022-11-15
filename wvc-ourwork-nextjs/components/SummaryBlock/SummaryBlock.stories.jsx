import React from 'react'

import SummaryBlock from './SummaryBlock'

export default {
  title: 'Example/SummaryBlock',
  component: SummaryBlock
}

const Template = (args) => <SummaryBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  highlights: [
    {
      title: 'Partnering since',
      value: '1975'
    },
    {
      title: 'Programs Supported',
      value: '10'
    },
    {
      title: 'Children Sponsored',
      value: '3,291'
    },
    {
      title: 'Level of fragility',
      value: 'Very low developing'
    },
    {
      title: 'Gender equality rank',
      value: '115/144'
    }
  ]
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'vertical',
  highlights: [
    {
      title: 'Program Type',
      value: 'Development'
    },
    {
      title: 'Timing',
      value: 'January 2020 - March 2023'
    },
    {
      title: 'Location',
      value: 'Democratic Republic of the Congo | Myanmar'
    },
    {
      title: 'Areas of Focus',
      value: 'Education | Gender Equality and Social Inclusion'
    },
    {
      title: 'Total Program Cost',
      value: '$432,231.76'
    },
    {
      title: 'Lead Agency',
      value: 'World Vision Canada'
    },
    {
      title: 'Funding Partners',
      value: 'Global Affairs Canada'
    },
    {
      title: 'Implementing Partners',
      value: 'University of Toronto'
    }
  ]
}
