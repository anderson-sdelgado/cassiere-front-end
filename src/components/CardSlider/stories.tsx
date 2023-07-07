import { StoryFn, Meta } from '@storybook/react';
import CardSlider, { CardSliderProps } from '.';
import items from './mock';

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<CardSliderProps>;

export const Default: StoryFn<CardSliderProps> = (args) => {
  return (
    <div>
      <CardSlider {...args} />
    </div>
  );
};
