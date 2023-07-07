import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  const textColor =
    theme === 'light' ? 'text-primary-light' : 'text-primary-dark';

  const secondaryColor =
    theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

  return (
    <main className='flex flex-col px-8 md:px-20' id='about'>
      <h2
        className={`font-robotoFlex font-bold  text-xl md:text-2xl lg:text-4xl 2xl:text-5xl ${secondaryColor}`}
      >
        <span className={`${textColor} font-menlo`}>01. </span> &lt;a little
        about me&gt;
      </h2>
      <p
        className={`font-roboto font-light text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-8 ${secondaryColor}`}
      >
        I&apos;ve been sailing the Web-development seas ever since I got
        admission in the University. I&apos;ve been creating everything from
        normal front-end websites all the way to complete full-stack websites
        (from scratch). My tech stack includes React, Node, Express, MongoDB,
        TailwindCSS, Redux, MUI, and a few more.
      </p>
      <h2
        className={`font-robotoFlex font-extraExtraBold text-xl md:text-2xl lg:text-4xl 2xl:text-5xl mt-8 md:mt-20 ${textColor}`}
      >
        Get it done. Fast.
      </h2>
      <p
        className={`font-roboto font-light text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-8 ${secondaryColor}`}
      >
        I write clean and modern JS/TS code with a rigid code-style, and I do it
        really fast. Coming from the times when all we had was Query and plain
        CSS, I prefer to use the technologies as our web lords have intended,
        resulting in simple, maintainable and accessible applications.
      </p>
    </main>
  );
};

export default AboutMe;
