import { GamePage } from '@pages/game-page';
import { Layout } from '@pages/layout';
import { StartPage } from '@pages/start-page';
import { defaultPath, gamePath } from '@shared/config';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent layout at root */}
        <Route path={defaultPath} element={<Layout />}>
          {/* 👇 Render StartPage at the index (no redirects) */}
          <Route index element={<StartPage />} />
          {/* Game as a child route (relative) */}
          <Route path={gamePath} element={<GamePage />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to={defaultPath} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
