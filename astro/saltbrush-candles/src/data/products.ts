export type Category = 'candle' | 'diffuser' | 'melt' | 'body' | 'gift' | 'refill';

export type Product = {
  slug: string;
  name: string;
  category: Category;
  size: string;
  burnTime?: string;
  price: number;
  scent: string;
  fragranceFamily: 'Native' | 'Citrus' | 'Woody' | 'Floral';
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  blurb: string;
  description: string;
  ingredients: string[];
  care: string;
  image: string;
  badge?: string;
  batch: string;
};

const U = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const products: Product[] = [
  // — SIGNATURE CANDLES (7) —
  {
    slug: 'saltbrush-after-rain',
    name: 'Saltbrush, After Rain',
    category: 'candle',
    size: '280g',
    burnTime: '55 hours',
    price: 58,
    scent: 'Saltbrush, After Rain',
    fragranceFamily: 'Native',
    topNotes: ['Crushed saltbrush leaf', 'wet river stone'],
    heartNotes: ['Grey wattle', 'native thyme'],
    baseNotes: ['Sandalwood', 'warm earth'],
    blurb: 'The walk back to the house at dusk. Damp ground, a little smoke, a green hum from the paddock.',
    description:
      'Our house scent and the first candle Marni ever poured. Crushed saltbrush leaf and grey wattle over sandalwood, with a whisper of wet river stone. Meditative, a little melancholy, built for long quiet evenings.',
    ingredients: ['100% Australian soy wax', 'Cotton-paper wick', 'Saltbrush essential oil', 'Grey wattle absolute', 'Sandalwood fraction'],
    care: 'First burn: melt the full surface (about 3 hours). Trim wick to 5mm between burns. Maximum 4 hours per session. Leave the lid on when cool.',
    image: U('1603006905003-be475563bc59'),
    badge: 'House scent',
    batch: '047',
  },
  {
    slug: 'hahndorf-morning',
    name: 'Hahndorf Morning',
    category: 'candle',
    size: '280g',
    burnTime: '55 hours',
    price: 58,
    scent: 'Hahndorf Morning',
    fragranceFamily: 'Citrus',
    topNotes: ['Lemon myrtle', 'pink grapefruit peel'],
    heartNotes: ['Davidson plum', 'bergamot rind'],
    baseNotes: ['White tea', 'cedar shavings'],
    blurb: 'Bright and clean. The window open, sourdough in the oven, the kettle on again.',
    description:
      'Our brightest candle. Australian-grown lemon myrtle lifted with cold-pressed grapefruit and a touch of Davidson plum. A clean cedar base keeps it from turning sweet. Perfect for kitchens, studies and mornings that need encouragement.',
    ingredients: ['100% Australian soy wax', 'Cotton-paper wick', 'Lemon myrtle essential oil', 'Grapefruit peel oil', 'Davidson plum extract', 'Cedar wood oil'],
    care: 'First burn: melt the full surface (about 3 hours). Trim wick to 5mm between burns. Maximum 4 hours per session.',
    image: U('1712148272589-b1e99437a7a0'),
    badge: 'Best seller',
    batch: '047',
  },
  {
    slug: 'boronia-hour',
    name: 'Boronia Hour',
    category: 'candle',
    size: '280g',
    burnTime: '55 hours',
    price: 62,
    scent: 'Boronia Hour',
    fragranceFamily: 'Floral',
    topNotes: ['Brown boronia', 'wild violet'],
    heartNotes: ['Beeswax absolute', 'honey myrtle'],
    baseNotes: ['Orris root', 'vetiver'],
    blurb: 'Soft-lit and old-world. Like a grandmother’s dresser drawer, but better dressed.',
    description:
      'Built around Tasmanian brown boronia — one of the most expensive florals on earth and worth every cent of it. Layered with honey myrtle and a powdery orris root base. Restrained, considered, slightly romantic.',
    ingredients: ['100% Australian soy wax', 'Cotton-paper wick', 'Tasmanian boronia absolute', 'Honey myrtle oil', 'Orris root', 'Vetiver'],
    care: 'First burn: melt the full surface (about 3 hours). Trim wick to 5mm between burns.',
    image: U('1600857544200-b2f666a9a2ec'),
    batch: '047',
  },
  {
    slug: 'ironbark-and-smoke',
    name: 'Ironbark & Smoke',
    category: 'candle',
    size: '280g',
    burnTime: '55 hours',
    price: 58,
    scent: 'Ironbark & Smoke',
    fragranceFamily: 'Woody',
    topNotes: ['Smoked gum leaf', 'black pepper'],
    heartNotes: ['Ironbark resin', 'leather accord'],
    baseNotes: ['Tasmanian sandalwood', 'smoked vetiver'],
    blurb: 'A long evening in front of the fire. The dog asleep. No one checking their phone.',
    description:
      'Our quietly moody candle. Smoked gum leaf, a tiny hit of black pepper, anchored by Western Australian sandalwood and a whisper of leather. Best lit after 6pm with something red already poured.',
    ingredients: ['100% Australian soy wax', 'Cotton-paper wick', 'Smoked eucalyptus essence', 'Tasmanian sandalwood', 'Black pepper oil', 'Vetiver'],
    care: 'First burn: melt the full surface (about 3 hours). Trim wick to 5mm between burns.',
    image: U('1767824122829-c8e91ed1694e'),
    badge: 'Limited',
    batch: '047',
  },
  {
    slug: 'hills-orchard',
    name: 'Hills Orchard',
    category: 'candle',
    size: '280g',
    burnTime: '55 hours',
    price: 58,
    scent: 'Hills Orchard',
    fragranceFamily: 'Floral',
    topNotes: ['Quince', 'green apple skin'],
    heartNotes: ['Pear blossom', 'elderflower'],
    baseNotes: ['Oat milk', 'pale musk'],
    blurb: 'The orchard in February. Fruit dropping, late light, a breeze that means business.',
    description:
      'Inspired by the Lenswood orchards just up the road. Crisp quince and green apple skin over soft pear blossom and elderflower, resting on a creamy oat-milk base. Edible without being sweet.',
    ingredients: ['100% Australian soy wax', 'Cotton-paper wick', 'Quince absolute', 'Pear blossom accord', 'Elderflower extract', 'Soft musk'],
    care: 'First burn: melt the full surface (about 3 hours). Trim wick to 5mm between burns.',
    image: U('1760290468671-a785bd9157ef'),
    batch: '047',
  },
  {
    slug: 'linen-line',
    name: 'Linen Line',
    category: 'candle',
    size: '280g',
    burnTime: '55 hours',
    price: 54,
    scent: 'Linen Line',
    fragranceFamily: 'Citrus',
    topNotes: ['Lemon verbena', 'sea salt air'],
    heartNotes: ['White tea', 'cotton accord'],
    baseNotes: ['Pale cedar', 'white musk'],
    blurb: 'Sheets drying on the hill. The smell of a clean house on a quiet Sunday.',
    description:
      'The most restrained candle in our range. Lemon verbena and sea-salt air folded into a soft cotton and white-tea heart. Perfect in bathrooms, bedrooms and rentals.',
    ingredients: ['100% Australian soy wax', 'Cotton-paper wick', 'Lemon verbena oil', 'White tea extract', 'Pale cedar', 'White musk'],
    care: 'First burn: melt the full surface (about 3 hours). Trim wick to 5mm between burns.',
    image: U('1587740908075-9e245070dfaa'),
    batch: '047',
  },
  {
    slug: 'wattle-and-honey',
    name: 'Wattle & Honey',
    category: 'candle',
    size: '280g',
    burnTime: '55 hours',
    price: 58,
    scent: 'Wattle & Honey',
    fragranceFamily: 'Native',
    topNotes: ['Golden wattle', 'warm beeswax'],
    heartNotes: ['Honey myrtle', 'dried chamomile'],
    baseNotes: ['Vanilla absolute', 'soft oak'],
    blurb: 'Late-winter sun on a wooden table. Something sweet baking somewhere.',
    description:
      'A proper winter candle. Golden wattle and warm beeswax over honey myrtle and dried chamomile, sweetened with a careful touch of vanilla absolute. Comforting without being cloying.',
    ingredients: ['100% Australian soy wax', 'Cotton-paper wick', 'Wattle absolute', 'Beeswax extract', 'Honey myrtle', 'Vanilla absolute'],
    care: 'First burn: melt the full surface (about 3 hours). Trim wick to 5mm between burns.',
    image: U('1638964052152-df22e7d6b53d'),
    batch: '047',
  },

  // — DIFFUSERS (2) —
  {
    slug: 'saltbrush-reed-diffuser',
    name: 'Saltbrush, After Rain — Reed Diffuser',
    category: 'diffuser',
    size: '200ml · 8 reeds',
    price: 68,
    scent: 'Saltbrush, After Rain',
    fragranceFamily: 'Native',
    topNotes: ['Crushed saltbrush leaf', 'wet river stone'],
    heartNotes: ['Grey wattle', 'native thyme'],
    baseNotes: ['Sandalwood', 'warm earth'],
    blurb: 'The house scent, turned long-haul. Lasts roughly 10 to 12 weeks.',
    description:
      'Our signature scent in diffuser form — eight natural rattan reeds in a hand-blown amber glass base, delivering slow, even fragrance for about three months. Flip the reeds every 7–10 days for a clearer throw.',
    ingredients: ['Plant-based diffuser base', 'Saltbrush essential oil', 'Grey wattle absolute', 'Sandalwood fraction', 'Rattan reeds'],
    care: 'Flip reeds every 7 days. Keep out of direct sunlight. Avoid placing on finished timber — the base is potent.',
    image: U('1572726729207-a78d6feb18d7'),
    badge: 'Refillable',
    batch: '047',
  },
  {
    slug: 'hahndorf-electric-diffuser',
    name: 'Hahndorf Morning — Electric Diffuser',
    category: 'diffuser',
    size: '120ml · USB-C',
    price: 96,
    scent: 'Hahndorf Morning',
    fragranceFamily: 'Citrus',
    topNotes: ['Lemon myrtle', 'pink grapefruit peel'],
    heartNotes: ['Davidson plum', 'bergamot rind'],
    baseNotes: ['White tea', 'cedar shavings'],
    blurb: 'Quiet ultrasonic mist. The scent of your best mornings, on a timer.',
    description:
      'A ceramic-and-pale-oak ultrasonic diffuser pre-loaded with 120ml of Hahndorf Morning oil. Runs for up to 8 hours on low, with a soft warm-toned night light. USB-C powered. Refill pouches available separately.',
    ingredients: ['Water-based diffuser oil', 'Lemon myrtle essential oil', 'Grapefruit peel oil', 'Davidson plum extract', 'Cedar wood oil'],
    care: 'Top up with water each use. Refill the oil chamber from a Saltbrush refill pouch when empty.',
    image: U('1669151432266-cd991ea149ad'),
    batch: '047',
  },

  // — WAX MELTS (1) —
  {
    slug: 'scent-library-melts',
    name: 'Scent Library Melts — Discovery Set',
    category: 'melt',
    size: '7 × 14g',
    burnTime: '8 hours each',
    price: 36,
    scent: 'All seven signatures',
    fragranceFamily: 'Native',
    topNotes: ['Varies by cube'],
    heartNotes: ['Varies by cube'],
    baseNotes: ['Varies by cube'],
    blurb: 'All seven signatures in soy-wax cubes. The easiest way to meet the whole range.',
    description:
      'Seven hand-poured soy wax cubes — one for every signature scent. Snap one into a warmer for a no-flame alternative, or use them to decide which full candle is next on your list.',
    ingredients: ['100% Australian soy wax', 'All seven signature fragrance blends'],
    care: 'Use one cube at a time in an electric wax warmer. Never leave unattended.',
    image: U('1524592714635-d77511a4834d'),
    batch: '047',
  },

  // — BODY (2) —
  {
    slug: 'hills-orchard-hand-cream',
    name: 'Hills Orchard Hand Cream',
    category: 'body',
    size: '75ml',
    price: 34,
    scent: 'Hills Orchard',
    fragranceFamily: 'Floral',
    topNotes: ['Quince', 'green apple skin'],
    heartNotes: ['Pear blossom', 'elderflower'],
    baseNotes: ['Oat milk', 'pale musk'],
    blurb: 'Rich, not greasy. Made for the cold end of the year and the people who hate hand cream.',
    description:
      'A deeply nourishing hand cream with Kangaroo Island shea butter, Australian jojoba and a creamy oat-milk base. Matte finish, proper absorbency, and a soft fruit-and-floral lift from our Hills Orchard scent.',
    ingredients: ['Shea butter', 'Jojoba oil', 'Aloe', 'Oat milk extract', 'Hills Orchard fragrance blend', 'Vitamin E'],
    care: 'Massage a pea-sized amount into dry hands. Safe for daily use.',
    image: U('1515552726023-7125c8d07fb3'),
    batch: '047',
  },
  {
    slug: 'boronia-perfume-oil',
    name: 'Boronia Perfume Oil',
    category: 'body',
    size: '15ml roll-on',
    price: 68,
    scent: 'Boronia Hour',
    fragranceFamily: 'Floral',
    topNotes: ['Brown boronia', 'wild violet'],
    heartNotes: ['Beeswax absolute', 'honey myrtle'],
    baseNotes: ['Orris root', 'vetiver'],
    blurb: 'A quiet, close-to-skin perfume oil. Wears in, not out.',
    description:
      'A clean jojoba-oil perfume layered around Tasmanian boronia. Not a loud floral — think a half-step of scent that lingers on your wrist and the inside of a coat collar.',
    ingredients: ['Australian jojoba oil', 'Tasmanian boronia absolute', 'Honey myrtle', 'Orris root', 'Vetiver'],
    care: 'Apply to pulse points. Keep out of direct sunlight.',
    image: U('1604068549290-dea0e4a305ca'),
    batch: '047',
  },

  // — GIFT BOX (1) —
  {
    slug: 'signature-three-gift',
    name: 'Signature Three — Gift Set',
    category: 'gift',
    size: '3 × 140g',
    burnTime: '25 hours each',
    price: 120,
    scent: 'Saltbrush / Hahndorf / Ironbark',
    fragranceFamily: 'Native',
    topNotes: ['Saltbrush leaf', 'lemon myrtle', 'smoked gum'],
    heartNotes: ['Grey wattle', 'Davidson plum', 'ironbark resin'],
    baseNotes: ['Sandalwood', 'white tea', 'Tasmanian sandalwood'],
    blurb: 'Three medium candles, hand-tied in sage ribbon inside a linen gift box.',
    description:
      'Our three most-loved scents — Saltbrush After Rain, Hahndorf Morning and Ironbark & Smoke — in 140g size, nested in a reusable linen-wrapped gift box with a sage ribbon tie and a hand-written batch card. Complimentary gift note on request.',
    ingredients: ['3 × 140g signature candles', 'Linen-wrapped gift box', 'Natural sage ribbon', 'Hand-written batch card'],
    care: 'Store boxed candles upright, cool, away from direct sunlight.',
    image: U('1607344645866-009c320b63e0'),
    badge: 'Most gifted',
    batch: '047',
  },

  // — REFILL (1) —
  {
    slug: 'saltbrush-refill-pouch',
    name: 'Saltbrush Refill Pouch',
    category: 'refill',
    size: '280g wax pouch',
    price: 38,
    scent: 'Saltbrush, After Rain',
    fragranceFamily: 'Native',
    topNotes: ['Crushed saltbrush leaf', 'wet river stone'],
    heartNotes: ['Grey wattle', 'native thyme'],
    baseNotes: ['Sandalwood', 'warm earth'],
    blurb: 'Skip the vessel. Refill the one you already love at 30% off.',
    description:
      'A compostable wax-paper pouch of pre-poured Saltbrush After Rain. Melt it gently into your existing empty Saltbrush vessel (we include a new wick and wick-centring clip). 30% cheaper than a new candle, and almost zero packaging.',
    ingredients: ['100% Australian soy wax (pre-poured)', 'Saltbrush fragrance blend', 'New cotton wick', 'Wick clip', 'Compostable pouch'],
    care: 'Melt gently on low heat in a bain-marie. Pour into a cleaned Saltbrush vessel with the included wick centred. Cure 48 hours before lighting.',
    image: U('1534889156217-d643df14f14a'),
    badge: 'Refill',
    batch: '047',
  },
];

export const byCategory = (cat: Category) => products.filter((p) => p.category === cat);
