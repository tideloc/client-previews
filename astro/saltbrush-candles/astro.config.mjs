import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Output lives at ../../example-sites/saltbrush-candles/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/saltbrush-candles/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/saltbrush-candles',
  outDir: '../../example-sites/saltbrush-candles',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
