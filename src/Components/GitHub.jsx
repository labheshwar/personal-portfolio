import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import ThemeContext from "../ThemeContext";

const GitHub = () => {
    const { theme } = useContext(ThemeContext);
    const [blockSize, setBlockSize] = useState(15);
    const [showHalfYear, setShowHalfYear] = useState(false);

    const primaryColor = theme === 'light' ? 'text-primary-light' : 'text-primary-dark';
    const secondaryColor = theme === 'light' ? 'text-secondary-dark' : 'text-secondary-light';
    const glassClass = theme === 'dark' ? 'glass-dark' : 'glass-light';
    const borderGlass = theme === 'dark' ? 'border-glass-dark' : 'border-glass-light';

    const colorScheme = {
        dark: [
            '#1a1a2e',
            '#16213e',
            '#0f3460',
            '#533483',
            '#646AFF',
        ],
        light: [
            '#0d2137',
            '#0a4d68',
            '#088395',
            '#05b8cc',
            '#00D1C7',
        ],
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setBlockSize(10);
            } else if (window.innerWidth < 900) {
                setBlockSize(12);
            } else {
                setBlockSize(14);
            }
            setShowHalfYear(window.innerWidth < 850);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="px-6 md:px-20 py-20"
            id="github"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div variants={itemVariants} className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className={`font-jetbrains text-sm ${primaryColor}`}>{'<>'}</span>
                        <h2 className={`font-inter font-bold text-2xl md:text-4xl ${secondaryColor}`}>
                            GitHub Activity
                        </h2>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '100px' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className={`h-[1px] ${theme === 'dark' ? 'bg-primary-dark/50' : 'bg-primary-light/50'}`}
                        />
                    </div>
                    <p className={`font-jetbrains text-xs ${primaryColor} opacity-60`}>
                        {'// my contribution graph'}
                    </p>
                </motion.div>

                {/* GitHub Calendar Card */}
                <motion.div 
                    variants={itemVariants}
                    className={`${glassClass} rounded-2xl p-6 md:p-8 border ${borderGlass} overflow-hidden`}
                >
                    {/* Stats Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                    theme === 'dark' 
                                        ? 'bg-primary-dark/20' 
                                        : 'bg-primary-light/20'
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill={theme === 'dark' ? '#00D1C7' : '#646AFF'}
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </motion.div>
                            <div>
                                <h3 className={`font-inter font-semibold ${secondaryColor}`}>
                                    @labheshwar
                                </h3>
                                <p className={`font-jetbrains text-xs ${secondaryColor} opacity-60`}>
                                    Contributions in the last year
                                </p>
                            </div>
                        </div>

                        <motion.a
                            href="https://github.com/labheshwar"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-lg font-jetbrains text-sm ${
                                theme === 'dark'
                                    ? 'bg-primary-dark/10 text-primary-dark border border-primary-dark/30 hover:bg-primary-dark/20'
                                    : 'bg-primary-light/10 text-primary-light border border-primary-light/30 hover:bg-primary-light/20'
                            } transition-colors flex items-center gap-2`}
                        >
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                            View Profile
                        </motion.a>
                    </div>

                    {/* Calendar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="overflow-x-auto"
                    >
                        <GitHubCalendar
                            username="labheshwar"
                            blockSize={blockSize}
                            colorScheme={theme === 'light' ? 'dark' : 'light'}
                            fontSize={12}
                            blockMargin={4}
                            blockRadius={4}
                            style={{
                                color: theme === 'light' ? '#262626' : '#EDEDED',
                                fontFamily: 'JetBrains Mono, monospace',
                            }}
                            theme={colorScheme}
                            transformData={showHalfYear ? selectLastHalfYear : undefined}
                        />
                    </motion.div>

                    {/* Legend */}
                    <div className="flex items-center justify-end gap-2 mt-6">
                        <span className={`font-jetbrains text-xs ${secondaryColor} opacity-60`}>Less</span>
                        <div className="flex gap-1">
                            {(theme === 'dark' ? colorScheme.light : colorScheme.dark).map((color, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.05 }}
                                    className="w-3 h-3 rounded-sm"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                        <span className={`font-jetbrains text-xs ${secondaryColor} opacity-60`}>More</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default GitHub;
