export type DayMenu = {
  day: string;
  morningTea: string;
  lunch: string;
  afternoonTea: string;
};

export const menuWeek: DayMenu[] = [
  {
    day: 'Monday',
    morningTea: 'Seasonal fruit platter · rolled oat fingers',
    lunch: 'Slow-cooked lamb ragu · wholemeal penne · wilted silverbeet',
    afternoonTea: 'Cheese, cucumber & tomato · damper',
  },
  {
    day: 'Tuesday',
    morningTea: 'Banana & oat muffins (nut-free) · milk',
    lunch: 'Chickpea & veg curry · brown rice · cucumber yoghurt',
    afternoonTea: 'Rice cakes · hummus · carrot sticks',
  },
  {
    day: 'Wednesday',
    morningTea: 'Apple & pear slices · toasted sourdough',
    lunch: 'Baked salmon · mashed kipfler potatoes · peas & corn',
    afternoonTea: 'Wholemeal scones · butter · seasonal fruit',
  },
  {
    day: 'Thursday',
    morningTea: 'Wholegrain crackers · avocado · tomato',
    lunch: 'Shepherd\'s pie (grass-fed beef) · root vegetable topping · green salad',
    afternoonTea: 'Yoghurt & berries · homemade granola',
  },
  {
    day: 'Friday',
    morningTea: 'Fruit smoothie · banana bread (slow-fermented)',
    lunch: 'Herb-roasted chicken · couscous · roast pumpkin & zucchini',
    afternoonTea: 'Pikelets · ricotta · stewed apple',
  },
];
