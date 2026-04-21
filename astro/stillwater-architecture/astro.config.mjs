import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/stillwater-architecture/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/stillwater-architecture/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/stillwater-architecture',
  outDir: '../../example-sites/stillwater-architecture',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
