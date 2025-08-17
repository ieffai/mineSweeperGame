import { gameStore } from '@entities/game';
import { useCallback } from 'react';

export function useFlipCard() {
  const { board, revealed, status, revealCell, addWin, finish } = gameStore();

  return useCallback(
    (cellId: string) => {
      if (status !== 'playing' || revealed[cellId]) return;
      const [r, c] = cellId.split('-').map(Number);
      const cell = board[r]?.[c];
      if (!cell) return;

      revealCell(cellId);
      cell.isWinning ? addWin() : finish('lost');
    },
    [board, revealed, status, revealCell, addWin, finish],
  );
}
