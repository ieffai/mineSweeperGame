import { alpha, darken, lighten, type PaletteMode, type ThemeOptions } from '@mui/material';
import { lightPalette } from './lightPalette';
import { darkPalette } from './darkPalette';
import { greyLight, greyMain, transparentWhite4 } from './colors';

export function getDesignTokens(mode: PaletteMode): ThemeOptions {
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1200,
        xl: 1440,
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: ['Almoni', 'Arial', 'sans-serif'].join(','),
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
        fontWeight: 200,
      },
      h2: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
      },
      h3: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
      },
      h4: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
      },
      h5: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
      },
      h6: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
        fontWeight: 500,
      },
      subtitle1: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
        fontSize: '1.125rem',
        fontWeight: 500,
      },
      subtitle2: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
        fontSize: '1rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.875rem',
      },
      overline: {
        textTransform: 'uppercase',
      },
      caption: {
        fontSize: '0.75rem',
      },
    },
    palette: {
      mode,
      ...(mode === 'light' ? lightPalette : darkPalette),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: { backgroundColor: theme.palette.background.default },
          '::-webkit-scrollbar-track': {
            boxShadow: 'none',
            borderRadius: 0,
            backgroundColor: greyLight,
          },
          '::-webkit-scrollbar': {
            width: 6,
            marginLeft: 5,
            backgroundColor: greyLight,
          },
          '::-webkit-scrollbar-thumb': {
            borderRadius: 0,
            boxShadow: 'none',
            backgroundColor: greyMain,
          },
        }),
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          margin: 'none',
          size: 'small',
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 24,
            paddingRight: 24,
            height: 48,
            borderRadius: 24,
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '16px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: `0 6px 0 ${
              theme.palette.mode === 'light' ? theme.palette.primary.dark : darken(theme.palette.primary.main, 0.3)
            }`,
            transform: 'translateY(0)',
            transition: 'all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: `linear-gradient(90deg, transparent, ${transparentWhite4}, transparent)`,
              transition: 'left 0.6s',
            },

            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 8px 0 ${
                theme.palette.mode === 'light' ? theme.palette.primary.dark : darken(theme.palette.primary.main, 0.3)
              }`,

              '&:before': {
                left: '100%',
              },
            },

            '&:active': {
              transform: 'translateY(3px)',
              boxShadow: `0 3px 0 ${
                theme.palette.mode === 'light' ? theme.palette.primary.dark : darken(theme.palette.primary.main, 0.3)
              }`,
              transition: 'all 0.1s',
            },

            '&.MuiButton-contained.Mui-disabled': {
              backgroundColor: theme.palette.grey[400],
              color: theme.palette.grey[600],
              transform: 'translateY(3px)',
              boxShadow: `0 3px 0 ${theme.palette.grey[500]}`,
            },

            '&.MuiButton-text.Mui-disabled': {
              color: theme.palette.grey[400],
              transform: 'none',
              boxShadow: 'none',
            },
          }),

          contained: ({ theme }) => ({
            background: `linear-gradient(145deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
            border: `2px solid ${theme.palette.primary.dark}`,
            color: theme.palette.primary.contrastText,

            '&:hover': {
              background: `linear-gradient(145deg, ${lighten(theme.palette.primary.light, 0.1)}, ${lighten(theme.palette.primary.main, 0.1)})`,
            },
          }),

          outlined: ({ theme }) => ({
            background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${alpha(theme.palette.secondary.main, 0.1)})`,
            border: `3px solid ${theme.palette.secondary.main}`,
            color: theme.palette.secondary.main,
            boxShadow: `0 6px 0 ${darken(theme.palette.secondary.main, 0.2)}`,

            '&:hover': {
              background: `linear-gradient(145deg, ${alpha(theme.palette.secondary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.2)})`,
              boxShadow: `0 8px 0 ${darken(theme.palette.secondary.main, 0.2)}`,
            },

            '&:active': {
              boxShadow: `0 3px 0 ${darken(theme.palette.secondary.main, 0.2)}`,
            },
          }),

          text: ({ theme }) => ({
            background: 'transparent',
            color: theme.palette.primary.main,
            boxShadow: 'none',
            border: 'none',
            transform: 'none',

            '&:hover': {
              background: alpha(theme.palette.primary.main, 0.1),
              transform: 'scale(1.05)',
              boxShadow: 'none',
            },

            '&:active': {
              transform: 'scale(0.95)',
              boxShadow: 'none',
            },
          }),
        },

        defaultProps: {
          disableElevation: true,
          disableRipple: false,
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            width: 40,
            height: 40,
            padding: 8,
            borderRadius: '50%',
          },
        },
      },
    },
  };
}
