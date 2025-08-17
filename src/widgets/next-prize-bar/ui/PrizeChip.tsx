import { alpha } from '@mui/material';
import { AnimatedNumber, Box, Typography } from '@shared/ui';
import { DRAIN_MS, opacities } from '../model/utils';
import type { Prize } from '../model';

interface PrizeChipProps {
  prize: Prize;
  leftValue: number;
  immediate?: boolean;
  shouldAnimate?: boolean;
}
export const PrizeChip = ({ prize, leftValue, immediate, shouldAnimate }: PrizeChipProps) => {
  const { idx, reward } = prize;
  return (
    <Box
      sx={(theme) => ({
        px: 1.25,
        py: 0.5,
        borderRadius: 999,
        border: `2px solid ${alpha(theme.palette.success.main, 0.9)}`,
        backgroundColor: alpha(theme.palette.success.main, 0.12),
        color: theme.palette.success.main,
        backdropFilter: 'blur(2px)',
        opacity: opacities[idx] ?? 0.5,
        minWidth: 64,
        textAlign: 'center',
        lineHeight: 1.2,
      })}
    >
      <Typography variant="caption" fontWeight={800}>
        {shouldAnimate ? (
          <>
            +<AnimatedNumber value={leftValue} duration={DRAIN_MS / 1000} immediate={immediate} />
          </>
        ) : (
          <>+{reward.toLocaleString()}</>
        )}
      </Typography>
    </Box>
  );
};
