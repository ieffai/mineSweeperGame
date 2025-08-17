import type { Board } from './types';

export const REWARD_FACTOR = 1.6;

export function countSafeCells(board: Board) {
  let safe = 0;
  for (const row of board) for (const cell of row) if (cell.isWinning) safe++;
  return safe;
}

export function stepReward(base: number, step: number): number {
  return Math.round(base * Math.pow(REWARD_FACTOR, Math.max(0, step - 1)));
}

export function calculateMaxPrize(base: number, safeCells: number): number {
  let sum = 0;
  for (let i = 1; i <= safeCells; i++) sum += stepReward(base, i);
  return sum;
}

export function nextStepReward(base: number, currentSteps: number, safeCells: number): number {
  const next = currentSteps + 1;
  return next > safeCells ? 0 : stepReward(base, next);
}
