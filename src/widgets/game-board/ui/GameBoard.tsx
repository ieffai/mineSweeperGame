import { gameStore } from '@entities/game';
import { useFlipCard } from '@features/flip-card';
import { Box } from '@shared/ui';
import { AnimatedBoard } from './AnimatedBoard';
import { BoardNotReady } from './BoardNotReady';
import { useTranslationPath } from '@shared/lib';
import { GameCell } from '@widgets/game-cell';

export const GameBoard = () => {
  const { board, revealed, status, sessionId } = gameStore();
  const { t } = useTranslationPath('gameBoard');
  const flipCard = useFlipCard();
  const noBoard = !board || board.length === 0;

  if (noBoard) {
    return <BoardNotReady label={t('noBoardPlaceholder')} />;
  }

  const renderCell = (cell: { isWinning: boolean }, r: number, c: number) => {
    const id = `${r}-${c}`;
    const isRevealed = !!revealed[id];
    const disabled = isRevealed || status !== 'playing';

    return (
      <GameCell
        key={id}
        id={id}
        isWinning={cell.isWinning}
        isRevealed={isRevealed}
        disabled={disabled}
        onFlip={flipCard}
      />
    );
  };
  return (
    <AnimatedBoard sessionId={sessionId}>
      <Box
        role="grid"
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${board[0].length}, 1fr)`,
          gap: 1.5,
          width: 360,
          maxWidth: '100%',
          mx: 'auto',
        }}
      >
        {board.map((row, r) => row.map((cell, c) => renderCell(cell, r, c)))}
      </Box>
    </AnimatedBoard>
  );
};
