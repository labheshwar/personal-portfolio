import { useContext, useState } from 'react';
import ThemeContext from '../ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState(0);

  const anchorTagColor =
    theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

  const spanColor =
    theme === 'light' ? 'text-primary-light' : 'text-primary-dark';

  const borderColor =
    theme === 'light' ? 'border-primary-light' : 'border-primary-dark';

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className='px-8 pt-4 flex items-center'>
      <button
        onClick={toggleTheme}
        className={`material-symbols-outlined ${
          theme === 'light'
            ? 'text-primary-light hover:text-primary-dark'
            : 'text-primary-dark hover:text-primary-light'
        } cursor-pointer transition-colors duration-300 ease-in-out text-4xl`}
      >
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </button>
      <ul className='flex flex-col items-start mt-8 md:mt-0 md:flex-row md:items-center justify-center  ml-auto text-xl font-menlo'>
        <li>
          <span className={`${spanColor} mr-1`}>00.</span>
          <a
            href='#'
            className={`${anchorTagColor} p-1 ${
              activeLink === 0 ? `border-b-2 ${borderColor}` : ''
            }`}
            onClick={() => handleLinkClick(0)}
          >
            &lt;about&gt;
          </a>
        </li>
        <li>
          <span className={`${spanColor} mr-1`}>01.</span>
          <a
            href='#'
            className={`${anchorTagColor} p-1 ${
              activeLink === 1 ? `border-b-2 ${borderColor}` : ''
            }`}
            onClick={() => handleLinkClick(1)}
          >
            &lt;skills&gt;
          </a>
        </li>
        <li>
          <span className={`${spanColor} mr-1`}>02.</span>
          <a
            href='#'
            className={`${anchorTagColor} p-1 ${
              activeLink === 2 ? `border-b-2 ${borderColor}` : ''
            }`}
            onClick={() => handleLinkClick(2)}
          >
            &lt;portfolio&gt;
          </a>
        </li>
        <li>
          <span className={`${spanColor} mr-1`}>03.</span>
          <a
            href='#'
            className={`${anchorTagColor} p-1 ${
              activeLink === 3 ? `border-b-2 ${borderColor}` : ''
            }`}
            onClick={() => handleLinkClick(3)}
          >
            &lt;career&gt;
          </a>
        </li>
        <li>
          <span className={`${spanColor} mr-1`}>04.</span>
          <a
            href='#'
            className={`${anchorTagColor} p-1 ${
              activeLink === 4 ? `border-b-2 ${borderColor}` : ''
            }`}
            onClick={() => handleLinkClick(4)}
          >
            &lt;contact&gt;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
