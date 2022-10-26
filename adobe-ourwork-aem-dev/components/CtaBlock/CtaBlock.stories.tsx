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
  label: 'Sponsor a child'
};
