import PropTypes from 'prop-types';

const SkillBox = ({ theme, skillRank, skillName }) => {
  const secondaryColor =
    theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

  const backgroundColor =
    theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark';

  return (
    <div className='flex items-center p-2 md:p-3 xl:p-4 2xl:p-5'>
      <h3
        className={`font-roboto w-40 md:w-60 text-md md:text-2xl lg:text-3xl 2xl:text-4xl ${secondaryColor}`}
      >
        {skillName}
      </h3>
      <div className='flex items-center ml-4 md:ml-16 lg:ml-20 w-full justify-between'>
        {[1, 2, 3, 4, 5].map((rank) => (
          <div
            key={rank}
            className={`w-1/6 h-12 rounded-lg ${
              rank <= skillRank ? backgroundColor : 'bg-gray-300'
            } ${rank <= skillRank ? 'opacity-' + rank * 20 : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;

SkillBox.propTypes = {
  theme: PropTypes.string.isRequired,
  skillRank: PropTypes.number.isRequired,
  skillName: PropTypes.string.isRequired,
};
