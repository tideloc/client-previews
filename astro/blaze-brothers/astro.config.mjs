import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/blaze-brothers/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/blaze-brothers/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/blaze-brothers',
  outDir: '../../example-sites/blaze-brothers',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
