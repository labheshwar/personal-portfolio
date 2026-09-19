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


// Aurora backdrop: depth and colour without the cost of the old particle
// field. Animates transform only, and freezes under prefers-reduced-motion.
const AmbientWash = ({ theme }) => {
  const blobs = theme === 'dark'
    ? [
        { cls: 'aurora-a', color: 'rgba(0,209,199,0.13)', style: { top: '-14%', left: '-6%', width: '46vw', height: '46vw' } },
        { cls: 'aurora-b', color: 'rgba(0,245,160,0.09)', style: { top: '18%', right: '-10%', width: '40vw', height: '40vw' } },
        { cls: 'aurora-c', color: 'rgba(56,130,246,0.07)', style: { bottom: '-18%', left: '22%', width: '44vw', height: '44vw' } },
      ]
    : [
        { cls: 'aurora-a', color: 'rgba(100,106,255,0.14)', style: { top: '-14%', left: '-6%', width: '46vw', height: '46vw' } },
        { cls: 'aurora-b', color: 'rgba(139,92,246,0.10)', style: { top: '18%', right: '-10%', width: '40vw', height: '40vw' } },
        { cls: 'aurora-c', color: 'rgba(56,189,248,0.08)', style: { bottom: '-18%', left: '22%', width: '44vw', height: '44vw' } },
      ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {blobs.map((b) => (
        <div
          key={b.cls}
          className={`aurora-blob ${b.cls}`}
          style={{ ...b.style, background: b.color }}
        />
      ))}
    </div>
  );
};

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
