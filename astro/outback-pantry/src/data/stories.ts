export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  readTime: string;
  category: string;
  image: string;
  author: string;
};

const U = (id: string, w = 1400, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const stories: Story[] = [
  {
    slug: 'utopia-harvest',
    title: 'The wattleseed harvest at Utopia',
    excerpt:
      'Each August the old tracks north of Arlparra are re-opened. This is what an eight-week wattleseed harvest actually looks like on Country.',
    body: [
      'Utopia sits 250 kilometres north-east of Alice Springs, on the homelands of the Anmatyerre and Alyawarre people. The wattleseed harvest here runs roughly eight weeks from late August through to the first real heat. It is done almost entirely by the senior women of the community, often four generations together.',
      'We drove up with Eileen Kngwarreye on a Tuesday in 2023 to watch a morning of harvest. The process is patient: shake, catch, winnow, bag. There is no mechanical harvester that works without splitting the tiny seed. There is no shortcut that does not damage the tree.',
      'The seed we bring back south is dark-roasted in small trays at our warehouse, ground within 48 hours, and shipped within the week. The price we pay per kilogram is published on our harvest page — not as marketing, but because it should be possible for anyone to check the numbers.',
    ],
    readTime: '7 min read',
    category: 'Harvest',
    image: U('1506905925346-21bda4d32df4'),
    author: 'Written by Marni Patterson',
  },
  {
    slug: 'why-wattleseed-matters',
    title: 'Why wattleseed matters (and why most of us still don\'t cook with it)',
    excerpt:
      'A grain eaten in Australia for 30,000 years still barely appears in the average pantry. A short essay on the economics, the knowledge, and the future.',
    body: [
      'Wattleseed is one of the most nutritious grains ever analysed. Twenty-five percent protein, high in iron, low glycemic, drought-tolerant beyond almost any introduced crop. It has been eaten here for at least 30,000 years. It should, by any rational measure, be on the shelf at every supermarket in the country. It is not.',
      'Part of the reason is supply: there is no industrial-scale wattleseed farming, because the tree does not do well in rows. Part of it is knowledge: most Australians have simply never tasted it. And part of it is ownership: the question of who profits from native food is not a settled one, and we think it should not be settled by the bigger players first.',
      'Our position is simple. We pay the cooperatives the same per-kilogram rate every year regardless of demand. We publish it. And we will not plant our own wattle trees for commercial scale — if that means we stay small, we stay small.',
    ],
    readTime: '5 min read',
    category: 'Essay',
    image: U('1505253668822-42074d58a7c6'),
    author: 'Written by Tom Fulford',
  },
  {
    slug: 'pepperberry-tasmania',
    title: 'Up the highland with the pepperberry pickers',
    excerpt:
      'A two-day walk through the Ben Lomond massif with the family that has harvested mountain pepperberry for four generations.',
    body: [
      'Ben Lomond is cold even in February. We met Ruth and David Nichols at the trail head at 5am, three layers on, coffee still steaming. The pepperberries sit on small scrubby bushes at about 1,200 metres, tucked between alpine heath and the edge of the snow gum line.',
      'Ruth\'s grandmother was the first in the family to sell pepperberry — to a Hobart restaurant in 1986, one ice-cream tub at a time. Today the family harvests about 80 kilograms a season, all hand-picked. A single bush produces no more than a handful.',
      'We walked in for about an hour, picked for three, walked out by noon. The berries were spread on drying racks by 4pm. The ones we carry in our store were picked the week before our trip.',
    ],
    readTime: '9 min read',
    category: 'Harvest',
    image: U('1509358271058-acd22cc93898'),
    author: 'Written by Marni Patterson',
  },
  {
    slug: 'cooking-with-kakadu-plum',
    title: 'Cooking with Kakadu plum: three things nobody tells you',
    excerpt:
      'The most vitamin-C-rich food in the world, and also the most badly used. A practical guide to gubinge in the kitchen.',
    body: [
      'Most people buying Kakadu plum powder for the first time do one of three things: sprinkle it on porridge and wonder why it tastes like dust, mix it into a smoothie and overdo it, or hide it in a bliss ball. All three are mistakes.',
      'The rule is: Kakadu plum wants a fat. Yoghurt, cream, oil, butter. The tartness is intense, and it is designed to cut something rich. We use it as a powder over cured salmon — a light, even dust — or whisked into a vinaigrette with macadamia oil.',
      'Also: do not heat it. The vitamin C breaks down above 60°C. If you want the nutritional punch, use it cold or stir in at the last moment.',
    ],
    readTime: '4 min read',
    category: 'Kitchen',
    image: U('1594824476967-48c8b964273f'),
    author: 'Written by Chef Aunty Linda Murray',
  },
  {
    slug: 'the-question-of-ownership',
    title: 'The question of ownership in native foods',
    excerpt:
      'Who gets to sell bush tucker? It is not a simple question, and the current answer is uneven. Here is where we stand.',
    body: [
      'In 2020, the Aboriginal-led organisation First Peoples-State Relations mapped the native foods industry in Australia and found that less than 2% of the commercial industry was Indigenous-owned. In an industry built on 60,000 years of Indigenous knowledge, that number is indefensible.',
      'We think about this a lot. Outback Pantry is a settler-founded business. We are not Indigenous-owned. We cannot change that, and we do not want to pretend. What we can do is be structurally honest about where our margin comes from and who gets paid.',
      'Our published terms: a minimum pay rate per kilo that is 30–40% above the market floor, three-year contracts rather than spot buying, and a profit-share on any product that becomes a top-three seller. It is not a solution. It is the minimum we think a business working with this knowledge should do.',
    ],
    readTime: '8 min read',
    category: 'Essay',
    image: U('1516426122078-c23e76319801'),
    author: 'Written by Tom Fulford',
  },
  {
    slug: 'a-damper-recipe-that-finally-works',
    title: 'A wattleseed damper recipe that finally works',
    excerpt:
      'Most damper is a flour brick with ambitions. A wattleseed damper that is actually good — tested across a winter of bush breakfasts.',
    body: [
      'Classic damper has its charm, but charm is not flavour. We spent six months testing a wattleseed version — enough fat, enough moisture, enough salt, a properly hot camp oven — until we had one that held its own next to a proper sourdough.',
      'The trick is two-fold: bloom the wattleseed in the warm butter before mixing, so the oils release into the fat; and use buttermilk, not water. The acid tightens the crumb. A handful of sea salt on top before baking, and you are done.',
      'Served the next morning with saltbush butter and a slab of Kakadu plum jam, it is a bush breakfast that can stand up in any restaurant in the country. Full recipe on our recipes page.',
    ],
    readTime: '6 min read',
    category: 'Kitchen',
    image: U('1540574899808-e5bff2d8e76e'),
    author: 'Written by Chef Aunty Linda Murray',
  },
];
