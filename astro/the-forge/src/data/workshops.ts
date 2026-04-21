export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type Workshop = {
  slug: string;
  name: string;
  dateISO: string;
  dateLabel: string;
  duration: string;
  price: number;
  skillLevel: SkillLevel;
  maxStudents: number;
  instructor: string;
  blurb: string;
  included: string[];
  description: string;
  image: string;
};

const U = (id: string, w = 1400, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const workshops: Workshop[] = [
  {
    slug: 'intro-to-forging',
    name: 'Intro to Forging',
    dateISO: '2026-05-17',
    dateLabel: 'Saturday 17 May 2026',
    duration: 'One day · 9am – 4pm',
    price: 385,
    skillLevel: 'beginner',
    maxStudents: 6,
    instructor: 'Tom Halloran',
    blurb: 'Take home a hand-forged S-hook and a working knowledge of the hammer.',
    included: [
      'Forge time on a working coal fire',
      'All steel, tools, and coal',
      'Leather apron (yours to keep)',
      'Lunch, tea, smoko',
      'Take-home S-hook + taper-tool scribe',
    ],
    description:
      "The hammer is the whole discipline. We'll spend the day at our second forge — tapering, upsetting, drawing out, and making scroll finials. By 4pm you'll have made an S-hook, a scribe, and a proper working blister.",
    image: U('1565034946487-077786996e27'),
  },
  {
    slug: 'knife-making',
    name: 'Knife Making',
    dateISO: '2026-06-14',
    dateLabel: 'Sat 14 – Sun 15 June 2026',
    duration: 'Two days · 9am – 5pm',
    price: 780,
    skillLevel: 'intermediate',
    maxStudents: 4,
    instructor: 'Tom Halloran',
    blurb: 'Forge a 140mm kitchen utility knife from a single piece of 52100 bar.',
    included: [
      '1 × pre-cut 52100 billet',
      'Heat-treatment & tempering',
      'Hand-ground bevels (we finish to 400 grit)',
      'Timber handle (Tasmanian blackwood)',
      'Two lunches + overnight tools storage',
    ],
    description:
      "A proper weekend in the forge. Day one: forge, normalise, and rough-grind. Day two: harden, temper, handle, sharpen. You leave with a knife you'll use for decades. Bring enclosed footwear.",
    image: U('1530968033775-2c92736b131e'),
  },
  {
    slug: 'scroll-work',
    name: 'Scroll Work',
    dateISO: '2026-07-12',
    dateLabel: 'Saturday 12 July 2026',
    duration: 'One day · 9am – 4pm',
    price: 395,
    skillLevel: 'intermediate',
    maxStudents: 5,
    instructor: 'Sara Chen',
    blurb: 'The fundamentals of scroll — the most overused, most abused shape in the trade.',
    included: [
      'All steel stock + scroll jigs',
      'A printed scroll-ratio reference card',
      'Take-home scroll wall-hook',
      'Forge time, lunch, coffee',
    ],
    description:
      "Scrolls are where bad ironwork gets exposed. Sara walks you through the three family types (Victorian, Federation, Mediterranean), the ratios that actually work, and the subtle geometry that separates a scroll that sings from a scroll that slumps.",
    image: U('1533090481720-856c6e3c1fdc'),
  },
  {
    slug: 'architectural-steel',
    name: 'Architectural Steel',
    dateISO: '2026-08-09',
    dateLabel: 'Sat 9 – Sun 10 August 2026',
    duration: 'Two days · 9am – 5pm',
    price: 820,
    skillLevel: 'advanced',
    maxStudents: 4,
    instructor: 'Sara Chen',
    blurb: 'For architects, designers, and fabricators. How forged work meets drawings.',
    included: [
      'All steel, consumables, PPE',
      'CAD-to-forge translation workshop',
      'MIG + forge-weld demonstrations',
      'Site-visit to a recent commission',
      'Both lunches + a meal at the Braidwood Hotel',
    ],
    description:
      "This one isn't about making a hook. It's about understanding how a 1:5 shop drawing becomes a physical object — and what the forge asks you to redesign. We'll cover tolerancing, expansion, patina specification, and the conversations that matter with a fabricator. Small group, high discussion.",
    image: U('1504826260979-242151ee45b7'),
  },
];
