import { StoryFn, Meta } from '@storybook/react';
import BannerSlider, { BannerSliderProps } from '.';
import items from './mock';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<BannerSliderProps>;

export const Default: StoryFn<BannerSliderProps> = (args) => {
  return (
    <div>
      <BannerSlider {...args} />
    </div>
  );
};
