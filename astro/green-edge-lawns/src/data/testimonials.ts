export type Testimonial = {
  name: string;
  suburb: string;
  service: string;
  quote: string;
  stars: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Alison K.',
    suburb: 'Cronulla',
    service: 'Fortnightly mow',
    quote:
      'Jake turns up the same day, every fortnight, and the lawn always looks the best in the street. I used to do it myself — no chance I\'m going back.',
    stars: 5,
  },
  {
    name: 'Dave R.',
    suburb: 'Caringbah',
    service: 'Hedge trim',
    quote:
      'Booked him for a one-off hedge trim, and he spent twenty minutes quoting before he touched a tool. Price was exact. Left the job spotless.',
    stars: 5,
  },
  {
    name: 'Priya M.',
    suburb: 'Miranda',
    service: 'Turf laying',
    quote:
      'We got three quotes for fresh turf and Jake was middle of the pack — but he was the only one who explained how to water it in the first fortnight. That mattered.',
    stars: 5,
  },
  {
    name: 'Tom & Beth',
    suburb: 'Gymea',
    service: 'Pre-sale cleanup',
    quote:
      'We had 48 hours before the agent\'s photos. Green Edge rescheduled a regular client to fit us in. Property sold that weekend.',
    stars: 5,
  },
  {
    name: 'Julie W.',
    suburb: 'Engadine',
    service: 'Weekly mow',
    quote:
      'I\'ve gone through three guys in five years. Jake\'s the first who actually SMS\'s when he\'s running late. Small thing — makes a huge difference.',
    stars: 5,
  },
  {
    name: 'Ben T.',
    suburb: 'Oyster Bay',
    service: 'Garden redesign',
    quote:
      'They redid our front bed with all natives and a drip line. It\'s six months in and looks better now than the day they finished. Proper job.',
    stars: 5,
  },
];
