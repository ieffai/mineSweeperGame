import { AnimatedNumber, Box, Typography } from '@shared/ui';

interface CurrentBalanceProps {
  label: string;
  coins: number;
}
export const CurrentBalance = ({ label, coins }: CurrentBalanceProps) => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          top: -20,
          left: 50,
          backgroundColor: ({ palette }) => palette.success.main,
          px: 1,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          textTransform: 'uppercase',
          fontWeight: 900,
          color: 'text.secondary',
        }}
      >
        {label}
      </Typography>
      <Typography variant="h5" fontWeight={900}>
        🪙 <AnimatedNumber value={coins} />
      </Typography>
    </Box>
  );
};
