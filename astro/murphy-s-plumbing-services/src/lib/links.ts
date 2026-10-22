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
export const btnPrimary = 'inline-block bg-primary text-ground font-medium tracking-[0.02em] px-6 py-3.5 hover:bg-ink focus-visible:ring-2 focus-visible:ring-ground';
export const btnOnDark = 'inline-block bg-ground text-ink font-medium tracking-[0.02em] px-6 py-3.5 hover:bg-secondary';
export const eyebrow = 'font-medium uppercase tracking-[0.22em] text-xs';
