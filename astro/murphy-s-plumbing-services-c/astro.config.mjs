import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Concept previews deploy to https://staging.tideloc.com.au/cold/<slug>/v2/
// To promote to a client domain: set site to the domain and base to '/'.
export default defineConfig({
  site: 'https://staging.tideloc.com.au',
  base: '/cold/murphy-s-plumbing-services/v3',
  outDir: './dist',
  trailingSlash: 'ignore',
  build: { assets: '_assets', format: 'directory' },
  integrations: [tailwind({ applyBaseStyles: false }), sitemap({ filter: (page) => !page.includes('/capability-statement/') })],
});
