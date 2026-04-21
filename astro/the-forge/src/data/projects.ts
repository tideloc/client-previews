export type ProjectType = 'heritage' | 'architectural' | 'art';

export type Project = {
  slug: string;
  name: string;
  type: ProjectType;
  client: string;
  year: number;
  brief: string;
  materials: string[];
  hours: number;
  images: [string, string, string];
  blurb: string;
  description: string;
};

const U = (id: string, w = 1600, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const projects: Project[] = [
  {
    slug: 'berrima-homestead-gate',
    name: 'Berrima Homestead Gate',
    type: 'heritage',
    client: 'Private residence · Berrima NSW',
    year: 2024,
    brief:
      'Replace a missing 1870s gate to a heritage-listed cottage — mill-certified evidence + council approval.',
    materials: ['25mm square stock', 'Forge-welded scrolls', 'Wrought-iron pattern inserts', 'Copper rivets'],
    hours: 340,
    images: [
      U('1503602642458-232111445657'),
      U('1600566753376-12c8ab7fb75b'),
      U('1518644961665-ed172691aaa1'),
    ],
    blurb: 'A lost Victorian garden gate, redrawn from a single 1883 photograph.',
    description:
      "The original gate had been scrapped in the 1960s. We worked from a single silver-print photograph in the NSW State Library, a council heritage assessment, and a salvaged latch kept by the previous owner. 340 hours across six months. Fitted April 2024. Signed off by the council heritage officer and a stone-waller named Col who'd grown up on the neighbouring block.",
  },
  {
    slug: 'cooma-stair-balusters',
    name: 'Cooma Stair Balusters',
    type: 'architectural',
    client: 'Architect: Laidlaw + Co · Cooma NSW',
    year: 2023,
    brief:
      'Contemporary open-tread stair. 64 identical hand-forged balusters, each with a twist flare at mid-height.',
    materials: ['16mm round bar', 'Hot-twisted mid-section', 'Powder-coat finish', 'CNC-drilled floor plates'],
    hours: 420,
    images: [
      U('1504826260979-242151ee45b7'),
      U('1533090481720-856c6e3c1fdc'),
      U('1604329760661-e71dc83f8f26'),
    ],
    blurb: '64 balusters, 64 twists — identical to 2mm tolerance.',
    description:
      "A three-storey house by Laidlaw + Co that wanted 'repetition with evidence of the hand'. Sara built a tolerance jig, forged all 64 in a single week, and laid them out on the workshop floor for the architect to walk. Five got rejected and re-forged. The client now says the stair is the best thing in the house.",
  },
  {
    slug: 'queanbeyan-screens',
    name: 'Queanbeyan Garden Screens',
    type: 'architectural',
    client: 'Architect: Fowler Studio · Queanbeyan NSW',
    year: 2024,
    brief:
      'Three 2.4m garden screens in a fractured-gum pattern. CORTEN finish, outdoor-rated.',
    materials: ['8mm CORTEN plate', 'Laser-cut + hand-dressed edges', 'Stainless fixings', 'Patina accelerated'],
    hours: 180,
    images: [
      U('1534237710431-e2fc698436d0'),
      U('1530968033775-2c92736b131e'),
      U('1517840901100-8179e982acb7'),
    ],
    blurb: 'CORTEN screens inspired by fractured gum-bark patterns.',
    description:
      'Laser-cut in Canberra, dressed back at the forge — every edge was hand-stoned so none of the machine witness-marks remain. Installed over three days in September. Current patina will mature to deep rust-red by summer 2026.',
  },
  {
    slug: 'bungendore-church-cross',
    name: 'St Philip\'s Church Cross',
    type: 'heritage',
    client: 'Anglican Parish · Bungendore NSW',
    year: 2022,
    brief: 'Replace a lightning-strike-damaged wrought-iron cross from 1889.',
    materials: ['Wrought iron salvage', 'Forge-welded arms', 'Leaded copper cap', 'Galvanised base'],
    hours: 260,
    images: [
      U('1574169208507-84376144848b'),
      U('1565688527174-775059ac429c'),
      U('1518622358385-8ea7d0794bf6'),
    ],
    blurb: 'A 1.8m wrought cross rebuilt from salvaged 19th-century iron.',
    description:
      "Lightning hit the spire in 2021 and took the cross with it. We sourced salvaged wrought from a demolished Redfern terrace, drew it down, and forge-welded the arms the old way. Consecrated on Palm Sunday 2022. Intended to outlast everyone in the parish — which is, after all, the point.",
  },
  {
    slug: 'braidwood-sculpture',
    name: 'Braidwood Main Street Sculpture',
    type: 'art',
    client: 'Queanbeyan-Palerang Regional Council · 2024',
    year: 2024,
    brief: 'Public sculpture for the main street. Brief: "something that handles the cold".',
    materials: ['25mm round bar', 'Hot-worked spirals', 'Stainless pins', 'Concrete plinth'],
    hours: 520,
    images: [
      U('1531956531700-dc0ee0f1f9a5'),
      U('1565688527174-775059ac429c'),
      U('1533090481720-856c6e3c1fdc'),
    ],
    blurb: '2.8m forged sculpture — "Winter Fleece" — main street, Braidwood.',
    description:
      "Public commission won in a shortlist of eleven. 'Winter Fleece' — a 2.8m abstract figure referencing the fleece-yards that built the town. Forged from 25mm round bar over fourteen weeks. Tom welded the base. Sara forged the figures. Unveiled May 2024.",
  },
  {
    slug: 'canberra-balustrade',
    name: 'Kingston Foreshore Balustrade',
    type: 'architectural',
    client: 'Architect: Cox Canberra · Kingston ACT',
    year: 2023,
    brief: '48m of waterfront balustrade — a single flowing forged rhythm.',
    materials: ['12mm round bar', 'Hot-forged rhythm section', 'Marine-grade powder coat', 'Stainless connectors'],
    hours: 680,
    images: [
      U('1527515637462-cff94eecc1ac'),
      U('1504826260979-242151ee45b7'),
      U('1517840901100-8179e982acb7'),
    ],
    blurb: '48m of forged balustrade for the Kingston waterfront.',
    description:
      'Eleven-week build, installed over four days in February 2023. Each 2m panel flows into the next via a mirrored rhythm — visitors tend to run their hand along the whole length without realising. That was the point.',
  },
  {
    slug: 'yass-heritage-doors',
    name: 'Yass Heritage Door Ironmongery',
    type: 'heritage',
    client: 'Heritage NSW · Yass homestead restoration',
    year: 2022,
    brief: 'Full door ironmongery for an 1840s pastoral homestead — 14 doors.',
    materials: ['Wrought-iron pattern replication', 'Brass thumbpieces', 'Hand-forged fixings', 'Beeswax finish'],
    hours: 480,
    images: [
      U('1534237710431-e2fc698436d0'),
      U('1518644961665-ed172691aaa1'),
      U('1502082553048-f009c37129b9'),
    ],
    blurb: '14 doors, 14 full kits of period-accurate ironmongery.',
    description:
      "A full homestead restoration on a property continuously occupied since 1842. We replicated the surviving ironmongery exactly — including the small errors that came from being hand-forged the first time around. Heritage NSW's site officer described the result as 'indistinguishable from what was there'.",
  },
  {
    slug: 'murrumbateman-winery-gates',
    name: 'Murrumbateman Winery Gates',
    type: 'art',
    client: 'Private · Murrumbateman NSW',
    year: 2023,
    brief:
      "Entry gates for a 40-acre biodynamic vineyard. Client asked for 'vines, but abstracted'.",
    materials: ['20mm square stock', 'Forge-welded spirals', 'CORTEN leaves', 'Stone pier mounts'],
    hours: 380,
    images: [
      U('1533090481720-856c6e3c1fdc'),
      U('1555529902-5261145633bf'),
      U('1572584642822-6f8de0243c93'),
    ],
    blurb: 'Sculptural winery gates — abstracted vine tendrils, three metres wide.',
    description:
      "A 3m pair of entry gates. Tendrils forged from 20mm square, leaves laser-cut in CORTEN and dressed back. Each leaf is hand-placed — no two identical. Installed late autumn 2023. The winemaker fed us lunch three days running. A good commission.",
  },
];

export const projectTypeLabel: Record<ProjectType, string> = {
  heritage: 'Heritage',
  architectural: 'Architectural',
  art: 'Sculpture',
};
