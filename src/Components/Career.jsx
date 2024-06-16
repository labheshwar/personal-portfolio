import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import { experience } from '../config';

const Career = () => {
  const { theme } = useContext(ThemeContext);

  const textColor =
    theme === 'light' ? 'text-primary-light' : 'text-primary-dark';
  const secondaryColor =
    theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';
  const borderColor =
    theme === 'light' ? 'border-primary-light' : 'border-primary-dark';

  return (
    <main
      className='flex flex-col px-8 md:px-20 mt-8 md:mt-20'
      id='career'
      data-aos='fade-down-right'
    >
      <h2
        className={`font-robotoFlex font-bold text-xl md:text-2xl lg:text-4xl 2xl:text-5xl ${secondaryColor}`}
      >
        <span className={`${textColor} font-menlo`}>03. </span> &lt;my working
        career&gt;
      </h2>
      <div>
        {experience?.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const isFirst = index === 0;
          const isLast = index === experience?.length - 1;
          const containerClasses = `
            ${isFirst ? 'mt-10' : 'mt-[50px] md:mt-[100px]'}
            w-full md:w-3/4 lg:w-3/5 xl:w-2/4 flex flex-col
            ${!isLast && 'experience-container'}
            ${isLeft ? 'left ml-auto' : 'right mr-auto'} ${theme}
          `;

          return (
            <div className={containerClasses.trim()} key={index}>
              <div
                className={`border-2 w-full ${borderColor} p-4 md:p-5 lg:p-6 flex flex-col gap-5`}
              >
                <h4
                  className={`font-roboto tracking-wider font-medium text-lg md:text-xl lg:text-2xl ${secondaryColor}`}
                >
                  {exp.position}
                </h4>
                <div className='flex justify-between items-center'>
                  <h3
                    className={`font-semibold font-menlo text-lg md:text-xl lg:text-2xl tracking-tighter sm:tracking-normal ${textColor}`}
                  >
                    - {exp.company}
                  </h3>
                  <p
                    className={`font-semibold font-menlo text-md md:text-lg lg:text-xl tracking-tighter sm:tracking-normal ${secondaryColor}`}
                  >
                    [{exp.duration}]
                  </p>
                </div>
              </div>
              <div
                className={`border-2 w-full mt-5 p-4 md:p-5 lg:p-6 ${borderColor}`}
              >
                <ul className='list-disc pl-5'>
                  {exp.description.map((desc, index) => (
                    <li
                      key={index}
                      className={`${textColor} text-2xl`}
                      style={{
                        listStyleType: 'disc',
                        listStylePosition: 'outside',
                      }}
                    >
                    <p
                      className={`font-robotoFlex text-md md:text-lg lg:text-xl font-medium ${secondaryColor} opacity-80`}
                      style={{
                        listStyleType: 'disc',
                        listStylePosition: 'outside',
                      }}
                    >
                      {desc}
                    </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <h2
        className={`font-robotoFlex mt-[50px] font-bold self-end text-lg md:text-xl lg:text-3xl 2xl:text-4xl opacity-30 ${secondaryColor}`}
      >
        &lt;/my working career&gt;
      </h2>
    </main>
  );
};

export default Career;
