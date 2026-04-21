export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const U = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const team: TeamMember[] = [
  {
    slug: 'marni-patterson',
    name: 'Marni Patterson',
    role: 'Founder & buyer · Mparntwe (Alice Springs)',
    bio: 'Marni moved to Alice from Hobart in 2015 to cook at a bush foods restaurant. She started Outback Pantry in 2017 as a single-product operation (wattleseed only) trading out of the back of a ute at Todd Mall markets. She writes our supplier agreements and still does the buying trip to every cooperative, every year.',
    image: U('1502741224143-90386d7f8c82'),
  },
  {
    slug: 'tom-fulford',
    name: 'Tom Fulford',
    role: 'Co-founder & operations',
    bio: 'Tom runs the warehouse, the roaster, and the ethical-sourcing scorecard. Former supply-chain auditor for a big food importer; left after six years because he could not look the answers in the eye. Lives outside Alice with a dog named Cabernet and keeps the spreadsheet that nobody else wants to.',
    image: U('1519681393784-d120267933ba'),
  },
  {
    slug: 'aunty-linda-murray',
    name: 'Aunty Linda Murray',
    role: 'Cultural advisor & head of recipe development',
    bio: 'Aunty Linda is an Arrernte woman and a professional chef with 22 years of experience across Australia, France and the NT. She sits on our board as cultural advisor, consults on every supplier we sign, and writes every recipe on this site. Nothing leaves this warehouse without her sign-off.',
    image: U('1494412519320-aa613dfb7738'),
  },
];
