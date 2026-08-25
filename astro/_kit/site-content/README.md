# Tideloc site-content kit

Drop-in for any client Astro + Tailwind site so the client can update hours,
holiday closures, an announcement bar, contact details, a price list and
social links from the portal (portal.tideloc.com.au → "Your site") without a
ticket and without a rebuild.

How it works

1. The portal stores the content and serves it publicly at
   `https://portal.tideloc.com.au/api/portal/site/<slug>.json`.
2. On save the portal also commits the same document to this repo at
   `src/content/site.json` (needs the repo linked on the lead in the CRM and
   `GITHUB_SITES_TOKEN` on the server). The workflow rebuilds and deploys, so
   the HTML, and the LocalBusiness schema, carry the new hours.
3. `tl-live.js` runs on every page and patches the `[data-tl]` slots from the
   live JSON when it is newer than the baked copy. Save → live in minutes.

Install into a site

    cp -R astro/_kit/site-content/src/content   <site>/src/
    cp -R astro/_kit/site-content/src/lib       <site>/src/
    cp -R astro/_kit/site-content/src/components/tl <site>/src/components/
    cp    astro/_kit/site-content/public/tl-live.js <site>/public/
    cp -R astro/_kit/site-content/.github       <site>/          # client repos only

Then:

- `src/content/site.json`: set `slug` to the lead's public slug from the CRM
  (PortalPanel → Self-serve site content). Fill in the real hours/contact so
  the first build is right; the portal overwrites the file from then on.
- Base layout `<head>`: `<LiveContent />` and `<LocalBusinessJsonLd type="Cafe" url={Astro.site} />`.
- Top of `<body>`: `<Announcement class="…" />`.
- Wherever hours / contact / prices appear: `<Hours … />`, `<ContactDetails … />`, `<PriceList … />`.
  Every component takes class props so it matches the site's design system;
  never hardcode hours or phone numbers in a page again.

Rules

- The client edits structured data only. Wording, sections, photos and new
  pages stay change tickets.
- Shop clients (Growth / Growth Plus): products, prices and stock live in
  Shopify; the portal links out to their admin. Use `PriceList` only for
  non-shop menus and price lists.
- Never `npm run build` on the Cloudways box (OOM). Builds happen in GitHub
  Actions or locally.
