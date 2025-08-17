import { motion, type LegacyAnimationControls } from 'framer-motion';
import { Paper } from '@shared/ui';

interface GameCardProps {
  children: React.ReactNode;
  controls?: LegacyAnimationControls;
}
export const GameCard = ({ children, controls }: GameCardProps) => {
  return (
    <Paper
      component={motion.div}
      animate={controls}
      elevation={0}
      sx={(theme) => ({
        p: { xs: 3, sm: 5 },
        borderRadius: 4,
        textAlign: 'center',
        color: theme.palette.getContrastText(theme.palette.background.default),
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.03))`
            : `linear-gradient(145deg, rgba(255,255,255,.9), rgba(255,255,255,.75))`,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${theme.palette.success.main}`,
      })}
    >
      {children}
    </Paper>
  );
};
