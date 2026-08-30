/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: { extend: {
    colors: { navy: '#2A2E40', black: '#141415', ink: '#1C1E24', ember: '#F28C28', ash: '#9AA0AB', cloud: '#F3F4F6' },
    fontFamily: { display: ['"Oswald"', 'Impact', 'sans-serif'], body: ['"Open Sans"', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
