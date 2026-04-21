export type Entry = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;       // ISO-ish e.g. "2026 · March"
  excerpt: string;
  readTime: string;   // e.g. "6 min read"
  author: string;
  image: string;
  tag: string;        // e.g. "Climate", "Craft", "Place"
};

const U = (id: string, w = 1400, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const journal: Entry[] = [
  {
    slug: 'the-eaves-do-the-work',
    title: 'The eaves do the work',
    subtitle: 'On why we measure overhangs in degrees, not metres.',
    date: '2026 · March',
    excerpt:
      'The difference between a house that runs itself and a house that needs a machine is often a 400mm length of timber. Here is how we think about passive shading in southern Tasmania.',
    readTime: '8 min read',
    author: 'Lenny Osei',
    image: U('1584824486509-112e4181ff6b'),
    tag: 'Climate',
  },
  {
    slug: 'silvertop-ash-seven-years-on',
    title: 'Silvertop ash, seven years on',
    subtitle: 'Notes from a maintenance walk of our 2017 houses.',
    date: '2026 · February',
    excerpt:
      'We went back to every silvertop ash house we designed in the 2017 financial year to see how the cladding has weathered. The answer is beautifully, and unevenly, and we have learned a great deal.',
    readTime: '11 min read',
    author: 'Anya Redman',
    image: U('1502005229762-cf1b2da7c5d6'),
    tag: 'Craft',
  },
  {
    slug: 'against-the-open-plan',
    title: 'A quiet case against the open plan',
    subtitle: 'On doorways, thresholds, and the small rooms we have stopped including.',
    date: '2025 · November',
    excerpt:
      'For fifteen years, every Australian residential brief has begun "open-plan living, kitchen, dining." We would like to gently suggest that you have been sold on a false virtue.',
    readTime: '9 min read',
    author: 'Rory Fitzwilliam',
    image: U('1613490493576-7fde63acd811'),
    tag: 'Place',
  },
  {
    slug: 'rammed-earth-in-the-midlands',
    title: 'Rammed earth in the Midlands',
    subtitle: 'What we learned from building walls out of the site we stood on.',
    date: '2025 · September',
    excerpt:
      'At Three-Hut Farm we stabilised creek-bed clay with 5% cement and rammed 420m² of walls from the material beneath our feet. A field report.',
    readTime: '14 min read',
    author: 'Mei Takashima',
    image: U('1449034446853-66c86144b0ad'),
    tag: 'Craft',
  },
  {
    slug: 'why-we-plant-first',
    title: 'Why we plant before we draw',
    subtitle: 'Landscape as the earliest design decision.',
    date: '2025 · July',
    excerpt:
      'We will not begin a rural project until a tree-planting plan is agreed and, if possible, in the ground. Here is the reasoning behind that — and a quiet argument that it should be standard practice.',
    readTime: '7 min read',
    author: 'Mei Takashima',
    image: U('1520607162513-77705c0f0d4a'),
    tag: 'Place',
  },
  {
    slug: 'the-forty-year-house',
    title: 'The forty-year house',
    subtitle: 'Designing for a second generation we will never meet.',
    date: '2025 · April',
    excerpt:
      'Most residential briefs in Australia implicitly design for fifteen years — the expected period before the next owner renovates. We would like to argue for the forty-year house instead.',
    readTime: '12 min read',
    author: 'Rory Fitzwilliam',
    image: U('1512917774080-9991f1c4c750'),
    tag: 'Place',
  },
  {
    slug: 'tasmanian-oak-after-the-fire',
    title: 'Tasmanian oak after the fires',
    subtitle: 'On the quiet reshaping of our material palette.',
    date: '2024 · December',
    excerpt:
      'Following the 2019 fires our default local hardwood supply shifted overnight. Five years on, here is how our specifications have changed — and why the change has been a net good.',
    readTime: '10 min read',
    author: 'Lenny Osei',
    image: U('1416331108676-a22ccb276e35'),
    tag: 'Craft',
  },
  {
    slug: 'measuring-a-site',
    title: 'How to properly measure a site',
    subtitle: 'Before we draw, we walk. A lot.',
    date: '2024 · September',
    excerpt:
      'A practical essay, in two parts: what we bring, what we note, and the specific things we are looking at between the fence lines that determine everything that follows.',
    readTime: '6 min read',
    author: 'Anya Redman',
    image: U('1459767129954-1b1c1f9b9ace'),
    tag: 'Place',
  },
];
