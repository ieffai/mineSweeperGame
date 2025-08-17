import type { ComponentType } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { TranslationProvider } from './TranslationProvider';
import { CssBaseline } from '@mui/material';
import { Language } from '@shared/lib';
import { i18nBase } from '@shared/config';

export function withProviders<P extends object>(Component: ComponentType<P>): ComponentType<P> {
  return function WithProviders(props: P) {
    return (
      <ThemeProvider>
        <CssBaseline enableColorScheme />
        <TranslationProvider instance={i18nBase} language={Language.English}>
          <Component {...props} />
        </TranslationProvider>
      </ThemeProvider>
    );
  };
}
