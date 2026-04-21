export type Recipe = {
  slug: string;
  name: string;
  hero: string;              // hero ingredient
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  serves: number;
  category: 'bake' | 'grill' | 'share' | 'brunch' | 'dessert' | 'preserve';
  blurb: string;
  image: string;
};

const U = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const recipes: Recipe[] = [
  {
    slug: 'wattleseed-damper-saltbush-butter',
    name: 'Wattleseed damper with saltbush butter',
    hero: 'Wattleseed',
    time: '1 hr 10 min',
    difficulty: 'Easy',
    serves: 6,
    category: 'bake',
    blurb:
      'A dark-crusted, mocha-scented damper served with a cold slab of saltbush-flecked butter. The bush breakfast, quietly refined.',
    image: U('1555507036-ab1f4038808a'),
  },
  {
    slug: 'pepperberry-lamb-rack',
    name: 'Pepperberry-crusted lamb rack',
    hero: 'Mountain pepperberry',
    time: '45 min',
    difficulty: 'Medium',
    serves: 4,
    category: 'grill',
    blurb:
      'Rubbed with crushed pepperberry, saltbush salt and wattleseed. Seared hot, rested long. Slice thick.',
    image: U('1551218808-94e220e084d2'),
  },
  {
    slug: 'kakadu-plum-cured-salmon',
    name: 'Kakadu plum cured ocean trout',
    hero: 'Kakadu plum',
    time: '48 hrs + 15 min',
    difficulty: 'Medium',
    serves: 8,
    category: 'share',
    blurb:
      'A two-day Kakadu plum cure for ocean trout — astonishingly bright, with a faint green-apple finish. Serve thin with soda bread.',
    image: U('1593121925328-369cc8459c08'),
  },
  {
    slug: 'lemon-myrtle-hotcakes',
    name: 'Lemon myrtle hotcakes, maple & macadamia',
    hero: 'Lemon myrtle',
    time: '30 min',
    difficulty: 'Easy',
    serves: 4,
    category: 'brunch',
    blurb:
      'Fluffy ricotta hotcakes laced with ground lemon myrtle, warm maple, and a crush of toasted macadamias. A Sunday in under half an hour.',
    image: U('1504674900247-0877df9cc836'),
  },
  {
    slug: 'bunya-risotto',
    name: 'Bunya nut risotto with wild thyme',
    hero: 'Bunya nut',
    time: '50 min',
    difficulty: 'Medium',
    serves: 4,
    category: 'share',
    blurb:
      'Roasted, roughly-chopped bunya nuts stirred through a silky barley risotto with wild thyme and a slow glug of macadamia oil.',
    image: U('1525755662778-989d0524087e'),
  },
  {
    slug: 'quandong-pavlova',
    name: 'Quandong pavlova',
    hero: 'Quandong',
    time: '2 hrs',
    difficulty: 'Medium',
    serves: 8,
    category: 'dessert',
    blurb:
      'Crisp-shelled pavlova, softly whipped cream, a puddle of warm quandong compote, and a shower of pepperberry-sugar. A proper Australian Christmas.',
    image: U('1563729784474-d77dbb933a9e'),
  },
];
