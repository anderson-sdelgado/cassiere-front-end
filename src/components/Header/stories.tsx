import { StoryFn, Meta } from '@storybook/react';
import Header from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    url: 'img/logo.jpg',
    alt: 'Logo',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
