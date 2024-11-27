import { useCallback, useContext, useMemo } from 'react';
import { ConfigContext } from './context';

interface ConfigContextProps {
  prefix?: string;
  mode?: 'light' | 'dark';
  theme?: {
    [key: string]: unknown;
  };
  children: React.ReactNode;
}

const ConfigProvider = ({ children, prefix, mode }: ConfigContextProps) => {
  const contextValue = useContext(ConfigContext);
  const defaultGetPrefixCls = contextValue.getPrefixClassName;

  const getPrefixClassName = useCallback(
    (suffix?: string) => {
      if (suffix) {
        return `${prefix ?? defaultGetPrefixCls()}-${suffix}`;
      }

      return prefix ?? defaultGetPrefixCls();
    },
    [defaultGetPrefixCls, prefix],
  );

  const value = useMemo(() => {
    const config = {
      ...contextValue,
      mode: mode ?? 'light',
      getPrefixClassName,
    };

    return config;
  }, [mode, getPrefixClassName, contextValue]);

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
