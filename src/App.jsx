import './App.css';
import { useState } from 'react';
import ThemeContext from './ThemeContext';
import Navbar from './Components/Navbar';
import Info from './Components/Info';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeClass = theme === 'light' ? 'light' : 'dark';

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={`bg-fixed  bg-cover bg-no-repeat min-h-screen min-w-full`}
        style={{ backgroundImage: `url('./src/Assets/${themeClass}-bg.png')` }}
      >
        <Navbar />
        <Info />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
