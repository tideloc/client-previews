import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/the-forge/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/the-forge/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/the-forge',
  outDir: '../../example-sites/the-forge',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
