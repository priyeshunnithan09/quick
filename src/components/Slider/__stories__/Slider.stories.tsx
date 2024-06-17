import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Slider, { SliderProps } from '../Slider';


export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    type: {
      control: 'radio',
      options: ['Continuous', 'Discreet'],
    },
    subtype: {
      control: 'radio',
      options: ['Single', 'Range'],
    },
    numberOfSteps: {
      control: 'number',
      defaultValue: 10,
    },
    handleSize: {
      control: 'radio',
      options: ['Size_24', 'Size_32'],
    },
    onChange: { action: 'changed' },
  },
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
  },
} as Meta;

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'Continuous',
  subtype: 'Single',
  handleSize: 'Size_24',
};
