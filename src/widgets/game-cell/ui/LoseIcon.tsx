import { Box, Typography } from '@shared/ui';

export const LoseIcon = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: 'error.main',
          position: 'relative',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 10,
            height: 2,
            background: 'white',
            transform: 'translate(-50%, -50%)',
            borderRadius: 1,
          },
          '&::before': {
            transform: 'translate(-50%, -50%) rotate(45deg)',
          },
          '&::after': {
            transform: 'translate(-50%, -50%) rotate(-45deg)',
          },
        }}
      />
      <Typography
        variant="caption"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          fontSize: '0.7rem',
          mt: 0.5,
        }}
      >
        LOSE
      </Typography>
    </Box>
  );
};
