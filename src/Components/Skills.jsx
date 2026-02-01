import { useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { skills } from '../config';

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const primaryColor = theme === 'light' ? 'text-primary-light' : 'text-primary-dark';
  const secondaryColor = theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';
  const glassClass = theme === 'dark' ? 'glass-dark' : 'glass-light';
  const borderGlass = theme === 'dark' ? 'border-glass-dark' : 'border-glass-light';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  };

  const skillCategories = [
    { title: 'Languages', icon: '💻', items: skills.languages },
    { title: 'Frameworks & Libraries', icon: '⚛️', items: skills.frameworks },
    { title: 'Web Services', icon: '🌐', items: skills.webServices },
    { title: 'UI Libraries', icon: '🎨', items: skills.uiLibraries },
    { title: 'Tools', icon: '🛠️', items: skills.tools },
    { title: 'Others', icon: '📦', items: skills.others },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 md:px-20 py-20"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className={`font-jetbrains text-sm ${primaryColor}`}>02.</span>
            <h2 className={`font-inter font-bold text-2xl md:text-4xl ${secondaryColor}`}>
              Skills & Technologies
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`h-[1px] ${theme === 'dark' ? 'bg-primary-dark/50' : 'bg-primary-light/50'}`}
            />
          </div>
          <p className={`font-jetbrains text-xs ${primaryColor} opacity-60`}>
            {'// technologies I work with'}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`${glassClass} rounded-2xl p-6 border ${borderGlass} card-hover-${theme}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + categoryIndex * 0.1, type: 'spring' }}
                  className="text-2xl"
                >
                  {category.icon}
                </motion.span>
                <h3 className={`font-inter font-semibold text-lg ${primaryColor}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`font-jetbrains text-xs px-3 py-1.5 rounded-full ${
                      theme === 'dark'
                        ? 'bg-primary-dark/20 text-primary-dark border border-primary-dark/40'
                        : 'bg-primary-light/20 text-primary-light border border-primary-light/40'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Marquee of All Skills */}
        <motion.div
          variants={itemVariants}
          className="mt-12 overflow-hidden"
        >
          <div className={`${glassClass} rounded-2xl p-4 border ${borderGlass}`}>
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: 'linear',
                repeatType: 'loop'
              }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className={`font-jetbrains text-sm ${secondaryColor} opacity-60`}
                >
                  {skill} •
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
