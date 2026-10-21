import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Concept previews deploy to https://staging.tideloc.com.au/cold/<slug>/v2/
// To promote to a client domain: set site to the domain and base to '/'.
export default defineConfig({
  // SITE_URL + SITE_BASE=/ build the live site at sitelore.com.au; defaults build the staging preview
  site: process.env.SITE_URL || 'https://staging.tideloc.com.au',
  // SITE_BASE lets the same build deploy to the old /cold/sitebook/ address so existing links keep working
  base: process.env.SITE_BASE || '/cold/sitelore/v2',
  outDir: './dist',
  trailingSlash: 'ignore',
  build: { assets: '_assets', format: 'directory' },
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
