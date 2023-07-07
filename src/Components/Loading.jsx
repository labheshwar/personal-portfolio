import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Loading = () => {
  const { theme } = useContext(ThemeContext);
  const textColor =
    theme === 'light' ? 'text-primary-light' : 'text-primary-dark';

  return (
    <div
      className={`flex h-screen w-screen justify-center items-center text-7xl font-abrilFatface ${textColor}`}
    >
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
