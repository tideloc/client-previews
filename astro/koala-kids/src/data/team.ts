export type Educator = {
  slug: string;
  name: string;
  role: string;
  qualification: string;
  years: number;
  bio: string;
  photo: string;
  idx?: number;
};

const P = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&h=1100&fit=crop&q=80&auto=format`;

export const team: Educator[] = [
  {
    slug: 'harriet-kavanagh',
    name: 'Harriet Kavanagh',
    role: 'Centre Director · Preschool Lead',
    qualification: 'B.Ed (Early Childhood), Macquarie',
    years: 14,
    bio: 'Harriet opened Koala Kids in 2019 after a decade running preschool rooms across Newcastle and the Central Coast. She leads our pedagogical team and personally writes every child\'s end-of-year transition-to-school report.',
    photo: P('1573496359142-b8d87734a5a2'),
  },
  {
    slug: 'liam-obrien',
    name: "Liam O'Brien",
    role: 'Assistant Director · Bush Kinder Lead',
    qualification: 'Dip. Early Childhood Education & Care',
    years: 11,
    bio: 'Liam designs and runs our twice-weekly bush kinder program at the nearby Hunter reserve. Trained in outdoor risk-benefit assessment, former park ranger, and the person the four-year-olds go to when they want to identify a beetle.',
    photo: P('1506794778202-cad84cf45f1d'),
  },
  {
    slug: 'amelia-chen',
    name: 'Amelia Chen',
    role: 'Wallaby Room Lead (3–4)',
    qualification: 'B.Teach (Early Childhood), Newcastle',
    years: 9,
    bio: 'Amelia leads project-based inquiry in the Wallaby Room. Her documentation practice — photographs, transcripts of children\'s theories, sketched plans — is the reason many of our parents choose us.',
    photo: P('1494790108377-be9c29b29330'),
  },
  {
    slug: 'nadia-okafor',
    name: 'Nadia Okafor',
    role: 'Possum Room Lead (2–3)',
    qualification: 'Dip. Early Childhood Education & Care',
    years: 8,
    bio: 'Nadia champions the mess. She believes two-year-olds deserve real tools, real clay, real paint — and she has eight years of evidence that they can handle it beautifully.',
    photo: P('1438761681033-6461ffad8d80'),
  },
  {
    slug: 'elena-moretti',
    name: 'Elena Moretti',
    role: 'Wombat Room Lead (1–2)',
    qualification: 'Dip. Early Childhood Education & Care',
    years: 7,
    bio: 'Elena trained in Reggio Emilia before moving to Australia in 2018. She brings a quiet, patient rhythm to the toddler room and speaks Italian with our children who are learning at home.',
    photo: P('1544005313-94ddf0286df2'),
  },
  {
    slug: 'sarah-dillon',
    name: 'Sarah Dillon',
    role: 'Joey Room Lead (0–1)',
    qualification: 'B.Ed (Early Childhood), plus Cert. Infant Mental Health',
    years: 12,
    bio: 'Sarah is our nursery anchor. Her postgraduate training in infant mental health shapes how we support new families through the transition into care — with the pace and patience a baby actually needs.',
    photo: P('1580489944761-15a19d654956'),
  },
  {
    slug: 'jacob-wilson',
    name: 'Jacob Wilson',
    role: 'Wombat Room Educator',
    qualification: 'Dip. Early Childhood Education & Care',
    years: 5,
    bio: 'Jacob grew up in Awabakal country and brings the storyteller\'s instinct to group time. He co-designs our Indigenous perspectives program with Aunty Deanne, our Worimi consulting elder.',
    photo: P('1507003211169-0a1dd7228f2d'),
  },
  {
    slug: 'priya-ramesh',
    name: 'Priya Ramesh',
    role: 'Cook · Nutrition Lead',
    qualification: 'Cert. IV Commercial Cookery · Vic Kids trained',
    years: 10,
    bio: 'Priya runs the Koala Kids kitchen single-handed and produces three fresh meals plus morning and afternoon tea every day. Her menus are child-tested, dietitian-reviewed, and shared with families each Friday.',
    photo: P('1534528741775-53994a69daeb'),
  },
].map((e, i) => ({ ...e, idx: i })) as Educator[];
