import { ThemeSwitcher } from '@widgets/theme-switcher';
import { LanguageMenu } from '@widgets/language-menu';
import { Stack } from '@shared/ui';
import { HeaderTitle } from './HeaderTitle';
import { useTranslationPath } from '@shared/lib';

export const Header = () => {
  const { t } = useTranslationPath('header');
  return (
    <Stack direction="row" spacing={1.5} justifyContent="space-between" sx={{ mb: 2 }} alignItems={'center'}>
      <HeaderTitle title={t('gameTitle')} />
      <Stack direction={'row'} gap={0.5}>
        <LanguageMenu />
        <ThemeSwitcher />
      </Stack>
    </Stack>
  );
};
