export const Language = {
  English: 'en',
  Hebrew: 'he',
} as const;

export type Language = (typeof Language)[keyof typeof Language];

export interface SupportedLanguage {
  tkey: string;
  language: Language;
}

export const DEFAULT_SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  {
    tkey: 'english',
    language: Language.English,
  },
  {
    tkey: 'hebrew',
    language: Language.Hebrew,
  },
];
