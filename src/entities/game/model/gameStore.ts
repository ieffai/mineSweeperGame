import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { Board, GameStatus, InitRoundPayload } from './types';
import { calculateMaxPrize, countSafeCells, nextStepReward, stepReward } from './utils';

type GameState = {
  board: Board;
  amountPerWin: number;
  status: GameStatus;
  coins: number;
  steps: number;
  nextReward: number;
  maxPrize: number;
  revealed: Record<string, boolean>;
  totalSafeCells: number;
  sessionId: string | null;
  startedAt: number | null;
  endedAt: number | null;
};

type GameActions = {
  initRound: (payload: InitRoundPayload) => void;
  resetRound: () => void;
  setStatus: (status: GameStatus) => void;
  revealCell: (cellId: string) => void;
  addWin: () => void;
  finish: (status: Extract<GameStatus, 'won' | 'lost'>) => void;
};

const initialState: GameState = {
  board: [],
  amountPerWin: 0,
  status: 'idle',
  coins: 0,
  steps: 0,
  nextReward: 0,
  maxPrize: 0,
  revealed: {},
  totalSafeCells: 0,
  sessionId: null,
  startedAt: null,
  endedAt: null,
};

export const gameStore = create<GameState & GameActions>()(
  immer((set) => ({
    ...initialState,

    initRound: ({ board, amountPerWin }) => {
      set((s) => {
        s.board = board;
        s.amountPerWin = amountPerWin;
        s.status = 'playing';
        s.coins = 0;
        s.steps = 0;
        s.revealed = {};
        s.totalSafeCells = countSafeCells(board);
        s.nextReward = nextStepReward(amountPerWin, 0, s.totalSafeCells);
        s.maxPrize = calculateMaxPrize(amountPerWin, s.totalSafeCells);
        s.sessionId = `s${Date.now()}`;
        s.startedAt = Date.now();
        s.endedAt = null;
      });
    },

    resetRound: () => set(() => ({ ...initialState })),

    setStatus: (status) =>
      set((s) => {
        s.status = status;
      }),

    revealCell: (cellId) =>
      set((s) => {
        s.revealed[cellId] = true;
      }),

    addWin: () =>
      set((s) => {
        const reward = stepReward(s.amountPerWin, s.steps + 1);
        s.coins += reward;
        s.steps += 1;
        s.nextReward = nextStepReward(s.amountPerWin, s.steps, s.totalSafeCells);

        if (s.steps >= s.totalSafeCells) {
          s.status = 'won';
          s.endedAt = Date.now();
          s.nextReward = 0;
        }
      }),

    finish: (status) =>
      set((s) => {
        s.status = status;
        if (status === 'lost') s.coins = 0;
        s.endedAt = Date.now();
      }),
  })),
);
