import type { Board } from '@entities/game';

export function getRandomPosition(rows: number, cols: number) {
  const totalCells = rows * cols;
  const flatIndex = Math.floor(Math.random() * totalCells);

  const row = Math.floor(flatIndex / cols);
  const column = flatIndex % cols;

  return { row, column };
}

export function generateBoard({
  rows,
  cols,
  mineProbability,
}: {
  rows: number;
  cols: number;
  mineProbability: number;
}): Board {
  const cells: Board = Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({ isWinning: true })));

  let mines = 0;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < cols; column++) {
      const isMine = Math.random() < mineProbability;
      cells[row][column].isWinning = !isMine;
      if (isMine) mines++;
    }
  }

  if (mines === 0) {
    const { row, column } = getRandomPosition(rows, cols);
    cells[row][column].isWinning = false;
    mines = 1;
  }

  if (mines === rows * cols) {
    const { row, column } = getRandomPosition(rows, cols);
    cells[row][column].isWinning = true;
  }

  return cells;
}
