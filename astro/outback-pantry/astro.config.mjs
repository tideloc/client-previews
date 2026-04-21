import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/outback-pantry/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/outback-pantry/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/outback-pantry',
  outDir: '../../example-sites/outback-pantry',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
