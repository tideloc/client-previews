export type Maker = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  years: number;
  discipline: string;
  image: string;
};

const U = (id: string, w = 900, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const team: Maker[] = [
  {
    slug: 'tom-halloran',
    name: 'Tom Halloran',
    role: 'Heritage blacksmith',
    tagline: 'Trained Yorkshire, 1998. Fourth-generation smith.',
    bio:
      "Tom trained under Peter Dyson in the North Riding from 1998. He brings the traditional disciplines — forge-welding, hand-drawing, pattern replication — and a pretty unkind view of any shortcut involving electricity. He runs the heritage commissions and teaches the weekend classes.",
    years: 26,
    discipline: 'Hand forge + coal',
    image: U('1565034946487-077786996e27'),
  },
  {
    slug: 'sara-chen',
    name: 'Sara Chen',
    role: 'Architectural metalworker',
    tagline: 'Trained RMIT 2011. Forged, fabricated, drawn.',
    bio:
      "Sara came through the RMIT School of Art in 2011 and spent six years on architect-led projects in Melbourne before moving the operation to Braidwood with Tom in 2018. She works between the forge and the CAD station — the contemporary projects, the architectural liaison, the big-scale sculptural work.",
    years: 13,
    discipline: 'Forge + fabrication + CAD',
    image: U('1555529902-5261145633bf'),
  },
];
