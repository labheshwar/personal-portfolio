import { useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { experience } from '../config';

const Career = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 md:px-20 py-20"
      id="career"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className={`font-jetbrains text-sm ${primaryColor}`}>03.</span>
            <h2 className={`font-inter font-bold text-2xl md:text-4xl ${secondaryColor}`}>
              Work Experience
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
            {'// where I have worked'}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`absolute left-0 md:left-8 top-0 w-0.5 ${
              theme === 'dark' 
                ? 'bg-gradient-to-b from-[#00D1C7] via-[#00D1C7]/50 to-transparent' 
                : 'bg-gradient-to-b from-[#646AFF] via-[#646AFF]/50 to-transparent'
            }`}
          />

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: 0.5 + index * 0.1 }}
                  className={`absolute left-0 md:left-8 top-0 w-4 h-4 -translate-x-1/2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-primary-dark shadow-glow-dark' 
                      : 'bg-primary-light shadow-glow-light'
                  }`}
                >
                  {/* Pulse Animation */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full ${
                      theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'
                    }`}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`${glassClass} rounded-2xl p-6 md:p-8 border ${borderGlass}`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className={`font-inter font-bold text-xl md:text-2xl ${primaryColor}`}>
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`font-jetbrains text-base md:text-lg ${secondaryColor}`}>
                          @ {exp.company}
                        </span>
                        {exp.location && (
                          <span className={`font-jetbrains text-xs ${secondaryColor} opacity-60`}>
                            • {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className={`font-jetbrains text-xs md:text-sm px-3 py-1.5 rounded-full ${
                        theme === 'dark'
                          ? 'bg-primary-dark/10 text-primary-dark border border-primary-dark/30'
                          : 'bg-primary-light/10 text-primary-light border border-primary-light/30'
                      }`}
                    >
                      {exp.duration}
                    </motion.span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <motion.li
                        key={descIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * descIndex }}
                        className="flex items-start gap-3"
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'
                        }`} />
                        <span className={`font-inter text-sm md:text-base ${secondaryColor} opacity-80 leading-relaxed`}>
                          {desc}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Career;
