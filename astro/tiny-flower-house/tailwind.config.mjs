/** @type {import('tailwindcss').Config} */
// Every value here comes from brand.json. Do not add colours the brand does not own.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#697E5D',
        secondary: '#8CA87C',
        ground:    '#FFF5EC',
        ink:       '#33312F',
        accent:    '#806C57',
      },
      fontFamily: {
        display: ['"Jost"', 'Futura', 'system-ui', 'sans-serif'],
        body:    ['"Lato"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
