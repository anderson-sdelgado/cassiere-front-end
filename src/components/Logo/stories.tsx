import { StoryFn, Meta } from '@storybook/react';
import Logo, { LogoProps } from '.';

import mock from './mock';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    ...mock,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<LogoProps>;

export const Default: StoryFn<LogoProps> = (args) => {
  return (
    <div>
      <Logo {...args} />
    </div>
  );
};
