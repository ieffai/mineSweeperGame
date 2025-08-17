import { Box, Typography } from '@shared/ui';

export const WinIcon = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 0.5,
      }}
    >
      <Box
        sx={(theme) => ({
          width: 12,
          height: 8,
          background: theme.palette.secondary.light,
          borderRadius: '2px 2px 0 0',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: -4,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 16,
            height: 6,
            background: theme.palette.secondary.light,
            borderRadius: 2,
          },
        })}
      />
      <Typography
        variant="caption"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          fontSize: '0.7rem',
        }}
      >
        WIN
      </Typography>
    </Box>
  );
};
