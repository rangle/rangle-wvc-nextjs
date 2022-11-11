import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgramCard from './ProgramCard';

export default {
  title: 'Example/ProgramCard',
  component: ProgramCard
} as ComponentMeta<typeof ProgramCard>;

const Template: ComponentStory<typeof ProgramCard> = (args) => <ProgramCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!',
  labels: ['Health', 'Water'],
  url: 'http://worldvision.ca/our-work',
  image: {
    src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
    alt: 'Children running down a street smiling'
  }
};