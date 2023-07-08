import PropTypes from 'prop-types';

const SkillBox = ({ theme, skillRank, skillName }) => {
  const isLightTheme = theme === 'light';

  const getColorByRank = (rank) => {
    switch (rank) {
      case 1:
        return isLightTheme ? '#D3D3FF' : '#C6F7F5';
      case 2:
        return isLightTheme ? '#AFAFFF' : '#92EDE7';
      case 3:
        return isLightTheme ? '#8C8CFF' : '#5EE4DB';
      case 4:
        return isLightTheme ? '#6969FF' : '#2BDCD0';
      case 5:
        return isLightTheme ? '#646AFF' : '#00D1C7';
      default:
        return '#D9D9D9';
    }
  };

  return (
    <div className='flex items-center p-2 md:p-3 xl:p-4 2xl:p-5'>
      <h3
        className={`font-roboto w-40 md:w-60 text-md md:text-2xl lg:text-3xl 2xl:text-4xl ${
          isLightTheme ? 'text-secondary-dark' : 'text-secondary-light'
        }`}
      >
        {skillName}
      </h3>
      <div className='flex items-center ml-4 md:ml-16 lg:ml-20 w-full justify-between'>
        {[1, 2, 3, 4, 5].map((rank) => {
          const backgroundColor =
            rank <= skillRank ? getColorByRank(rank) : '#D9D9D9';
          return (
            <div
              key={rank}
              className='w-1/6 h-12 rounded-lg'
              style={{ backgroundColor }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

SkillBox.propTypes = {
  theme: PropTypes.string.isRequired,
  skillRank: PropTypes.number.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillBox;
