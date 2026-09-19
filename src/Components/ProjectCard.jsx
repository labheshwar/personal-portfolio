import { motion } from 'framer-motion';
import Icon from './Icon';

export const ProjectCard = ({
  theme,
  name,
  description,
  techStack,
  githubLink,
  demoLink,
  isProfessional,
  isPrivate,
  impact,
  index
}) => {
  const primaryColor = theme === 'light' ? 'text-primary-light' : 'text-primary-dark';
  const secondaryColor = theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';
  const glassClass = theme === 'dark' ? 'glass-dark' : 'glass-light';
  const borderGlass = theme === 'dark' ? 'border-glass-dark' : 'border-glass-light';
  const hoverClass = theme === 'dark' ? 'card-hover-dark' : 'card-hover-light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`${glassClass} relative overflow-hidden rounded-2xl p-6 h-full flex flex-col border ${borderGlass} ${hoverClass} group`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {/* Folder Icon */}
          <motion.div
            whileHover={{ rotate: -10 }}
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-[#00D1C7]/20 to-[#00F5A0]/20' 
                : 'bg-gradient-to-br from-[#646AFF]/20 to-[#8B5CF6]/20'
            }`}
          >
            <span className={primaryColor}><Icon name="folder" size={22} /></span>
          </motion.div>
          
          {/* Professional Badge */}
          {isProfessional && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.3 }}
              className={`text-xs font-jetbrains px-2 py-1 rounded-full ${
                theme === 'dark'
                  ? 'bg-primary-dark/20 text-primary-dark border border-primary-dark/30'
                  : 'bg-primary-light/20 text-primary-light border border-primary-light/30'
              }`}
            >
              Professional
            </motion.span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {githubLink !== '#' && (
            <motion.a 
              href={githubLink} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
              } transition-colors`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill={theme === 'dark' ? '#EDEDED' : '#262626'}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
          )}
          {demoLink !== '#' && (
            <motion.a 
              href={demoLink} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
              } transition-colors`}
            >
              <span className={secondaryColor}><Icon name="external" size={18} /></span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className={`font-inter font-bold text-xl md:text-2xl ${secondaryColor} ${
          theme === 'dark' ? 'group-hover:text-primary-dark' : 'group-hover:text-primary-light'
        } transition-colors mb-3`}>
          {name}
        </h3>
        
        <p className={`font-inter text-sm md:text-base ${secondaryColor} opacity-70 mb-4 leading-relaxed`}>
          {description}
        </p>

        {/* Impact — concrete outcomes, since a private repo cannot speak for itself */}
        {impact?.length > 0 && (
          <ul className="mb-4 space-y-1.5">
            {impact.map((point) => (
              <li
                key={point}
                className={`font-inter text-xs md:text-sm flex gap-2 ${secondaryColor} opacity-80`}
              >
                <span className={primaryColor} aria-hidden="true">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* A private codebase is a fact worth stating plainly, not an empty card */}
        {isPrivate && (
          <p className={`font-jetbrains text-xs ${primaryColor} opacity-70 mb-4 flex items-center gap-1.5`}>
            <Icon name="lock" size={14} />
            Proprietary codebase — happy to walk through the architecture
          </p>
        )}

        <div className="flex-1" />

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.slice(0, 6).map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + techIndex * 0.03 }}
              className={`font-jetbrains text-xs px-3 py-1.5 rounded-md ${
                theme === 'dark'
                  ? 'bg-primary-dark/20 text-primary-dark border border-primary-dark/40'
                  : 'bg-primary-light/20 text-primary-light border border-primary-light/40'
              }`}
            >
              {tech}
            </motion.span>
          ))}
          {techStack.length > 6 && (
            <span className={`font-jetbrains text-xs px-3 py-1.5 ${primaryColor}`}>
              +{techStack.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Hover Gradient Line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#00D1C7] to-[#00F5A0]'
            : 'bg-gradient-to-r from-[#646AFF] to-[#8B5CF6]'
        }`}
      />
    </motion.div>
  );
};

export default ProjectCard;

