import { withProviders } from './providers';
import { AppRouter } from './routing';

function AppComponent() {
  return <AppRouter />;
}

export const App = withProviders(AppComponent);
