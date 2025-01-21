import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
//import { ConfigProvider } from '../ConfigProvider';

const meta: Meta<typeof Select> = {
  title: 'Checkbox',
  component: Select,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    name: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const select: Story = {
  args: {
    name: 'checkbox',
    colorType: 'yellow',
    disabled: false,
    children: '',
  },
};
