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
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, viverra eget interdum porttitor pretium purus imperdiet interdum massa. Sit blandit ullamcorper ipsum arcu. Ac eu ut enim pharetra tincidunt eu morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, viverra eget interdum porttitor pretium purus imperdiet interdum massa.',
  buttonLabel: 'Sponsor a child',
  buttonUrl: 'http://worldvision.ca',
  imageUrl: 'https://www.worldvision.ca/WorldVisionCanada/media/stories/child-rights-boy-writing-on-chalkboard.jpg',
  imageUrlAlt: 'Boy writing on a chalkboard',
  title: 'Building Sustainable Futures Together'
};
