import './App.css';
import { useState } from 'react';
import ThemeContext from './ThemeContext';
import Navbar from './Components/Navbar';
import Info from './Components/Info';
import LightImg from './Assets/light-bg.png';
import DarkImg from './Assets/dark-bg.png';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={`bg-fixed  bg-cover bg-no-repeat min-h-screen min-w-full`}
        style={{
          backgroundImage: `url(${theme === 'light' ? LightImg : DarkImg})`,
        }}
      >
        <Navbar />
        <Info />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
