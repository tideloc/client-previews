/** @type {import('tailwindcss').Config} */
// Every value here comes from brand.json. Do not add colours the brand does not own.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#064C91',
        secondary: '#12335B',
        ground:    '#FFFFFF',
        ink:       '#333333',
        accent:    '#064C91',
        steel:     '#D5D8DB',
      },
      fontFamily: {
        display: ['"Figtree"', 'system-ui', 'sans-serif'],
        body:    ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
