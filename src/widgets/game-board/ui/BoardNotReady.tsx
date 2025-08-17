import { Box, Typography } from '@shared/ui';

interface BoardNotReadyProps {
  label: string;
}
export const BoardNotReady = ({ label }: BoardNotReadyProps) => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', opacity: 0.6 }}>
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
};
