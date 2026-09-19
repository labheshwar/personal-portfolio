import { useContext, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { personalInfo } from '../config';
import Icon from './Icon';
import Resume from '../Assets/LabheshwarResume.pdf';
import ProfilePic from '../Assets/img/profile-pic.jpg';

// Typing Animation Hook
const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const Info = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const reduce = useReducedMotion();

  // Claims a reviewer can verify beat self-awarded titles like "Expert".
  // The fintech/payments line is the real differentiator against other React devs.
  const roles = [
    'Full-Stack Engineer',
    'Java + Spring Boot',
    'React + TypeScript',
    'Fintech & Payments',
  ];

  const typedText = useTypingEffect(roles, 90, 45, 2200);

  const accent = isDark ? 'text-primary-dark' : 'text-primary-light';
  const heading = isDark ? 'text-secondary-light' : 'text-secondary-dark';
  const muted = isDark ? 'text-[#9a9a9a]' : 'text-[#5b5b6b]';
  const hairline = isDark ? 'border-white/10' : 'border-black/10';

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };

  const stats = [
    { value: '3+', label: 'Years shipping fintech platforms' },
    { value: '40', unit: '%', label: 'LCP lift from a reusable component library' },
    { value: '50', unit: '+', label: 'Dependencies scanned in CI via Snyk' },
  ];

  return (
    <main className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-28 pb-20" id="info">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto grid lg:grid-cols-[1.35fr_1fr] gap-14 lg:gap-20 items-center"
      >
        {/* ── Left: the pitch ─────────────────────────────────────────── */}
        <div className="order-1">
          {/* Availability — a real signal, not decoration */}
          <motion.div variants={rise} className="mb-7">
            <span
              className={`inline-flex items-center gap-2.5 rounded-full border ${hairline} ${
                isDark ? 'bg-white/[0.04]' : 'bg-black/[0.03]'
              } px-3.5 py-1.5 font-jetbrains text-[11px] tracking-wide ${muted}`}
            >
              <span className="relative flex h-1.5 w-1.5">
                {!reduce && (
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                      isDark ? 'bg-[#00F5A0]' : 'bg-[#646AFF]'
                    }`}
                  />
                )}
                <span
                  className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                    isDark ? 'bg-[#00F5A0]' : 'bg-[#646AFF]'
                  }`}
                />
              </span>
              Available for remote roles · UTC+5
            </span>
          </motion.div>

          {/* Name — the primary visual element, set tight */}
          <motion.h1
            variants={rise}
            className={`font-inter font-extrabold ${heading} leading-[0.88] tracking-[-0.045em]
                        text-[clamp(3rem,9vw,6.5rem)]`}
          >
            Labheshwar
          </motion.h1>

          {/* Role, typed */}
          <motion.div variants={rise} className="mt-5 flex items-center gap-2.5 h-8">
            <span className={`font-jetbrains text-lg md:text-xl ${muted} opacity-60`}>&gt;</span>
            <span className={`font-jetbrains text-lg md:text-xl lg:text-2xl ${accent}`}>
              {typedText}
            </span>
            <span
              className={`typing-cursor h-5 md:h-6 ${isDark ? 'bg-primary-dark' : 'bg-primary-light'}`}
            />
          </motion.div>

          {/* Bio — constrained measure so it reads as typography, not a wall */}
          <motion.p
            variants={rise}
            className={`mt-7 font-inter text-[15px] md:text-[17px] leading-[1.7] ${muted} max-w-[34rem]`}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Stats — a bordered strip with dividers reads as considered */}
          <motion.div
            variants={rise}
            className={`mt-10 grid grid-cols-3 border-y ${hairline} divide-x ${
              isDark ? 'divide-white/10' : 'divide-black/10'
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="py-5 px-4 first:pl-0">
                <div className={`font-inter font-bold text-3xl md:text-4xl ${heading} tracking-tight`}>
                  {stat.value}
                  {stat.unit && (
                    <span className={`text-lg md:text-xl font-medium ml-1 ${accent}`}>{stat.unit}</span>
                  )}
                </div>
                <div
                  className={`mt-1.5 font-jetbrains text-[10px] md:text-[11px] leading-snug uppercase tracking-wider ${muted} opacity-70`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className={`group inline-flex items-center gap-2.5 rounded-xl px-5 py-3.5 font-jetbrains text-sm
                          font-medium transition-transform duration-200 hover:-translate-y-0.5 ${
                            isDark
                              ? 'bg-gradient-to-r from-[#00D1C7] to-[#00F5A0] text-[#07120f]'
                              : 'bg-gradient-to-r from-[#646AFF] to-[#8B5CF6] text-white'
                          }`}
              style={{
                boxShadow: isDark
                  ? '0 8px 30px -8px rgba(0,209,199,0.45)'
                  : '0 8px 30px -8px rgba(100,106,255,0.45)',
              }}
            >
              <Icon name="download" size={17} />
              Download résumé
            </a>

            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 font-jetbrains text-[12px] ${muted}
                            underline underline-offset-4 decoration-dotted transition-colors ${
                              isDark ? 'hover:text-primary-dark' : 'hover:text-primary-light'
                            }`}
              >
                <Icon name="external" size={13} />
                View latest
              </a>
            )}

            <a
              href={`mailto:${personalInfo.email}`}
              className={`inline-flex items-center gap-2.5 rounded-xl px-5 py-3.5 font-jetbrains text-sm
                          border ${hairline} ${heading} transition-colors duration-200 ${
                            isDark ? 'hover:bg-white/[0.06]' : 'hover:bg-black/[0.04]'
                          }`}
            >
              <Icon name="mail" size={17} />
              Get in touch
            </a>

            <div className={`ml-1 flex items-center gap-1.5`}>
              {[
                { href: personalInfo.github, icon: 'github', label: 'GitHub' },
                { href: personalInfo.linkedin, icon: 'linkedin', label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${hairline} ${muted}
                              transition-colors duration-200 ${
                                isDark
                                  ? 'hover:text-primary-dark hover:border-primary-dark/40'
                                  : 'hover:text-primary-light hover:border-primary-light/40'
                              }`}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right: portrait, framed rather than floated ──────────────── */}
        <motion.div variants={rise} className="order-2 flex justify-center lg:justify-end">
          <div className="relative w-[230px] sm:w-[280px] lg:w-full lg:max-w-[380px]">
            {/* Offset accent frame — depth without a glow halo */}
            <div
              className={`absolute -inset-px rounded-[26px] translate-x-3 translate-y-3 border ${
                isDark ? 'border-primary-dark/35' : 'border-primary-light/35'
              }`}
              aria-hidden="true"
            />

            <div
              className={`relative overflow-hidden rounded-[26px] border ${hairline} ${
                isDark ? 'bg-white/[0.03]' : 'bg-black/[0.03]'
              }`}
            >
              <img
                src={ProfilePic}
                alt="Labheshwar"
                width="380"
                height="440"
                className="w-full aspect-[19/22] object-cover object-top"
              />
              {/* Tint ties the photo to the palette */}
              <div
                className={`pointer-events-none absolute inset-0 ${
                  isDark
                    ? 'bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent'
                    : 'bg-gradient-to-t from-white via-white/10 to-transparent'
                }`}
              />
            </div>

            {/* Overlapping credential card */}
            <div
              className={`absolute -bottom-5 -left-4 sm:-left-6 rounded-2xl border ${hairline} px-4 py-3
                          backdrop-blur-xl ${isDark ? 'bg-[#101010]/90' : 'bg-white/90'}`}
            >
              <div className={`font-jetbrains text-[10px] uppercase tracking-wider ${muted} opacity-70`}>
                Currently
              </div>
              <div className={`mt-0.5 font-inter text-sm font-semibold ${heading}`}>
                Software Engineer
              </div>
              <div className={`font-jetbrains text-[11px] ${accent}`}>@ PaysysLabs</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Info;
