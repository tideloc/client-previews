import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/green-edge-lawns/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/green-edge-lawns/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/green-edge-lawns',
  outDir: '../../example-sites/green-edge-lawns',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
