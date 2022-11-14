import React from 'react'

import ImpactHighlightGrid, { ImpactHighlight } from './ImpactHighlightGrid'

export default {
  title: 'Example/ImpactHighlightGrid',
  parameters: {
    layout: 'fullscreen'
  },
  component: ImpactHighlightGrid
}

const Template = (args) => (
  <div style={{ backgroundColor: '#FFFBF4', padding: '16px' }}>
    <ImpactHighlightGrid {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  impactHighlights: [
    {
      title: 'Impact',
      firstLabel: '',
      secondLabel: 'deaths were prevented through the ENRICH program ',
      highlight: '1,024',
      year: '2016-2021'
    },
    {
      title: 'Change',
      firstLabel:
        'In Ethiopia, women holding leadership positions on health committees increased from',
      secondLabel: '',
      highlight: '15% to 56%',
      year: '2016-2021'
    }
  ]
}
