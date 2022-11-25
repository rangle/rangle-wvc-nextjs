import { Goals } from './Goals'

export default {
  title: 'Example/Goals',
  component: Goals
}

const Template = (args) => (
  <div
    style={{
      background: args.isDarkMode ? '#333333' : '',
      padding: '24px 32px'
    }}
  >
    <Goals {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  isDarkMode: false,
  data: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    'Diam quis enim lobortis scelerisque fermentum',
    'Tortor vitae purus faucibus ornare suspendisse sed nisi lacus.',
    'Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat',
    'Quisque egestas diam dolor in arcu cursus euismod quis viverra nibh et dolore magna aliqua.'
  ]
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  isDarkMode: true,
  data: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sit amet.',
    'Diam quis enim lobortis scelerisque fermentum',
    'Tortor vitae purus faucibus ornare suspendisse sed nisi lacus.',
    'Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat',
    'Quisque egestas diam dolor in arcu cursus euismod quis viverra nibh et dolore magna aliqua.'
  ]
}
