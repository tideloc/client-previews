export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const nav = [
  { label: 'Capability', href: `${base}/capability/` },
  { label: 'Plant hire', href: `${base}/plant-hire/` },
  { label: 'Projects', href: `${base}/projects/` },
  { label: 'Company', href: `${base}/company/` },
  { label: 'Contact', href: `${base}/contact/` },
];
export const enquiryHref = `${base}/contact/#enquiry`;
export const pdfHref = `${base}/murphys-plumbing-services-capability-statement.pdf`;
export const email = 'info@murphysplumbingservices.com.au';
export const abnUrl = 'https://abr.business.gov.au/ABN/View?abn=24101951759';
export const licenceUrl = 'https://www.onegov.nsw.gov.au/publicregister/#/publicregister/search/Trades';
export const btnPrimary = 'inline-flex items-center gap-2 bg-primary text-ground font-medium tracking-[0.02em] px-6 py-3.5 hover:bg-ink';
export const btnOutline = 'inline-flex items-center gap-2 border border-ink text-ink font-medium tracking-[0.02em] px-6 py-3.5 hover:bg-ink hover:text-ground';
export const btnOnDark = 'inline-flex items-center gap-2 bg-ground text-ink font-medium tracking-[0.02em] px-6 py-3.5 hover:bg-secondary';
export const eyebrow = 'font-medium uppercase tracking-[0.22em] text-[11px] text-ink/60';
export const eyebrowDark = 'font-medium uppercase tracking-[0.22em] text-[11px] text-ground/60';
