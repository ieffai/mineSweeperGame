import { Stack, Typography } from '@shared/ui';

export function RuleItem({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="flex-start">
      <Typography component="span" sx={{ fontSize: 20 }}>
        ✅
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
        {children}
      </Typography>
    </Stack>
  );
}
