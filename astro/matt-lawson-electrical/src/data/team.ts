export type TeamMember = {
  name: string;
  role: string;
  licence?: string;
  bio: string;
  image: string;
};

const U = (id: string, w = 700, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const team: TeamMember[] = [
  {
    name: 'Matt Lawson',
    role: 'Owner · Licensed Electrician · Level 2 ASP',
    licence: 'NSW Lic. EC12345',
    bio:
      'Started his apprenticeship at BHP Port Kembla in 2005, spent eight years on big mechanical jobs through the steelworks, and went out on his own in 2012. Clean Energy Council accredited solar designer, Level 2 ASP authorised, Clipsal C-Bus certified. Based in Wollongong, lives in Figtree with his partner and two kids.',
    image: U('1504328345606-18bbc8c9d7d1'),
  },
  {
    name: 'Jake Whitcombe',
    role: 'Senior Electrician',
    licence: 'NSW Lic. EC24881',
    bio:
      'Eight years on commercial fitouts across Sydney before moving south to raise a family. Jake runs the larger commercial and office jobs, holds a Cert IV in Instrumentation and is the team\'s go-to for anything DALI or KNX.',
    image: U('1507003211169-0a1dd7228f2d'),
  },
  {
    name: 'Sam Petrovic',
    role: 'Apprentice Electrician · 4th year',
    licence: 'Supervised under EC12345',
    bio:
      'Final-year apprentice through Illawarra TAFE. Sam handles most of the residential day-to-day: LED retrofits, ceiling fans, new circuits. Also runs our Instagram (with Matt\'s permission) — he\'s where the reel of the Thirroul ceiling install came from.',
    image: U('1567427017947-545c5f8d16ad'),
  },
];
