export type Member = {
  name: string;
  role: string;
  bio: string;
  since: string;
  image: string;
  favourite: string;
};

const U = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const team: Member[] = [
  {
    name: 'Jake Thorne',
    role: 'Owner-Operator',
    bio: 'Grew up in Gymea, apprenticed in turf management at Cronulla Golf before going out on his own in 2018. Seven years in, still in the ute at 6:45am and still sharpens every mower blade by hand.',
    since: '2018',
    image: U('1622383563227-04401ab4e5ea'),
    favourite: 'A fresh stripe pattern on a big flat backyard.',
  },
  {
    name: 'Mitch Keane',
    role: 'Casual — Mowing & Edging',
    bio: 'Uni student studying horticulture at TAFE Loftus. Runs the Tuesday-Thursday route on his own. Dead reliable — has never once no-showed in three seasons.',
    since: '2022',
    image: U('1504608524841-42fe6f032b4b'),
    favourite: 'Clean edges. Razor-straight every time.',
  },
  {
    name: 'Sam Darbyshire',
    role: 'Casual — Landscaping',
    bio: 'Ex-carpenter who pivoted after his back said enough was enough. Does most of the turf-laying, path and garden-bed work with Jake on bigger weekends.',
    since: '2023',
    image: U('1588599376442-3cbf9c67449e'),
    favourite: 'The look on a client\'s face the day fresh turf is down.',
  },
];
