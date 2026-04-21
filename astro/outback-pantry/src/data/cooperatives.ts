export type Cooperative = {
  slug: string;
  name: string;
  country: string;        // Traditional Owners
  region: string;         // geographical region
  coords: [number, number];
  description: string;
  supplies: string[];
  yearsPartnered: number;
  paymentModel: string;
  image: string;
};

const U = (id: string, w = 1400, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const cooperatives: Cooperative[] = [
  {
    slug: 'utopia-bush-foods',
    name: 'Utopia Bush Foods Cooperative',
    country: 'Anmatyerre & Alyawarre',
    region: 'Sandover, Northern Territory',
    coords: [-22.3417, 134.8833],
    description:
      'A women-led cooperative of about 45 harvesters operating out of the Utopia homelands, 250km north-east of Mparntwe (Alice Springs). Specialises in wattleseed and native millet; first partnered with us in 2018. All harvest protocols are set by the Elders of the Sandover country.',
    supplies: ['Wattleseed', 'Native pearl millet', 'Bush raisin (occasional)'],
    yearsPartnered: 7,
    paymentModel: 'Three-year fixed-rate contract · rate published annually',
    image: U('1506905925346-21bda4d32df4'),
  },
  {
    slug: 'nyul-nyul-wild-harvest',
    name: 'Nyul Nyul Wild Harvest',
    country: 'Nyul Nyul & Yawuru',
    region: 'Dampier Peninsula, WA',
    coords: [-17.1620, 122.5030],
    description:
      'A Kimberley-based family harvest group that wild-picks gubinge (Kakadu plum) across the Dampier Peninsula each wet season. Strictly no cultivation — all product is harvested from old, wild trees. The group operates on traditional burning and harvest cycles, rotating pick sites each year to protect the groves.',
    supplies: ['Kakadu plum (whole + powder)', 'Boab nut', 'Gubinge leaf'],
    yearsPartnered: 5,
    paymentModel: 'Per-kg floor price, plus profit-share on final retail',
    image: U('1516426122078-c23e76319801'),
  },
  {
    slug: 'ben-lomond-highland',
    name: 'Ben Lomond Highland Harvest',
    country: 'palawa / pakana',
    region: 'Ben Lomond Massif, lutruwita (Tasmania)',
    coords: [-41.6037, 147.6554],
    description:
      'Four generations of the Nichols family have hand-picked mountain pepperberry in the Tasmanian highlands. The group works exclusively with existing wild stands and sells through a cooperative structure that shares profits with two palawa harvest collectives who co-manage part of the range.',
    supplies: ['Mountain pepperberry (whole + ground)', 'Pepperleaf', 'Wild nettle'],
    yearsPartnered: 6,
    paymentModel: 'Season-floor + joint marketing with palawa collectives',
    image: U('1509358271058-acd22cc93898'),
  },
  {
    slug: 'mallee-bush-harvest',
    name: 'Mallee Bush Harvest',
    country: 'Ngiyampaa & Barkindji',
    region: 'Western NSW Mallee',
    coords: [-32.8100, 143.4200],
    description:
      'A cross-family group operating out of three stations near Ivanhoe and Menindee, harvesting desert lime, saltbush and wild limes from Mallee country. Partners include two Ngiyampaa-owned stations who run the seasonal harvest and one non-Indigenous farmer who sub-contracts for the salt blend.',
    supplies: ['Desert lime', 'Old man saltbush', 'Native lime leaf'],
    yearsPartnered: 4,
    paymentModel: 'Per-kg floor + transparent logistics pass-through',
    image: U('1585937421612-70a008356fbe'),
  },
  {
    slug: 'flinders-native-foods',
    name: 'Flinders Native Foods Co-op',
    country: 'Adnyamathanha',
    region: 'Flinders Ranges, SA',
    coords: [-31.6667, 138.6667],
    description:
      'A 12-member cooperative harvesting quandong and muntries on Country in the Flinders Ranges. Founded in 2019 with seed funding from the Adnyamathanha Traditional Owners group. We buy the majority of their quandong output each year for our chutney.',
    supplies: ['Quandong', 'Muntries', 'Native mint'],
    yearsPartnered: 4,
    paymentModel: 'Pre-season forward contract + crop-failure buffer',
    image: U('1599809275671-b5942cabc7a2'),
  },
];
