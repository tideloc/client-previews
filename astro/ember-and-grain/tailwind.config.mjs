/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        wheat:  '#e8d7a3',   // primary warm bg
        grain:  '#d4b87a',   // secondary warm
        ember:  '#c9481f',   // accent — headlines + links
        stout:  '#1a1410',   // dark text / footer bg
        hops:   '#6d8c5a',   // secondary accent — pills/tags
        ale:    '#a46628',   // amber mid
        cream:  '#f7efe0',   // text on dark bg
        shadow: '#3d2b1f',   // muted text
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        wide2:  '0.04em',
        narrow: '-0.02em',
      },
      borderRadius: {
        enamel: '2px',
      },
      backgroundImage: {
        'paper-grain':
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,72,31,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(164,102,40,0.07) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
