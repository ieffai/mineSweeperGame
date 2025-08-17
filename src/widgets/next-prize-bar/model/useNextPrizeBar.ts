import { gameStore, stepReward } from '@entities/game';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DRAIN_MS } from './utils';
import type { Prize } from './types';

export function useNextPrizeBar() {
  const { status, steps, totalSafeCells, amountPerWin } = gameStore();
  const isPlaying = status === 'playing';

  const [displaySteps, setDisplaySteps] = useState(steps);
  const [draining, setDraining] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (steps > displaySteps && isPlaying) {
      setDraining(true);
      timerRef.current = window.setTimeout(() => {
        setDraining(false);
        setDisplaySteps(steps);
      }, DRAIN_MS);
    } else if (steps < displaySteps) {
      setDraining(false);
      setDisplaySteps(steps);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [steps, displaySteps, isPlaying]);

  const remaining = Math.max(totalSafeCells - displaySteps, 0);

  const items: Prize[] = useMemo(() => {
    const count = Math.min(3, remaining);
    return Array.from({ length: count }, (_, i) => {
      const stepNumber = displaySteps + 1 + i;
      const reward = stepReward(amountPerWin, stepNumber);
      return { key: `step-${stepNumber}`, reward, idx: i };
    });
  }, [remaining, displaySteps, amountPerWin]);

  return { isPlaying, items, draining, steps, totalSafeCells };
}
