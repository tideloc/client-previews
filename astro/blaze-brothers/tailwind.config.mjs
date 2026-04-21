/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d0906',          // near-black, charcoal char
        smoke: '#1a1310',        // body bg dark
        ash: '#2a2220',          // cards / elevated
        ember: '#ff3b14',        // primary fire red
        flame: '#ff8c1a',        // accent orange
        bone: '#f5e9d7',         // warm off-white
        dust: '#b8a690',         // warm grey for muted text
        chili: '#7a0e0e',        // deep sauce red
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Impact', 'system-ui', 'sans-serif'],
        body: ['"Work Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        shout: '0.08em',
      },
      backgroundImage: {
        'char-grain': "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,59,20,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255,140,26,0.12) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
