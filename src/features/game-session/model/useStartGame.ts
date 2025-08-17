import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { fetchBoard } from '../api';
import { gameStore } from '@entities/game';
import { gamePath } from '@shared/config';

export function useStartGame() {
  const navigate = useNavigate();
  const { initRound } = gameStore();

  return useCallback(async () => {
    const { board, amountPerWin } = await fetchBoard();
    initRound({ board, amountPerWin });
    navigate(gamePath);
  }, [initRound, navigate]);
}
