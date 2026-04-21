export type BeerCategory = 'core' | 'seasonal' | 'oneoff' | 'nonbeer';
export type Availability = 'cans' | 'tap' | 'growler';

export type Beer = {
  slug: string;
  name: string;
  style: string;
  abv: number;
  ibu?: number;
  srm?: number;
  category: BeerCategory;
  blurb: string;
  description: string;
  tastingNotes: [string, string, string];
  pairs: [string, string, string];
  ingredients: string[];
  available: Availability[];
  price?: number;
  size?: string;
  image: string;
  badge?: string;
};

const U = (id: string, w = 900, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const beers: Beer[] = [
  {
    slug: 'slow-road-lager',
    name: 'Slow Road',
    style: 'Northern Rivers Lager',
    abv: 4.4,
    ibu: 22,
    srm: 4,
    category: 'core',
    blurb: 'The one you drink the second of. Crisp pilsner malt, soft spring water, five weeks on the yeast.',
    description:
      "Our house lager. Five weeks cold-conditioned on a single-strain Bavarian yeast we've been pitching for six years. Pilsner malt from Gladfield, Saaz from the Yakima Valley, and the same Repton Spring water that fed the hinterland before the road in from Bangalow was sealed. Clean bitterness, faint biscuit, nothing showy.",
    tastingNotes: [
      'Cracker-malt nose, faint lemon zest, white-flower hop lift.',
      'Soft, rounded body; the carbonation does half the work.',
      'Finishes dry with a just-barely-there grassy bitterness.',
    ],
    pairs: ['Schnitzel sandwich', 'Salt & vinegar chips', 'Thursday'],
    ingredients: ['Gladfield Pilsner malt', 'Carapils', 'Saaz (Yakima)', 'Hallertau Mittelfrüh', 'Bavarian lager yeast', 'Repton spring water'],
    available: ['cans', 'tap', 'growler'],
    price: 24,
    size: '4 x 375ml',
    image: U('1508253578933-20b529302151'),
    badge: 'Flagship',
  },
  {
    slug: 'field-pale',
    name: 'Field Pale',
    style: 'Australian Pale Ale',
    abv: 4.8,
    ibu: 34,
    srm: 6,
    category: 'core',
    blurb: 'Galaxy, Vic Secret, Eclipse. Three Aussie hops, one pale malt, zero ego.',
    description:
      "A pale ale built around three Australian hops: Galaxy for the passionfruit, Vic Secret for the pine-herb undertone, Eclipse for the finishing citrus pop. Grist is a simple base pale + a touch of wheat for foam stand. The beer we pour when someone says 'just give me whatever'.",
    tastingNotes: [
      'Passionfruit and grapefruit pith up top, pineapple core, a whiff of crushed native lemon myrtle.',
      'Medium-bodied, clean malt spine, bitterness balanced rather than sharpened.',
      'Lingering stone-fruit and soft bitterness through a dry finish.',
    ],
    pairs: ['Fish tacos', 'Charred corn', 'Weekday pizza'],
    ingredients: ['Voyager pale malt', 'Torrefied wheat', 'Galaxy', 'Vic Secret', 'Eclipse', 'US-05 yeast'],
    available: ['cans', 'tap', 'growler'],
    price: 26,
    size: '4 x 375ml',
    image: U('1535958636474-b021ee887b13'),
    badge: 'Flagship',
  },
  {
    slug: 'hinterland-ipa',
    name: 'Hinterland',
    style: 'West Coast IPA',
    abv: 6.6,
    ibu: 58,
    srm: 7,
    category: 'core',
    blurb: 'Proper bitterness. Old-school resin and grapefruit, no murky nonsense.',
    description:
      "An IPA made how IPAs used to be made — bright, bitter, resinous, and not hiding behind 200g of fruit puree. Centennial and Simcoe drive the grapefruit-and-pine, Citra does the aromatics. Cold-crashed and filtered bright. If you like a modern hazy, this isn't it; if you're tired of them, this is for you.",
    tastingNotes: [
      'Resinous pine needle, pink grapefruit, a lick of orange marmalade.',
      'Firm dry bitterness; the malt shows up just enough to keep things upright.',
      'Long, dry, slightly herbal finish. You will want another.',
    ],
    pairs: ['Sharp cheddar', 'Crispy pork belly', 'Green papaya salad'],
    ingredients: ['Voyager pale', 'Munich', 'Crystal 45', 'Centennial', 'Simcoe', 'Citra', 'US-05'],
    available: ['cans', 'tap', 'growler'],
    price: 30,
    size: '4 x 375ml',
    image: U('1571175443880-49e1d25b2bc5'),
  },
  {
    slug: 'federal-dark-mild',
    name: 'Federal Dark',
    style: 'English Dark Mild',
    abv: 3.6,
    ibu: 18,
    srm: 24,
    category: 'core',
    blurb: 'A session dark. Coffee, cocoa, raisin toast. Built for the second half of a long afternoon.',
    description:
      "A proper English-style dark mild, unfashionable and all the better for it. Five malts, one low-alcohol English yeast that throws peach esters at a brown beer. It's dark, it's light, it's 3.6%, it drinks like a dream and it costs you almost nothing in the morning.",
    tastingNotes: [
      'Cold toast, cocoa nib, a faint whisper of dried peach from the yeast.',
      'Light-bodied — it drinks like a mild, not a porter.',
      'Clean chocolate-coffee exit, no roasted harshness.',
    ],
    pairs: ['Roast lamb sandwich', 'Ploughman\'s plate', 'Apple crumble'],
    ingredients: ['Maris Otter', 'Crystal 120', 'Chocolate malt', 'Pale chocolate', 'Flaked oats', 'Fuggles', 'East Kent Goldings', 'London ESB yeast'],
    available: ['cans', 'tap', 'growler'],
    price: 24,
    size: '4 x 375ml',
    image: U('1587560699334-cc4ff634909a'),
  },
  {
    slug: 'long-paddock-saison',
    name: 'Long Paddock',
    style: 'Farmhouse Saison',
    abv: 5.4,
    ibu: 28,
    srm: 5,
    category: 'seasonal',
    blurb: 'Spring saison with locally grown chamomile and orange blossom. Dry, peppery, alive.',
    description:
      "Our spring pour. We co-ferment with a farmhouse yeast from a Picardy saisonnier, then dose the whirlpool with chamomile grown 4km up the road at Mullumbimby Biodynamic and a handful of orange blossom. Bone-dry, finely carbonated, faintly spicy — a beer for the first warm evening.",
    tastingNotes: [
      'Chamomile tea, orange zest, white pepper, a soft lactic edge.',
      'Spritzy, dry, almost wine-like in body.',
      'Clean, peppery, herbaceous finish.',
    ],
    pairs: ['Goat\'s curd on toast', 'Seared scallops', 'Rhubarb tart'],
    ingredients: ['Pilsner malt', 'Raw wheat', 'Oats', 'Sterling hops', 'Chamomile (Mullum Biodynamic)', 'Orange blossom', 'French saison yeast'],
    available: ['cans', 'tap'],
    price: 28,
    size: '4 x 375ml',
    image: U('1577906096429-f73c2c312435'),
    badge: 'Spring',
  },
  {
    slug: 'low-fog-stout',
    name: 'Low Fog',
    style: 'Oatmeal Stout',
    abv: 5.8,
    ibu: 35,
    srm: 38,
    category: 'seasonal',
    blurb: 'Winter stout with rolled oats and Federal-roasted espresso beans. Thick, dark, easy.',
    description:
      "June release. A proper oatmeal stout smoothed out with a late addition of cold-brewed espresso from Federal Roasters (100m up the lane). Rolled oats, chocolate malt, pale chocolate, a restrained hop bill — the coffee does the heavy lifting.",
    tastingNotes: [
      'Espresso crema, dark cocoa, a suggestion of vanilla and burnt sugar.',
      'Silky, oat-slicked body, faint sweetness kept in line by roast bitterness.',
      'Long coffee-finish; no harsh astringency.',
    ],
    pairs: ['Flourless chocolate cake', 'Pulled beef cheek', 'Blue cheese'],
    ingredients: ['Maris Otter', 'Rolled oats', 'Chocolate malt', 'Pale chocolate', 'Roasted barley', 'Fuggles', 'Federal Roasters espresso', 'London yeast'],
    available: ['cans', 'tap', 'growler'],
    price: 28,
    size: '4 x 375ml',
    image: U('1466978913421-dad2ebd01d17'),
    badge: 'Winter',
  },
  {
    slug: 'shoulder-season-red',
    name: 'Shoulder Season',
    style: 'Red Rye Ale',
    abv: 5.6,
    ibu: 42,
    srm: 18,
    category: 'seasonal',
    blurb: 'Autumn red with 20% rye. Toasty, spicy, lightly resinous. Jacket weather in a glass.',
    description:
      "Brewed once a year, first week of April, when the nights in the hinterland go from humid to crisp. 20% rye in the grist gives it a long peppery finish, Crystal 150 builds caramel and dried fig, and a trio of American C-hops keep it from getting too sweet.",
    tastingNotes: [
      'Toasted rye bread, dried fig, blood orange peel.',
      'Medium-full, oily rye mouthfeel, balanced by confident bitterness.',
      'Warm, spicy, slightly resinous close.',
    ],
    pairs: ['Slow-cooked beef cheek', 'Smoked cheddar', 'Ploughman\'s'],
    ingredients: ['Maris Otter', 'Rye malt', 'Crystal 150', 'Chocolate rye', 'Centennial', 'Chinook', 'Cascade', 'Windsor ale yeast'],
    available: ['cans', 'tap'],
    price: 28,
    size: '4 x 375ml',
    image: U('1584225064785-c62a8b43d148'),
    badge: 'Autumn',
  },
  {
    slug: 'brew-deck-no7',
    name: 'Brew Deck No. 7',
    style: 'Foeder-aged Grisette',
    abv: 4.2,
    ibu: 24,
    srm: 5,
    category: 'oneoff',
    blurb: 'Small-batch. 14 months in oak, dosed with riesling lees. 420L made. When it\'s gone it\'s gone.',
    description:
      "From the brew deck — our small experimental loop. A grisette aged 14 months in a 500L oak foeder we inherited from a winemaker in the Granite Belt, then dosed with riesling lees from Cargo Road. 420 litres made, hand-numbered 750ml bottles only. Funky, spritzy, pin-sharp.",
    tastingNotes: [
      'Green apple, oak cellar, wet hay, a fine lemon thread.',
      'Almost champagne-dry, very bright carbonation.',
      'Lingering orchard-fruit finish with a clean mineral tail.',
    ],
    pairs: ['Raw oysters', 'Jamón with rockmelon', 'Crumbed brie'],
    ingredients: ['Pilsner malt', 'Raw wheat', 'Sterling hops', 'Mixed-culture farmhouse yeast', 'Riesling lees (Cargo Road)', 'Oak foeder'],
    available: ['growler', 'tap'],
    price: 38,
    size: '750ml bottle',
    image: U('1544441892-794166f1e3be'),
    badge: 'Limited — 420L',
  },
  {
    slug: 'eight-hills-barleywine',
    name: 'Eight Hills',
    style: 'English Barleywine (2023 vintage)',
    abv: 11.2,
    ibu: 40,
    srm: 22,
    category: 'oneoff',
    blurb: 'Vintage barleywine. 22 months quiet in the cellar. For sharing, or for keeping, up to you.',
    description:
      "Brewed in July 2023. Cellared flat in 30L stainless for 22 months, then bottle-conditioned for another three. Rich, full, not remotely cloying — treacle, fig jam, a slow warming alcohol. Built for a cold night and a small glass.",
    tastingNotes: [
      'Dried fig, black treacle, orange marmalade, tobacco, leather.',
      'Full-bodied, warming, dangerously smooth.',
      'Long, oxidative-in-a-good-way finish that goes on for a minute.',
    ],
    pairs: ['Aged Comté', 'Sticky date pudding', 'A dark room'],
    ingredients: ['Maris Otter', 'Crystal 80', 'Crystal 150', 'Invert No.3 sugar', 'Fuggles', 'East Kent Goldings', 'Windsor yeast'],
    available: ['growler'],
    price: 28,
    size: '500ml bottle',
    image: U('1505075106905-fb052892c116'),
    badge: '2023 vintage',
  },
  {
    slug: 'mothertongue-ginger',
    name: 'Mothertongue Ginger',
    style: 'Wild-fermented Ginger Beer',
    abv: 0.5,
    category: 'nonbeer',
    blurb: 'Properly fermented, properly fiery. Organic ginger, raw sugar, lemon, a long slow burn.',
    description:
      "A real ginger beer — wild-fermented, lightly carbonated, barely alcoholic. We start with 14kg of organic ginger per 200L batch, crushed that morning, then ferment on a house culture we've been feeding since 2019. Sharp, warming, not sweet.",
    tastingNotes: [
      'Fresh ginger, bright lemon, a whisper of star anise.',
      'Clean, dry, fizzy; the heat rises on the back palate.',
      'Long warming finish that sticks around.',
    ],
    pairs: ['Spicy laksa', 'Roast pork', 'A hangover'],
    ingredients: ['Organic ginger', 'Raw sugar', 'Fresh lemon', 'House wild culture', 'Spring water'],
    available: ['cans', 'tap', 'growler'],
    price: 22,
    size: '4 x 375ml',
    image: U('1553545204-4f7d339aa06a'),
  },
  {
    slug: 'slow-road-kombucha',
    name: 'Dusk Kombucha',
    style: 'Kombucha — Jasmine & Peach',
    abv: 0.8,
    category: 'nonbeer',
    blurb: 'Second-ferment kombucha with white peach + local jasmine. Tea-tannic, barely sweet.',
    description:
      "Our non-beer bottle. A 21-day jasmine green tea ferment second-fermented on Mullum-grown white peach. Tannic, faintly grape-like, finishes dry. We pour this for designated drivers and for hot afternoons when you've already had three.",
    tastingNotes: [
      'White peach, jasmine flower, a touch of green-tea tannin.',
      'Light, fizzy, just-barely-sweet.',
      'Dry, floral, clean finish.',
    ],
    pairs: ['Poke bowl', 'Summer fruit salad', 'Anything with goat cheese'],
    ingredients: ['Jasmine green tea', 'Raw sugar', 'White peach', 'SCOBY culture', 'Spring water'],
    available: ['cans', 'tap'],
    price: 22,
    size: '4 x 375ml',
    image: U('1615914143778-1a1a6e50c5dd'),
  },
  {
    slug: 'coast-road-hazy',
    name: 'Coast Road',
    style: 'Hazy IPA',
    abv: 6.2,
    ibu: 32,
    srm: 5,
    category: 'core',
    blurb: 'Our softer IPA. Nelson Sauvin + Mosaic. Tropical, juicy, a bit of pith to keep it honest.',
    description:
      "The IPA for people who like hazies but are bored of them being sweet. Nelson Sauvin brings white grape and gooseberry, Mosaic lays down blueberry and stone fruit. Oats and wheat give it the soft mouthfeel, but bitterness is kept at 32 IBU — enough to finish dry.",
    tastingNotes: [
      'White grape, tropical fruit, faint pine-resin edge.',
      'Soft, pillowy mouthfeel; just-enough bitterness to cut it.',
      'Dry, pithy tropical finish — not sweet.',
    ],
    pairs: ['Spicy papaya salad', 'Chargrilled prawns', 'Sunday lunch'],
    ingredients: ['Pale malt', 'Flaked oats', 'Flaked wheat', 'Nelson Sauvin', 'Mosaic', 'London III yeast'],
    available: ['cans', 'tap', 'growler'],
    price: 28,
    size: '4 x 375ml',
    image: U('1518005020951-eccb494ad742'),
  },
];

export const byCategory = (cat: BeerCategory) => beers.filter((b) => b.category === cat);
export const findBySlug = (slug: string) => beers.find((b) => b.slug === slug);
