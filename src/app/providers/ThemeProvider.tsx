import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider, type PaletteMode } from '@mui/material';
import { getDesignTokens } from '@shared/config';
import { ThemeContext } from '@shared/lib';
import { useCallback, useEffect, useMemo, useState } from 'react';

const STORED_PALETTE_MODE = `${import.meta.env.VITE_APP_TITLE}_palette_mode`;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(STORED_PALETTE_MODE) as PaletteMode) || 'light';
    }
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORED_PALETTE_MODE, mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
      theme,
    }),
    [mode, toggleTheme, theme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
