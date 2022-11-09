import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StackedBarChart } from './StackedBarChart';

export default {
    title: 'Example/Charts/StackedBarChart',
    argTypes: {
        titlePosition: {
            options: ['top', 'bottom'],
            control: { type: 'select' }
        },
        legendPosition: {
            options: ['top', 'bottom', 'right', 'left'],
            control: { type: 'select' }
        },
    },
    component: StackedBarChart
  } as ComponentMeta<typeof StackedBarChart>;

const Template: ComponentStory<typeof StackedBarChart> = (args) => StackedBarChart(args);


export const Default = Template.bind({})
Default.args = {
    stackedBar: true,
    title: 'People Reached',
    titlePosition: 'top',
    displayLegend: true,
    legendPosition: 'bottom',
    withAxes: true,
    yStepSize: 25000,
    aspectRatio: 0.8,
    colours: ['rgb(153, 153, 153)', 'rgb(102, 102, 102)','rgb(255, 136, 51)', 'rgb(231, 96, 12)' ],
    labels: ['2019', '2020', '2020'],
    data: [
        [27000, 27000, 30000],
        [30000, 30000, 40000],
        [40000, 50000, 60000],
        [37000, 40000, 45000]

    ],
    legends: ['Men', 'Women', 'Boys', 'Girls']

}