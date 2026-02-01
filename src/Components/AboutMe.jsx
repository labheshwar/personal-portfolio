import { useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { personalInfo, education } from '../config';

const AboutMe = () => {
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
        staggerChildren: 0.15,
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

  const highlights = [
    { icon: '🏗️', title: 'Enterprise Solutions', desc: 'Building enterprise-grade applications' },
    { icon: '🌍', title: 'International Scale', desc: 'Scalable multi-region platforms' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'Tight deadlines with clean architecture' },
    { icon: '🎯', title: 'Quality Focus', desc: 'High code quality & best practices' },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 md:px-20 py-20"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className={`font-jetbrains text-sm ${primaryColor}`}>00.</span>
            <h2 className={`font-inter font-bold text-2xl md:text-4xl ${secondaryColor}`}>
              About Me
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
            {'// who am i & what drives me'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className={`${glassClass} rounded-2xl p-6 md:p-8 border ${borderGlass}`}>
              <motion.p 
                className={`font-inter text-base md:text-lg leading-relaxed ${secondaryColor}`}
              >
                {personalInfo.bio}
              </motion.p>
              
              <motion.p 
                className={`font-inter text-base md:text-lg leading-relaxed ${secondaryColor} opacity-80 mt-4`}
              >
                {personalInfo.tagline}
              </motion.p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`${glassClass} rounded-xl p-4 border ${borderGlass} cursor-default`}
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h4 className={`font-inter font-semibold text-sm ${primaryColor}`}>
                    {item.title}
                  </h4>
                  <p className={`font-inter text-xs ${secondaryColor} opacity-70 mt-1`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Code Block Style */}
          <motion.div variants={itemVariants}>
            {/* Terminal Window */}
            <div className={`${glassClass} rounded-2xl overflow-hidden border ${borderGlass}`}>
              {/* Terminal Header */}
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${borderGlass}`}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className={`font-jetbrains text-xs ${secondaryColor} opacity-60 ml-2`}>
                  about-labheshwar.js
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-jetbrains text-sm space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className={`${primaryColor}`}>const</span>
                  <span className={secondaryColor}> developer = {'{'}</span>
                </motion.div>

                <motion.div 
                  className="pl-4 space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div>
                    <span className={`${primaryColor}`}>name:</span>
                    <span className="text-green-400"> &quot;Labheshwar&quot;</span>,
                  </div>
                  <div>
                    <span className={`${primaryColor}`}>role:</span>
                    <span className="text-green-400"> &quot;Software Engineer&quot;</span>,
                  </div>
                  <div>
                    <span className={`${primaryColor}`}>experience:</span>
                    <span className="text-orange-400"> &quot;3+ years&quot;</span>,
                  </div>
                  <div>
                    <span className={`${primaryColor}`}>focus:</span>
                    <span className="text-green-400"> &quot;Enterprise Applications&quot;</span>,
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span className={secondaryColor}>{'}'}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 pt-4 border-t border-white/10"
                >
                  <span className={`${primaryColor}`}>{'// Education'}</span>
                  <div className="mt-2 space-y-1">
                    <div className={secondaryColor}>
                      🎓 {education.degree}
                    </div>
                    <div className={`${primaryColor} text-sm`}>
                      CGPA: {education.cgpa}
                    </div>
                    <div className={`${secondaryColor} opacity-70 text-sm`}>
                      {education.university}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className={`mt-4 p-4 rounded-xl ${glassClass} border ${borderGlass}`}
            >
              <span className={`font-jetbrains text-xs ${primaryColor}`}>
                {'> '}
              </span>
              <span className={`font-inter text-sm ${secondaryColor}`}>
                Get it done. Fast. With clean, maintainable code.
              </span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className={`font-jetbrains ${primaryColor}`}
              >
                _
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
