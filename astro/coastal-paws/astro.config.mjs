import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/coastal-paws/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/coastal-paws/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/coastal-paws',
  outDir: '../../example-sites/coastal-paws',
  trailingSlash: 'ignore',
  build: { assets: '_assets' },
  integrations: [tailwind({ applyBaseStyles: false })],
});
