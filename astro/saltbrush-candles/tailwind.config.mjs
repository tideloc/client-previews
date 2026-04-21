/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        linen: '#f5ede0',       // primary bg
        bone: '#eae0cf',        // secondary bg
        sage: '#8a9b7e',        // accent — ties, ribbons
        saltbrush: '#b5bda4',   // muted sage
        ochre: '#c48b3f',       // warmth / CTA
        clay: '#a86434',        // deeper accent
        stone: '#3d3530',       // text, buttons
        coal: '#1c1916',        // rare deep dark
        moss: '#5a6b4a',        // deep emphasis
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        quiet: '0.14em',
        wider: '0.18em',
      },
      borderRadius: {
        sharp: '2px',
      },
    },
  },
  plugins: [],
};
