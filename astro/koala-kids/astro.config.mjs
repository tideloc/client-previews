import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/koala-kids/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/koala-kids/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/koala-kids',
  outDir: '../../example-sites/koala-kids',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
