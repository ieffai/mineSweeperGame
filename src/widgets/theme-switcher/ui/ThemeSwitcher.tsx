import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ThemeContext } from '@shared/lib';
import { useContext } from 'react';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton color="inherit" onClick={toggleTheme} aria-label="switch theme">
      {theme === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};
