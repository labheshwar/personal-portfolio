import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

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
    <main className='flex flex-col px-8 md:px-20 py-8 md:py-20' id='contact'>
      <h2
        className={`font-robotoFlex font-bold  text-xl md:text-2xl lg:text-4xl 2xl:text-5xl ${secondaryColor}`}
      >
        <span className={`${textColor} font-menlo`}>04. </span> &lt;get in
        touch&gt;
      </h2>
      <div className='flex flex-col'>
        <p
          className={`font-roboto font-light text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-8 ${secondaryColor}`}
        >
          My inbox is always open. Whether you have a question or project or
          just want to say hi, I&apos;ll try my best to get back to you asap!
        </p>
        <button
          className={`font-menlo ${backgroundColor}  md:w-44 2xl:w-52 2xl:h-16 h-14 rounded-xl mt-8 ${buttonSecondaryTextColor} hover:bg-opacity-80 text-2xl`}
        >
          <a href='https://wa.me/+923438370414'>Say Hello!</a>
        </button>
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
