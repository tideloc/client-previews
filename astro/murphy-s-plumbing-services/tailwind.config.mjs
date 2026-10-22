/** @type {import('tailwindcss').Config} */
// Every value here comes from brand.json. Do not add colours the brand does not own.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#1C1C1C',
        secondary: '#FFFFFF',
        ground:    '#FAFAFA',
        ink:       '#000000',
        accent:    '#DCDCDC',
      },
      fontFamily: {
        display: ['"Khula"', 'Georgia', 'serif'],
        body:    ['"Poppins"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
