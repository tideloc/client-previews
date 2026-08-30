/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1F2A2E',
        teal: '#2A6F6B',
        deepteal: '#1E5350',
        sand: '#F5EFE4',
        cream: '#FBF8F2',
        coral: '#E5704F',
        moss: '#6E8B5E',
        stone: '#8A8F8C',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: { xl2: '1.25rem' },
    },
  },
  plugins: [],
};
