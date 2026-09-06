/** Product links. appUrl is a placeholder until the demo is deployed; PUBLIC_APP_URL overrides it at build time (used for local review shots only). */
import site from '../content/site.json';

export const APP_URL = ((import.meta.env.PUBLIC_APP_URL as string | undefined) || site.appUrl).replace(/\/$/, '');
export const APP_SIGN_IN = `${APP_URL}/sign-in`;
export const CAL_URL = site.calUrl;
export const BOOK_LABEL = 'Book a call';

/** Demo portfolio counts, from the product seed (src/data/seed/*.json, 2026-09-06). */
export const DEMO_SITES = [
  { name: 'Ridgeway Fair', kind: 'Sub-regional centre', levels: 2, assets: 178 },
  { name: 'Marlow Central', kind: 'Regional centre', levels: 4, assets: 703 },
  { name: 'Quay Tower', kind: 'Office tower', levels: 12, assets: 375 },
] as const;
export const DEMO_TOTAL = DEMO_SITES.reduce((n, s) => n + s.assets, 0);
export const fmt = (n: number) => n.toLocaleString('en-AU');
