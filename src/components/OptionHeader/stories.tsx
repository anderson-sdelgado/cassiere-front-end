import { CustomerService2 as CallIcon } from '@styled-icons/remix-fill/CustomerService2';
import { StoryFn, Meta } from '@storybook/react';
import OptionHeader, { OptionHeaderProps } from '.';

export default {
  title: 'OptionHeader',
  component: OptionHeader,
  args: {
    icon: <CallIcon />,
    text: 'Central de Atendimento',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<OptionHeaderProps>;

export const Default: StoryFn<OptionHeaderProps> = (args) => {
  return (
    <div>
      <OptionHeader {...args} />
    </div>
  );
};

export const WithoutArrow: StoryFn<OptionHeaderProps> = (args) => {
  return (
    <div>
      <OptionHeader {...args} hasArrow={false} />
    </div>
  );
};
