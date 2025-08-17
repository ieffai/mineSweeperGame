import { Box, Typography } from '@shared/ui';

interface MaxPrizeProps {
  label: string;
  maxPrize: number;
}
export const MaxPrize = ({ label, maxPrize }: MaxPrizeProps) => {
  return (
    <Box
      sx={{
        border: ({ palette }) => `6px solid ${palette.primary.contrastText}`,
        borderRadius: 3,
        py: 2,
        position: 'absolute',
        top: -6,
        right: -6,
        width: '50%',
        textAlign: 'center',
        display: { xs: 'none', sm: 'inline' },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          top: -20,
          right: 50,
          backgroundColor: ({ palette }) => palette.primary.contrastText,
          color: ({ palette }) => palette.primary.main,
          px: 1,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          textTransform: 'uppercase',
          fontWeight: 900,
        }}
      >
        {label}
      </Typography>
      <Typography variant="h5" fontWeight={900}>
        💰 {maxPrize}
      </Typography>
    </Box>
  );
};
