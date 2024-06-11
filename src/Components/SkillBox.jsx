import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

const SkillBox = ({ theme, skillRank, skillName }) => {
  const isLightTheme = theme === 'light';
  const [width, setWidth] = useState(0);
  const skillBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { current } = skillBoxRef;
      if (current) {
        const { top, bottom } = current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible) {
          setWidth((skillRank / 5) * 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skillRank]);

  const getColorByRankAndPercentage = (rank, percentage) => {
    const lightStartColor = '#D3D3FF';
    const lightEndColor = '#646AFF';

    const darkStartColor = '#C6F7F5';
    const darkEndColor = '#00D1C7';

    const startColor = isLightTheme ? lightStartColor : darkStartColor;
    const endColor = isLightTheme ? lightEndColor : darkEndColor;

    const maxPercentage = (rank / 5) * 100;

    const adjustedPercentage = Math.min(percentage, maxPercentage);


    const r = Math.floor(
      parseInt(startColor.slice(1, 3), 16) * (1 - adjustedPercentage / 100) +
        parseInt(endColor.slice(1, 3), 16) * (adjustedPercentage / 100)
    );
    const g = Math.floor(
      parseInt(startColor.slice(3, 5), 16) * (1 - adjustedPercentage / 100) +
        parseInt(endColor.slice(3, 5), 16) * (adjustedPercentage / 100)
    );
    const b = Math.floor(
      parseInt(startColor.slice(5, 7), 16) * (1 - adjustedPercentage / 100) +
        parseInt(endColor.slice(5, 7), 16) * (adjustedPercentage / 100)
    );

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  };


  const startColor = getColorByRankAndPercentage(skillRank, 0); // Light or dark shade start color
  const endColor = getColorByRankAndPercentage(skillRank, 100);

  // Create style for the skill box
  const skillBoxStyle = {
    background: !isLightTheme && (skillRank / 5) * 100 === 100 ? `linear-gradient(to right, #C6F7F5, #00D1C7)` : `linear-gradient(to right, ${startColor}, ${endColor})`,
    width: `${width}%`, // Set the width dynamically based on the skill rank
    transition: 'width 0.5s linear',
  };

  return (
    <div ref={skillBoxRef} className='flex items-center p-2 md:p-3 xl:p-4 2xl:p-5'>
      <h3
        className={`w-40 md:w-60 font-menlo text-sm md:text-lg lg:text-xl 2xl:text-2xl ${
          isLightTheme ? 'text-secondary-dark' : 'text-secondary-light'
        }`}
      >
        {skillName}
      </h3>
      <div
        key={skillRank}
        className={`w-full ml-0 pl-0 bg-gray-200 rounded-full dark:bg-gray-700`}
      >
        <div
          className={`text-xs font-medium text-center p-0.5 leading-none rounded-full ${
            !isLightTheme ? 'text-cyan-900' : 'text-blue-900'
          }`}
          style={skillBoxStyle}
        >
          {(skillRank / 5) * 100}%
        </div>
      </div>
    </div>
  );
};

SkillBox.propTypes = {
  theme: PropTypes.string.isRequired,
  skillRank: PropTypes.number.isRequired,
  skillName: PropTypes.string.isRequired
}

export default SkillBox;