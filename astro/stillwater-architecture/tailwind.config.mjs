/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f5f1ea',
        mist: '#e4ddd0',
        ink: '#1d1b18',
        lead: '#3d3a34',
        stone: '#6b665d',
        water: '#2a4957',
        moss: '#4a5840',
        sand: '#c9b992',
        bone: '#ffffff',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        caps: '0.18em',
        wide2: '0.08em',
      },
    },
  },
  plugins: [],
};
