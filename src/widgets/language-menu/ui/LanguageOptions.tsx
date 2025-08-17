import { Avatar, MenuItem, Paper, Stack } from '@mui/material';
import { useTranslationPath, type Language, type SupportedLanguage } from '@shared/lib';
import { getCountryFlagUrl, languageCountryCode } from '../model';

interface LanguagesMenuProps {
  supportedLanguages: SupportedLanguage[];
  onClick(language: Language): void;
}

export const LanguageOptions = ({ supportedLanguages, onClick }: LanguagesMenuProps) => {
  const { t } = useTranslationPath('languages');

  return (
    <Paper sx={{ py: 1 }}>
      {supportedLanguages.map(({ tkey, language }) => (
        <MenuItem key={language} onClick={() => onClick(language)}>
          <Stack gap={2} direction="row">
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt={language}
              src={getCountryFlagUrl(languageCountryCode[language])}
            />
            {t(tkey)}
          </Stack>
        </MenuItem>
      ))}
    </Paper>
  );
};
