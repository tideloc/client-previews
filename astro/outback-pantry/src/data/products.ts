export type Product = {
  slug: string;
  name: string;
  botanicalName: string;
  category: 'spice' | 'fruit' | 'seed' | 'protein' | 'sauce' | 'hamper';
  price: number;
  size: string;
  blurb: string;
  description: string;
  flavorNotes: [string, string, string];
  uses: [string, string, string];
  harvestSeason: string;
  country: string;
  cooperative: string;
  coords: [number, number];
  image: string;
  badge?: string;
};

const U = (id: string, w = 900, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const products: Product[] = [
  // --- SPICES (3) ---
  {
    slug: 'mountain-pepperberry',
    name: 'Mountain Pepperberry',
    botanicalName: 'Tasmannia lanceolata',
    category: 'spice',
    price: 24,
    size: '40g jar',
    blurb: 'Slow-building, fruit-forward heat from the Tasmanian high country. Grind fresh over anything off the grill.',
    description:
      'Whole dried pepperberries, hand-picked from wild stands in the highlands of lutruwita / Tasmania. A slow, fruit-forward heat that lingers at the back of the throat — closer to szechuan than black pepper, with a floral, almost eucalyptus top note. Crush coarse in a mortar just before serving. Keeps brilliantly for 18 months away from light.',
    flavorNotes: ['Wild berry', 'Lingering heat', 'Eucalypt finish'],
    uses: ['Finish a grilled lamb rack', 'Crust for kangaroo fillet', 'Crack into a dark chocolate tart'],
    harvestSeason: 'Late summer · Feb–Mar',
    country: 'palawa Country, lutruwita (Tasmania)',
    cooperative: 'Ben Lomond Highland Harvest',
    coords: [-41.6037, 147.6554],
    image: U('1509358271058-acd22cc93898'),
    badge: 'Flagship',
  },
  {
    slug: 'wattleseed-roast',
    name: 'Wattleseed · Dark Roast',
    botanicalName: 'Acacia victoriae',
    category: 'spice',
    price: 19,
    size: '80g jar',
    blurb: 'Ground, dark-roasted wattleseed. Mocha, chocolate, caramelised hazelnut. Use like cinnamon, only better.',
    description:
      'Wattleseed from Acacia victoriae (Elegant Wattle), wild-harvested on central desert Country and roasted in small batches at our Alice Springs warehouse. Ground to a medium grind — fine enough to bloom in hot liquid, coarse enough to give baked goods texture. The dark roast pulls out the chocolate and coffee notes; the raw seed underneath is sweeter, more grassy.',
    flavorNotes: ['Chocolate', 'Roasted hazelnut', 'Espresso crema'],
    uses: ['Damper + scone bakes', 'Folded through ice cream base', 'Dusted on a morning flat white'],
    harvestSeason: 'Late winter · Aug–Sep',
    country: 'Anmatyerre Country, NT',
    cooperative: 'Utopia Bush Foods Cooperative',
    coords: [-22.3417, 134.8833],
    image: U('1532336414038-cf19250c5757'),
    badge: 'Best seller',
  },
  {
    slug: 'lemon-myrtle-leaf',
    name: 'Lemon Myrtle Leaf',
    botanicalName: 'Backhousia citriodora',
    category: 'spice',
    price: 16,
    size: '30g tin',
    blurb: 'Whole dried leaf, more fragrant than any lemon you will ever smell. Steep, grind, or infuse.',
    description:
      'Whole dried lemon myrtle leaf from the subtropical rainforests of Bundjalung Country. The citral content sits around 90% — meaning the aroma punches harder than even the juiciest lemon, without the sharp acidity. We dry gently at low temperature to lock in the oils, then ship in tins to keep them bright.',
    flavorNotes: ['Intense citrus', 'Lemongrass', 'Cool menthol'],
    uses: ['Steep for infused oil', 'Finish for steamed barramundi', 'Rim for a summer gin & tonic'],
    harvestSeason: 'Spring · Oct–Nov',
    country: 'Bundjalung Country, northern NSW',
    cooperative: 'Tweed Valley Rainforest Co-op',
    coords: [-28.3800, 153.3800],
    image: U('1593121925328-369cc8459c08'),
  },

  // --- BUSH FRUITS (2) ---
  {
    slug: 'kakadu-plum-powder',
    name: 'Kakadu Plum Powder',
    botanicalName: 'Terminalia ferdinandiana',
    category: 'fruit',
    price: 38,
    size: '40g jar',
    blurb: 'The world\'s highest natural source of vitamin C. Tart, green, almost grape-skin. A single teaspoon does it.',
    description:
      'Freeze-dried gubinge (Kakadu plum) powder from the top end. The fruit is wild-harvested by hand each wet season — there is no large-scale farming of gubinge, and we hope there never is. Unnervingly high in vitamin C (50× an orange), with a clean, tart, almost green-grape flavour. A little goes a very long way.',
    flavorNotes: ['Green apple', 'White grape skin', 'Bright citric tang'],
    uses: ['Stir into yoghurt', 'Cured salmon powder', 'Sorbet + gelato'],
    harvestSeason: 'Wet season · Dec–Mar',
    country: 'Yawuru Country, Broome / West Kimberley',
    cooperative: 'Nyul Nyul Wild Harvest',
    coords: [-17.9614, 122.2359],
    image: U('1594824476967-48c8b964273f'),
    badge: 'Limited run',
  },
  {
    slug: 'desert-lime',
    name: 'Desert Lime · Dried',
    botanicalName: 'Citrus glauca',
    category: 'fruit',
    price: 22,
    size: '50g jar',
    blurb: 'Whole tiny desert limes, sun-dried. Rehydrate in warm water, or grind into a finishing salt.',
    description:
      'Whole wild desert limes from the Mallee, dried slowly in the sun to concentrate their sherbet-like tang. Smaller than a marble, with an intensely fragrant skin and zero bitterness. Crumble into a rub, grind with salt for a finishing blend, or drop whole into a fish broth.',
    flavorNotes: ['Sour candy', 'Bitter peel', 'Floral lime'],
    uses: ['Crack into a dry rub', 'Garnish oysters', 'Steep for cordial'],
    harvestSeason: 'Summer · Dec–Feb',
    country: 'Ngiyampaa Country, western NSW',
    cooperative: 'Mallee Bush Harvest',
    coords: [-32.8100, 143.4200],
    image: U('1506905925346-21bda4d32df4'),
  },

  // --- SEEDS / GRAINS (2) ---
  {
    slug: 'native-pearl-millet',
    name: 'Native Pearl Millet',
    botanicalName: 'Panicum decompositum',
    category: 'seed',
    price: 14,
    size: '350g pouch',
    blurb: 'Ancient native millet, hulled and ready to cook. Nuttier than rice. Cooks like couscous.',
    description:
      'Native millet grain — one of the original grasses ground into flour by Aboriginal women in the central desert for thousands of years before European contact. We partner with the Utopia cooperative who hand-harvest and hull the seed. Cook 1:2 with water for 15 minutes; the flavour is nuttier and grassier than rice, with a light, pleasantly chewy texture.',
    flavorNotes: ['Toasted nut', 'Green grass', 'Brown butter'],
    uses: ['Warm grain bowl base', 'Risotto-style with saltbush', 'Ground into flour for crackers'],
    harvestSeason: 'Autumn · Apr–May',
    country: 'Anmatyerre Country, NT',
    cooperative: 'Utopia Bush Foods Cooperative',
    coords: [-22.3417, 134.8833],
    image: U('1505253668822-42074d58a7c6'),
  },
  {
    slug: 'bunya-nuts',
    name: 'Bunya Nuts · Shelled',
    botanicalName: 'Araucaria bidwillii',
    category: 'seed',
    price: 29,
    size: '200g pack',
    blurb: 'Starchy, chestnut-like nuts from the bunya pine. Only available for a few months a year.',
    description:
      'Hand-gathered bunya nuts from the bunya pines of the Bunya Mountains — a tree that only produces a full crop every three years. Shelled, vacuum-sealed, ready to roast. Treat them like a cross between a chestnut and a waxy potato: boil, roast, or purée. Sacred food for Wakka Wakka and Jinibara people; we only buy during the formal harvest gatherings.',
    flavorNotes: ['Chestnut', 'Waxy potato', 'Cream'],
    uses: ['Roasted with butter', 'Pesto with lemon myrtle', 'Folded into a slow-braise'],
    harvestSeason: 'Summer · Jan–Mar',
    country: 'Wakka Wakka Country, QLD',
    cooperative: 'Bunya Mountains Harvest Circle',
    coords: [-26.8833, 151.6000],
    image: U('1525755662778-989d0524087e'),
    badge: 'Seasonal',
  },

  // --- NATIVE PROTEINS / NUTS (2) ---
  {
    slug: 'macadamia-wild',
    name: 'Wild Macadamia',
    botanicalName: 'Macadamia integrifolia',
    category: 'protein',
    price: 34,
    size: '300g jar',
    blurb: 'Whole raw macadamias from heritage groves. The original bush tucker superfood. Oily, sweet, perfect.',
    description:
      'Raw, unsalted macadamias from regenerated heritage groves on Bundjalung Country — a variety much closer to the wild tree than the commercial hybrid. Higher oil content, smaller kernel, more complex flavour. We buy only from growers who tree-fall harvest (no shakers), which protects the forest soil and the old trees.',
    flavorNotes: ['Butterscotch', 'Coconut cream', 'Dried grass'],
    uses: ['Eat straight', 'Crushed over slow-cooked pork', 'Nut milk base'],
    harvestSeason: 'Autumn · Mar–Jun',
    country: 'Bundjalung Country, NSW',
    cooperative: 'Tweed Valley Rainforest Co-op',
    coords: [-28.3800, 153.3800],
    image: U('1585937421612-70a008356fbe'),
  },
  {
    slug: 'wattleseed-dukkah',
    name: 'Wattleseed Dukkah',
    botanicalName: 'Acacia victoriae (blend)',
    category: 'protein',
    price: 21,
    size: '180g jar',
    blurb: 'Crushed wattleseed, macadamia, lemon myrtle, sesame, native pepperberry, sea salt. The house blend.',
    description:
      "Our house dukkah. Roasted wattleseed, crushed macadamia, toasted sesame, lemon myrtle, pepperberry and sea salt from Moreton Bay. A very Australian answer to the Egyptian original. Pour onto a plate with olive oil, tear off some sourdough, sit outside. It's dinner.",
    flavorNotes: ['Roasted nut', 'Citrus', 'Peppery warmth'],
    uses: ['Bread + oil starter', 'Crust for baked fish', 'Topping for soft boiled eggs'],
    harvestSeason: 'Blended year-round',
    country: 'Multi-source · blended in Alice Springs',
    cooperative: 'Outback Pantry kitchen · Utopia + Tweed Valley + Moreton Bay',
    coords: [-23.6980, 133.8807],
    image: U('1596040033229-a9821ebd058d'),
    badge: 'House blend',
  },

  // --- SAUCES / CONDIMENTS (2) ---
  {
    slug: 'quandong-chutney',
    name: 'Quandong Chutney',
    botanicalName: 'Santalum acuminatum',
    category: 'sauce',
    price: 18,
    size: '260g jar',
    blurb: 'Small-batch chutney from wild quandong (native peach). Sweet-sour, a little spiced. Built for cheese.',
    description:
      "A slow-cooked chutney of wild quandong, apple cider vinegar, raw sugar, onion, pepperberry and a whisper of cinnamon myrtle. The quandong is foraged across Adnyamathanha Country in the Flinders Ranges. Vivid red, sweet-sour, almost tamarind-like. Ridiculously good with aged cheddar and a pale ale.",
    flavorNotes: ['Stewed rhubarb', 'Tart apple', 'Warm spice'],
    uses: ['Cheese board staple', 'Glaze for roast lamb', 'Crumpets with butter'],
    harvestSeason: 'Spring + summer · Sep–Jan',
    country: 'Adnyamathanha Country, Flinders Ranges SA',
    cooperative: 'Flinders Native Foods Co-op',
    coords: [-31.6667, 138.6667],
    image: U('1563729784474-d77dbb933a9e'),
  },
  {
    slug: 'saltbush-salt',
    name: 'Old Man Saltbush Salt',
    botanicalName: 'Atriplex nummularia',
    category: 'sauce',
    price: 15,
    size: '120g jar',
    blurb: 'Sun-dried saltbush leaf, ground with Murray River flake salt. A finishing salt with depth.',
    description:
      "A one-to-one blend of sun-dried saltbush leaf and pink-tinted Murray River flake salt. Saltbush is the original bush seasoning — it grows everywhere, carries a faint natural salinity, and has a savoury, almost brothy flavour. We dry the leaf, crumble it coarse, and fold it through the flake. Use it the way you'd use a good Maldon.",
    flavorNotes: ['Savoury', 'Herbal', 'Sea-spray brine'],
    uses: ['Sprinkle on roast potatoes', 'Finish a fatty cut', 'Season lamb before the BBQ'],
    harvestSeason: 'Year-round',
    country: 'Ngiyampaa Country, western NSW',
    cooperative: 'Mallee Bush Harvest',
    coords: [-32.8100, 143.4200],
    image: U('1551782450-a2132b4ba21d'),
  },

  // --- GIFT HAMPERS (2) ---
  {
    slug: 'essential-six-hamper',
    name: 'The Essential Six',
    botanicalName: 'Curated hamper',
    category: 'hamper',
    price: 129,
    size: '6 jars · wooden crate',
    blurb: 'Our six most-loved pantry staples in a hand-branded crate. The gift we send our own families.',
    description:
      "The hamper we send when someone has a birthday, a baby or a new kitchen. Six full-size jars: pepperberry, wattleseed, lemon myrtle, quandong chutney, saltbush salt, wattleseed dukkah. Packed in a Hoop pine crate made by a cabinet-maker in Mparntwe / Alice Springs, with a recipe card and a note about which Country each spice came from.",
    flavorNotes: ['Sweet', 'Savoury', 'Floral'],
    uses: ['Housewarming gift', 'Wedding registry entry', 'Restaurant staff appreciation'],
    harvestSeason: 'Assembled year-round',
    country: 'Multi-source · packed in Mparntwe (Alice Springs)',
    cooperative: 'Outback Pantry · all partners',
    coords: [-23.6980, 133.8807],
    image: U('1516637090014-cb1ab78511f5'),
    badge: 'Gift',
  },
  {
    slug: 'desert-starter-kit',
    name: 'Desert Starter Kit',
    botanicalName: 'Curated hamper',
    category: 'hamper',
    price: 69,
    size: '3 jars · linen pouch',
    blurb: 'A compact three-jar introduction — wattleseed, pepperberry, lemon myrtle. Enough to change dinner.',
    description:
      "If you've never cooked with native ingredients before, start here. Three small jars of the spices that open up Australian cooking: wattleseed, mountain pepperberry and lemon myrtle. Wrapped in a natural-dyed linen pouch, hand-stitched by a maker in Katoomba, with a single-sheet primer of five recipes to try in your first week.",
    flavorNotes: ['Warm', 'Peppery', 'Citrus'],
    uses: ['Weeknight baking', 'Friday night grill', 'Gift for a curious cook'],
    harvestSeason: 'Assembled year-round',
    country: 'Multi-source · assembled in Mparntwe',
    cooperative: 'Outback Pantry · all partners',
    coords: [-23.6980, 133.8807],
    image: U('1599809275671-b5942cabc7a2'),
  },
];

export const byCategory = (cat: Product['category']) => products.filter((p) => p.category === cat);

export const categories: { key: Product['category']; label: string; short: string }[] = [
  { key: 'spice', label: 'Native Spices', short: 'Spices' },
  { key: 'fruit', label: 'Bush Fruits', short: 'Fruits' },
  { key: 'seed', label: 'Seeds & Grains', short: 'Seeds' },
  { key: 'protein', label: 'Nuts & Proteins', short: 'Proteins' },
  { key: 'sauce', label: 'Sauces & Condiments', short: 'Sauces' },
  { key: 'hamper', label: 'Gift Hampers', short: 'Hampers' },
];
