import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import SkillBox from './SkillBox';

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const textColor =
    theme === 'light' ? 'text-primary-light' : 'text-primary-dark';

  const secondaryColor =
    theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

  return (
    <main className='flex flex-col px-8 md:px-20 mt-8 md:mt-20' id='skills'>
      <h2
        className={`font-robotoFlex font-bold  text-xl md:text-2xl lg:text-4xl 2xl:text-5xl ${secondaryColor}`}
      >
        <span className={`${textColor} font-menlo`}>01. </span> &lt;my
        skills&gt;
      </h2>
      <div
        className={`${
          theme === 'dark' ? 'bg-dark-20' : 'bg-white'
        } shadow-[27px 30px 37px 0 rgba(0, 0, 0, 0.2)] rounded-3xl mt-8 w-full px-6 md:px-10 py-8 md:py-14 flex flex-col h-auto justify-between`}
      >
        <SkillBox theme={theme} skillName={'React.js'} skillRank={5} />
        <SkillBox theme={theme} skillName={'Node.js'} skillRank={3} />
        <SkillBox theme={theme} skillName={'Express.js'} skillRank={4} />
        <SkillBox theme={theme} skillName={'Redux.js'} skillRank={3} />
        <SkillBox theme={theme} skillName={'Tailwind.js'} skillRank={5} />
        <SkillBox theme={theme} skillName={'SQL'} skillRank={4} />
        <SkillBox theme={theme} skillName={'Problem Solving'} skillRank={4} />
      </div>
      <h2
        className={`font-robotoFlex font-bold mt-8 self-end text-lg md:text-xl lg:text-3xl 2xl:text-4xl opacity-30 ${secondaryColor}`}
      >
        &lt;/my skills&gt;
      </h2>
    </main>
  );
};

export default Skills;
