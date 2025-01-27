import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';
import { ConfigProvider } from '../ConfigProvider';

const typoMeta: Meta<typeof Typography> = {
  title: 'Typography',
};

export default typoMeta;

type Story = StoryObj<typeof typoMeta>;

export const Heading: StoryObj<Meta<typeof Typography.Title>> = {
  args: { level: 1 },
  argTypes: {
    level: { control: 'radio', options: [1, 2, 3, 4, 5] },
  },
  render: (args) => {
    return (
      <ConfigProvider>
        <Typography.Title {...args}>This is Heading component</Typography.Title>
      </ConfigProvider>
    );
  },
};

export const Paragraph: Story = {
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    weight: {
      control: 'radio',
      options: ['regular', 'medium', 'semiBold', 'bold'],
    },
  },
  render: (args) => {
    return <Typography {...args}>This is Paragraph Component</Typography>;
  },
};
