import { siteContent, fullAddress } from './site';

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const mapQuery = `${siteContent.businessName}, ${fullAddress()}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
export const telHref = 'tel:+61885525092';
export const nav = [
  { href: `${base}/menu/`, label: 'Menu' },
  { href: `${base}/functions/`, label: 'Functions' },
  { href: `${base}/about/`, label: 'The café' },
  { href: `${base}/gallery/`, label: 'Gallery' },
  { href: `${base}/contact/`, label: 'Find us' },
];
