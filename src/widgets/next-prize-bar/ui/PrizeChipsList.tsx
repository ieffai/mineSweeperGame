import { PrizeChip } from './PrizeChip';
import { Stack } from '@shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import type { Prize } from '../model';

interface PrizeChipsListProps {
  prizes: Prize[];
  leftValue: number;
  draining: boolean;
}

export const PrizeChipsList = ({ prizes, leftValue, draining }: PrizeChipsListProps) => {
  return (
    <Stack direction="row" gap={1}>
      <AnimatePresence mode="popLayout" initial={false}>
        {prizes.map((prize, i) => (
          <motion.div
            key={prize.key}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
            style={{ display: 'inline-flex' }}
          >
            <PrizeChip prize={prize} leftValue={leftValue} shouldAnimate={i === 0} immediate={!draining} />
          </motion.div>
        ))}
      </AnimatePresence>
    </Stack>
  );
};
