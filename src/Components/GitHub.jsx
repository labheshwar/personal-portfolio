import { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import ThemeContext from "../ThemeContext";

const GitHub = () => {
    const { theme } = useContext(ThemeContext);

    const textColor =
        theme === 'light' ? 'text-primary-light' : 'text-primary-dark';

    const secondaryColor =
        theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';

    const lightColorScheme = {
        dark: [
            '#CAD6F9',
            '#A5B9F7',
            '#809BF5',
            '#5B7EF3',
            '#646AFF',
        ],
        light: [
            '#C8F3F0',
            '#9FEDE8',
            '#77E7E1',
            '#4EE0D9',
            '#00D1C7',
        ],
    };

    return (
        <main className='flex flex-col px-8 md:px-20' id='about'>
            <h2
                className={`font-robotoFlex font-bold  text-xl md:text-2xl lg:text-4xl 2xl:text-5xl ${secondaryColor}`}
            >
                <span className={`${textColor} font-menlo`}>00. </span> &lt;my github stats&gt;
            </h2>
            <div className="mt-7">
                <GitHubCalendar
                    username="labheshwar"
                    blockSize={15}
                    colorScheme={theme === 'light' ? 'dark' : 'light'}
                    fontSize={15}
                    blockMargin={8}
                    style={{
                        color: theme === 'light' ? '#000' : '#fff',
                        fontFamily: 'Roboto Flex',
                    }}
                    color="#fff"
                    theme={lightColorScheme}
                />
            </div>
            <h2
                className={`font-robotoFlex font-bold mt-8 self-end text-lg md:text-xl lg:text-3xl 2xl:text-4xl opacity-30 ${secondaryColor}`}
            >
                &lt;/my github stats&gt;
            </h2>
        </main>
    );
};

export default GitHub;