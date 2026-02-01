import './App.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';
import Navbar from './Components/Navbar';
import Info from './Components/Info';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import MyPortfolio from './Components/MyPortfolio';
import Career from './Components/Career';
import Contact from './Components/Contact';
import Loader from './Components/Loader';
import GitHub from './Components/GitHub';
import ScrollToTop from './Components/ScrollToTop';

// Animated Background Particles Component
const ParticleBackground = ({ theme }) => {
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      x: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    })),
  []);

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

ParticleBackground.propTypes = {
  theme: PropTypes.string.isRequired,
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

GridBackground.propTypes = {
  theme: PropTypes.string.isRequired,
};

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

GradientOrbs.propTypes = {
  theme: PropTypes.string.isRequired,
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolioTheme') || 'dark');
  const [isLoading, setIsLoading] = useState(true);

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
    // Simulate loading for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const bgColor = theme === 'dark' 
    ? 'bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]' 
    : 'bg-gradient-to-br from-[#f8f9ff] via-[#ffffff] to-[#f0f1ff]';

  return (
    <ThemeContext.Provider value={value}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`relative min-h-screen min-w-full overflow-x-hidden ${bgColor}`}
          >
            {/* Background Effects */}
            <ParticleBackground theme={theme} />
            <GridBackground theme={theme} />
            <GradientOrbs theme={theme} />
            
            {/* Noise Overlay */}
            <div className="noise-overlay" />
            
            {/* Main Content */}
            <div className="relative z-10">
              <Navbar />
              <Info />
              <AboutMe />
              <MyPortfolio />
              <Skills />
              <GitHub />
              <Career />
              <Contact />
              <ScrollToTop />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;
