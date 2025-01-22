import { createContext } from 'react';
import { COLORS } from './styles/color';

type ContextValue = {
  color?: Record<string, Record<string, string>>;
};

export const PREFIX_CLS = 'gdg-kuds';

export const ConfigContext = createContext<ContextValue>({
  color: COLORS['light'],
});
