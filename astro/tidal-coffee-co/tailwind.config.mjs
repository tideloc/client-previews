/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        surf:    '#0f2b35',   // primary dark
        deep:    '#0a1e26',   // footer dark
        seafoam: '#a8c5c4',   // muted mid
        sand:    '#f4ede2',   // warm bg
        shell:   '#faf6ef',   // text on dark
        brass:   '#a67c3a',   // accent
        copper:  '#c08654',   // hover brass
        tide:    '#3b6978',   // secondary mid
        reef:    '#2d5461',   // subtle border
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Manrope"', 'system-ui', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        chart: '0.14em',
        rule:  '0.22em',
      },
      backgroundImage: {
        'tide-grain': "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(15,43,53,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(166,124,58,0.07) 0%, transparent 70%)",
        'chart-lines': "repeating-linear-gradient(0deg, rgba(15,43,53,0.04) 0px, rgba(15,43,53,0.04) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(15,43,53,0.04) 0px, rgba(15,43,53,0.04) 1px, transparent 1px, transparent 48px)",
      },
    },
  },
  plugins: [],
};
