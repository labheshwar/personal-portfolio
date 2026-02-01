import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textColor = theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';
  const primaryColor = theme === 'light' ? 'text-primary-light' : 'text-primary-dark';
  const glassClass = theme === 'dark' ? 'glass-dark' : 'glass-light';

  const navItems = [
    { label: 'about', target: 'about' },
    { label: 'portfolio', target: 'portfolio' },
    { label: 'skills', target: 'skills' },
    { label: 'career', target: 'career' },
    { label: 'contact', target: 'contact' },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 ${glassClass}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            theme === 'dark' ? 'bg-gradient-to-br from-[#00D1C7] to-[#00F5A0]' : 'bg-gradient-to-br from-[#646AFF] to-[#8B5CF6]'
          }`}>
            <span className="font-jetbrains font-bold text-xl text-white">L</span>
          </div>
          <span className={`font-jetbrains font-semibold text-lg hidden sm:block ${primaryColor}`}>
            labheshwar
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={item.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => handleLinkClick(index)}
                className={`relative px-4 py-2 font-jetbrains text-sm cursor-pointer transition-colors duration-300 ${
                  activeLink === index ? primaryColor : textColor
                } hover:${primaryColor}`}
              >
                <span className={`${primaryColor} mr-1 text-xs`}>0{index}.</span>
                {item.label}
                {activeLink === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'
                    }`}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-[#00D1C7]/20 to-[#00F5A0]/20 text-primary-dark' 
                : 'bg-gradient-to-br from-[#646AFF]/20 to-[#8B5CF6]/20 text-primary-light'
            } transition-colors duration-300`}
          >
            <span className="material-symbols-outlined text-2xl">
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-lg flex flex-col items-center justify-center gap-1.5 ${
              theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
            }`}
          >
            <motion.span
              animate={{ 
                rotate: isMenuOpen ? 45 : 0, 
                y: isMenuOpen ? 6 : 0 
              }}
              className={`w-5 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className={`w-5 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
            />
            <motion.span
              animate={{ 
                rotate: isMenuOpen ? -45 : 0, 
                y: isMenuOpen ? -6 : 0 
              }}
              className={`w-5 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0 
        }}
        className="md:hidden overflow-hidden"
      >
        <ul className="py-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: isMenuOpen ? 0 : -20, 
                opacity: isMenuOpen ? 1 : 0 
              }}
              transition={{ delay: 0.05 * index }}
            >
              <Link
                to={item.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => handleLinkClick(index)}
                className={`block px-4 py-3 font-jetbrains text-sm rounded-lg ${
                  activeLink === index 
                    ? `${theme === 'dark' ? 'bg-primary-dark/20 text-primary-dark' : 'bg-primary-light/20 text-primary-light'}` 
                    : textColor
                }`}
              >
                <span className={`${primaryColor} mr-2`}>0{index}.</span>
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
