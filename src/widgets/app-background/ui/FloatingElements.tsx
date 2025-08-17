import { Box } from '@mui/material';

export const FloatingElements = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '2rem',
          opacity: 0.3,
          animation: 'float 3s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      >
        🎯
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          fontSize: '1.5rem',
          opacity: 0.3,
          animation: 'float 3s ease-in-out infinite 1s',
        }}
      >
        ⚡
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          fontSize: '1.8rem',
          opacity: 0.3,
          animation: 'float 3s ease-in-out infinite 0.5s',
        }}
      >
        🎮
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '35%',
          right: '30%',
          fontSize: '2.2rem',
          opacity: 0.25,
          animation: 'float 4s ease-in-out infinite 0.7s',
        }}
      >
        🚀
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '35%',
          right: '25%',
          fontSize: '2rem',
          opacity: 0.28,
          animation: 'float 3.5s ease-in-out infinite 1.2s',
        }}
      >
        🏆
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '50%',
          fontSize: '1.8rem',
          opacity: 0.3,
          animation: 'float 4s ease-in-out infinite 1.5s',
        }}
      >
        💎
      </Box>
    </>
  );
};
