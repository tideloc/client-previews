export type Testimonial = {
  name: string;
  suburb: string;
  jobType: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  image: string;
};

const U = (id: string, w = 140, h = 140) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah & James T.',
    suburb: 'Balgownie',
    jobType: 'Full rewire',
    quote:
      'Matt quoted the rewire on a Tuesday, started the following Monday and had us back in the house by Friday. Patched every wall behind him — the painter couldn\'t tell where the cables had run. Unheard of.',
    rating: 5,
    image: U('1573496359142-b8d87734a5a2'),
  },
  {
    name: 'David R.',
    suburb: 'Shellharbour',
    jobType: 'Emergency callout',
    quote:
      'Rang at 9:40pm on a Friday with half the house out. Matt was on my doorstep at 10:25, traced the fault to a corroded neutral at the meter, had us back on by 11. Charged exactly what he said on the phone.',
    rating: 5,
    image: U('1507003211169-0a1dd7228f2d'),
  },
  {
    name: 'Karen M.',
    suburb: 'Figtree',
    jobType: 'Switchboard + solar',
    quote:
      'Switchboard upgrade and 6.6kW solar install. Matt took the time to explain what the inverter app actually meant instead of just leaving us with a login and a handshake. Genuinely useful.',
    rating: 5,
    image: U('1519085360753-af0119f7cbe7'),
  },
  {
    name: 'Dr. Priya N.',
    suburb: 'Wollongong CBD',
    jobType: 'Commercial fitout',
    quote:
      'Three-chair dental fitout on Crown Street. Matt\'s team worked clean, matched the builder\'s program to the day and the final commissioning paperwork was immaculate. We\'ve already booked them for fitout #2.',
    rating: 5,
    image: U('1580654712603-eb43273aff33'),
  },
  {
    name: 'Ben H.',
    suburb: 'Thirroul',
    jobType: 'Loxone smart home',
    quote:
      'We had another sparky quote our new build who clearly hadn\'t done Loxone before. Matt walked us through the scene logic, keypad layouts and HVAC integration in twenty minutes and delivered exactly what we described.',
    rating: 5,
    image: U('1506748686214-e9df14d4d9d0'),
  },
  {
    name: 'Christine & Rob L.',
    suburb: 'Kiama',
    jobType: 'LED retrofit',
    quote:
      'Our beach house had sixty halogen downlights we were too scared to replace ourselves. Matt\'s team pulled the lot, installed dimmable LEDs and rebuilt two dimmer circuits in a day. No mess, no dramas.',
    rating: 5,
    image: U('1543269865-cbf427effbad'),
  },
];
