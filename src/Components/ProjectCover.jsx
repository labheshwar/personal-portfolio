// Generated cover art for project cards.
//
// None of these projects can show a screenshot — two are proprietary and the
// rest are backend services — so the cards were plain text boxes. Each cover
// is derived deterministically from the project name, so a given project
// always draws the same artwork, and the hue stays inside a narrow band
// around the theme accent so five cards read as one system rather than a
// rainbow.

const hash = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
};

const MOTIFS = ['arcs', 'dots', 'diagonals', 'nested', 'wave'];

const ProjectCover = ({ name, theme, className = '' }) => {
  const isDark = theme === 'dark';
  const seed = hash(name);

  // Base hue per theme, nudged within ±34° so the set stays cohesive.
  const baseHue = isDark ? 172 : 243;
  const hue = baseHue + (((seed % 69) - 34) * 0.9);
  const hue2 = hue + (isDark ? 26 : -24);

  const motif = MOTIFS[seed % MOTIFS.length];
  const uid = `pc${seed.toString(36)}`;

  const strong = `hsl(${hue} 85% ${isDark ? 62 : 58}%)`;
  const soft = `hsl(${hue2} 80% ${isDark ? 55 : 62}%)`;

  return (
    <svg
      viewBox="0 0 400 150"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${uid}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={strong} stopOpacity={isDark ? 0.3 : 0.26} />
          <stop offset="100%" stopColor={soft} stopOpacity={isDark ? 0.08 : 0.1} />
        </linearGradient>
        <radialGradient id={`${uid}r`} cx="18%" cy="12%" r="90%">
          <stop offset="0%" stopColor={strong} stopOpacity={isDark ? 0.34 : 0.28} />
          <stop offset="100%" stopColor={strong} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="40%" stopColor={isDark ? '#0d0d0d' : '#ffffff'} stopOpacity="0" />
          <stop offset="100%" stopColor={isDark ? '#0d0d0d' : '#ffffff'} stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <rect width="400" height="150" fill={`url(#${uid}g)`} />
      <rect width="400" height="150" fill={`url(#${uid}r)`} />

      <g stroke={strong} fill="none" strokeOpacity={isDark ? 0.5 : 0.42}>
        {motif === 'arcs' &&
          [34, 66, 98, 130, 162, 194].map((r) => (
            <circle key={r} cx="52" cy="150" r={r} strokeWidth="1.1" />
          ))}

        {motif === 'dots' &&
          Array.from({ length: 10 }, (_, row) =>
            Array.from({ length: 24 }, (_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={10 + col * 17}
                cy={10 + row * 16}
                r={1.5 + ((row + col) % 3) * 0.55}
                fill={strong}
                fillOpacity={isDark ? 0.45 : 0.38}
                stroke="none"
              />
            ))
          )}

        {motif === 'diagonals' &&
          Array.from({ length: 22 }, (_, i) => (
            <line
              key={i}
              x1={-60 + i * 26}
              y1="160"
              x2={40 + i * 26}
              y2="-10"
              strokeWidth={i % 4 === 0 ? 2 : 0.9}
              strokeOpacity={i % 4 === 0 ? 0.55 : 0.3}
            />
          ))}

        {motif === 'nested' &&
          [0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={26 + i * 22}
              y={-16 + i * 15}
              width={150 - i * 12}
              height={150 - i * 12}
              rx={16}
              strokeWidth="1.1"
              strokeOpacity={0.5 - i * 0.05}
            />
          ))}

        {motif === 'wave' &&
          [0, 1, 2, 3, 4, 5, 6].map((i) => (
            <path
              key={i}
              d={`M -20 ${34 + i * 19} C 70 ${4 + i * 19}, 130 ${66 + i * 19}, 210 ${34 + i * 19} S 350 ${4 + i * 19}, 420 ${34 + i * 19}`}
              strokeWidth={i === 3 ? 1.9 : 0.9}
              strokeOpacity={i === 3 ? 0.6 : 0.3}
            />
          ))}
      </g>

      {/* Fade the bottom edge so the artwork resolves into the card surface */}
      <rect width="400" height="150" fill={`url(#${uid}f)`} />
    </svg>
  );
};

export default ProjectCover;
