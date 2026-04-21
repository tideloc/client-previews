export type Recipe = {
  slug: string;
  name: string;
  category: 'chicken' | 'beef' | 'pork' | 'veg' | 'seafood';
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  sauce: string;
  blurb: string;
  image: string;
};

const U = (id: string, w = 900, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const recipes: Recipe[] = [
  {
    slug: 'widowmaker-wings',
    name: 'Widowmaker Wings',
    category: 'chicken',
    cookTime: '1 hr 45 min',
    difficulty: 'Medium',
    sauce: 'Widowmaker',
    blurb: 'Dry-rubbed, smoked 90 min at 120°C, crisped over coals, drenched in Widowmaker. A Sunday ritual in our backyard since 2019.',
    image: U('1608039829572-78524f79c4c7'),
  },
  {
    slug: 'blackbird-tacos',
    name: 'Blackbird Fish Tacos',
    category: 'seafood',
    cookTime: '25 min',
    difficulty: 'Easy',
    sauce: 'Blackbird',
    blurb: 'Line-caught barra, charred corn tortillas, a fistful of coriander, a slick of Blackbird. The weeknight win.',
    image: U('1551218808-94e220e084d2'),
  },
  {
    slug: 'brothers-brisket',
    name: "Brothers' Brisket",
    category: 'beef',
    cookTime: '14 hrs',
    difficulty: 'Hard',
    sauce: "Brothers' Rub",
    blurb: '14 hours in the offset smoker over Queensland ironbark. Rubbed with Brothers, wrapped at 75°C, rested for 90 minutes. Patience is the recipe.',
    image: U('1553163147-622ab57be1c7'),
  },
  {
    slug: 'sunset-ribs',
    name: 'Sunset Reaper Pork Ribs',
    category: 'pork',
    cookTime: '6 hrs',
    difficulty: 'Medium',
    sauce: 'Sunset Reaper',
    blurb: 'Baby backs, Bundy glaze, a glaze of Sunset Reaper for the final 20 minutes. Sticky, terrifying, perfect.',
    image: U('1544025162-d76694265947'),
  },
  {
    slug: 'ember-chicken',
    name: 'Ember-Rubbed Half Chicken',
    category: 'chicken',
    cookTime: '55 min',
    difficulty: 'Easy',
    sauce: 'Ember Rub',
    blurb: 'Spatchcocked, rubbed all over with Ember, roasted at 200°C on the kettle. Crispy skin, no apologies.',
    image: U('1567620832903-9fc6debc209f'),
  },
  {
    slug: 'bush-smoulder-burger',
    name: 'Bush Smoulder Smash',
    category: 'beef',
    cookTime: '20 min',
    difficulty: 'Easy',
    sauce: 'Bush Smoulder',
    blurb: 'Two thin patties, aged cheddar, house pickles, a generous glug of Bush Smoulder. The best burger we make.',
    image: U('1504674900247-0877df9cc836'),
  },
  {
    slug: 'smoked-cauli',
    name: 'Smoked Cauliflower Steaks',
    category: 'veg',
    cookTime: '1 hr',
    difficulty: 'Easy',
    sauce: 'Ember Rub',
    blurb: 'Thick-cut cauliflower, Ember rub, 40 minutes in the smoker, finished with tahini. The reason our vegetarian mate still comes to barbecues.',
    image: U('1540189549336-e6e99c3679fe'),
  },
  {
    slug: 'blackbird-eggs',
    name: 'Blackbird Eggs',
    category: 'chicken',
    cookTime: '8 min',
    difficulty: 'Easy',
    sauce: 'Blackbird',
    blurb: 'Three eggs, sourdough, a quarter bottle of Blackbird. A hangover, cured. A Tuesday, elevated.',
    image: U('1558030006-450675393462'),
  },
];
