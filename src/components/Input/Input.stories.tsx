import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { fn } from '@storybook/test';
import TextArea from './TextArea';

const inputMeta: Meta<typeof Input> = {
  title: 'Input',
  args: { onChange: fn(), placeholder: 'Input' },
};
export default inputMeta;

type Story = StoryObj<typeof inputMeta>;

export const Text: Story = {
  render: (args) => {
    return <Input {...args} />;
  },
  args: {
    colorType: 'primary',
    type: 'text',
    size: 'small',
    status: 'default',
    label: '',
    helpText: '',
    disabled: false,
  },
  argTypes: {
    colorType: {
      control: 'radio',
      options: ['primary'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
    },
    status: {
      control: 'radio',
      options: ['default', 'success', 'error'],
    },
    label: {
      control: 'object',
    },
    helpText: {
      control: 'object',
    },
  },
};

export const Password: Story = {
  render: (args) => {
    return <Input {...args} />;
  },
  args: {
    colorType: 'primary',
    type: 'password',
    size: 'small',
    status: 'success',
    label: 'Password',
    helpText: 'Enter characters more than 8',
    disabled: false,
  },
  argTypes: {
    colorType: {
      control: 'radio',
      options: ['primary'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
    },
    status: {
      control: 'radio',
      options: ['default', 'success', 'error'],
    },
    label: {
      control: 'object',
    },
    helpText: {
      control: 'object',
    },
  },
};

export const Textarea: StoryObj<Meta<typeof TextArea>> = {
  render: (args) => {
    return <TextArea {...args} />;
  },
  args: {
    size: 'large',
    label: '',
    placeholder: 'TextArea',
    disabled: false,
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['large'],
    },
    label: {
      control: 'object',
    },
  },
};
