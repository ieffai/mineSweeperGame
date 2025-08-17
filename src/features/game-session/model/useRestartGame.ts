import { gameStore } from '@entities/game';
import { useCallback, useRef } from 'react';
import { fetchBoard } from '../api';

export function useRestartGame() {
  const { initRound } = gameStore();
  const busy = useRef(false);

  return useCallback(async () => {
    if (busy.current) return;
    busy.current = true;
    try {
      const { board, amountPerWin } = await fetchBoard();
      initRound({ board, amountPerWin });
    } finally {
      busy.current = false;
    }
  }, [initRound]);
}
