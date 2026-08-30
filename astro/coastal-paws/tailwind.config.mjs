/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: { extend: {
    // white page, cool grey alternate bands, deep harbour blue-teal dark bands, one coral accent
    colors: { ink: '#0F2A35', deep: '#0A1F27', cream: '#FFFFFF', sand: '#EEF2F4', coral: '#FF6B4A', ash: '#AFC3CB', stone: '#5F6F76' },
    fontFamily: { display: ['"Oswald"', 'Impact', 'sans-serif'], body: ['"Open Sans"', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
