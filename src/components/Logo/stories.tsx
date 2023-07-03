import { StoryFn, Meta } from '@storybook/react';
import Logo, { LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    url: 'img/logo.jpg',
    alt: 'Logo',
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
