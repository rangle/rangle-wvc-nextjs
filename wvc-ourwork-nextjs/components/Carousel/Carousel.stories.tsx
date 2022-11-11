import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carousel from './Carousel';

export default {
  title: 'Example/Carousel',
  component: Carousel
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [{
    title: 'ONE Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!',
    labels: ['Health', 'Water'],
    url: 'http://worldvision.ca/our-work',
    image: {
      src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
      alt: 'Children running down a street smiling'
    }
  }, {
    title: 'TWO Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!',
    labels: ['Health', 'Water'],
    url: 'http://worldvision.ca/our-work',
    image: {
      src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
      alt: 'Children running down a street smiling'
    }
  }, {
    title: 'THREE Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!',
    labels: ['Health', 'Water'],
    url: 'http://worldvision.ca/our-work',
    image: {
      src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
      alt: 'Children running down a street smiling'
    }
  }, {
    title: 'FOUR Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!',
    labels: ['Health', 'Water'],
    url: 'http://worldvision.ca/our-work',
    image: {
      src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
      alt: 'Children running down a street smiling'
    }
  }, {
    title: 'FIVE Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!',
    labels: ['Health', 'Water'],
    url: 'http://worldvision.ca/our-work',
    image: {
      src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
      alt: 'Children running down a street smiling'
    }
  }, {
    title: 'SIX Prevention of malnutrition through a community-based approach centered on the 1000 days through the "Care Groups"',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi eos molestias et ullam veniam tenetur magni possimus reprehenderit cupiditate aspernatur temporibus corporis excepturi consectetur nobis neque officia inventore, incidunt amet sapiente nulla! Et, nulla. Aut quam fuga eos suscipit fugit eligendi odit molestiae exercitationem assumenda eius itaque, delectus quaerat aspernatur quidem omnis! Totam illo maxime vel consequatur explicabo aliquid!',
    labels: ['Health', 'Water'],
    url: 'http://worldvision.ca/our-work',
    image: {
      src: 'https://www.worldvision.ca/WorldVisionCanada/media/our-work/where-we-work-850x500/world-vision-canada-our-work-where-we-work-children-running.jpg',
      alt: 'Children running down a street smiling'
    }
  }
  ],
  title: 'Title'
}