import Resume from '../Assets/Resume_Labheshwar.pdf';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Info = () => {
  const { theme } = useContext(ThemeContext);

  const textColor =
    theme === 'light' ? 'text-primary-light' : 'text-primary-dark';
  const borderColor =
    theme === 'light' ? 'border-primary-light' : 'border-primary-dark';

  const backgroundColor =
    theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark';

  const secondaryTextColor =
    theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

  const buttonSecondaryTextColor =
    theme === 'dark' ? 'text-secondary-dark' : 'text-secondary-light';

  const imgShadow =
    theme === 'dark' ? 'drop-shadow-custom-dark' : 'drop-shadow-custom-light';

  return (
    <main className='flex flex-col p-8 mt-20 md:p-20 md:mt-0'>
      <div className='flex flex-col-reverse md:flex-row  items-center justify-between'>
        <h2 className='font-abrilFatface text-3xl md:text-6xl 2xl:text-7xl leading-normal'>
          <span className={`${secondaryTextColor} `}>Hi, I&apos;m</span>
          <span className={`${textColor}`}>
            {' '}
            Labheshwar,
            <p className={`${secondaryTextColor}`}> a full-stack developer.</p>
          </span>
        </h2>
        <div
          className={`relative flex-shrink-0 ml-8 mb-16 md:mb-0 ${imgShadow}`}
        >
          <img
            src={'https://avatars.githubusercontent.com/u/66070272?v=4'}
            alt='profile pic'
            className='w-48 h-48 2xl:w-60 2xl:h-60'
            data-aos='fade-up-right'
          />
          <div
            className={`absolute top-[-0.75rem] left-3 w-48 h-full 2xl:w-60 ${borderColor} border-t-4 border-r-4`}
            data-aos='fade-down-left'
          ></div>
        </div>
      </div>
      <p
        className={`font-roboto text-lg md:text-xl ${secondaryTextColor} md:w-5/6 mt-6 leading-normal 2xl:text-2xl`}
      >
        Software Engineer | PaysysLabs | Meta Certified Frontend Developer |
        6-Star Problem Solver @ HackerRank | JavaScript | Java
      </p>
      <a href={Resume} target='_blank' rel='noreferrer'>
        <button
          data-aos='fade-right'
          className={`font-roboto ${backgroundColor} w-full  md:w-44 2xl:w-52 2xl:h-16 h-14 rounded-md mt-8 ${buttonSecondaryTextColor} hover:bg-opacity-80 flex items-center`}
        >
          <div className='mx-auto flex'>
            <span className={`material-symbols-outlined pr-2`}>download</span>
            My Resume
          </div>
        </button>
      </a>
    </main>
  );
};

export default Info;
