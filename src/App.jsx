import './App.css';
import { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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

// Particle field is built once at module scope. Generating it inside render
// (even in useMemo) calls Math.random during render, which breaks React's
// purity rule and makes the output unstable across re-renders.
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 1,
  x: Math.random() * 100,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 10,
}));

// Animated Background Particles Component
const ParticleBackground = ({ theme }) => {
  const particles = PARTICLES;

  const primaryColor = theme === 'dark' ? 'rgba(0, 209, 199, 0.3)' : 'rgba(100, 106, 255, 0.3)';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            backgroundColor: primaryColor,
            boxShadow: `0 0 ${particle.size * 2}px ${primaryColor}`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
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


// Gradient Orbs
const GradientOrbs = ({ theme }) => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
      style={{
        background: theme === 'dark' 
          ? 'radial-gradient(circle, rgba(0, 209, 199, 0.4) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(100, 106, 255, 0.4) 0%, transparent 70%)',
        top: '10%',
        left: '10%',
      }}
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
      style={{
        background: theme === 'dark' 
          ? 'radial-gradient(circle, rgba(0, 245, 160, 0.4) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
        bottom: '20%',
        right: '10%',
      }}
      animate={{
        x: [0, -80, 0],
        y: [0, -60, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);


function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolioTheme') || 'dark');
  const prefersReducedMotion = useReducedMotion();

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
            {!prefersReducedMotion && <ParticleBackground theme={theme} />}
            <GridBackground theme={theme} />
            {!prefersReducedMotion && <GradientOrbs theme={theme} />}

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
