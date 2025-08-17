import { useTranslationPath } from '@shared/lib';
import { RuleItem } from './RuleItem';
import { Stack } from '@shared/ui';

const AMOUNT_PER_WIN = 100;
export const Rules = () => {
  const { t } = useTranslationPath('rules');

  return (
    <Stack gap={1} sx={{ textAlign: 'left', mx: 'auto', maxWidth: 520, mb: 3 }}>
      <RuleItem>{t('rule1')}</RuleItem>
      <RuleItem>{t('rule2', { amountPerWin: AMOUNT_PER_WIN })}</RuleItem>
      <RuleItem>{t('rule3')}</RuleItem>
      <RuleItem>{t('rule4')}</RuleItem>
    </Stack>
  );
};
