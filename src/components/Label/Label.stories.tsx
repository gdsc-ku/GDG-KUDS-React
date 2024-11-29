import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
import { fn } from '@storybook/test';

const meta = {
  title: 'Label',
  component: Label,
  tags: ['autodocs'],
  args: { onClick: fn(), children: 'Label' },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorType: 'primary',
    size: 'small',
    light: true,
  },
};

export const Blue: Story = {
  args: {
    colorType: 'blue',
    size: 'small',
    light: true,
  },
};

export const Green: Story = {
  args: {
    colorType: 'green',
    size: 'medium',
    light: true,
  },
};

export const Yellow: Story = {
  args: {
    colorType: 'yellow',
    size: 'small',
    light: true,
  },
};

export const Red: Story = {
  args: {
    colorType: 'red',
    size: 'medium',
    light: true,
  },
};
