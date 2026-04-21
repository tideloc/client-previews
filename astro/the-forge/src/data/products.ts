export type ProductCategory = 'hook' | 'handle' | 'hinge' | 'latch' | 'bracket' | 'other';

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  material: string;
  finish: string;
  dimensions: string;
  weight: string;
  price: number;
  blurb: string;
  description: string;
  image: string;
  leadTime: string;
  badge?: string;
};

const U = (id: string, w = 900, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const products: Product[] = [
  {
    slug: 'scroll-coat-hook',
    name: 'Scroll Coat Hook',
    category: 'hook',
    material: '10mm hot-rolled mild steel',
    finish: 'Beeswax over raw black oxide',
    dimensions: '160 × 65 × 80mm',
    weight: '280g',
    price: 42,
    blurb: 'Forged from a single billet. Hand-scrolled on the horn.',
    description:
      'Drawn out from 10mm square stock, tapered over the horn, and finished with a tight scroll. Each one is a single piece of steel — no welds, no fasteners in the form itself. Finished in beeswax over a raw black-oxide scale. Fixes with two 8g countersunk screws (included).',
    image: U('1504826260979-242151ee45b7'),
    leadTime: '2 weeks',
    badge: 'Best seller',
  },
  {
    slug: 'georgian-rim-latch',
    name: 'Georgian Rim Latch',
    category: 'latch',
    material: '4mm wrought plate, brass thumbpiece',
    finish: 'Raw wax',
    dimensions: '140 × 90 × 28mm',
    weight: '640g',
    price: 285,
    blurb: 'Based on a 1820s pattern from Colonial Georgian doors.',
    description:
      "Scaled from an original lifted out of a pastoral homestead near Bungendore. Thumbpiece and spring are forged to the same pattern — handling weight and the click are identical. Supplied with matching keep and cut-nails. Handed left or right at order (say which when you commission).",
    image: U('1534237710431-e2fc698436d0'),
    leadTime: '4 weeks',
  },
  {
    slug: 'strap-hinge-pair',
    name: 'Cranked Strap Hinge (pair)',
    category: 'hinge',
    material: '6mm mild steel, 12mm pintle',
    finish: 'Black oxide + linseed',
    dimensions: '380 × 60mm',
    weight: '1.9kg / pr',
    price: 320,
    blurb: 'Gate hinges. 80-90kg leaf. Riveted pintle.',
    description:
      'For gates, shed doors, or heavy cabinetry where pretensions die. Pintle is forge-welded (not socket-set), riveted into a 6mm strap. Carries a 90kg leaf without complaint. Rated for exterior use — linseed-finished, re-coat every 5-8 years.',
    image: U('1518644961665-ed172691aaa1'),
    leadTime: '3 weeks',
  },
  {
    slug: 'barn-door-handle',
    name: 'Barn Door Handle',
    category: 'handle',
    material: '16mm round bar',
    finish: 'Patinated graphite',
    dimensions: '340mm pull, 90mm proud',
    weight: '820g',
    price: 185,
    blurb: 'Heavy pull for sliding barn doors and full-height gates.',
    description:
      'Drawn from 16mm round, upset at both ends into a flared peen, then hand-patinated to a deep graphite tone. Standoffs are forge-welded — no mechanical joints to loosen. Sits 90mm proud (fits a 40mm hand). Back-mounting plates supplied.',
    image: U('1572584642822-6f8de0243c93'),
    leadTime: '2 weeks',
  },
  {
    slug: 'federation-shelf-bracket',
    name: 'Federation Shelf Bracket',
    category: 'bracket',
    material: '8mm flat bar, scrolled',
    finish: 'Matte black',
    dimensions: '200 × 200 × 20mm',
    weight: '410g',
    price: 88,
    blurb: 'Patterned on a 1905 verandah bracket from Newtown.',
    description:
      "Single-piece bracket with a bulbous scroll — we've been making these since 2014 based on a salvage pattern from a Sydney terrace. Takes shelves up to 300mm deep with a 30kg live load. Sold singly.",
    image: U('1555529902-5261145633bf'),
    leadTime: '10 days',
  },
  {
    slug: 'bridle-coat-rack',
    name: 'Bridle Coat Rack (five-hook)',
    category: 'other',
    material: '40mm oak plate, forged hooks',
    finish: 'Natural oil on timber, wax on steel',
    dimensions: '720 × 140 × 110mm',
    weight: '3.1kg',
    price: 460,
    blurb: 'Five scroll hooks riveted to a seasoned oak backplate.',
    description:
      'Five of our scroll hooks riveted (not screwed) through a seasoned oak plate from a Binalong sawmill. Wall-mounts via four concealed French cleats. A proper object. Oak selected by Sara — no two are identical.',
    image: U('1505740420928-5e560c06d30e'),
    leadTime: '4 weeks',
    badge: 'Studio favourite',
  },
  {
    slug: 'ring-pull-handle',
    name: 'Ring Pull Handle',
    category: 'handle',
    material: '10mm round, forge-welded ring',
    finish: 'Oiled black',
    dimensions: '110mm ring, 180mm backplate',
    weight: '520g',
    price: 140,
    blurb: 'Classic ring pull for heavy cabinetry and cellar doors.',
    description:
      'Old Colonial Spanish style — a drop ring through a rosette. Ring is forge-welded from 10mm round; backplate is hand-domed. Fits doors from 35-60mm thick. Screws countersunk or domed to order.',
    image: U('1502082553048-f009c37129b9'),
    leadTime: '2 weeks',
  },
  {
    slug: 'pintle-gate-latch',
    name: 'Pintle Gate Latch',
    category: 'latch',
    material: '12mm square stock',
    finish: 'Raw',
    dimensions: '220 × 80mm',
    weight: '780g',
    price: 165,
    blurb: 'Self-dropping gravity latch for garden gates.',
    description:
      'A drop-latch that closes itself. 12mm square stock, hand-forged catch and keeper. No springs, no mechanism — gravity does the work. Beat up through a hundred winters and it will still click shut.',
    image: U('1503602642458-232111445657'),
    leadTime: '2 weeks',
  },
  {
    slug: 'small-j-hook',
    name: 'Small J-Hook (set of four)',
    category: 'hook',
    material: '6mm square stock',
    finish: 'Black wax',
    dimensions: '80 × 30 × 40mm',
    weight: '95g each',
    price: 56,
    blurb: 'Tea towels, aprons, keys, mugs. The workhorse.',
    description:
      "Small clean J-hooks with a penny foot. Sold in sets of four. Sara forges a batch of 50 on most Wednesdays — they're the backbone of our kitchen commissions.",
    image: U('1551808525-51a94da548ce'),
    leadTime: '1 week',
  },
  {
    slug: 'tee-hinge-large',
    name: 'Tee Hinge (large)',
    category: 'hinge',
    material: '5mm steel plate, riveted',
    finish: 'Matte black',
    dimensions: '450 × 75mm',
    weight: '1.3kg',
    price: 240,
    blurb: 'Shed-door pattern. Takes a 120kg leaf.',
    description:
      'Old English tee pattern. Generous strap, riveted through a flat back. Load-rated to 120kg when fixed through 40mm hardwood. For gates, workshop doors, and the kind of cupboards you only open once a season.',
    image: U('1600566753376-12c8ab7fb75b'),
    leadTime: '3 weeks',
  },
  {
    slug: 'spiral-towel-hook',
    name: 'Spiral Towel Hook',
    category: 'hook',
    material: '8mm round bar',
    finish: 'Oiled black',
    dimensions: '110 × 55 × 70mm',
    weight: '180g',
    price: 38,
    blurb: 'A tight spiral finish off the horn — for bathrooms.',
    description:
      "Smaller cousin of the scroll hook. Tail is twisted under the hammer for a little texture on the wall-side. Fits a rolled bath towel with a steel ring. Pairs well with the bridle coat rack.",
    image: U('1555529902-5261145633bf'),
    leadTime: '10 days',
  },
  {
    slug: 'corbel-bracket',
    name: 'Forged Corbel Bracket',
    category: 'bracket',
    material: '10mm flat bar, welded',
    finish: 'Natural patina',
    dimensions: '260 × 260 × 30mm',
    weight: '780g',
    price: 165,
    blurb: 'For mantelpieces, range hoods, and substantial shelves.',
    description:
      "A proper corbel — three scroll terminations, welded for strength. Sized for mantelshelves and kitchen range hoods. We've set 40+ of these in Sydney sandstone over the last decade.",
    image: U('1604329760661-e71dc83f8f26'),
    leadTime: '3 weeks',
  },
];

export const byCategory = (cat: Product['category']) =>
  products.filter((p) => p.category === cat);

export const categoryLabel: Record<ProductCategory, string> = {
  hook: 'Hooks',
  handle: 'Handles',
  hinge: 'Hinges',
  latch: 'Latches',
  bracket: 'Brackets',
  other: 'Other',
};
