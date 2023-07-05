import { StoryFn, Meta } from '@storybook/react';
import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    children: `Menu`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<MenuProps>;

export const Default: StoryFn<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
