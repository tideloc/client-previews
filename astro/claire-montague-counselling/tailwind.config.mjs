/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f4ede1',
        sand: '#eadfce',
        cream: '#faf5ea',
        ink: '#27211b',
        slate: '#4a4033',
        sage: '#91a184',
        deepsage: '#5d6f51',
        rose: '#b88469',
        plum: '#7a4d5f',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        quiet: '0.04em',
        wide: '0.12em',
      },
      lineHeight: {
        loose: '1.85',
        prose: '1.75',
      },
    },
  },
  plugins: [],
};
