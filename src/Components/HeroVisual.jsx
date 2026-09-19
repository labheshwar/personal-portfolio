import { useContext, useRef, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { personalInfo } from '../config';
import ProfilePic from '../Assets/img/profile-pic.jpg';

// Interactive hero composition.
//
// Two layers sitting at different depths inside one perspective container:
// the portrait behind, a payment card in front. Both track the cursor, but
// the card rotates further and translates on Z, so the parallax between them
// reads as real depth rather than a flat tilt.
//
// Built on CSS 3D transforms and framer-motion springs, which are already a
// dependency — no WebGL, nothing new in the bundle, and it degrades to a
// static composition on touch devices and under prefers-reduced-motion.

// useSyncExternalStore is the right primitive for reading a browser API that
// changes outside React, and avoids the setState-in-effect pattern.
const pointerQuery = () => window.matchMedia('(pointer: fine)');

const subscribeToPointer = (onChange) => {
  const mq = pointerQuery();
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
};

const useIsFinePointer = () =>
  useSyncExternalStore(
    subscribeToPointer,
    () => pointerQuery().matches,
    () => false
  );

const HeroVisual = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const reduce = useReducedMotion();
  const finePointer = useIsFinePointer();
  const interactive = finePointer && !reduce;

  const ref = useRef(null);

  // -0.5 … 0.5 across the container
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const spring = { stiffness: 140, damping: 18, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  // Portrait tilts gently; the card tilts nearly twice as far.
  const portraitRotY = useTransform(sx, [-0.5, 0.5], [9, -9]);
  const portraitRotX = useTransform(sy, [-0.5, 0.5], [-7, 7]);
  const cardRotY = useTransform(sx, [-0.5, 0.5], [22, -22]);
  const cardRotX = useTransform(sy, [-0.5, 0.5], [-15, 15]);
  const cardShiftX = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const cardShiftY = useTransform(sy, [-0.5, 0.5], [12, -12]);

  // Specular sweep follows the pointer across the card face.
  const sheenX = useTransform(sx, [-0.5, 0.5], ['120%', '-20%']);

  const handleMove = (e) => {
    if (!interactive || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  const hairline = isDark ? 'border-white/10' : 'border-black/10';
  const muted = isDark ? 'text-[#9a9a9a]' : 'text-[#5b5b6b]';

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-[260px] sm:w-[320px] lg:w-full lg:max-w-[400px] mx-auto"
      style={{ perspective: 1100 }}
    >
      {/* ── Portrait layer ───────────────────────────────────────────── */}
      <motion.div
        style={
          interactive
            ? { rotateX: portraitRotX, rotateY: portraitRotY, transformStyle: 'preserve-3d' }
            : undefined
        }
        className="relative"
      >
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
            width="400"
            height="460"
            className="w-full aspect-[19/22] object-cover object-top"
          />
          <div
            className={`pointer-events-none absolute inset-0 ${
              isDark
                ? 'bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent'
                : 'bg-gradient-to-t from-white via-white/10 to-transparent'
            }`}
          />
        </div>
      </motion.div>

      {/* ── Payment card, floating in front ──────────────────────────── */}
      <motion.div
        style={
          interactive
            ? {
                rotateX: cardRotX,
                rotateY: cardRotY,
                x: cardShiftX,
                y: cardShiftY,
                transformStyle: 'preserve-3d',
                translateZ: 70,
              }
            : undefined
        }
        className="absolute -bottom-8 -left-5 sm:-left-8 w-[210px] sm:w-[240px]"
      >
        <div
          className="relative overflow-hidden rounded-2xl p-4 aspect-[1.586/1] border border-white/15"
          style={{
            // Solid colour first, gradient painted over it: a payment card must
            // never let the portrait behind it show through.
            backgroundColor: isDark ? '#0c2523' : '#242863',
            backgroundImage: isDark
              ? 'linear-gradient(135deg, #103432 0%, #17494250 45%, #08191d 100%), linear-gradient(0deg, #0c2523, #0c2523)'
              : 'linear-gradient(135deg, #32367a 0%, #4b3f8f 45%, #1b1f4a 100%), linear-gradient(0deg, #242863, #242863)',
            boxShadow: isDark
              ? '0 26px 60px -18px rgba(0,209,199,0.45), 0 2px 0 0 rgba(255,255,255,0.10) inset'
              : '0 26px 60px -18px rgba(100,106,255,0.5), 0 2px 0 0 rgba(255,255,255,0.14) inset',
          }}
        >
          {/* Moving specular sheen */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 48%, transparent 66%)',
              backgroundSize: '260% 100%',
              backgroundPositionX: interactive ? sheenX : '50%',
            }}
          />

          {/* Engraved network motif */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.22]"
            viewBox="0 0 240 151"
            aria-hidden="true"
          >
            <g stroke={isDark ? '#7ef9dd' : '#b9b6ff'} fill="none" strokeWidth="0.7">
              <path d="M-10 118 C 50 96, 96 128, 150 100 S 236 70, 268 86" />
              <path d="M-10 132 C 54 112, 100 142, 158 116 S 240 88, 268 102" />
            </g>
          </svg>

          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              {/* Chip */}
              <div
                className="h-7 w-9 rounded-[5px] border border-amber-200/40"
                style={{
                  background: 'linear-gradient(135deg, #d9b45f 0%, #f0dca0 45%, #c79f4a 100%)',
                }}
              >
                <div className="mx-auto mt-[7px] h-[1px] w-6 bg-black/25" />
                <div className="mx-auto mt-[4px] h-[1px] w-6 bg-black/25" />
                <div className="mx-auto mt-[4px] h-[1px] w-6 bg-black/25" />
              </div>
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.18em] text-white/55">
                Acquiring
              </span>
            </div>

            <div>
              <div className="font-jetbrains text-[11px] tracking-[0.16em] text-white/80">
                •••• •••• •••• 2023
              </div>
              <div className="mt-1.5 flex items-end justify-between">
                <span className="font-jetbrains text-[9.5px] uppercase tracking-[0.14em] text-white/65">
                  {personalInfo.name}
                </span>
                <span className="font-jetbrains text-[8.5px] uppercase tracking-[0.14em] text-white/40">
                  QR · RTP
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hint, desktop only — tells people the thing is interactive */}
      {interactive && (
        <div
          className={`absolute -bottom-20 right-0 font-jetbrains text-[10px] ${muted} opacity-45`}
        >
          move your cursor
        </div>
      )}
    </div>
  );
};

export default HeroVisual;
