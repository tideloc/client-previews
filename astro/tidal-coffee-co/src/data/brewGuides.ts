export type BrewGuide = {
  slug: string;
  name: string;
  method: string;           // e.g. "Pour over"
  gear: string[];
  ratio: string;            // e.g. "1:16"
  grind: string;            // e.g. "Medium-fine"
  time: string;             // e.g. "3:00 - 3:30"
  description: string;
  image: string;
};

const U = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const brewGuides: BrewGuide[] = [
  {
    slug: 'v60',
    name: 'Hario V60',
    method: 'Pour over',
    gear: ['Hario V60 02', 'Paper filter', 'Gooseneck kettle', 'Scale', 'Timer'],
    ratio: '1:16',
    grind: 'Medium-fine',
    time: '3:00 - 3:30',
    description:
      "Our house pour-over. 20g of coffee, 320g of water at 94°C. 50g bloom for 45 seconds, then three gentle pulses: to 120g at 0:50, to 220g at 1:30, to 320g by 2:15. Stir once in a clockwise direction after the final pour. Drawdown should finish around 3:15. If it takes longer than 3:45, grind coarser.",
    image: U('1511537190424-bbbab87ac5eb'),
  },
  {
    slug: 'aeropress',
    name: 'Aeropress',
    method: 'Pressurised immersion',
    gear: ['Aeropress', 'Paper filter', 'Kettle', 'Scale', 'Timer'],
    ratio: '1:14',
    grind: 'Medium-fine',
    time: '2:30',
    description:
      "Inverted method, no fuss. 16g coffee, 224g water at 90°C. Pour all water in one go, stir three times, cap and wait two minutes. Flip onto your cup and press slow and steady for 30 seconds. Thick, syrupy, forgiving — travels well and handles light roasts beautifully.",
    image: U('1512568400610-62da28bc8a13'),
  },
  {
    slug: 'chemex',
    name: 'Chemex',
    method: 'Pour over (filter)',
    gear: ['6-cup Chemex', 'Chemex bonded filter', 'Gooseneck kettle', 'Scale'],
    ratio: '1:17',
    grind: 'Medium',
    time: '4:30 - 5:00',
    description:
      "Bigger brews, cleaner cups. 45g coffee, 765g water at 94°C. Heavy paper = slower drawdown, grind one or two notches coarser than V60. Bloom 90g for 45 seconds, then slow continuous pour in concentric circles, maintaining bed level. Total brew around 4:45. Gentle. Don't rush it.",
    image: U('1515442261605-65987783cb6a'),
  },
  {
    slug: 'moka',
    name: 'Moka Pot',
    method: 'Stovetop',
    gear: ['Bialetti Moka 3-cup', 'Induction or gas burner'],
    ratio: 'Full basket',
    grind: 'Fine (finer than filter, coarser than espresso)',
    time: '4:00 - 5:00 total',
    description:
      "Grandma's espresso, done right. Fill the boiler with just-boiled water up to the valve (this is the trick — it stops the coffee from tasting burnt). Load basket flat, don't tamp. Low-medium heat. When you hear the gurgle start, pull from heat. Finish at a sputter, not a steam-scream.",
    image: U('1521302080334-4bebac2763a6'),
  },
  {
    slug: 'french-press',
    name: 'French Press',
    method: 'Full immersion',
    gear: ['Bodum French Press (1L)', 'Kettle', 'Scale', 'Timer'],
    ratio: '1:15',
    grind: 'Coarse',
    time: '4:30',
    description:
      "Full-bodied, bold, no filter paper in the way. 60g coffee, 900g water at 94°C. Pour all at once, stir the crust gently at 1 minute, leave it alone until 4 minutes. Skim the surface, let it settle another minute, plunge slowly. Pour straight away — coffee left on the grounds gets bitter fast.",
    image: U('1442512595331-e89e73853f31'),
  },
  {
    slug: 'espresso-at-home',
    name: 'Home Espresso',
    method: 'Pressurised extraction',
    gear: ['Espresso machine', 'Grinder', 'Scale', 'WDT tool', 'Tamp'],
    ratio: '1:2 (Escarpment) / 1:2.5 (single origin)',
    grind: 'Very fine',
    time: '27-32s',
    description:
      "Dose 18g into an 18g basket. Groom with a WDT, tamp level, pull for 27-32 seconds to yield 36g out. If it's under 25s, grind finer. Over 35s, grind coarser. For single origin light roasts, extend ratio to 1:2.5 and pull to 38 seconds — you'll get more sweetness and clarity out of the shot.",
    image: U('1572442388796-11668a67e53d'),
  },
];
