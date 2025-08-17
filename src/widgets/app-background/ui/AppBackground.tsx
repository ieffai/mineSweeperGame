import { alpha, Box } from '@mui/material';
import { FloatingElements } from './FloatingElements';

interface AppBackgroundProps {
  children: React.ReactNode;
}
export const AppBackground = ({ children }: AppBackgroundProps) => {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        background: (t) =>
          t.palette.mode === 'dark'
            ? `radial-gradient(ellipse at top, ${alpha(t.palette.primary.main, 0.3)} 0%, ${t.palette.background.default} 50%)`
            : `radial-gradient(ellipse at top, ${alpha(t.palette.primary.main, 0.1)} 0%, #eaf2ff 50%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
      <FloatingElements />
    </Box>
  );
};
