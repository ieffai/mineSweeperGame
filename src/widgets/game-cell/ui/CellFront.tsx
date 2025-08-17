import { Box, Typography } from '@shared/ui';
import { motion, type ValueAnimationTransition } from 'framer-motion';
import { cellAnimations, type CellTheme } from '../model';

interface CellFrontProps {
  cellTheme: CellTheme;
}

export const CellFront = ({ cellTheme }: CellFrontProps) => {
  return (
    <motion.div
      key="front"
      initial={cellAnimations.front.initial}
      exit={cellAnimations.front.exit}
      transition={cellAnimations.front.transition as ValueAnimationTransition}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        border: `2px solid ${cellTheme.frontBorder}`,
        background: cellTheme.frontBg,
        backfaceVisibility: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${cellTheme.primary}30, ${cellTheme.primary}1A)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px solid ${cellTheme.primary}66`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: cellTheme.primary,
            fontWeight: 'bold',
            opacity: 0.8,
          }}
        >
          ?
        </Typography>
      </Box>
    </motion.div>
  );
};
