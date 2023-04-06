import { BrowserRouter, Route, Routes } from 'react-router-dom';
// broswer router is another thing to try? look at later
import Home from './pages/Home';
import QuickPlay from './pages/QuickPlay';
import StartGame from './pages/StartGame';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/QuickPlay" element={<QuickPlay />} />
      <Route path="/StartGame" element={<StartGame />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
