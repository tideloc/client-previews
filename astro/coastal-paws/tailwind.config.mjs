/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1E3A36',      // headings and the dark bands (our deep teal, in the role Toby's uses green)
        teal: '#2A6F6B',
        cream: '#FDF6EE',    // page background
        sand: '#E8DFD4',     // alternate bands
        coral: '#E5704F',
        stone: '#6E7470',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
