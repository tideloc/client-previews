/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        eucalypt: '#5c7a4a',     // primary green
        paperbark: '#dcc9a6',    // warm neutral
        sandstone: '#e9dcc3',    // bg
        terracotta: '#b95a38',   // accent
        sky: '#89a9b5',          // cool secondary
        earth: '#5c3a22',        // dark text
        cream: '#faf5ea',        // bg
        softcoal: '#2d2620',     // headings
        pollen: '#e5c24e',       // highlight warmth
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        soft: '0.01em',
      },
      borderRadius: {
        'card': '14px',
      },
      backgroundImage: {
        'paper-grain': "radial-gradient(ellipse 70% 60% at 10% 0%, rgba(220,201,166,0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(137,169,181,0.18) 0%, transparent 65%)",
      },
    },
  },
  plugins: [],
};
