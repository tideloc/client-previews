export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const nav = [
  { label: 'Services', href: `${base}/services/` },
  { label: 'Welding', href: `${base}/welding/` },
  { label: 'Plant', href: `${base}/plant/` },
  { label: 'Credentials', href: `${base}/credentials/` },
  { label: 'Projects', href: `${base}/projects/` },
  { label: 'Contact', href: `${base}/contact/` },
];
export const enquiryHref = `${base}/contact/#enquiry`;
export const pdfHref = `${base}/murphys-plumbing-services-capability-statement.pdf`;
export const email = 'info@murphysplumbingservices.com.au';
export const abnUrl = 'https://abr.business.gov.au/ABN/View?abn=24101951759';
export const licenceUrl = 'https://www.onegov.nsw.gov.au/publicregister/#/publicregister/search/Trades';
export const btnAccent = 'inline-flex items-center gap-2 bg-accent text-ground font-medium tracking-[0.02em] px-6 py-3.5 hover:bg-ink transition-colors';
export const btnGhost = 'inline-flex items-center gap-2 border border-ink/30 text-ink font-medium tracking-[0.02em] px-6 py-3.5 hover:border-accent hover:text-accent transition-colors';
export const linkMore = 'inline-flex items-center gap-2 text-accent font-medium underline underline-offset-[6px] decoration-accent/40 hover:decoration-accent';
export const eyebrow = 'font-medium uppercase tracking-[0.26em] text-[11px] text-accent';
export const eyebrowMuted = 'font-medium uppercase tracking-[0.26em] text-[11px] text-muted';
