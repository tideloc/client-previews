/** @type {import('tailwindcss').Config} */
// Premium option (Blake, 25 Oct 2026): colour is open. Navy ground, pale ink, teal accent lifted from the Kobelco render; Khula / Poppins stay.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#141B24',
        secondary: '#0D1117',
        ground:    '#0D1117',
        ink:       '#F2F4F6',
        accent:    '#2BC4B4',
        muted:     '#8B95A1',
        line:      '#243040',
      },
      fontFamily: {
        display: ['"Khula"', 'Georgia', 'serif'],
        body:    ['"Poppins"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
