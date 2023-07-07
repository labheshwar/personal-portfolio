import './App.css';
import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';
import Navbar from './Components/Navbar';
import Info from './Components/Info';
import LightImg from './Assets/light-bg.png';
import DarkImg from './Assets/dark-bg.png';
import Loading from './Components/Loading';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
  };

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = theme === 'light' ? LightImg : DarkImg;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            className={`bg-fixed bg-cover bg-no-repeat min-h-screen min-w-full`}
            style={{
              backgroundImage: `url(${theme === 'light' ? LightImg : DarkImg})`,
            }}
          >
            <Navbar />
            <Info />
            <AboutMe />
            <Skills />
          </div>
        </>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
