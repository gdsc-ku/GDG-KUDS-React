import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

const typoMeta: Meta<typeof Typography> = {
  title: 'Typography',
};

export default typoMeta;

type Story = StoryObj<typeof typoMeta>;

export const Heading: StoryObj<Meta<typeof Typography.Title>> = {
  render: (args) => {
    return <Typography.Title {...args}>This is a Typography</Typography.Title>;
  },
  args: { level: 1 },
  argTypes: { level: { control: 'select', options: [1, 2, 3, 4, 5] } },
};

export const Body: Story = {
  render: (args) => {
    return <Typography {...args}>This is a Typography</Typography>;
  },
  args: {
    size: 'sm',
    weight: 'bold',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semiBold', 'bold'],
    },
  },
};
