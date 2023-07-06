import { StoryFn, Meta } from '@storybook/react';
import Menu from '.';

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn = () => {
  return (
    <div>
      <Menu />
    </div>
  );
};
