export type Job = {
  slug: string;
  suburb: string;
  type: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  time: string;
};

const U = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const jobs: Job[] = [
  {
    slug: 'cronulla-front-lawn',
    suburb: 'Cronulla',
    type: 'Weekly Mow Reset',
    beforeImage: U('1584715642381-6f1c4b452b1c'),
    afterImage: U('1558904541-efa843a96f01'),
    description:
      'Overgrown buffalo lawn with ragged edges. Scalped back to 35mm, full edger pass on the driveway, then on the weekly rotation ever since.',
    time: '90 min',
  },
  {
    slug: 'caringbah-hedge',
    suburb: 'Caringbah',
    type: 'Lilly Pilly Hedge',
    beforeImage: U('1589227365533-cee630bd59bd'),
    afterImage: U('1556856425-366d6618905d'),
    description:
      '28m of shaggy lilly pilly along a side fence — squared off tops, tightened sides, and trailered out three loads of green waste.',
    time: '4 hours',
  },
  {
    slug: 'gymea-cleanup',
    suburb: 'Gymea',
    type: 'Pre-Sale Cleanup',
    beforeImage: U('1598902108854-10e335adac99'),
    afterImage: U('1523348837708-15d4a09cfac2'),
    description:
      'Agent photos booked for Tuesday — we weeded every bed, pruned four overgrown camellias, and laid fresh tea-tree mulch on the Monday.',
    time: '1 day',
  },
  {
    slug: 'miranda-turf',
    suburb: 'Miranda',
    type: 'New Sir Walter Turf',
    beforeImage: U('1516253593875-bd7ba052fbc5'),
    afterImage: U('1558904541-efa843a96f01'),
    description:
      'Killed and lifted 55m² of patchy kikuyu, levelled with turf underlay, rolled out fresh Sir Walter. Client had kids back on it by the weekend.',
    time: '2 days',
  },
  {
    slug: 'engadine-mulch',
    suburb: 'Engadine',
    type: 'Full Bed Mulch',
    beforeImage: U('1592150621744-aca64f48394a'),
    afterImage: U('1599059813005-11265ba4b4ce'),
    description:
      '4m³ of sugar cane mulch across front and back beds. Pulled out three barrowloads of weeds first, tucked around every plant by hand.',
    time: '5 hours',
  },
  {
    slug: 'sylvania-path',
    suburb: 'Sylvania',
    type: 'Stepping-Stone Path',
    beforeImage: U('1509114397022-ed747cca3f65'),
    afterImage: U('1523712999610-f77fbcfc3843'),
    description:
      'Side yard was a mud-puddle shortcut. Laid 14 bluestone steppers with crushed granite fines and edged it in treated-pine sleepers.',
    time: '1 day',
  },
  {
    slug: 'kirrawee-rubbish',
    suburb: 'Kirrawee',
    type: 'Green Waste Pickup',
    beforeImage: U('1595503240812-7286dafaddc1'),
    afterImage: U('1566150905458-1bf1fc113f0d'),
    description:
      'Client\'s Saturday project had spiralled. Two trailer loads of prunings and palm fronds gone by 4pm. Dropped at Kurnell composting.',
    time: '2 trailers',
  },
  {
    slug: 'woolooware-cleanup',
    suburb: 'Woolooware',
    type: 'Post-Storm Cleanup',
    beforeImage: U('1465146344425-f00d5f5c8f07'),
    afterImage: U('1600240644455-3edc55c375fe'),
    description:
      'Big southerly took down two jacaranda limbs. Cut to lengths, cleared the deck, roof scrubbed of leaves, and gutters flushed on the single-storey side.',
    time: '3 hours',
  },
  {
    slug: 'jannali-hedge',
    suburb: 'Jannali',
    type: 'Murraya Shape-Up',
    beforeImage: U('1611605645802-c21be743c321'),
    afterImage: U('1593672755342-741a7f868732'),
    description:
      'Three-sided murraya hedge around a pool surround. Clean tight tops, angled sides for sun, all clippings bagged and composted.',
    time: '2.5 hours',
  },
  {
    slug: 'oyster-bay-redesign',
    suburb: 'Oyster Bay',
    type: 'Front Bed Redesign',
    beforeImage: U('1509023464722-18d996393ca8'),
    afterImage: U('1574323347407-f5e1ad6d020b'),
    description:
      'Tired scraggly petunias and bare soil. Reworked to a mix of lomandras, grevillea and native grasses — drought tolerant and on a drip line.',
    time: '2 days',
  },
];
