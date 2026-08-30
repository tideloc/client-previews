/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: { extend: {
    // playful: white page, cyan headings and buttons, navy panels, four card colours
    colors: { ink: '#1E2A78', deep: '#16205C', cream: '#FFFFFF', sand: '#EAF6FC', coral: '#00A9E0', sky: '#00A9E0', navy: '#1E2A78',
              grape: '#7C3FA0', lime: '#7CB342', bubble: '#E0308A', sunshine: '#FFC53D', ash: '#C9D6F5', stone: '#5B6270' },
    fontFamily: { display: ['"Baloo 2"', '"Trebuchet MS"', 'sans-serif'], body: ['"Inter"', 'system-ui', 'sans-serif'] },
    borderRadius: { blob: '2rem' },
  } },
  plugins: [],
};
