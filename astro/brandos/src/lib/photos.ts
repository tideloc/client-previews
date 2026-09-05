/** Product photos keyed by menu slug. All first-party product shots on the brand yellow. */
import type { ImageMetadata } from 'astro';
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/p-*.jpg', { eager: true });
export const photo = (slug: string): ImageMetadata | undefined => files[`../assets/p-${slug}.jpg`]?.default;
export const priceOf = (sections: { title: string; items: { name: string; price: string; note?: string }[] }[], title: string, name: string) =>
  sections.find((s) => s.title === title)?.items.find((i) => i.name === name)?.price ?? '';
