/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        volt: '#ffd02e',
        charge: '#efb611',
        graphite: '#151820',
        steel: '#21252f',
        dust: '#858b96',
        bone: '#f1f2f5',
        chalk: '#ffffff',
        mint: '#4cc2a5',
        copper: '#c77d45',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tight2: '-0.02em',
        tight3: '-0.03em',
        wide1: '0.05em',
        wide2: '0.12em',
      },
      borderRadius: {
        sharp: '4px',
      },
    },
  },
  plugins: [],
};
