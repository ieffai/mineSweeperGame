import { AppBackground } from '@widgets/app-background';
import { Outlet } from 'react-router';
import { motion } from 'framer-motion';
import { Container } from '@shared/ui';
import { Header } from '@widgets/header';
export const Layout = () => {
  return (
    <AppBackground>
      <Container
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        maxWidth="sm"
        sx={{ py: { xs: 4, sm: 8 }, position: 'relative', zIndex: 1 }}
      >
        <Header />
        <Outlet />
      </Container>
    </AppBackground>
  );
};
