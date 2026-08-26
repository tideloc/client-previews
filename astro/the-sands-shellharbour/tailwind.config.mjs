/** @type {import('tailwindcss').Config} */
// Every value here comes from brand.json. Do not add colours the brand does not own.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#1CAADE',
        secondary: '#5B96D0',
        ground:    '#FFF0EC',
        ink:       '#282936',
        accent:    '#94949B',
      },
      fontFamily: {
        display: ['"Forum"', 'Georgia', 'serif'],
        body:    ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        sub:     ['"Quicksand"', 'system-ui', 'sans-serif'],
        script:  ['"Forum"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
