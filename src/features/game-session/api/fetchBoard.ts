import type { Game } from '@entities/game';
import { generateBoard } from './utils';

type Options = {
  delayMs?: number;
  amountPerWin?: number;
  mineProbability?: number;
  rows?: number;
  cols?: number;
};

export function fetchBoard(opts: Options = {}): Promise<Game> {
  const { delayMs = 450, amountPerWin = 100, rows = 3, cols = 3 } = opts;
  const mineProbability = opts.mineProbability ?? 1 / (rows * cols);
  return new Promise<Game>((resolve) => {
    setTimeout(() => {
      const board = generateBoard({ rows, cols, mineProbability });
      resolve({ board, amountPerWin });
    }, delayMs);
  });
}
