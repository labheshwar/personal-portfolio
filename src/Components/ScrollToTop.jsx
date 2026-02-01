import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeContext from '../ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useContext(ThemeContext);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    setScrollProgress(scrollPercent);
    setIsVisible(scrollTop > 300);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className={`fixed bottom-6 right-6 w-12 h-12 rounded-full z-50 flex items-center justify-center ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#00D1C7] to-[#00F5A0] text-gray-900'
              : 'bg-gradient-to-br from-[#646AFF] to-[#8B5CF6] text-white'
          } shadow-lg`}
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke={theme === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'}
              strokeWidth="2"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke={theme === 'dark' ? '#0a0a0a' : '#ffffff'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={126}
              strokeDashoffset={126 - (126 * scrollProgress) / 100}
            />
          </svg>
          
          {/* Arrow Icon */}
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="material-symbols-outlined text-xl font-bold relative z-10"
          >
            arrow_upward
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
