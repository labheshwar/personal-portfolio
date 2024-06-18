import { useState, useEffect, useContext } from 'react';
import ThemeContext from '../ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  const backgroundColor =
    theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark';

  const secondaryColor =
    theme === 'light' ? 'text-secondary-light' : 'text-secondary-dark';

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const infoHeight = document.getElementById('info')?.offsetHeight || 0;
    setIsVisible(scrollTop > infoHeight);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 h-8 w-8 rounded-full font-robotoFlex text-xl ${backgroundColor} ${secondaryColor} shadow-lg`}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
