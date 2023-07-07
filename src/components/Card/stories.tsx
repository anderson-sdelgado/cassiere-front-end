import { StoryFn, Meta } from '@storybook/react';
import Card, { CardProps } from '.';
import mock from './mock';

export default {
  title: 'Card',
  component: Card,
  args: {
    ...mock,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<CardProps>;

export const Default: StoryFn<CardProps> = (args) => {
  return (
    <div style={{ width: '30rem' }}>
      <Card {...args} />
    </div>
  );
};

export const WithRibbon: StoryFn<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
};
