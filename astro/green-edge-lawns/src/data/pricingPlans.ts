export type PricingPlan = {
  name: string;
  price: string;
  cycle: string;
  idealFor: string;
  includes: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Weekly',
    price: '$55',
    cycle: 'mow',
    idealFor: 'Kikuyu, couch or buffalo lawns in full summer growth.',
    includes: [
      'Mow front & back lawn',
      'Full edge & whipper-snip',
      'Blow off paths & driveway',
      'Same weekday, every week',
      'SMS on the way',
      'Priority scheduling after storms',
    ],
  },
  {
    name: 'Fortnightly',
    price: '$75',
    cycle: 'mow',
    idealFor: 'Most Shire lawns — our most-booked plan. Covers all year.',
    includes: [
      'Mow front & back lawn',
      'Full edge & whipper-snip',
      'Blow off paths & driveway',
      'Same weekday, every fortnight',
      'SMS on the way',
      'First month: free weed spot-spray',
    ],
  },
  {
    name: 'One-off',
    price: 'From $110',
    cycle: 'visit',
    idealFor: 'Rental turnovers, pre-inspection tidies, holiday-home catchups.',
    includes: [
      'On-site quote inside 48 hours',
      'Mow, edge, blow',
      'Hedge + bed weed if in scope',
      'Full green-waste removal',
      'No lock-in or ongoing schedule',
      'Invoice with photo proof of work',
    ],
  },
];
