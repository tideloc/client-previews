import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/matt-lawson-electrical/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/matt-lawson-electrical/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/matt-lawson-electrical',
  outDir: '../../example-sites/matt-lawson-electrical',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
