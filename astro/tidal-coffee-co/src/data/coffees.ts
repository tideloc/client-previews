export type Coffee = {
  slug: string;
  name: string;
  origin: string;              // e.g. "Sidamo, Ethiopia"
  process: string;             // e.g. "Natural", "Washed", "Honey"
  altitude: string;            // e.g. "1,800-2,100 masl"
  variety: string;             // e.g. "Heirloom", "Caturra + Castillo"
  roastLevel: 'light' | 'medium-light' | 'medium';
  category: 'single' | 'blend' | 'decaf' | 'limited';
  flavorNotes: [string, string, string];
  acidity: 1 | 2 | 3 | 4 | 5;
  body: 1 | 2 | 3 | 4 | 5;
  sweetness: 1 | 2 | 3 | 4 | 5;
  blurb: string;
  description: string;
  brewMethods: string[];
  price: number;
  size: '250g' | '500g' | '1kg';
  roastDate: string;           // e.g. "Roasted 18 Apr"
  image: string;
  badge?: string;
};

const U = (id: string, w = 900, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const coffees: Coffee[] = [
  {
    slug: 'headland-house-blend',
    name: 'Headland House Blend',
    origin: 'Colombia + Brazil',
    process: 'Washed / Natural',
    altitude: '1,200-1,800 masl',
    variety: 'Caturra, Castillo, Mundo Novo',
    roastLevel: 'medium',
    category: 'blend',
    flavorNotes: ['Dark chocolate', 'Hazelnut', 'Brown sugar'],
    acidity: 2,
    body: 4,
    sweetness: 4,
    blurb: "The everyday bean. Built for milk, forgiving in a plunger, always on.",
    description:
      "Our permanent blend — 70% washed Huila Colombia for clarity, 30% natural Minas Gerais Brazil for weight and body. We roast it to a solid medium, letting second crack crackle for about forty seconds before drop. Works equally well as a 1:2 espresso, through a moka pot on the stovetop, or a fat tablespoon into a plunger on a Sunday morning. It's the bean we go back to after tasting a dozen others.",
    brewMethods: ['Espresso', 'Moka', 'French Press', 'Stovetop'],
    price: 22,
    size: '250g',
    roastDate: 'Roasted 18 Apr',
    image: U('1494314671902-399b18174975'),
    badge: 'Always on',
  },
  {
    slug: 'ethiopia-guji-natural',
    name: 'Ethiopia Guji',
    origin: 'Guji Zone, Ethiopia',
    process: 'Natural',
    altitude: '2,050-2,250 masl',
    variety: 'Heirloom (74110, 74112)',
    roastLevel: 'light',
    category: 'single',
    flavorNotes: ['Blueberry', 'Jasmine', 'Ripe peach'],
    acidity: 5,
    body: 2,
    sweetness: 5,
    blurb: "A perfume of blueberry and jasmine. Best on V60 at 1:16.",
    description:
      "Sourced through our importer partner in Addis from washing stations in the Shakiso district. Twenty-one days on raised beds with careful pulp management — the result is almost obscenely fruit-forward. A proper light roast: pulled from the drum right at first crack, rested eight days before we'd let you drink it. Brew it filter. Espresso if you're feeling fancy, but you'll want a 1:2.5 ratio or you'll shock out.",
    brewMethods: ['V60', 'Chemex', 'Aeropress', 'Filter batch'],
    price: 28,
    size: '250g',
    roastDate: 'Roasted 16 Apr',
    image: U('1497935586351-b67a49e012bf'),
    badge: 'Seasonal',
  },
  {
    slug: 'colombia-el-paraiso',
    name: 'Colombia El Paraíso',
    origin: 'Cauca, Colombia',
    process: 'Double Anaerobic Washed',
    altitude: '1,930 masl',
    variety: 'Castillo',
    roastLevel: 'medium-light',
    category: 'single',
    flavorNotes: ['Lychee', 'Rose', 'Honeydew'],
    acidity: 4,
    body: 3,
    sweetness: 4,
    blurb: "Diego Bermudez's thermal-shock fermentation. Tropical, floral, unreal.",
    description:
      "From the Bermudez family farm in Piendamó — probably the most talked-about Colombian producer of the last five years. Double anaerobic fermentation (96 hours aerobic cherry, 48 hours washed parchment) followed by controlled thermal-shock drying. It tastes less like traditional Colombia and more like a lychee Soju on a warm night. We roast it medium-light, rest ten days, recommend filter first and foremost.",
    brewMethods: ['V60', 'Aeropress', 'Chemex'],
    price: 34,
    size: '250g',
    roastDate: 'Roasted 18 Apr',
    image: U('1509042239860-f550ce710b93'),
  },
  {
    slug: 'guatemala-el-injerto',
    name: 'Guatemala El Injerto',
    origin: 'Huehuetenango, Guatemala',
    process: 'Washed',
    altitude: '1,600-2,000 masl',
    variety: 'Pacamara',
    roastLevel: 'medium-light',
    category: 'single',
    flavorNotes: ['Milk chocolate', 'Green apple', 'Toffee'],
    acidity: 3,
    body: 4,
    sweetness: 4,
    blurb: "Pacamara from the Aguirre family. Classic, clean, chocolate-forward.",
    description:
      "Fifth-generation Aguirre family farm, sitting high above the town of La Libertad. Pacamara — a Pacas × Maragogipe cross — with beans the size of your fingernail. Fully washed, patio dried for 14 days. This is the shot you pull when you want to show someone why you got into specialty coffee: clean, sweet, no funk, everything in its right place.",
    brewMethods: ['Espresso', 'V60', 'Filter batch'],
    price: 26,
    size: '250g',
    roastDate: 'Roasted 16 Apr',
    image: U('1453614512568-c4024d13c247'),
  },
  {
    slug: 'rwanda-nyamasheke',
    name: 'Rwanda Nyamasheke',
    origin: 'Western Province, Rwanda',
    process: 'Washed',
    altitude: '1,700-2,000 masl',
    variety: 'Red Bourbon',
    roastLevel: 'light',
    category: 'single',
    flavorNotes: ['Black tea', 'Red currant', 'Brown sugar'],
    acidity: 4,
    body: 3,
    sweetness: 3,
    blurb: "Red Bourbon from the Kivu hillsides. Tea-like, refined, transporting.",
    description:
      "Nyamasheke sits in the hills above Lake Kivu. We buy from a co-op of 340 smallholders — average farm size: half a hectare. Fully washed at a central station with 36 hour fermentation in concrete tanks. Drier than most African coffees we roast, with a black-tea spine that makes it feel almost restrained. Goes brilliantly through a Chemex.",
    brewMethods: ['Chemex', 'V60', 'Filter batch'],
    price: 27,
    size: '250g',
    roastDate: 'Roasted 14 Apr',
    image: U('1461023058943-07fcbe16d735'),
  },
  {
    slug: 'png-sigri-ax',
    name: 'PNG Sigri AX',
    origin: 'Waghi Valley, Papua New Guinea',
    process: 'Washed',
    altitude: '1,500-1,800 masl',
    variety: 'Arusha, Typica',
    roastLevel: 'medium-light',
    category: 'single',
    flavorNotes: ['Baking spice', 'Tamarind', 'Cacao nib'],
    acidity: 3,
    body: 4,
    sweetness: 3,
    blurb: "Sigri Estate's Western Highlands lot. Savoury, spicy, under-rated.",
    description:
      "Sigri is the reference-point estate in PNG — established 1953, now certified Rainforest Alliance. This is the AX screen (the largest bean grade) from their washed production. PNG coffee gets weirdly overlooked; this one's got a warm-spice character we've never tasted anywhere else, like someone ground cacao nibs into a cup of chai. Works as espresso, but we love it as a long filter.",
    brewMethods: ['V60', 'Espresso', 'Chemex'],
    price: 25,
    size: '250g',
    roastDate: 'Roasted 14 Apr',
    image: U('1447933601403-0c6688de566e'),
  },
  {
    slug: 'brazil-fazenda-recreio',
    name: 'Brazil Fazenda Recreio',
    origin: 'Sul de Minas, Brazil',
    process: 'Pulped Natural',
    altitude: '1,150 masl',
    variety: 'Yellow Bourbon',
    roastLevel: 'medium',
    category: 'single',
    flavorNotes: ['Peanut butter', 'Milk chocolate', 'Raw almond'],
    acidity: 2,
    body: 5,
    sweetness: 4,
    blurb: "Old-school Yellow Bourbon. Heavy body, low acid, espresso heaven.",
    description:
      "Fazenda Recreio has been in the Ferreira family for three generations. This is their pulped natural (semi-washed) Yellow Bourbon — pulped cherry dried in its mucilage on patios. It's a syrupy, nutty, low-acid cup that pulls beautifully short. If you grew up on Italian-style espresso and want something that feels familiar but better, this is it.",
    brewMethods: ['Espresso', 'Moka', 'Stovetop'],
    price: 23,
    size: '250g',
    roastDate: 'Roasted 18 Apr',
    image: U('1485808191679-5f86510681a2'),
  },
  {
    slug: 'escarpment-espresso-blend',
    name: 'Escarpment Espresso',
    origin: 'Brazil + Ethiopia',
    process: 'Natural blend',
    altitude: '1,100-2,100 masl',
    variety: 'Yellow Bourbon + Heirloom',
    roastLevel: 'medium',
    category: 'blend',
    flavorNotes: ['Dark cocoa', 'Stone fruit', 'Raw sugar'],
    acidity: 3,
    body: 4,
    sweetness: 4,
    blurb: "Our cafe espresso. Built for milk. Built to last a second pull.",
    description:
      "The bean we pull behind the bar all day. 65% natural Brazil base for body and cocoa, 35% natural Ethiopia top for a lift of stone fruit. Roasted just a touch past the House Blend — enough caramelisation to punch through a flat white without losing the fruit. A forgiving espresso: dial it once in the morning and it'll hold all day.",
    brewMethods: ['Espresso', 'Milk drinks', 'Moka'],
    price: 24,
    size: '500g',
    roastDate: 'Roasted 18 Apr',
    image: U('1514432324607-a09d9b4aefdd'),
    badge: 'Cafe pour',
  },
  {
    slug: 'colombia-swiss-water-decaf',
    name: 'Decaf · Colombia Huila',
    origin: 'Huila, Colombia',
    process: 'Swiss Water decaffeinated, washed',
    altitude: '1,600 masl',
    variety: 'Caturra',
    roastLevel: 'medium',
    category: 'decaf',
    flavorNotes: ['Milk chocolate', 'Orange peel', 'Caramel'],
    acidity: 3,
    body: 3,
    sweetness: 4,
    blurb: "A decaf you'd drink on purpose. Swiss Water, washed Huila base.",
    description:
      "We picked a bean worth drinking caffeine-free. Washed Caturra from Huila, decaffeinated via the chemical-free Swiss Water process in British Columbia, then roasted carefully (decaf beans roast faster — it's a whole different game). Pulls a proper shot with actual crema. People don't believe us until they taste it.",
    brewMethods: ['Espresso', 'V60', 'Milk drinks'],
    price: 26,
    size: '250g',
    roastDate: 'Roasted 16 Apr',
    image: U('1501339847302-ac426a4a7cbb'),
  },
  {
    slug: 'colombia-la-palma-geisha',
    name: 'Colombia La Palma Geisha',
    origin: 'Tolima, Colombia',
    process: 'Washed',
    altitude: '2,050 masl',
    variety: 'Geisha',
    roastLevel: 'light',
    category: 'limited',
    flavorNotes: ['Bergamot', 'White peach', 'Honeysuckle'],
    acidity: 5,
    body: 2,
    sweetness: 5,
    blurb: "Our competition microlot. 32kg total. 87.5 SCA. One-time pour.",
    description:
      "We bought this at auction in March — 32kg, one sack, SCA score 87.5 from Elías Roa's farm in Planadas. Washed Geisha, 72-hour fermentation, shaded patio dry. We're releasing it only as 150g tins at the cafe and online until it runs out. Brew it V60, 1:17, 94°C, one gentle agitation. Drink it black. Don't talk.",
    brewMethods: ['V60', 'Aeropress'],
    price: 58,
    size: '250g',
    roastDate: 'Roasted 14 Apr',
    image: U('1541167760496-1628856ab772'),
    badge: 'Microlot',
  },
];

export const byCategory = (cat: Coffee['category']) => coffees.filter(c => c.category === cat);
