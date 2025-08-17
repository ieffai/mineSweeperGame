import { Language } from '@shared/lib';

export const languageCountryCode: Record<Language, string> = {
  [Language.Hebrew]: 'IL',
  [Language.English]: 'GB',
};

export const getCountryFlagUrl = (countryCode?: string | null) =>
  countryCode ? `https://hatscripts.github.io/circle-flags/flags/${countryCode.toLowerCase()}.svg` : undefined;
