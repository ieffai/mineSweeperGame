import { alpha, useTheme } from '@mui/material';
import type { CellTheme } from './types';
import { useMemo } from 'react';

export const useGameCellTheme = (isWinning: boolean): CellTheme => {
  const theme = useTheme();

  return useMemo(() => {
    const success = theme.palette.success.main;
    const error = theme.palette.error.main;
    const primary = theme.palette.primary.main;
    const borderColor = theme.palette.divider;

    const frontBg = theme.palette.mode === 'dark' ? alpha(primary, 0.1) : alpha(primary, 0.05);

    const backBg = isWinning
      ? alpha(success, theme.palette.mode === 'dark' ? 0.2 : 0.1)
      : alpha(error, theme.palette.mode === 'dark' ? 0.2 : 0.1);

    const backBorder = isWinning ? success : error;
    const frontBorder = theme.palette.mode === 'dark' ? alpha(primary, 0.3) : alpha(primary, 0.2);

    return {
      success,
      error,
      primary,
      borderColor,
      frontBg,
      backBg,
      backBorder,
      frontBorder,
    };
  }, [theme, isWinning]);
};
