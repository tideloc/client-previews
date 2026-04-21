# Client Preview Sites — Astro + Tailwind

Multi-page portfolio preview sites for tideloc.com.au/portfolio/. Each site is an independent Astro app that builds into `../example-sites/<slug>/` and is served by GitHub Pages at `https://tideloc.github.io/client-previews/example-sites/<slug>/`.

## Layout

```
astro/
├── blaze-brothers/          # Artisan hot sauce — Brisbane
├── ember-and-grain/         # Craft brewery — Newcastle
├── the-forge/               # Leather goods — Byron Bay
├── koala-kids/              # Party hire — Sydney Inner West
├── claire-montague-counselling/
├── green-edge-lawns/
├── matt-lawson-electrical/
├── outback-pantry/
├── saltbrush-candles/
├── stillwater-architecture/
└── tidal-coffee-co/
```

Each subdir is a self-contained Astro project with its own `package.json` so individual sites can be iterated without touching the others.

## Build a single site

```bash
cd astro/blaze-brothers
npm install
npm run build
```

Build output goes to `../../example-sites/blaze-brothers/`.

## Deploy

Committing to `main` publishes automatically via GitHub Pages.
