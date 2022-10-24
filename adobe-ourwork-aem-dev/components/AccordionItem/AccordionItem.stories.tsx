import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AccordionItem from './AccordionItem';

export default {
    title: 'Example/AccordionItem',
    component: AccordionItem,
    args: {
        children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit quibusdam libero tenetur veniam maxime rem magnam iure, suscipit sint minima nihil nesciunt.</p>
    }
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = (args) => <AccordionItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'This is an accordion item'
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    isDarkMode: true,
    title: 'This is a dark mode accordion item'
};
