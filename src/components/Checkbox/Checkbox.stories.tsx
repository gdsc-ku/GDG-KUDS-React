import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { useState } from 'react';
import { ConfigProvider } from '../ConfigProvider';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    name: { control: false },
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(false);
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    return (
      <ConfigProvider theme={{ mode }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button
            onClick={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))}
            style={{
              width: 200,
              color: 'var(--primary-800)',
              backgroundColor: 'var(--primary-200)',
              border: 'none',
              borderRadius: 4,
            }}>
            Toggle Mode
          </button>
          <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)}>
            This is Helper Text
          </Checkbox>
        </div>
      </ConfigProvider>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const checkbox: Story = {
  args: {
    name: 'checkbox',
    colorType: 'yellow',
    disabled: false,
    children: '',
  },
};
