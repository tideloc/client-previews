import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Built output lives at ../../example-sites/ember-and-grain/ so GH Pages
// serves it at https://tideloc.github.io/client-previews/example-sites/ember-and-grain/
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/ember-and-grain',
  outDir: '../../example-sites/ember-and-grain',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
