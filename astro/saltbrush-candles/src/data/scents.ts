export type ScentFamily = 'Native' | 'Citrus' | 'Woody' | 'Floral';

export type Scent = {
  slug: string;
  name: string;
  family: ScentFamily;
  mood: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  story: string;
  bestFor: string[];
  image: string;
};

const U = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const scents: Scent[] = [
  {
    slug: 'saltbrush-after-rain',
    name: 'Saltbrush, After Rain',
    family: 'Native',
    mood: 'Grounding · Green · Quietly smoky',
    notes: {
      top: ['Crushed saltbrush leaf', 'Wet river stone', 'Cool air'],
      heart: ['Grey wattle', 'Native thyme', 'Damp earth'],
      base: ['Sandalwood', 'Warm earth', 'Smoked hay'],
    },
    story:
      'The first scent Marni ever poured, back in 2019. Built to smell like the ten-minute walk between her neighbour’s paddock and her back door at dusk — damp soil, a little smoke from someone’s fire, something green lifting off the ground. The quiet centre of the whole Saltbrush range.',
    bestFor: ['Evening reading', 'Dim living rooms', 'Cold-season entries'],
    image: U('1603006905003-be475563bc59'),
  },
  {
    slug: 'hahndorf-morning',
    name: 'Hahndorf Morning',
    family: 'Citrus',
    mood: 'Bright · Clean · Awake',
    notes: {
      top: ['Lemon myrtle', 'Pink grapefruit peel', 'Early air'],
      heart: ['Davidson plum', 'Bergamot rind', 'White tea'],
      base: ['Cedar shavings', 'Pale woods'],
    },
    story:
      'Named for that first still hour in Hahndorf before the Main Street cafés open and the sun catches the hills. Cold-pressed citrus and Australian lemon myrtle, lifted with a squeeze of Davidson plum for interest. Our go-to kitchen scent.',
    bestFor: ['Mornings', 'Kitchens', 'Studies', 'Anywhere that needs a wake-up'],
    image: U('1712148272589-b1e99437a7a0'),
  },
  {
    slug: 'boronia-hour',
    name: 'Boronia Hour',
    family: 'Floral',
    mood: 'Soft · Powdery · Old-world',
    notes: {
      top: ['Tasmanian brown boronia', 'Wild violet'],
      heart: ['Beeswax absolute', 'Honey myrtle', 'Pressed petals'],
      base: ['Orris root', 'Vetiver', 'Pale amber'],
    },
    story:
      'A deliberately quiet floral built around Tasmanian brown boronia — one of the rarest and most expensive florals on earth. Layered with warm beeswax and a powdery orris root base. Dressed-up, but never loud.',
    bestFor: ['Bedrooms', 'Dressing tables', 'Long baths'],
    image: U('1600857544200-b2f666a9a2ec'),
  },
  {
    slug: 'ironbark-and-smoke',
    name: 'Ironbark & Smoke',
    family: 'Woody',
    mood: 'Moody · Warm · After-dark',
    notes: {
      top: ['Smoked gum leaf', 'Black pepper', 'Resin smoke'],
      heart: ['Ironbark resin', 'Leather accord', 'Aged oak'],
      base: ['Tasmanian sandalwood', 'Smoked vetiver', 'Dry tobacco leaf'],
    },
    story:
      'A quieter kind of moody. Smoked gum leaf and Tasmanian sandalwood over a soft leather accord, with a careful pepper lift so it doesn’t turn heavy. The candle for the fireplace and the first hour of a long evening.',
    bestFor: ['Studies', 'Living rooms with a fireplace', 'Winter dinners'],
    image: U('1767824122829-c8e91ed1694e'),
  },
  {
    slug: 'hills-orchard',
    name: 'Hills Orchard',
    family: 'Floral',
    mood: 'Soft · Edible · Domestic',
    notes: {
      top: ['Quince', 'Green apple skin', 'Bright pear'],
      heart: ['Pear blossom', 'Elderflower', 'Lenswood apples'],
      base: ['Oat milk', 'Pale musk', 'Soft cream'],
    },
    story:
      'Inspired by the Lenswood orchards up the road in apple-picking season. Green-skinned fruit, soft pear blossom, a creamy oat base. Smells edible without smelling sweet — our best-selling bathroom candle.',
    bestFor: ['Bathrooms', 'Kitchens', 'Cold afternoons'],
    image: U('1760290468671-a785bd9157ef'),
  },
  {
    slug: 'linen-line',
    name: 'Linen Line',
    family: 'Citrus',
    mood: 'Clean · Airy · Restrained',
    notes: {
      top: ['Lemon verbena', 'Sea-salt air', 'Cool cotton'],
      heart: ['White tea', 'Cotton accord', 'Soft chamomile'],
      base: ['Pale cedar', 'White musk'],
    },
    story:
      'The least assertive scent in the range, and the most borrowed. Built to smell like sheets drying on the hill on a good Sunday. Works in every room and offends no one — including your guests.',
    bestFor: ['Bathrooms', 'Bedrooms', 'Rentals and Airbnbs'],
    image: U('1587740908075-9e245070dfaa'),
  },
  {
    slug: 'wattle-and-honey',
    name: 'Wattle & Honey',
    family: 'Native',
    mood: 'Warm · Sweet · Domestic',
    notes: {
      top: ['Golden wattle', 'Warm beeswax', 'Hay'],
      heart: ['Honey myrtle', 'Dried chamomile', 'Summer grass'],
      base: ['Vanilla absolute', 'Soft oak', 'Pale tonka'],
    },
    story:
      'Our proper winter candle. Golden wattle and warm beeswax over a backbone of Australian honey myrtle, sweetened with a careful vanilla. Comforting without tipping into dessert.',
    bestFor: ['Living rooms', 'Late afternoons', 'Cold weeknights'],
    image: U('1638964052152-df22e7d6b53d'),
  },
];

export const byFamily = (family: ScentFamily) => scents.filter((s) => s.family === family);
