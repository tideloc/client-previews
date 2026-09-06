/** The six real posts on instagram.com/reel.drift.wa, checked 2026-09-06. Captions verbatim (trimmed of handles). */
import heroRiver from '../assets/hero-river-sunset.jpg';
import angler from '../assets/angler-casting.jpg';
import bream from '../assets/bream-in-net.jpg';
import bow from '../assets/bow-sunrise.jpg';
import deck from '../assets/logo-on-deck.jpg';
import somethingNew from '../assets/something-new.jpg';

export type Reel = {
  code: string; url: string; date: string; title: string; caption: string; cover: ImageMetadata; alt: string; kind: 'reel' | 'post'; tags: string[];
};

export const reels: Reel[] = [
  { code: 'Dbc-9jmhF0m', url: 'https://www.instagram.com/reel.drift.wa/reel/Dbc-9jmhF0m/', date: '31 Jul 2026', title: 'Getting the oldest lad hooked on plastics', caption: 'Taking the oldest lad out to get him hooked on fishing with plastics. Veetail 70s in Yabby oil doing the damage.', cover: heroRiver, alt: 'Boy fishing from the bow of a Quintrex tinnie on a gum-lined river at sunset', kind: 'reel', tags: ['Veetail 70', 'Yabby oil'] },
  { code: 'DbTB51jBgBz', url: 'https://www.instagram.com/reel.drift.wa/reel/DbTB51jBgBz/', date: '27 Jul 2026', title: 'Light braid, 3lb leader and the Grub Freak', caption: 'Using a Varivas light game braid in PE 0.6 with Yamatoyo Chinu Harris in 3lb has always been very reliable for me. The Millerods Grub Freak has become my favourite rod to flick lightly weighted soft plastics and pairs nicely to the Daiwa Certate 2500S.', cover: angler, alt: 'Angler casting a light spin rod from the bow beneath tall gum trees on a river bank', kind: 'reel', tags: ['Varivas PE 0.6', 'Millerods Grub Freak', 'Daiwa Certate 2500S'] },
  { code: 'DbBCvkchtiT', url: 'https://www.instagram.com/reel.drift.wa/reel/DbBCvkchtiT/', date: '20 Jul 2026', title: 'Winter bream can be hard to find', caption: 'Do you start upstream and work your way down? Or do you go to the lower reaches? Persistence and patience and always willing to try new things. What are your winter bream theories?', cover: bream, alt: 'Three bream in a landing net on the boat deck beside a pack of Hurricane Lures Sprats', kind: 'reel', tags: ['Bream', 'Hurricane Lures'] },
  { code: 'DarMgQQhL9m', url: 'https://www.instagram.com/reel.drift.wa/reel/DarMgQQhL9m/', date: '11 Jul 2026', title: 'Bow at sunrise', caption: 'No caption on this one. Flat water, first light, rods rigged on the bow.', cover: bow, alt: 'Bow of the boat on flat estuary water under a pink and blue sunrise sky', kind: 'reel', tags: ['Sunrise'] },
  { code: 'DaZrURGx1ex', url: 'https://www.instagram.com/reel.drift.wa/reel/DaZrURGx1ex/', date: '4 Jul 2026', title: 'On the deck', caption: 'Tagged: Outback Breamer Baits, Millerods, Shimano Fish AU.', cover: deck, alt: 'Reel Drift rod and wave logo overlaid on the grey deck of the boat in sunlight', kind: 'reel', tags: ['Outback Breamer Baits', 'Millerods', 'Shimano'] },
  { code: 'DaIGl3Rh1aQ', url: 'https://www.instagram.com/reel.drift.wa/p/DaIGl3Rh1aQ/', date: '28 Jun 2026', title: 'Something new is coming.', caption: 'At Reel Drift our goal is simple: share our love of fishing through genuine adventures, practical tips, plenty of laughs, and memories made along the way.', cover: somethingNew, alt: 'Reel Drift logo above the words Something new is coming on a cream background', kind: 'post', tags: ['First post'] },
];

export const INSTAGRAM = 'https://www.instagram.com/reel.drift.wa/';
export const YOUTUBE = 'https://www.youtube.com/@ReelDriftWA';
