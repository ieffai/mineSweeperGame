import { useAnimationControls } from 'framer-motion';
import { AnimatedButton } from '@shared/ui';
import { Typography } from '@shared/ui';
import { Rules } from '@widgets/rules';
import { GameCard } from '@widgets/game-card';
import { useTranslationPath } from '@shared/lib';
import { useStartGame } from '@features/game-session';

export const StartPage = () => {
  const controls = useAnimationControls();
  const { t } = useTranslationPath('startPage');
  const startGame = useStartGame();
  const handleStart = async () => {
    await controls.start({ opacity: 0, y: -20, transition: { duration: 0.35 } });
    startGame();
  };

  return (
    <GameCard controls={controls}>
      <Typography variant="subtitle1" sx={{ opacity: 0.8, mb: 3 }}>
        {t('subtitle')}
      </Typography>
      <Rules />

      <AnimatedButton text={t('startGameButton')} color="success.main" onClick={handleStart} />
      <Typography variant="caption" display="block" sx={{ mt: 2, opacity: 0.7 }}>
        {t('footerPlaceholder')}
      </Typography>
    </GameCard>
  );
};
