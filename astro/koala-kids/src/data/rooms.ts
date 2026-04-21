export type Room = {
  slug: string;
  name: string;
  ageRange: string;
  ratio: string;
  educators: string[];
  focus: string;
  dailyRhythm: { time: string; activity: string }[];
  developmentalFocus: [string, string, string];
  photos: [string, string, string, string];
  idx?: number;
};

const U = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const rooms: Room[] = [
  {
    slug: 'joey',
    name: 'Joey Room',
    ageRange: '0–1 years',
    ratio: '1:4',
    educators: ['Sarah Dillon', 'Priya Ramesh'],
    focus: 'A calm, slow-paced nursery where routines are led by the baby, not the clock. Responsive care, secure attachment, soft sensory play.',
    dailyRhythm: [
      { time: '7:00', activity: 'Slow arrivals & cuddles' },
      { time: '8:00', activity: 'Breakfast (on demand)' },
      { time: '9:30', activity: 'Sensory floor time' },
      { time: '11:00', activity: 'Morning sleep' },
      { time: '12:30', activity: 'Lunch, family-style' },
      { time: '14:00', activity: 'Long rest' },
      { time: '15:30', activity: 'Garden time in the pram' },
      { time: '17:00', activity: 'Quiet play & pickup' },
    ],
    developmentalFocus: [
      'Secure attachment & emotional regulation',
      'Gross-motor milestones (rolling, sitting, crawling)',
      'Early communication & shared attention',
    ],
    photos: [
      U('1587825140708-dfaf72ae4b04'),
      U('1503676260728-1c00da094a0b'),
      U('1503918538415-80a7f9ce5a62'),
      U('1507003211169-0a1dd7228f2d'),
    ],
  },
  {
    slug: 'wombat',
    name: 'Wombat Room',
    ageRange: '1–2 years',
    ratio: '1:5',
    educators: ['Elena Moretti', 'Jacob Wilson'],
    focus: 'Little walkers, big feelings. Our toddlers move a lot, feel a lot, and begin to find their words. We make space for all of it.',
    dailyRhythm: [
      { time: '7:00', activity: 'Welcome & free play' },
      { time: '8:15', activity: 'Family breakfast' },
      { time: '9:30', activity: 'Outdoor exploration' },
      { time: '11:00', activity: 'Story + song circle' },
      { time: '11:45', activity: 'Lunch together' },
      { time: '12:45', activity: 'Rest time' },
      { time: '15:00', activity: 'Afternoon tea + garden' },
      { time: '17:00', activity: 'Quiet art & pickup' },
    ],
    developmentalFocus: [
      'Two-word phrases & early expressive language',
      'Self-feeding, self-help, independence',
      'Naming emotions with a trusted adult',
    ],
    photos: [
      U('1544717297-fa95b6ee9643'),
      U('1438039548937-4b9e8a59c8b1'),
      U('1503918538415-80a7f9ce5a62'),
      U('1572188863110-46d457c9234d'),
    ],
  },
  {
    slug: 'possum',
    name: 'Possum Room',
    ageRange: '2–3 years',
    ratio: '1:8',
    educators: ['Nadia Okafor', 'Tom Fraser'],
    focus: 'Project-based, messy, loud. Two-year-olds are our most creative philosophers. We follow their questions wherever they lead.',
    dailyRhythm: [
      { time: '7:15', activity: 'Arrival & provocations' },
      { time: '8:30', activity: 'Breakfast buffet' },
      { time: '9:30', activity: 'Long outdoor play' },
      { time: '11:00', activity: 'Project work' },
      { time: '12:00', activity: 'Lunch' },
      { time: '13:00', activity: 'Rest or quiet play' },
      { time: '15:00', activity: 'Afternoon tea' },
      { time: '15:30', activity: 'Art studio + garden' },
    ],
    developmentalFocus: [
      'Parallel → cooperative play transitions',
      'Symbolic pretend play & imagination',
      'Concept of self as a capable person',
    ],
    photos: [
      U('1503454537195-1dcabb73ffb9'),
      U('1544717297-fa95b6ee9643'),
      U('1577058267193-a82f9d5a46ea'),
      U('1572188863110-46d457c9234d'),
    ],
  },
  {
    slug: 'wallaby',
    name: 'Wallaby Room',
    ageRange: '3–4 years',
    ratio: '1:10',
    educators: ['Amelia Chen', 'Ben Rahimi'],
    focus: 'Where friendships form and curiosity sharpens. We lean into early literacy, nature inquiry, and the beginnings of group belonging.',
    dailyRhythm: [
      { time: '7:15', activity: 'Arrival & studio play' },
      { time: '8:30', activity: 'Breakfast' },
      { time: '9:30', activity: 'Bush kinder or garden' },
      { time: '11:00', activity: 'Inquiry projects' },
      { time: '12:00', activity: 'Lunch, self-serve' },
      { time: '13:00', activity: 'Rest / quiet reading' },
      { time: '15:00', activity: 'Afternoon tea' },
      { time: '15:30', activity: 'Free-flow play & pickup' },
    ],
    developmentalFocus: [
      'Early literacy through rich oral language',
      'Friendship skills, conflict repair, negotiation',
      'Sustained inquiry over multi-day projects',
    ],
    photos: [
      U('1491156855053-9cdff72c7f85'),
      U('1503454537195-1dcabb73ffb9'),
      U('1577058267193-a82f9d5a46ea'),
      U('1438039548937-4b9e8a59c8b1'),
    ],
  },
  {
    slug: 'kookaburra',
    name: 'Kookaburra Preschool',
    ageRange: '4–5 years',
    ratio: '1:11',
    educators: ['Harriet Kavanagh', 'Liam O\'Brien'],
    focus: 'The year before big school. A rich, rigorous preschool program grounded in our bush kinder site, with strong transition-to-school support.',
    dailyRhythm: [
      { time: '7:15', activity: 'Studio & welcome' },
      { time: '8:30', activity: 'Breakfast' },
      { time: '9:00', activity: 'Bush kinder (Tue/Thu)' },
      { time: '11:00', activity: 'Literacy & numeracy inquiry' },
      { time: '12:00', activity: 'Lunch & yarn' },
      { time: '13:00', activity: 'Rest or quiet project work' },
      { time: '14:30', activity: 'Group investigation' },
      { time: '15:30', activity: 'Afternoon tea & pickup' },
    ],
    developmentalFocus: [
      'Sustained focus, planning & executive function',
      'Pre-literacy: phonological awareness, print concepts',
      'School readiness through confident self-advocacy',
    ],
    photos: [
      U('1572188863110-46d457c9234d'),
      U('1577058267193-a82f9d5a46ea'),
      U('1491156855053-9cdff72c7f85'),
      U('1503454537195-1dcabb73ffb9'),
    ],
  },
].map((r, i) => ({ ...r, idx: i })) as Room[];
