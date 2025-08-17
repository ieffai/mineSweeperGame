export type Cell = { isWinning: boolean };
export type Board = Cell[][];
export type Game = { board: Board; amountPerWin: number };
export type GameStatus = 'idle' | 'playing' | 'won' | 'lost';
export type CellId = `${0 | 1 | 2}-${0 | 1 | 2}`;

export type InitRoundPayload = {
  board: Board;
  amountPerWin: number;
};
