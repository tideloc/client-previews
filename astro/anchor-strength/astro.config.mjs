import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://tideloc.github.io',
  base: '/client-previews/example-sites/anchor-strength',
  outDir: '../../example-sites/anchor-strength',
  trailingSlash: 'ignore',
  build: { assets: '_assets' },
  integrations: [tailwind({ applyBaseStyles: false })],
});
