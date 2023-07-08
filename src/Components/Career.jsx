import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import { experience } from '../config';

const Career = () => {
  const { theme } = useContext(ThemeContext);

  const textColor =
    theme === 'light' ? 'text-primary-light' : 'text-primary-dark';

  const secondaryColor =
    theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

  return (
    <main className='flex flex-col px-8 md:px-20 mt-8 md:mt-20' id='career'>
      <h2
        className={`font-robotoFlex font-bold  text-xl md:text-2xl lg:text-4xl 2xl:text-5xl ${secondaryColor}`}
      >
        <span className={`${textColor} font-menlo`}>03. </span> &lt;my working
        career&gt;
      </h2>
      <div className='mt-10'>
        {experience.map((exp, index) => (
          <div
            key={index}
            className='flex flex-col lg:flex-row justify-between mb-8'
          >
            <p className='font-roboto text-md sm:text-lg md:text-2xl lg:text-3xl 2xl:text-4xl'>
              <span className={`${textColor}`}>{exp.position}</span>
              <span className={`${secondaryColor}`}>
                {' @ '}
                {exp.company}.
              </span>
            </p>
            <p
              className={`font-menlo text-sm sm:text-xl md:text-2xl  2xl:text-2xl self-end ${secondaryColor}`}
            >
              {'From ' + exp.duration}
            </p>
          </div>
        ))}
      </div>
      <h2
        className={`font-robotoFlex font-bold mt-8 self-end text-lg md:text-xl lg:text-3xl 2xl:text-4xl opacity-30 ${secondaryColor}`}
      >
        &lt;/my working career&gt;
      </h2>
    </main>
  );
};

export default Career;
