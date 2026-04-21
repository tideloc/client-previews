export type BreweryEvent = {
  slug: string;
  title: string;
  kind: string;
  date: string;
  day: string;
  month: string;
  time: string;
  blurb: string;
  image: string;
};

const U = (id: string, w = 900, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const events: BreweryEvent[] = [
  {
    slug: 'brew-deck-release-no8',
    title: 'Brew Deck No. 8 release night',
    kind: 'Release',
    date: '2026-05-09',
    day: '09',
    month: 'May',
    time: 'Sat · 4–9pm',
    blurb: 'A peach-lambic-style co-ferment, 14 months on fruit. 280 bottles. One per person, no exceptions — and come thirsty, because we will tap the last cask on the night.',
    image: U('1544441892-794166f1e3be'),
  },
  {
    slug: 'long-paddock-saison-launch',
    title: 'Long Paddock launch + Mullum Biodynamic farm tour',
    kind: 'Launch',
    date: '2026-05-24',
    day: '24',
    month: 'May',
    time: 'Sat · 10am bus',
    blurb: 'Bus from the taproom to Mullum Biodynamic Farm for a chamomile walk with the grower, back by 2pm, then the first pour of the 2026 saison. Twenty seats.',
    image: U('1577906096429-f73c2c312435'),
  },
  {
    slug: 'hop-harvest-feast',
    title: 'Hop harvest long lunch',
    kind: 'Long lunch',
    date: '2026-06-14',
    day: '14',
    month: 'Jun',
    time: 'Sat · 12–4pm',
    blurb: 'Six courses from Chef Dani Parkes of Roma St. Kitchen, matched to six beers including a first tap of our fresh-hop red ale. Long table, one sitting, BYO big appetite.',
    image: U('1543007630-9710e4a00a20'),
  },
  {
    slug: 'low-fog-stout-release',
    title: 'Low Fog stout release + live music',
    kind: 'Release + music',
    date: '2026-07-05',
    day: '05',
    month: 'Jul',
    time: 'Sat · 5–10pm',
    blurb: 'Winter stout is back. First pour at 5pm, then The Wreckage play three sets on the deck heaters. Soup truck out the front. Bring a jumper and a sensible plan.',
    image: U('1466978913421-dad2ebd01d17'),
  },
];
