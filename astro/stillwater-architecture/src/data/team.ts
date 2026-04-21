export type Member = {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  bio: string[];
  photo: string;
};

const U = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const team: Member[] = [
  {
    slug: 'mei-takashima',
    name: 'Mei Takashima',
    role: 'Principal architect, co-founder',
    credentials: 'B.Arch (Hons), M.Arch, RAIA, Reg. TAS 4881 / NSW 11492',
    bio: [
      'Mei founded Stillwater with Rory in 2014 after eight years with Stutchbury and Pape in Sydney and two years at Candalepas Associates. She leads the rural work — masterplanning, shearing sheds, the long slow projects that measure themselves in trees planted rather than rooms built.',
      'She teaches design studio one semester a year at the University of Tasmania and sits on the Royal Hobart Hospital public art advisory committee. She does most of her best thinking walking the kunanyi track at five in the morning.',
    ],
    photo: U('1573496359142-b8d87734a5a2'),
  },
  {
    slug: 'rory-fitzwilliam',
    name: 'Rory Fitzwilliam',
    role: 'Principal architect, co-founder',
    credentials: 'B.Des (UTas), M.Arch (RMIT), RAIA, Reg. TAS 5107',
    bio: [
      'Rory runs the coastal and urban side of the practice — the additions, the boat-houses, the one-year jobs. He joined Six Degrees in Melbourne at 24, returned to Hobart in 2012, and co-founded Stillwater two years later. He cares very deeply about doorways.',
      'He spent 2019 on a Byera Hadley travel scholarship studying adaptive reuse of vernacular stone structures in the Outer Hebrides and north Iceland. That research still shapes how we treat heritage fabric in the Midlands projects.',
    ],
    photo: U('1560250097-0b93528c311a'),
  },
  {
    slug: 'lenny-osei',
    name: 'Lenny Osei',
    role: 'Senior architect',
    credentials: 'B.Arch, M.Arch (UniMelb), RAIA, Reg. TAS 5402',
    bio: [
      'Lenny is responsible for most of our technical resolution and all of our passive-thermal modelling. If a house keeps you warm without trying, there is a good chance Lenny drew the detail that made it so. He joined the studio in 2019.',
      'Before architecture he trained as a structural engineer and spent six years on a farm outside Accra. He now lives in West Hobart with his partner Florentine and a small, ungovernable whippet called Bert.',
    ],
    photo: U('1472099645785-5658abf4ff4e'),
  },
  {
    slug: 'anya-redman',
    name: 'Anya Redman',
    role: 'Architect',
    credentials: 'B.Arch (UTas), M.Arch (UTas), RAIA (graduate)',
    bio: [
      'Anya joined us as a graduate in 2022 after four years in our summer program while studying. She runs the journal and our in-studio materials library, and has quietly taken ownership of our smaller additions. She is about to sit registration.',
      'Her interest is in the weathering of natural materials over the first decade of a building\'s life — a research project she developed under Mei\'s supervision and which now influences all of our material specifications.',
    ],
    photo: U('1580489944761-15a19d654956'),
  },
];
