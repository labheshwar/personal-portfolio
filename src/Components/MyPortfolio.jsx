import { useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { ProjectCard } from './ProjectCard';
import { portfolioData } from '../config';

const MyPortfolio = () => {
  const { theme } = useContext(ThemeContext);

  const primaryColor = theme === 'light' ? 'text-primary-light' : 'text-primary-dark';
  const secondaryColor = theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 md:px-20 py-20"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className={`font-jetbrains text-sm ${primaryColor}`}>01.</span>
            <h2 className={`font-inter font-bold text-2xl md:text-4xl ${secondaryColor}`}>
              Featured Projects
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
            {'// some things I have built'}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className={`font-inter text-base md:text-lg ${secondaryColor} opacity-80 max-w-3xl mb-10`}
        >
          A curated collection of projects showcasing my expertise in building enterprise-grade 
          applications, fintech solutions, and modern web experiences.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.map((project, index) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              custom={index}
            >
              <ProjectCard
                theme={theme}
                name={project.name}
                description={project.description}
                techStack={project.techStack}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                isProfessional={project.isProfessional}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MyPortfolio;
