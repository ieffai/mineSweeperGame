import type { Theme } from '@mui/material/styles';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'error' | 'outline';

interface VariantStylesParams {
  variant: ButtonVariant;
  resolvedColor: string;
  theme: Theme;
}

export function getButtonVariantStyles({ variant, resolvedColor, theme }: VariantStylesParams) {
  switch (variant) {
    case 'outline':
      return {
        backgroundColor: 'transparent',
        border: `2px solid ${resolvedColor}`,
        color: resolvedColor,
        boxShadow: `0 6px 12px ${resolvedColor}33`,

        '&:hover': {
          backgroundColor: `${resolvedColor}15`,
          transform: 'translateY(-2px) scale(1.01)',
          boxShadow: `0 10px 18px ${resolvedColor}55`,
          filter: 'saturate(1.05)',
        },

        '&:active': {
          backgroundColor: `${resolvedColor}25`,
          transform: 'translateY(0) scale(0.99)',
          boxShadow: `0 4px 8px ${resolvedColor}33`,
        },
      };

    default:
      return {
        backgroundColor: resolvedColor,
        border: 0,
        color: theme.palette.getContrastText(resolvedColor),
        boxShadow: `0 6px 12px ${resolvedColor}55, inset 0 -3px 0 rgba(0,0,0,.15)`,

        '&:hover': {
          backgroundColor: resolvedColor,
          transform: 'translateY(-2px) scale(1.01)',
          boxShadow: `0 10px 18px ${resolvedColor}77, inset 0 -3px 0 rgba(0,0,0,.15)`,
          filter: 'saturate(1.05)',
        },

        '&:active': {
          transform: 'translateY(0) scale(0.99)',
          boxShadow: `0 4px 8px ${resolvedColor}55`,
        },
      };
  }
}

export function resolveThemeColor(color: string, theme: Theme): string {
  if (!color.includes('.')) {
    return color;
  }

  const [paletteKey, shade] = color.split('.');
  const palette = theme.palette as Record<string, any>;

  if (palette[paletteKey] && palette[paletteKey][shade]) {
    return palette[paletteKey][shade];
  }

  return color;
}
