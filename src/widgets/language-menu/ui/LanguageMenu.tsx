import { useCallback, useState } from 'react';
import { DEFAULT_SUPPORTED_LANGUAGES, useTranslationPath, type Language, type SupportedLanguage } from '@shared/lib';
import { IconButtonMenu, type ButtonProps } from '@shared/ui';
import { LanguageOptions } from './LanguageOptions';
import TranslateIcon from '@mui/icons-material/Translate';

interface LanguageMenuProps {
  setLanguage?(langugage: Language): void;
  supportedLanguages?: SupportedLanguage[];
  buttonProps?: Omit<ButtonProps, 'onClick, children'>;
}

export const LanguageMenu = ({
  setLanguage,
  supportedLanguages = DEFAULT_SUPPORTED_LANGUAGES,
  buttonProps,
}: LanguageMenuProps) => {
  const { i18n } = useTranslationPath('languages');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback(
    (language: Language) => {
      if ((i18n.resolvedLanguage as Language) !== language) {
        setLanguage?.(language);
        i18n.changeLanguage(language);
      }
      setIsOpen(false);
    },
    [i18n, setLanguage],
  );

  return (
    <IconButtonMenu
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      onClose={() => setIsOpen(false)}
      buttonProps={buttonProps}
      icon={<TranslateIcon />}
    >
      <LanguageOptions onClick={handleChange} supportedLanguages={supportedLanguages} />
    </IconButtonMenu>
  );
};
