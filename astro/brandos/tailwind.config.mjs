/** @type {import('tailwindcss').Config} */
// Every value here comes from brand.json. Do not add colours the brand does not own.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#FFDE39',
        secondary: '#FFC80D',
        ground:    '#F8F6F6',
        ink:       '#403D77',
        accent:    '#EC2128',
      },
      fontFamily: {
        display: ['"Oswald"', 'Impact', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
