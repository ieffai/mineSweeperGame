import { useEffect, type PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import type { i18n } from 'i18next';
import { Language } from '@shared/lib';

interface TranslationProviderProps {
  language?: Language;
  instance: i18n;
}

export const TranslationProvider = ({
  children,
  language = Language.English,
  instance,
}: PropsWithChildren<TranslationProviderProps>) => {
  useEffect(() => {
    if (instance.language !== language) {
      instance.changeLanguage(language);
    }
  }, [language, instance]);

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
};
