import PropTypes from 'prop-types';

export const ProjectCard = ({
  theme,
  name,
  description,
  techStack,
  githubLink,
  demoLink,
}) => {
  const iconColor = theme === 'light' ? '#000000' : '#A7A7A7';
  const textColor = theme === 'light' ? 'text-black' : 'text-[#D9D9D9]';
  return (
    <div
      className={`${theme === 'dark' ? 'bg-dark-20' : 'bg-white'} ${
        theme === 'light' && 'shadow-gray-400'
      } shadow-xl rounded-3xl mt-8 w-full px-6 py-4 h-auto flex flex-col md:w-[46%]`}
    >
      <div className='flex justify-between items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 32 32'
          fill={`${theme === 'light' ? '#646AFF' : '#00D1C7'}`}
          id='file'
        >
          <g data-name='Layer 2'>
            <path d='M28.19,29H3.81A2.81,2.81,0,0,1,1,26.19V7H28.19A2.81,2.81,0,0,1,31,9.81V26.19A2.81,2.81,0,0,1,28.19,29ZM3,9V26.19a.81.81,0,0,0,.81.81H28.19a.81.81,0,0,0,.81-.81V9.81A.81.81,0,0,0,28.19,9Z'></path>
            <path d='M17.62,9H1V5.81A2.81,2.81,0,0,1,3.81,3h9.07A2.8,2.8,0,0,1,15.4,4.55ZM3,7H14.38l-.78-1.55A.81.81,0,0,0,12.88,5H3.81A.81.81,0,0,0,3,5.81Z'></path>
          </g>
        </svg>
        <div className='flex'>
          <a href={githubLink} target='_blank' rel='noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              data-name='Layer 1'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              id='github'
              className='mr-2 cursor-pointer'
              fill={iconColor}
            >
              <path d='M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z'></path>
            </svg>
          </a>
          <a href={demoLink} target='_blank' rel='noreferrer'>
            <span
              className={`material-symbols-outlined ${
                theme === 'light' ? 'text-black' : 'text-[#A7A7A7]'
              } w-7 h-7 font-medium cursor-pointer`}
            >
              share_windows
            </span>
          </a>
        </div>
      </div>
      <h2
        className={`font-roboto text-2xl md:text-4xl font-bold ${textColor} mt-4`}
      >
        {name}
      </h2>
      <p
        className={`${textColor} mt-2 ${
          theme === 'light' && 'opacity-60'
        } text-base md:text-lg w-11/12 mb-4`}
      >
        {description}
      </p>
      <div className='flex flex-wrap mt-auto mb-6'>
        {techStack.map((tech) => (
          <span
            key={tech}
            className={`font-menlo text-sm font-medium ${
              theme === 'light'
                ? 'text-black-6 bg-custom-grey'
                : 'text-white bg-custom-grey-5'
            } mt-2 rounded-full px-2 mr-2`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  theme: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
};
