export type Member = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const U = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const team: Member[] = [
  {
    slug: 'elena-marshall',
    name: 'Elena Marshall',
    role: 'Founder & Director',
    bio:
      "Elena opened the first Tidal cart at the Thirroul Seaside & Arts Festival in 2016 with a single-group La Marzocco on loan. She'd spent the previous eight years running the bar at a small roaster in Fitzroy. She still sources every green bean, writes the subscription notes, and answers every customer email — usually before 7am.",
    image: U('1554118811-1e0d58224f24'),
  },
  {
    slug: 'marcus-okafor',
    name: 'Marcus Okafor',
    role: 'Head Roaster',
    bio:
      "Marcus came on in 2019 after five years roasting in Melbourne — including a stint at a farm-direct outfit in Preston. He runs the 12kg Probat three mornings a week, cups every sample lot before it goes on the menu, and has a near-religious attitude to development time ratios. A former chemical engineer, which somehow tracks.",
    image: U('1507133750040-4a8f57021571'),
  },
];
