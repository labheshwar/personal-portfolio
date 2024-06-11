import { PropTypes } from 'prop-types';

const SkillColor = ({ rank, backgroundColor }) => {
    
  return (
    <div
      key={rank}
      className='w-1/6 h-12 rounded-lg'
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
