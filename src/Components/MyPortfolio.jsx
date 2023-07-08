import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import { ProjectCard } from './ProjectCard';

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
        <ProjectCard
          theme={theme}
          name={'Reactive Express'}
          description={
            'Reactive Express is a full-stack E-Commerce website built with MERN Stack. It has features like Authentication, Cart, Payment Gateway, etc.'
          }
          techStack={[
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Redux',
            'Stripe',
          ]}
          githubLink={'https://github.com/labheshwar/ReactiveExpress'}
          demoLink={'https://reactive-express.vercel.app/'}
        />
        <ProjectCard
          theme={theme}
          name={'Gym Exercises'}
          description={
            'Gym Exercises is a Website for people who want to learn about different exercises for different body parts. Used Youtube API to fetch on search.'
          }
          techStack={['React.js', 'Material UI', 'Youtube API']}
          githubLink={'https://github.com/labheshwar/Gym-Exercises'}
          demoLink={'https://goldsgymexercises.netlify.app/'}
        />
        <ProjectCard
          theme={theme}
          name={'Tenzies Game'}
          description={
            'Tenzies is a dice game. It is part of Scrimba React Bootcamp by Bob Ziroll. '
          }
          techStack={['React.js']}
          githubLink={'https://github.com/labheshwar/tenzies-game'}
          demoLink={'https://tenziesgamebylabheshwar.netlify.app/'}
        />
        <ProjectCard
          theme={theme}
          name={'Hair Day'}
          description={
            'Hair Day is a home page website for a hair salon. It is graded assignemnt of Meta Frontend Professional Certificate program.'
          }
          techStack={['HTML', 'CSS']}
          githubLink={'https://hairdaybylabheshwar.netlify.app/'}
          demoLink={'https://hairdaybylabheshwar.netlify.app/'}
        />
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
