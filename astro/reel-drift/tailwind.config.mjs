/** @type {import('tailwindcss').Config} */
// Every value here comes from brand.json. Do not add colours the brand does not own.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#0B1E3A',
        secondary: '#E9E1D5',
        ground:    '#F6EEE2',
        ink:       '#0B1E3A',
        accent:    '#0B1E3A',
      },
      fontFamily: {
        display: ['"Montserrat"', 'system-ui', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        script:  ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
};
