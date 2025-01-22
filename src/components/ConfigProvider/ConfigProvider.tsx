import { useEffect, useMemo } from 'react';
import { ConfigContext } from './context';
import { COLORS } from './styles/color';

interface ConfigContextProps {
  theme?: {
    mode?: 'light' | 'dark';
  };
  children: React.ReactNode;
}

const ConfigProvider = ({ children, theme = {} }: ConfigContextProps) => {
  const { mode = 'light' } = theme;

  const value = useMemo(() => {
    const config = {
      color: COLORS[mode],
    };

    return config;
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    const { color } = value;

    Object.entries(color).forEach(([type, colorEntries]) => {
      Object.entries(colorEntries).forEach(([key, value]) => {
        root.style.setProperty(`--${type}-${key}`, value);
      });
    });
  }, [value]);

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
