import { gameStore } from '@entities/game';
import { useTranslationPath } from '@shared/lib';
import { Stack } from '@shared/ui';
import { CurrentBalance } from './CurrentBalance';
import { MaxPrize } from './MaxPrize';

export const BalanceBar = () => {
  const { t } = useTranslationPath('balanceBar');
  const { coins, maxPrize } = gameStore();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={'space-between'}
      sx={{
        borderRadius: 3,
        py: 2,
        px: 3,
        width: '100%',
        border: ({ palette }) => `6px solid ${palette.success.main}`,
        position: 'relative',
      }}
    >
      <CurrentBalance label={t('currentBalance')} coins={coins} />
      <MaxPrize label={t('maxPrize')} maxPrize={maxPrize} />
    </Stack>
  );
};
