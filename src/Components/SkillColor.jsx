import { PropTypes } from 'prop-types';

const SkillColor = ({ rank, backgroundColor }) => {
    
  return (
    <div
      key={rank}
      className='w-6 h-6 xs:w-8 xs:h-8 sm:w-12 md:w-1/6 sm:h-12 rounded-full lg:rounded-lg'
      style={{ backgroundColor }}
      data-aos='fade-right'
      data-aos-easing="linear"
      data-aos-duration={rank * 200}
    ></div>
  );
};

SkillColor.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default SkillColor;
