import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CtaBlock from './CtaBlock';

export default {
  title: 'Example/CtaBlock',
  component: CtaBlock
} as ComponentMeta<typeof CtaBlock>;

const Template: ComponentStory<typeof CtaBlock> = (args) => <CtaBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'This is an accordion item'
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  isDarkMode: true,
  title: 'This is a dark mode accordion item'
};
