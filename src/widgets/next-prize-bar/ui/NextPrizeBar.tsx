import { Stack, Typography } from '@shared/ui';
import { useNextPrizeBar } from '../model';
import { useTranslationPath } from '@shared/lib';
import { PrizeChipsList } from './PrizeChipsList';

export const NextPrizeBar = () => {
  const { t } = useTranslationPath('nextPrizeBar');
  const { isPlaying, items, draining, steps, totalSafeCells } = useNextPrizeBar();

  if (!isPlaying || items.length === 0) return null;

  const leftReward = items[0]?.reward ?? 0;
  const leftValue = draining ? 0 : leftReward;

  return (
    <Stack direction="row" alignItems="center" spacing={1.25}>
      <Typography variant="caption" sx={{ opacity: 0.7, mr: 0.5, display: { xs: 'none', sm: 'inline' } }}>
        {t('nextPrizeLabel')}
      </Typography>
      <PrizeChipsList prizes={items} leftValue={leftValue} draining={draining} />

      <Typography variant="caption" sx={{ opacity: 0.6, ml: 1, display: { xs: 'none', sm: 'inline' } }}>
        {steps}/{totalSafeCells}
      </Typography>
    </Stack>
  );
};
