import { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { personalInfo } from '../config';
import Resume from '../Assets/LabheshwarResume.pdf';

// Typing Animation Hook
const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const Info = () => {
  const { theme } = useContext(ThemeContext);
  
  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'React Specialist',
    'TypeScript Expert',
  ];
  
  const typedText = useTypingEffect(roles, 100, 50, 2000);

  const primaryColor = theme === 'light' ? 'text-primary-light' : 'text-primary-dark';
  const secondaryTextColor = theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';
  const gradientText = theme === 'dark' ? 'gradient-text-dark' : 'gradient-text-light';
  const glowClass = theme === 'dark' ? 'glow-dark' : 'glow-light';
  const pulseGlow = theme === 'dark' ? 'pulse-glow-dark' : 'pulse-glow-light';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <main className="min-h-screen flex items-center px-6 md:px-20 pt-24 pb-16" id="info">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto"
      >
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className={`font-jetbrains text-sm md:text-base ${primaryColor}`}>
              {'<hello world />'}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="font-inter font-black text-4xl md:text-6xl lg:text-7xl leading-tight"
          >
            <span className={secondaryTextColor}>I&apos;m </span>
            <span className={gradientText}>{personalInfo.name}</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <span className={`font-jetbrains text-xl md:text-2xl lg:text-3xl ${secondaryTextColor}`}>
              {'> '}
            </span>
            <span className={`font-jetbrains text-xl md:text-2xl lg:text-3xl ${primaryColor}`}>
              {typedText}
            </span>
            <span className={`typing-cursor h-6 md:h-8 ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'}`} />
          </motion.div>

          {/* Bio */}
          <motion.p 
            variants={itemVariants}
            className={`font-inter text-base md:text-lg leading-relaxed ${secondaryTextColor} opacity-80 max-w-2xl`}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-6 py-4"
          >
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '10+', label: 'Projects Delivered' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className={`font-inter font-bold text-2xl md:text-3xl ${primaryColor}`}>
                  {stat.value}
                </div>
                <div className={`font-jetbrains text-xs md:text-sm ${secondaryTextColor} opacity-60`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-6 py-3 rounded-xl font-jetbrains text-sm md:text-base overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-[#00D1C7] to-[#00F5A0] text-gray-900' 
                  : 'bg-gradient-to-r from-[#646AFF] to-[#8B5CF6] text-white'
              } ${glowClass}`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">download</span>
                Download Resume
              </span>
            </motion.a>
            
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-jetbrains text-sm md:text-base border-2 ${
                theme === 'dark' 
                  ? 'border-primary-dark text-primary-dark hover:bg-primary-dark/10' 
                  : 'border-primary-light text-primary-light hover:bg-primary-light/10'
              } transition-colors duration-300`}
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">mail</span>
                Get In Touch
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-4 pt-4"
          >
            {[
              { href: personalInfo.github, icon: 'code', label: 'GitHub' },
              { href: personalInfo.linkedin, icon: 'work', label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, icon: 'mail', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-white/10 hover:bg-primary-dark/20 text-secondary-light' 
                    : 'bg-black/10 hover:bg-primary-light/20 text-secondary-dark'
                } transition-colors duration-300`}
                title={social.label}
              >
                <span className="material-symbols-outlined">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="relative flex-shrink-0"
        >
          {/* Decorative Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className={`absolute -inset-4 rounded-full border-2 border-dashed ${
              theme === 'dark' ? 'border-primary-dark/30' : 'border-primary-light/30'
            }`}
          />
          
          {/* Glowing Background */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute inset-0 rounded-full blur-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-[#00D1C7] to-[#00F5A0]' 
                : 'bg-gradient-to-r from-[#646AFF] to-[#8B5CF6]'
            } opacity-30`}
          />

          {/* Image Container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ${pulseGlow}`}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQElbe-ZBH1Wng/profile-displayphoto-crop_800_800/B4DZlG9oQ6JQAI-/0/1757832186802?e=1771459200&v=beta&t=pv2SCiMRKXLE_bF_J9du3tddlcy8jtftV6K50W5osJ0"
              alt="Labheshwar"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 ${
              theme === 'dark' 
                ? 'bg-gradient-to-t from-[#00D1C7]/20 to-transparent' 
                : 'bg-gradient-to-t from-[#646AFF]/20 to-transparent'
            }`} />
          </motion.div>

          {/* Floating Tech Icons */}
          {['⚛️', '📱', '🚀'].map((emoji, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                delay: index * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute text-2xl ${
                index === 0 ? 'top-0 right-0' : 
                index === 1 ? 'bottom-0 left-0' : 
                'top-1/2 -right-8'
              }`}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Info;
