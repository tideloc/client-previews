export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const nav = [
  { label: 'Plant hire', href: `${base}/plant-hire/` },
  { label: 'Services', href: `${base}/services/` },
  { label: 'Projects', href: `${base}/projects/` },
  { label: 'About', href: `${base}/about/` },
  { label: 'Contact', href: `${base}/contact/` },
];
export const enquiryHref = `${base}/contact/#enquiry`;
export const email = 'info@murphysplumbingservices.com.au';
export const btn = 'inline-flex items-center gap-3 border border-ink text-ink font-medium tracking-[0.02em] px-6 py-3.5 hover:bg-ink hover:text-ground transition-colors';
export const btnFilled = 'inline-flex items-center gap-3 bg-ink text-ground font-medium tracking-[0.02em] px-6 py-3.5 hover:bg-secondary transition-colors';
export const btnOnLight = 'inline-flex items-center gap-3 bg-ground text-ink font-medium tracking-[0.02em] px-6 py-3.5 hover:bg-primary transition-colors';
export const eyebrow = 'font-medium uppercase tracking-[0.28em] text-[11px] text-accent';
