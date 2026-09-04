/** @type {import('tailwindcss').Config} */
// Every value here comes from brand-b.json (the Wix theme palette). Do not add colours the brand does not own.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary: '#32949D',
        accent:  '#4BA9AC',
        ground:  '#F7FAFC',
        ink:     '#2C5282',
        body:    '#4A5568',
        panel:   '#E2E8F0',
        tint:    '#BEE3F8',
      },
      fontFamily: {
        display: ['"Onest"', 'system-ui', 'sans-serif'],
        body:    ['"Onest"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { wrap: '76rem' },
    },
  },
  plugins: [],
};
