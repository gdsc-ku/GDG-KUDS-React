import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { ConfigProvider } from '../ConfigProvider';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    name: 'dropdown',
    colorType: 'primary',
    disabled: false,
    placeholder: 'Select',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'orange', label: 'Orange' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  argTypes: {
    colorType: {
      control: 'radio',
      options: ['primary', 'blue', 'green', 'yellow', 'red'],
      description: 'Defines the color type of the select component.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select dropdown.',
    },
    options: {
      control: 'object',
      description: 'Array of options with value and label.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the select dropdown.',
    },
    name: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const select: Story = {
  render: (args) => {
    return (
      <ConfigProvider>
        <Select {...args} />
      </ConfigProvider>
    );
  },
};
