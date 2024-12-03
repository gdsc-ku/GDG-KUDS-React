import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { fn } from '@storybook/test';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args: { onChange: fn(), placeholder: 'Input' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    colorType: 'primary',
    type: 'text',
    size: 'small',
    status: 'default',
    label: '',
    helpText: '',
    disabled: false,
  },
};

export const Password: Story = {
  args: {
    colorType: 'primary',
    type: 'password',
    size: 'small',
    status: 'success',
    label: 'Password',
    helpText: 'Enter characters more than 8',
    disabled: false,
  },
};
