import './App.css';
import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';
import Navbar from './Components/Navbar';
import Info from './Components/Info';
import LightImg from './Assets/light-bg.png';
import DarkImg from './Assets/dark-bg.png';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import MyPortfolio from './Components/MyPortfolio';
import Career from './Components/Career';
import Contact from './Components/Contact';
import Loader from './Components/Loader';
import GitHub from './Components/GitHub';
import Aos from 'aos';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolioTheme') || 'dark');
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    const toggledTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('portfolioTheme', toggledTheme);
    setTheme(toggledTheme);
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

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <ThemeContext.Provider value={value}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className={`relative bg-fixed bg-cover bg-no-repeat min-h-screen min-w-full overflow-x-hidden`}
            style={{
              backgroundImage: `url(${theme === 'light' ? LightImg : DarkImg})`,
            }}
          >
            <div className="absolute inset-0 bg-black" style={{opacity: "0.01"}}></div>
            <div className="relative">
              <Navbar aos={Aos} />
              <Info />
              <AboutMe />
              <MyPortfolio />
              <Skills />
              <GitHub />
              <Career />
              <Contact />
            </div>
          </div>
        </>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
