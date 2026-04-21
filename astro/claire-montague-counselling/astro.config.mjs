import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/claire-montague-counselling/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/claire-montague-counselling/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/claire-montague-counselling',
  outDir: '../../example-sites/claire-montague-counselling',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
