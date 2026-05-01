import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const CapabilitiesPage = lazy(() => import('./pages/Capabilities').then(module => ({ default: module.CapabilitiesPage })));
const Approach = lazy(() => import('./pages/Approach').then(module => ({ default: module.Approach })));

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-off-white font-body selection:bg-red-freedom selection:text-white flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-grow flex flex-col">
          <Suspense fallback={<div className="flex-grow flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 rounded-full border-2 border-red-freedom border-t-transparent animate-spin" /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/capabilities" element={<CapabilitiesPage />} />
              <Route path="/approach" element={<Approach />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
