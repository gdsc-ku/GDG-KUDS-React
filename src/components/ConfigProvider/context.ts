import { createContext } from 'react';

type ContextValue = {
  mode?: 'light' | 'dark';
  getPrefixClassName: () => string;
};

const DEFAULT_PREFIX_CLASSNAME = 'gdg-kuds';

export const ConfigContext = createContext<ContextValue>({
  getPrefixClassName: (suffix?: string) => {
    if (suffix) {
      return `${DEFAULT_PREFIX_CLASSNAME}-${suffix}`;
    }

    return DEFAULT_PREFIX_CLASSNAME;
  },
});
