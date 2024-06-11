import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import { ProjectCard } from './ProjectCard';
import { portfolioData } from '../config';

const MyPortfolio = () => {
  const { theme } = useContext(ThemeContext);

  const textColor =
    theme === 'light' ? 'text-primary-light' : 'text-primary-dark';

  const secondaryColor =
    theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

  return (
    <main className='flex flex-col px-8 md:px-20 mt-8 md:mt-20' id='portfolio'>
      <h2
        className={`font-robotoFlex font-bold  text-xl md:text-2xl lg:text-4xl 2xl:text-5xl ${secondaryColor}`}
      >
        <span className={`${textColor} font-menlo`}>02. </span> &lt;my
        portfolio&gt;
      </h2>
      <p
        className={`font-roboto font-light text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-8 ${secondaryColor}`}
      >
        A small gallery of my recent projects. My main tech stack is MERN Stack
        and most of my projects are built with it. Here are a few.
      </p>
      <div className='flex flex-wrap justify-between'>
        {portfolioData.map((project, index) => (
          <ProjectCard
            key={index}
            theme={theme}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
            dataAos={index % 2 === 0 ? 'fade-down-right' : 'fade-down-left'}
          />
        ))}
      </div>

      <h2
        className={`font-robotoFlex font-bold mt-8 self-end text-lg md:text-xl lg:text-3xl 2xl:text-4xl opacity-30 ${secondaryColor}`}
      >
        &lt;/my portfolio&gt;
      </h2>
    </main>
  );
};

export default MyPortfolio;
