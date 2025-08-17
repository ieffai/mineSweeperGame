import { Stack, Typography } from '@shared/ui';

interface HeaderTitleProps {
  title: string;
}
export const HeaderTitle = ({ title }: HeaderTitleProps) => {
  return (
    <Stack>
      <Typography
        variant="h3"
        fontWeight={900}
        gutterBottom
        sx={{ letterSpacing: 1, display: { xs: 'none', sm: 'block' } }}
      >
        💣 {title}
      </Typography>
    </Stack>
  );
};
