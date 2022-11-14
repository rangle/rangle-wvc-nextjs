import React from 'react'

import ExpandableTextBlock from './ExpandableTextBlock'

export default {
  title: 'Example/ExpandableTextBlock',
  component: ExpandableTextBlock
}

const Template = (args) => <ExpandableTextBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.',
  footnote: 'Lorem ipsum footnote',
  title: 'Early childhood development'
}

export const BodyOnly = Template.bind({})
BodyOnly.args = {
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa nullam nunc ac vel justo scelerisque. Ipsum eget aliquam non adipiscing odio ornare in. Sed feugiat ultricies adipiscing nisl pellentesque elementum tortor massa sit. Tellus arcu facilisis turpis fermentum libero vulputate mauris amet sit. Ac tortor suspendisse aliquam volutpat dolor eget arcu. Sed quis vitae leo mi nisl id et. Sed interdum eget lacus interdum tincidunt duis orci enim.'
}
