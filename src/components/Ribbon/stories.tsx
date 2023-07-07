import { StoryFn, Meta } from '@storybook/react';
import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: `Ribbon`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<RibbonProps>;

export const Default: StoryFn<RibbonProps> = (args) => {
  return (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888',
      }}
    >
      <Ribbon {...args} />
    </div>
  );
};
