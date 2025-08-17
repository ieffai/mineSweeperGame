import { englishTranslations, hebrewTranslations, Language } from '@shared/lib';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const defaultNS = 'translation';

i18n.use(initReactI18next).init({
  lng: Language.English,
  ns: [Language.English, Language.Hebrew],
  defaultNS,
  fallbackLng: Language.English,
  lowerCaseLng: true,
  resources: {
    [Language.English]: {
      translation: englishTranslations,
    },
    [Language.Hebrew]: {
      translation: hebrewTranslations,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export const i18nBase = i18n;
