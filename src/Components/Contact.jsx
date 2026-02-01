import { useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { personalInfo } from '../config';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const primaryColor = theme === 'light' ? 'text-primary-light' : 'text-primary-dark';
  const secondaryColor = theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';
  const glassClass = theme === 'dark' ? 'glass-dark' : 'glass-light';
  const borderGlass = theme === 'dark' ? 'border-glass-dark' : 'border-glass-light';
  const glowClass = theme === 'dark' ? 'glow-dark' : 'glow-light';

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

  const contactMethods = [
    {
      icon: 'mail',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: 'call',
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: 'code',
      label: 'GitHub',
      value: 'github.com/labheshwar',
      href: personalInfo.github,
    },
    {
      icon: 'work',
      label: 'LinkedIn',
      value: 'linkedin.com/in/labheshwar',
      href: personalInfo.linkedin,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 md:px-20 py-20"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`font-jetbrains text-sm ${primaryColor}`}>04.</span>
            <h2 className={`font-inter font-bold text-2xl md:text-4xl ${secondaryColor}`}>
              Get In Touch
            </h2>
          </div>
          <p className={`font-jetbrains text-xs ${primaryColor} opacity-60`}>
            {'// let\'s work together'}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Message */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className={`${glassClass} rounded-2xl p-8 border ${borderGlass}`}>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`font-inter font-bold text-2xl md:text-3xl ${secondaryColor} mb-4`}
              >
                Let&apos;s build something amazing together
              </motion.h3>
              <p className={`font-inter text-base md:text-lg ${secondaryColor} opacity-80 leading-relaxed`}>
                My inbox is always open. Whether you have a project in mind, a question, 
                or just want to say hi – I&apos;ll try my best to get back to you!
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: '⚡', label: 'Fast Response', value: '< 24 hours' },
                  { icon: '🌍', label: 'Available For', value: 'Remote Work' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`p-4 rounded-xl ${
                      theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                    }`}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                    <p className={`font-jetbrains text-xs ${secondaryColor} opacity-60 mt-2`}>
                      {stat.label}
                    </p>
                    <p className={`font-inter font-semibold text-sm ${primaryColor}`}>
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`block w-full py-4 rounded-xl font-jetbrains text-center ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-[#00D1C7] to-[#00F5A0] text-gray-900' 
                  : 'bg-gradient-to-r from-[#646AFF] to-[#8B5CF6] text-white'
              } ${glowClass} font-semibold text-lg`}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">send</span>
                Say Hello!
              </span>
            </motion.a>
          </motion.div>

          {/* Right - Contact Cards */}
          <motion.div variants={itemVariants} className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 8, scale: 1.01 }}
                className={`group flex items-center gap-4 p-4 rounded-xl ${glassClass} border ${borderGlass} cursor-pointer`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-primary-dark/10 group-hover:bg-primary-dark/20' 
                    : 'bg-primary-light/10 group-hover:bg-primary-light/20'
                } transition-colors`}>
                  <span className={`material-symbols-outlined text-2xl ${primaryColor}`}>
                    {method.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className={`font-jetbrains text-xs ${secondaryColor} opacity-60`}>
                    {method.label}
                  </p>
                  <p className={`font-inter font-medium ${secondaryColor} group-hover:${primaryColor} transition-colors`}>
                    {method.value}
                  </p>
                </div>

                {/* Arrow */}
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className={`material-symbols-outlined ${primaryColor} opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  arrow_forward
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className={`${glassClass} rounded-2xl p-6 border ${borderGlass} inline-block`}>
            <p className={`font-jetbrains text-sm ${secondaryColor} opacity-60`}>
              {'<'} Designed & Built by{' '}
              <span className={primaryColor}>Labheshwar</span>
              {' />'}
            </p>
            <p className={`font-inter text-xs ${secondaryColor} opacity-40 mt-2`}>
              {`© ${new Date().getFullYear()} All Rights Reserved`}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
