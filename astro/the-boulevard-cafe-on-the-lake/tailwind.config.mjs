/** @type {import('tailwindcss').Config} */
// Every value here comes from brand.json. Do not add colours the brand does not own.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#1b6cb0',
        secondary: '#e5e6e1',
        ground:    '#f4f2ea',
        ink:       '#0f2040',
        accent:    '#eb6206',
      },
      fontFamily: {
        display: ['"Josefin Sans"', 'system-ui', 'sans-serif'],
        body:    ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
