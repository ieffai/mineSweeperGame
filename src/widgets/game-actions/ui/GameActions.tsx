import { gameStore } from '@entities/game';
import { useTranslationPath } from '@shared/lib';
import { AnimatedButton, Stack } from '@shared/ui';

interface GameActionsProps {
  onRestart: () => void;
  onCashOut: () => void;
}
export const GameActions = ({ onCashOut, onRestart }: GameActionsProps) => {
  const { t } = useTranslationPath('gameActions');
  const { status, coins } = gameStore();
  const showRestart = status !== 'playing';
  const showCashOut = status === 'playing';

  if (!showRestart && !showCashOut) return null;
  return (
    <Stack direction="row" spacing={1.5} justifyContent="space-between">
      {showRestart && <AnimatedButton text={t('restartButton')} color="primary.main" onClick={onRestart} />}
      {showCashOut && (
        <AnimatedButton disabled={coins === 0} text={t('takeCashButton')} color="secondary.main" onClick={onCashOut} />
      )}
    </Stack>
  );
};
