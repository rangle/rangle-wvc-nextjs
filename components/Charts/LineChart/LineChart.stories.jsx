import { LineChart } from './LineChart'

export default {
  title: 'Example/Charts/LineChart',
  argTypes: {
    titlePosition: {
      options: ['top', 'bottom'],
      control: { type: 'select' }
    }
  },
  component: LineChart
}

const Template = (args) => (
  <div
    style={{
      background: args.isDarkMode ? '#333333' : '',
      padding: '24px 32px'
    }}
  >
    <LineChart {...args} />
  </div>
)

export const WithAxes = Template.bind({})
WithAxes.args = {
  withAxes: true,
  yStepSize: 25000,
  aspectRatio: 0.8,
  title: 'People Reached',
  titlePosition: 'top',
  isDarkMode: false,
  ariaLabel: 'People Reached Line Chart',
  colours: ['rgb(231, 96, 12)'],
  labels: ['2019', '2020', '2021'],
  data: [50000, 76000, 170000]
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  withAxes: true,
  yStepSize: 25000,
  aspectRatio: 0.8,
  title: 'People Reached',
  titlePosition: 'top',
  isDarkMode: true,
  ariaLabel: 'People Reached Line Chart',
  colours: ['rgb(231, 96, 12)'],
  labels: ['2019', '2020', '2021'],
  data: [50000, 76000, 170000]
}

export const WithoutAxes = Template.bind({})
WithoutAxes.args = {
  withAxes: false,
  yStepSize: 25000,
  aspectRatio: 0.8,
  title: 'People Reached',
  titlePosition: 'top',
  isDarkMode: true,
  ariaLabel: 'People Reached Line Chart',
  colours: ['rgb(231, 96, 12)'],
  labels: ['2019', '2020', '2021'],
  data: [50000, 76000, 170000]
}
