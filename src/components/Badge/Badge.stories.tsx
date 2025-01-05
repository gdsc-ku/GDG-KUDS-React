import { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import { ConfigProvider } from '../ConfigProvider';
import { useState } from 'react';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  args: { children: 'This is a label' },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    colorType: {
      control: 'radio',
      options: ['primary', 'white', 'blue', 'green', 'yellow', 'red'],
    },
  },
  render: function Render(args) {
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
            Toggle to {mode === 'light' ? 'dark' : 'light'} Mode
          </button>
          <Badge {...args} />
        </div>
      </ConfigProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const badge: Story = {};
