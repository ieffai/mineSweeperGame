import type { Theme } from '@mui/material';
import { createContext } from 'react';

export const ThemeContext = createContext<{
  mode: string;
  toggleTheme: () => void;
  theme: 'light' | 'dark' | Theme;
}>({
  mode: 'light',
  toggleTheme: () => {},
  theme: 'light',
});
