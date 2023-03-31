import { HashRouter, Route, Routes } from 'react-router-dom';
// broswer router is another thing to try? look at later
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
