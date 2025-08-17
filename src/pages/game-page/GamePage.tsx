import { useRestartGame } from '@features/game-session';
import { GameActions } from '@widgets/game-actions';
import { Stack } from '@shared/ui';
import { GameCard } from '@widgets/game-card';
import { BalanceBar } from '@widgets/balance-bar';
import { NextPrizeBar } from '@widgets/next-prize-bar';
import { GameBoard } from '@widgets/game-board';

export const GamePage = () => {
  const handleRestart = useRestartGame();
  return (
    <GameCard>
      <Stack gap={2} alignItems="center">
        <BalanceBar />
        <GameBoard />
        <NextPrizeBar />
        <GameActions onRestart={handleRestart} onCashOut={handleRestart} />
      </Stack>
    </GameCard>
  );
};
