// Inline SVG icons, replacing the Material Symbols webfont.
//
// The webfont rendered its ligature *text* ("download", "mail", "arrow_upward")
// whenever Google Fonts was slow, blocked or unavailable — so the primary CTA
// could read "download Download Resume" to a real visitor. These ship in the
// bundle, cannot fail to load, and are crisper at small sizes.

const paths = {
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.2 5.6a1.4 1.4 0 0 0 1.6 0L21 7" />
    </>
  ),
  send: (
    <>
      <path d="M21.5 2.5 11 13" />
      <path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14v4.5a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2H10" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10.5" width="16" height="10.5" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7.5A2 2 0 0 1 5 5.5h3.8a2 2 0 0 1 1.6.8l1 1.4h8.6a2 2 0 0 1 2 2v8.8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 20V5" />
      <path d="m5 12 7-7 7 7" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.2M12 19.8V22M22 12h-2.2M4.2 12H2M19.07 4.93l-1.55 1.55M6.48 17.52l-1.55 1.55M19.07 19.07l-1.55-1.55M6.48 6.48 4.93 4.93" />
    </>
  ),
  moon: <path d="M20.5 14.5A8.6 8.6 0 0 1 9.5 3.5a8.6 8.6 0 1 0 11 11Z" />,
  github: (
    <path
      d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.5v-1.96c-2.92.63-3.54-1.24-3.54-1.24-.48-1.21-1.17-1.54-1.17-1.54-.95-.65.08-.64.08-.64 1.05.08 1.61 1.08 1.61 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.19 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.34.1-2.78 0 0 .88-.28 2.89 1.08a10 10 0 0 1 5.26 0c2-1.36 2.88-1.08 2.88-1.08.58 1.44.22 2.51.11 2.78.67.74 1.08 1.67 1.08 2.82 0 4.03-2.46 4.92-4.8 5.18.38.33.71.97.71 1.95v2.9c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  linkedin: (
    <path
      d="M20.45 3H3.55A.54.54 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9a.54.54 0 0 0 .55-.55V3.55a.54.54 0 0 0-.55-.55ZM8.34 18.34H5.67V9.75h2.67ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.76h-2.67v-4.18c0-1 0-2.28-1.39-2.28s-1.6 1.09-1.6 2.21v4.25h-2.67V9.75h2.56v1.17h.04a2.81 2.81 0 0 1 2.52-1.39c2.7 0 3.2 1.78 3.2 4.09Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </>
  ),
};

const Icon = ({ name, size = 20, className = '', strokeWidth = 1.75, ...rest }) => {
  const content = paths[name];
  if (!content) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {content}
    </svg>
  );
};

export default Icon;
