import { TableOfContents } from './TableOfContents'

export default {
  title: 'Example/TableOfContents',
  component: TableOfContents
}

const Template = (args) => <TableOfContents {...args} />

export const Default = Template.bind({})
Default.args = {
  contents: [
    'Overview',
    'Program Details',
    'From the Field',
    'Results',
    'Stories',
    'Resources'
  ]
}
