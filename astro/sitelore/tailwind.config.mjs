/** @type {import('tailwindcss').Config} */
// Every value here comes from brand.json (sitelore/src/app/globals.css). Do not add colours the brand does not own.
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary:   '#F26B1D', // Marker
        secondary: '#D9DEE7', // Rule
        ground:    '#F6F7F9', // Sheet
        ink:       '#16213A', // Ink
        accent:    '#F26B1D', // Marker
        rule:      '#D9DEE7',
        'ink-2':   '#5B6577',
        'marker-ink': '#B84A0B',
        card:      '#FFFFFF',
        verified:  '#1D8A5A',
        overdue:   '#C6262E',
        'ink-raised': '#24304D',
        'rule-dark': '#2A3650',
      },
      fontFamily: {
        display: ['"Archivo"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body:    ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: { tag: '3px', sm: '4px', DEFAULT: '6px', md: '6px', lg: '10px' },
      boxShadow: { card: '0 0 0 1px #D9DEE7', 'card-dark': '0 0 0 1px #2A3650', none: 'none' },
      maxWidth: { wrap: '76rem' },
    },
  },
  plugins: [],
};
