/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ochre: '#b4571f',       // primary earthy red accent
        kangaroo: '#7a4a2b',    // deep tan
        eucalypt: '#5a6b3f',    // native foliage green
        saltbush: '#8a9b7e',    // pale green-grey
        sand: '#e8d4b0',        // warm bg
        chalk: '#f5ede0',       // softer bg / light text on dark
        charcoal: '#1f1815',    // dark text / header
        ironbark: '#3d2a1f',    // footer bg
        bloodwood: '#7d1e12',   // emphasis, kakadu-plum red
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        wide2: '0.18em',
      },
      backgroundImage: {
        'paper': "radial-gradient(ellipse 70% 60% at 20% 0%, rgba(180,87,31,0.08) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(90,107,63,0.10) 0%, transparent 65%)",
      },
    },
  },
  plugins: [],
};
