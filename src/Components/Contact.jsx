import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import EmailLight from '../Assets/email-light.png';
import EmailDark from '../Assets/email-dark.png';
import GithubLight from '../Assets/github-light.svg';
import GithubDark from '../Assets/github-dark.svg';
import LinkedinLight from '../Assets/linkedin-light.svg';
import LinkedinDark from '../Assets/linkedin-dark.svg';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const backgroundColor =
    theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark';

  const buttonSecondaryTextColor =
    theme === 'dark' ? 'text-secondary-dark' : 'text-secondary-light';

  const textColor =
    theme === 'light' ? 'text-primary-light' : 'text-primary-dark';

  const secondaryColor =
    theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

  return (
    <main
      className='flex flex-col px-8 md:px-20 py-8 md:py-20'
      id='contact'
      data-aos='fade-down-right'
    >
      <h2
        className={`font-robotoFlex font-bold  text-xl md:text-2xl lg:text-4xl 2xl:text-5xl ${secondaryColor}`}
      >
        <span className={`${textColor} font-menlo`}>04. </span> &lt;get in
        touch&gt;
      </h2>
      <div className='flex flex-col'>
        <p
          className={`font-roboto font-light text-lg md:text-xl lg:text-2xl 2xl:text-3xl my-8 ${secondaryColor}`}
        >
          My inbox is always open. Whether you have a question or project or
          just want to say hi, I&apos;ll try my best to get back to you asap!
        </p>
        <div className='flex flex-col justify-between md:flex-row md:items-center'>
          <div className='flex mb-8 md:mb-0 self-center w-3/5  md:w-2/5 justify-between'>
            <a
              href='mailto:labheshwar.work@gmail.com'
              target='_blank'
              rel='noreferrer'
              data-aos='fade-right'
              data-aos-duration='300'
            >
              {theme === 'dark' ? (
                <img
                  src={EmailDark}
                  alt='Email Icon'
                  className='w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14'
                />
              ) : (
                <img
                  src={EmailLight}
                  alt='Email Icon'
                  className='w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14'
                />
              )}
            </a>
            <a
              href='https://www.github.com/labheshwar'
              target='_blank'
              rel='noreferrer'
              data-aos='fade-right'
              data-aos-duration='450'
            >
              {theme === 'dark' ? (
                <img
                  src={GithubDark}
                  alt='Github Icon'
                  className='w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14'
                />
              ) : (
                <img
                  src={GithubLight}
                  alt='Github Icon'
                  className='w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14'
                />
              )}
            </a>
            <a
              href='https://www.linkedin.com/in/labheshwar'
              target='_blank'
              rel='noreferrer'
              data-aos='fade-right'
              data-aos-duration='600'
            >
              {theme === 'dark' ? (
                <img
                  src={LinkedinDark}
                  alt='Linkedin Icon'
                  className='w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14'
                />
              ) : (
                <img
                  src={LinkedinLight}
                  alt='Linkedin Icon'
                  className='w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14'
                />
              )}
            </a>
          </div>
          <button
            data-aos='fade-left'
            data-aos-duration='500'
            className={`font-menlo ${backgroundColor}  md:w-44 2xl:w-60 2xl:h-16 h-14 rounded-xl ${buttonSecondaryTextColor} hover:bg-opacity-80 text-xl`}
          >
            <a
              href='https://wa.me/+923438370414'
              target='_blank'
              rel='noreferrer'
            >
              Say Hello!
            </a>
          </button>
        </div>
      </div>
      <h2
        className={`font-robotoFlex font-bold mt-8 self-end text-lg md:text-xl lg:text-3xl 2xl:text-4xl opacity-30 ${secondaryColor}`}
      >
        &lt;/get in touch&gt;
      </h2>
    </main>
  );
};

export default Contact;
