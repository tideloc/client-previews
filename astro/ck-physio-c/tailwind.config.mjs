/** @type {import('tailwindcss').Config} */
// Every value here comes from brand-c.json (logo navy + cyan, Wix shade tints). No other colours.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#102048', // logo navy
        accent:    '#08A8D8', // logo cyan
        ground:    '#EDF2F7', // wix shade-1
        ink:       '#102048',
        text:      '#4A5568', // wix shade-3
        tint:      '#BEE3F8', // wix accent-2
        mint:      '#E6FFFA', // wix accent-3
      },
      fontFamily: {
        display: ['"Figtree"', 'system-ui', 'sans-serif'],
        body:    ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { wrap: '76rem' },
    },
  },
  plugins: [],
};
