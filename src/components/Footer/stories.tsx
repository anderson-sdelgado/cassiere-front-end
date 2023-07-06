import { StoryFn, Meta } from '@storybook/react';
import Footer, { FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: `Footer`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<FooterProps>;

export const Default: StoryFn<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
