/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        forge: '#1c1713',     // primary dark bg
        anvil: '#2d2620',     // secondary
        soot: '#0e0b08',      // deep black
        rust: '#a04826',      // accent — CTA
        glow: '#d87c2a',      // hot metal highlight
        patina: '#5a6e6c',    // blue-green oxidation
        brass: '#8b6f3a',     // muted gold
        bone: '#e8dccd',      // text on dark
        graphite: '#3e3832',  // muted
        iron: '#544a42',      // mid grey
      },
      fontFamily: {
        display: ['"Rozha One"', '"Poppins"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        chisel: '0.04em',
        stamp: '0.18em',
      },
      backgroundImage: {
        'forge-grain': "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(216,124,42,0.14) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(160,72,38,0.16) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
