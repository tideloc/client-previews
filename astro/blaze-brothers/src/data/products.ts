export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: 'sauce' | 'rub' | 'pack';
  heat: 1 | 2 | 3 | 4 | 5;
  price: number;
  size: string;
  description: string;
  pairs: string[];
  ingredients: string[];
  image: string; // full URL
  badge?: string;
};

const U = (id: string, w = 900, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const products: Product[] = [
  {
    slug: 'widowmaker',
    name: 'Widowmaker',
    tagline: "Smoked habanero & ghost pepper. Our flagship burner.",
    category: 'sauce',
    heat: 5,
    price: 18,
    size: '150ml',
    description:
      'Seven hours over smouldering ironbark, a hit of aged rum vinegar, and enough ghost pepper to make you rethink your afternoon. The flagship. The ritual. The reason people come back.',
    pairs: ['Wings', 'Slow-smoked brisket', 'Eggs for the brave'],
    ingredients: [
      'Smoked habanero',
      'Ghost pepper',
      'Ironbark smoke',
      'Rum-barrel vinegar',
      'Queensland mango',
      'Raw sugar',
      'Sea salt',
    ],
    image: U('1472476443507-c7a5948772fc'),
    badge: 'Flagship',
  },
  {
    slug: 'blackbird',
    name: 'Blackbird',
    tagline: "Charred jalapeño, lime, black garlic. Smoky + sharp.",
    category: 'sauce',
    heat: 3,
    price: 16,
    size: '150ml',
    description:
      'Green jalapeños, charred until the skins blister, then folded with black garlic we ferment for 60 days. Bright, smoky, a little sweet. This is the one you put on everything.',
    pairs: ['Tacos', 'Grilled fish', 'Avocado toast'],
    ingredients: [
      'Charred jalapeño',
      'Black garlic (60-day)',
      'Lime',
      'Coriander seed',
      'Apple cider vinegar',
      'Sea salt',
    ],
    image: U('1604329760661-e71dc83f8f26'),
  },
  {
    slug: 'sunset-reaper',
    name: 'Sunset Reaper',
    tagline: 'Carolina Reaper meets Queensland mango. Brutal. Beautiful.',
    category: 'sauce',
    heat: 5,
    price: 22,
    size: '100ml',
    description:
      'One part sunset, two parts regret. Carolina Reaper slow-braised with Bundaberg mango and a whisper of palm sugar. Limited edition. You have been warned.',
    pairs: ['Grilled pineapple', 'Chargrilled prawns', 'Anything you dare'],
    ingredients: [
      'Carolina Reaper',
      'Bundaberg mango',
      'Palm sugar',
      'Lime juice',
      'Sea salt',
      'Native pepperberry',
    ],
    image: U('1571091718767-18b5b1457add'),
    badge: 'Limited',
  },
  {
    slug: 'bush-smoulder',
    name: 'Bush Smoulder',
    tagline: 'Native pepperberry & bunya smoke. A slow Australian burn.',
    category: 'sauce',
    heat: 2,
    price: 17,
    size: '150ml',
    description:
      "Our most Aussie bottle. Tasmanian pepperberry, bunya nut smoke, a little Davidson's plum for sweetness. Restrained heat, massive flavour — put it on eggs and thank us later.",
    pairs: ['Fried eggs', 'Slow-roast lamb', 'Grilled halloumi'],
    ingredients: [
      'Tasmanian pepperberry',
      'Bunya nut smoke',
      "Davidson's plum",
      'Red capsicum',
      'Rice vinegar',
      'Sea salt',
    ],
    image: U('1513558161293-cdaf765ed2fd'),
  },
  {
    slug: 'brothers-rub',
    name: "Brothers' Rub",
    tagline: 'The house BBQ rub. Paprika, raw sugar, chipotle, coffee.',
    category: 'rub',
    heat: 2,
    price: 14,
    size: '180g',
    description:
      'The rub we put on everything that enters the smoker. Sweet, smoky, with a coffee-bitter backbone from freshly ground Brisbane roasted beans. Keeps for 6 months in a cool, dry jar.',
    pairs: ['Pork ribs', 'Beef brisket', 'Smoked chicken'],
    ingredients: [
      'Smoked paprika',
      'Raw sugar',
      'Chipotle',
      'Queensland coffee',
      'Garlic',
      'Cracked pepper',
      'Sea salt',
    ],
    image: U('1596040033229-a9821ebd058d'),
  },
  {
    slug: 'ember-rub',
    name: 'Ember Rub',
    tagline: 'Hot wing dust. Reaper, cayenne, lime, smoke.',
    category: 'rub',
    heat: 4,
    price: 14,
    size: '180g',
    description:
      'Our hot wing rub, born at the South Brisbane markets on a Sunday that got out of hand. Toss raw wings, smoke at 120°C for 90 minutes, crisp over direct coals. Drench in Widowmaker. Go to bed.',
    pairs: ['Chicken wings', 'Chicken ribs', 'Cauliflower'],
    ingredients: [
      'Reaper powder',
      'Cayenne',
      'Smoked paprika',
      'Lime powder',
      'Raw sugar',
      'Onion',
      'Sea salt',
    ],
    image: U('1599305090598-fe179d501227'),
  },
  {
    slug: 'starter-flight',
    name: 'Starter Flight',
    tagline: '4 × 60ml bottles. Work up the scale.',
    category: 'pack',
    heat: 3,
    price: 42,
    size: '4 × 60ml',
    description:
      'Four of our most-ordered sauces in 60ml share bottles. Bush Smoulder → Blackbird → Widowmaker → Sunset Reaper. Makes a mean gift for someone you like slightly less than you thought.',
    pairs: ['Dinner parties', 'Housewarmings', 'Father’s Day'],
    ingredients: ['See individual bottles'],
    image: U('1587241321921-91a834d6d191'),
    badge: 'Best seller',
  },
  {
    slug: 'bbq-trio',
    name: 'Low & Slow Trio',
    tagline: 'Brothers rub + Widowmaker + wooden spoon.',
    category: 'pack',
    heat: 4,
    price: 55,
    size: '3 pieces',
    description:
      "Everything you need for a 12-hour smoke. Brothers' rub to start, Widowmaker to finish, and our Tallowwood stirring spoon (carved by a mate in Maleny) so you never reach for a plastic one again.",
    pairs: ['Brisket', 'Lamb shoulder', 'Whole pork collar'],
    ingredients: ['Brothers\' Rub 180g', 'Widowmaker 150ml', 'Tallowwood spoon'],
    image: U('1509440159596-0249088772ff'),
    badge: 'Gift',
  },
];

export const byCategory = (cat: Product['category']) => products.filter((p) => p.category === cat);
