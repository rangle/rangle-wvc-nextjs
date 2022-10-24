import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AccordionGroup from './AccordionGroup';

export default {
  title: 'Example/AccordionGroup',
  component: AccordionGroup,
} as ComponentMeta<typeof AccordionGroup>;

const Template: ComponentStory<typeof AccordionGroup> = (args) => <AccordionGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [{
    children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id, quia odit soluta nemo quisquam modi! Reprehenderit dolore enim temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam quod aut assumenda iste est eius aliquid perspiciatis laborum nisi ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis asperiores quisquam.</p>,
    title: 'Item #1'
  }, {
    children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id, quia odit soluta nemo quisquam modi! Reprehenderit dolore enim temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam quod aut assumenda iste est eius aliquid perspiciatis laborum nisi ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis asperiores quisquam.</p>,
    title: 'Item #2'
  }, {
    children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id, quia odit soluta nemo quisquam modi! Reprehenderit dolore enim temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam quod aut assumenda iste est eius aliquid perspiciatis laborum nisi ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis asperiores quisquam.</p>,
    title: 'Item #3'
  }]
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  items: [{
    children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id, quia odit soluta nemo quisquam modi! Reprehenderit dolore enim temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam quod aut assumenda iste est eius aliquid perspiciatis laborum nisi ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis asperiores quisquam.</p>,
    title: 'Item #1'
  }, {
    children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id, quia odit soluta nemo quisquam modi! Reprehenderit dolore enim temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam quod aut assumenda iste est eius aliquid perspiciatis laborum nisi ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis asperiores quisquam.</p>,
    title: 'Item #2'
  }, {
    children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis id, quia odit soluta nemo quisquam modi! Reprehenderit dolore enim temporibus porro earum hic deserunt ducimus non eveniet, voluptatum nam quod aut assumenda iste est eius aliquid perspiciatis laborum nisi ratione, rem minima debitis? Aspernatur atque ut distinctio veritatis asperiores quisquam.</p>,
    title: 'Item #3'
  }],
  isDarkMode: true
};
