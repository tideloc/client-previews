/** @type {import('tailwindcss').Config} */
// Every value here comes from brand.json. Premium option: the brand's dark accent is the ground, the off-white is the ink.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#000000',
        secondary: '#FFFFFF',
        ground:    '#1C1C1C',
        ink:       '#FAFAFA',
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
