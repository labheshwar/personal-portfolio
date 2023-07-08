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
import MyPortfolio from './Components/MyPortfolio';
import Career from './Components/Career';
import Contact from './Components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');
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
            <MyPortfolio />
            <Career />
            <Contact />
          </div>
        </>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
