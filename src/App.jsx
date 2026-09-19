import './App.css';
import { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeContext from './ThemeContext';
import Navbar from './Components/Navbar';
import Info from './Components/Info';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import MyPortfolio from './Components/MyPortfolio';
import Career from './Components/Career';
import Contact from './Components/Contact';
import ScrollToTop from './Components/ScrollToTop';

const GitHub = lazy(() => import('./Components/GitHub'));
const QrDecoder = lazy(() => import('./Components/QrDecoder'));


// A single calm wash instead of drifting orbs — depth without motion cost.
const AmbientWash = ({ theme }) => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <div
      className="absolute inset-0"
      style={{
        background: theme === 'dark'
          ? 'radial-gradient(900px 600px at 12% -5%, rgba(0,209,199,0.10), transparent 60%), radial-gradient(700px 500px at 95% 10%, rgba(0,245,160,0.06), transparent 60%)'
          : 'radial-gradient(900px 600px at 12% -5%, rgba(100,106,255,0.12), transparent 60%), radial-gradient(700px 500px at 95% 10%, rgba(139,92,246,0.08), transparent 60%)',
      }}
    />
  </div>
);

// Grid Background Pattern
const GridBackground = ({ theme }) => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(0, 209, 199, 0.5)' : 'rgba(100, 106, 255, 0.5)'} 1px, transparent 1px),
                          linear-gradient(90deg, ${theme === 'dark' ? 'rgba(0, 209, 199, 0.5)' : 'rgba(100, 106, 255, 0.5)'} 1px, transparent 1px)`,
        backgroundSize: '100px 100px',
      }}
    />
  </div>
);



function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolioTheme') || 'dark');

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const toggledTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('portfolioTheme', toggledTheme);
      return toggledTheme;
    });
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const bgColor = theme === 'dark' 
    ? 'bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]' 
    : 'bg-gradient-to-br from-[#f8f9ff] via-[#ffffff] to-[#f0f1ff]';

  return (
    <ThemeContext.Provider value={value}>
      <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`relative min-h-screen min-w-full overflow-x-hidden ${bgColor}`}
          >
            {/* Background Effects — skipped entirely when the visitor asks for reduced motion */}
            <GridBackground theme={theme} />
            <AmbientWash theme={theme} />

            {/* Noise Overlay */}
            <div className="noise-overlay" />

            {/* Main Content */}
            <div className="relative z-10">
              <a href="#info" className="skip-link">Skip to content</a>
              <Navbar />
              <Info />
              <AboutMe />
              {/* Experience first: it is the strongest evidence, so it should not sit
                  below the projects or the contribution graph. */}
              <Career />
              <MyPortfolio />
              <Suspense fallback={<div className="min-h-[28rem]" />}>
                <QrDecoder />
              </Suspense>
              <Skills />
              <Suspense fallback={<div className="min-h-[20rem]" />}>
                <GitHub />
              </Suspense>
              <Contact />
              <ScrollToTop />
            </div>
          </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;
