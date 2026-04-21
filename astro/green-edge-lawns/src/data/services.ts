export type Service = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  scope: string[];
  typicalPrice: string;
  frequency: string;
  icon: string;
  image: string;
};

const U = (id: string, w = 1100, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const services: Service[] = [
  {
    slug: 'mowing',
    name: 'Weekly & Fortnightly Mowing',
    blurb: 'The bread and butter. Sharp blades, straight lines, every single week.',
    description:
      'Your regular mow, same day every week (or fortnight), rain or shine. We use Honda four-strokes, keep the blades stupidly sharp, and leave stripes you can actually see. No surprise invoices, no stand-up appointments — you get an SMS when we\'re on the way.',
    scope: [
      'Mow front & back lawn',
      'Whipper-snipper edges against paths & beds',
      'Blow clippings off paths & driveway',
      'Check for sprinkler heads & dog toys first',
    ],
    typicalPrice: 'From $45/mow',
    frequency: 'Weekly or fortnightly',
    icon: 'mower',
    image: U('1558904541-efa843a96f01'),
  },
  {
    slug: 'edging',
    name: 'Edging & Whipper-Snipping',
    blurb: 'Clean, knife-edge borders that make the whole yard look like it cost more.',
    description:
      'Most lawns don\'t need better grass — they need better edges. We run a dedicated edger along every hard boundary (paths, driveway, retaining walls) and whipper-snip against garden beds. Included in every mow, or standalone as a pre-event tidy.',
    scope: [
      'Mechanical edger on all hard boundaries',
      'Whipper-snipper on soft boundaries',
      'Trim around trees, bins, letterbox',
      'Clean up swept off hard surfaces',
    ],
    typicalPrice: 'Included / $30 standalone',
    frequency: 'With every mow',
    icon: 'edger',
    image: U('1416879595882-3373a0480b5b'),
  },
  {
    slug: 'hedging',
    name: 'Hedge Trimming',
    blurb: 'Lilly pillies, murrayas, buxus — shaped tight, bagged, gone.',
    description:
      'Residential hedges up to 3.5m with petrol-powered Stihl trimmers. We shape for light penetration, clean up every leaf, and take the green waste with us. Ideal 2-3 times a year for dense hedges; annually for slow growers.',
    scope: [
      'Tops, sides and facing shapes',
      'Small structural trims on new growth',
      'Full green-waste removal',
      'Clean up around the base & paths',
    ],
    typicalPrice: '$120 – $380',
    frequency: '2-3 times a year',
    icon: 'hedge',
    image: U('1556856425-366d6618905d'),
  },
  {
    slug: 'cleanups',
    name: 'Garden Cleanups',
    blurb: 'Spring tidy, storm aftermath, or pre-sale reset — we clear it out.',
    description:
      'The big one-off tidy. Weeding, pruning overgrowth, raking out beds, clearing gutters you can\'t reach, removing dead plants and piles of green waste. We quote on-site and do it in one visit.',
    scope: [
      'Weed & prune garden beds',
      'Rake & remove leaf litter',
      'Light gutter clear (single-storey)',
      'Remove all green waste in trailer',
    ],
    typicalPrice: '$280 – $750',
    frequency: 'Seasonal / one-off',
    icon: 'cleanup',
    image: U('1523348837708-15d4a09cfac2'),
  },
  {
    slug: 'mulching',
    name: 'Mulching & Top-Dressing',
    blurb: 'Sugar cane, bark, or tea-tree mulch — delivered, spread, tidy.',
    description:
      'Mulch keeps beds cooler, feeds the soil and cuts weeds by about 80%. We supply from local Shire yards (no plastic stringy stuff), spread to 50-75mm, and tuck it neatly around existing plants. Top-dressing for lawns available seasonally.',
    scope: [
      'Source mulch from local Shire suppliers',
      'Hand-spread at 50–75mm depth',
      'Tuck around plants (no collar burn)',
      'Sand top-dress for lawns in spring',
    ],
    typicalPrice: '$220 / m³ supplied',
    frequency: 'Once or twice a year',
    icon: 'mulch',
    image: U('1599059813005-11265ba4b4ce'),
  },
  {
    slug: 'landscaping',
    name: 'Small Landscaping',
    blurb: 'Turf laying, stepping-stone paths, garden-bed redesigns — done right.',
    description:
      'We\'re not a full landscape firm — no pools, no structural work — but Jake will happily install new turf, build a simple crushed-gravel path, redesign an overgrown bed, or lay a row of pavers over a weekend. Fixed quotes, start-to-finish on-site.',
    scope: [
      'New turf laying (Sir Walter / Kikuyu)',
      'Crushed gravel or stepping-stone paths',
      'Raised veggie boxes (timber or steel)',
      'Full garden-bed redesigns',
    ],
    typicalPrice: '$850 – $6,200',
    frequency: 'Project-based',
    icon: 'landscape',
    image: U('1574323347407-f5e1ad6d020b'),
  },
  {
    slug: 'rubbish',
    name: 'Green Waste Removal',
    blurb: 'DIY weekend got out of hand? We\'ll bring the trailer.',
    description:
      'Standalone green-waste pickup for the days you\'ve already done the work. We reverse the trailer into the driveway, load up prunings, turf rolls, branches and garden debris, and drop it at a certified Kurnell composting facility.',
    scope: [
      'Load prunings & garden debris',
      'Bag loose leaves if needed',
      'Tarp the load before driving out',
      'Certified composting — no landfill',
    ],
    typicalPrice: '$140 / trailer',
    frequency: 'On-demand',
    icon: 'trailer',
    image: U('1580618672591-eb180b1a973f'),
  },
  {
    slug: 'lawn-health',
    name: 'Lawn Health & Treatment',
    blurb: 'Scalping, aeration, overseeding, gypsum — give tired lawns a reset.',
    description:
      'For lawns that mowing alone won\'t fix. We do spring scalping and overseeding (Kikuyu or Sir Walter), core aeration with a hired walk-behind, and gypsum applications on clay-heavy Shire soils. Quoted per visit after an on-site look.',
    scope: [
      'Spring scalp & overseed',
      'Core aeration (hired machine)',
      'Gypsum for clay & fertiliser drops',
      'Dethatch rolled lawns annually',
    ],
    typicalPrice: '$260 – $640',
    frequency: 'Spring & autumn',
    icon: 'lawn',
    image: U('1551269901-5c5e14c25df7'),
  },
];

export const pickServices = (slugs: string[]) => slugs.map(s => services.find(x => x.slug === s)!).filter(Boolean);
