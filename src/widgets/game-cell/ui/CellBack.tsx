import { Box } from '@shared/ui';
import { motion, type ValueAnimationTransition } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import type { CellTheme } from '../model/types';
import { WinIcon } from './WinIcon';
import { cellAnimations } from '../model';
import { LoseIcon } from './LoseIcon';

interface CellBackProps {
  isWinning: boolean;
  cellTheme: CellTheme;
}

export const CellBack = ({ isWinning, cellTheme }: CellBackProps) => {
  const theme = useTheme();

  return (
    <motion.div
      key="back"
      initial={cellAnimations.back.initial}
      animate={cellAnimations.back.animate}
      transition={cellAnimations.back.transition as ValueAnimationTransition}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        border: `2px solid ${cellTheme.backBorder}`,
        background: cellTheme.backBg,
      }}
    >
      <Box
        sx={{
          width: '70%',
          height: '70%',
          borderRadius: isWinning ? '8px' : '50%',
          background: isWinning
            ? `linear-gradient(135deg, ${cellTheme.success}, ${cellTheme.success})`
            : `linear-gradient(135deg, ${cellTheme.error}, ${cellTheme.error})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: theme.shadows[2],
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.3), transparent)',
            borderRadius: 'inherit',
          },
        }}
      >
        {isWinning ? <WinIcon /> : <LoseIcon />}
      </Box>
    </motion.div>
  );
};
