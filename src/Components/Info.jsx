import ProfilePic from '../Assets/profile-pic.png';
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
  return (
    <main className='flex flex-col p-8 mt-20 md:p-20 md:mt-0'>
      <div className='flex flex-col-reverse md:flex-row  items-center justify-between'>
        <h2 className='font-abrilFatface text-3xl md:text-6xl leading-normal'>
          <span className={`${secondaryTextColor} `}>Hi, I&apos;m</span>
          <span className={`${textColor}`}>
            {' '}
            Labheshwar, a full-stack developer.
          </span>
        </h2>
        <div className='relative flex-shrink-0 ml-8 mb-16 md:mb-0'>
          <img src={ProfilePic} alt='profile pic' className='w-48 h-48' />
          <div
            className={`absolute top-[-0.75rem] left-3 w-48 h-full ${borderColor} border-t-4 border-r-4`}
          ></div>
        </div>
      </div>
      <p
        className={`font-roboto text-lg md:text-xl ${secondaryTextColor} md:w-5/6 mt-12 leading-normal`}
      >
        Full Stack Web Developer | Meta Certified Frontend Developer | 6-Star
        Problem Solver @ HackerRank | React.js | Node.js
      </p>
      <button
        className={`font-roboto ${backgroundColor}  md:w-52 h-16 rounded-md mt-12 ${buttonSecondaryTextColor}`}
        onClick={() => window.open(' https://wa.me/+923438370414')}
      >
        Contact me
      </button>
    </main>
  );
};

export default Info;