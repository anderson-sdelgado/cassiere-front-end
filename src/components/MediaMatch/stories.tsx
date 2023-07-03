import { StoryFn, Meta } from '@storybook/react';
import MediaMatch from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Desktop: StoryFn = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);
export const Mobile: StoryFn = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);
