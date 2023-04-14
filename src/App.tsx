import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initThinBackend, logout } from 'thin-backend';
import { useCurrentUser, ThinBackend } from 'thin-backend-react';
import Home from './pages/Home';
import QuickPlay from './pages/QuickPlay';
import StartGame from './pages/StartGame';
import NotFound from './pages/NotFound';
import Results from './pages/Results';

import './thinBackend.css';

initThinBackend({
  host: 'https://questionmaster.thinbackend.app',
});

export function App() {
  const user = useCurrentUser();

  return (
    <ThinBackend>
    {/* <ThinBackend requireLogin> */}
      {/* <div className="header">
        <b>{user?.email}</b>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuickPlay" element={<QuickPlay />} />
        <Route path="/StartGame/:name" element={<StartGame />} />
        <Route path="/Results" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThinBackend>
  );
}
export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
