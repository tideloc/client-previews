/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        turf: '#2d6a3a',       // primary green — cut grass
        moss: '#4d8754',       // mid green
        leaf: '#7fb569',       // fresh growth
        dew: '#e8f3e4',        // pale green bg
        bark: '#3d2f1f',       // text dark / earthy
        sand: '#f6efe4',       // warm bg alt
        sunshine: '#f9c33a',   // accent — warmth CTA
        clay: '#c26a3b',       // rare accent
        cream: '#fffbf3',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grass-grain': "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(127,181,105,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(45,106,58,0.12) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
