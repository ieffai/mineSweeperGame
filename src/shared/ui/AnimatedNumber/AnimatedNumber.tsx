import { useEffect, useState } from 'react';
import { animate, useMotionValue } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  ease?: string;
  immediate?: boolean;
}

export const AnimatedNumber = ({ value, duration = 0.6, ease = 'easeOut', immediate = false }: AnimatedNumberProps) => {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = mv.on('change', (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [mv]);

  useEffect(() => {
    if (immediate) {
      mv.set(value);
    } else {
      const controls = animate(mv, value, { duration, ease: ease as any });
      return () => controls.stop();
    }
  }, [value, duration, ease, mv, immediate]);

  return <span>{display.toLocaleString()}</span>;
};
