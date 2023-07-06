import { StoryFn, Meta } from '@storybook/react';
import Banner, { BannerProps } from '.';

import mock from './mock';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    ...mock,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<BannerProps>;

export const Default: StoryFn<BannerProps> = (args) => {
  return (
    <div>
      <Banner {...args} />
    </div>
  );
};
