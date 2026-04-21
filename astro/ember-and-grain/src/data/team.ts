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
    slug: 'tom-wren',
    name: 'Tom Wren',
    role: 'Co-founder &middot; head brewer',
    bio: 'Tom spent twelve years as a civil engineer in Brisbane before giving it up in 2016 to finish his Brewing Diploma at Ballarat. Obsessed with lager, oats, and the quiet kind of complexity. Makes most of the recipe decisions. Plays a battered Telecaster in the taproom on Thursdays if you ask nicely.',
    image: U('1532634922-8fe0b757fb13'),
  },
  {
    slug: 'harriet-odell',
    name: 'Harriet O\'Dell',
    role: 'Co-founder &middot; fermentation lead',
    bio: 'Harriet runs the barrel program, the mixed-culture cellar and the yeast lab upstairs. Trained as a microbiologist at Sydney Uni, kept a sourdough starter alive through three share-house moves, still has it. Responsible for every funky, sour, or foeder-aged thing on the board.',
    image: U('1522556189639-b150ed9c4330'),
  },
];
