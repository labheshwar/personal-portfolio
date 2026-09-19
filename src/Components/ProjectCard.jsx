import { motion } from 'framer-motion';
import Icon from './Icon';
import ProjectCover from './ProjectCover';

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
      className={`${glassClass} relative overflow-hidden rounded-2xl h-full flex flex-col border ${borderGlass} ${hoverClass} group`}
    >
      {/* Generated cover — these projects have no screenshots to show */}
      <div className="relative h-[130px] overflow-hidden">
        <ProjectCover
          name={name}
          theme={theme}
          className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.06]"
        />

        <div className="absolute inset-x-5 top-4 flex items-start justify-between gap-3">
          {isProfessional && (
            <span
              className={`font-jetbrains text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md ${
                theme === 'dark'
                  ? 'bg-black/40 text-primary-dark border border-primary-dark/30'
                  : 'bg-white/60 text-primary-light border border-primary-light/30'
              }`}
            >
              Professional
            </span>
          )}

          <div className="flex gap-2 ml-auto">
            {githubLink !== '#' && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} source`}
                className={`w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-md transition-colors ${
                  theme === 'dark'
                    ? 'bg-black/40 text-secondary-light hover:bg-black/60'
                    : 'bg-white/60 text-secondary-dark hover:bg-white/80'
                }`}
              >
                <Icon name="github" size={17} />
              </a>
            )}
            {demoLink !== '#' && (
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} live demo`}
                className={`w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-md transition-colors ${
                  theme === 'dark'
                    ? 'bg-black/40 text-secondary-light hover:bg-black/60'
                    : 'bg-white/60 text-secondary-dark hover:bg-white/80'
                }`}
              >
                <Icon name="external" size={17} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 pb-6 pt-5">
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

