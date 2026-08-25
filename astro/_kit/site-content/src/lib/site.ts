/**
 * Tideloc self-serve site content.
 *
 * `site` is the last copy committed to this repo by the portal (baked in at
 * build time so the page is complete without JS and search engines see the
 * hours). tl-live.js then fetches the same document from the portal at
 * runtime and patches any [data-tl] slots that changed, so a client's save
 * shows within minutes even before the next build lands.
 */
import site from "../content/site.json";

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export type DayHours = { day: DayKey; closed: boolean; open: string; close: string; note?: string; label: string; display: string };
export type Holiday = { date: string; label: string; closed: boolean; open?: string; close?: string };
export type PriceItem = { name: string; price: string; note?: string };
export type PriceSection = { title: string; items: PriceItem[] };
export type SiteContent = {
  slug: string;
  version: number;
  updatedAt: string;
  businessName: string;
  hours: DayHours[];
  holidays: Holiday[];
  announcement: { enabled: boolean; text: string; link?: string };
  contact: { phone: string; email: string; address: string; suburb: string; state: string; postcode: string; mapUrl?: string };
  priceList: PriceSection[];
  social: { facebook?: string; instagram?: string; tiktok?: string; google?: string; booking?: string };
  openingHoursSpecification: Array<{ "@type": string; dayOfWeek: string; opens: string; closes: string }>;
};

export const siteContent = site as unknown as SiteContent;

/** Where tl-live.js fetches the live copy. Override with PUBLIC_TL_CONTENT_URL. */
export const LIVE_URL =
  (import.meta.env.PUBLIC_TL_CONTENT_URL as string | undefined) || `https://portal.tideloc.com.au/api/portal/site/${siteContent.slug}.json`;

export const fullAddress = (c = siteContent.contact) => [c.address, [c.suburb, c.state, c.postcode].filter(Boolean).join(" ")].filter(Boolean).join(", ");
