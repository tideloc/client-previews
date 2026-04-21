export type Project = {
  slug: string;
  name: string;
  location: string;
  region: 'coast' | 'rural' | 'urban';
  type: 'house' | 'addition' | 'masterplan';
  year: number;
  size: string;
  status: 'complete' | 'in-progress' | 'on-hold';
  brief: string;
  description: string[];        // 2-3 short paragraphs
  designNotes: string[];        // 3 short paragraphs
  materials: string[];
  photographer: string;
  heroImage: string;
  gallery: string[];            // 4 images
  clientQuote?: { text: string; attribution: string };
  related: string[];            // project slugs
};

const U = (id: string, w = 2000, h = 1300) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const projects: Project[] = [
  {
    slug: 'quiet-bay-house',
    name: 'Quiet Bay House',
    location: 'Coles Bay',
    region: 'coast',
    type: 'house',
    year: 2024,
    size: '310 m²',
    status: 'complete',
    brief:
      'A low weatherboard house on a granite-strewn saddle above Great Oyster Bay, arranged around a sheltered north-facing courtyard.',
    description: [
      'The clients — a Melbourne couple returning to Tasmania — arrived with a clear brief: a house that could hold two adults most of the year and four generations at Christmas, without ever feeling empty or crowded. The site, a slow-rising saddle on the edge of Coles Bay, handed us the rest. We let the contour lines draw the plan.',
      'Three linear pavilions step gently down the slope, each turned a few degrees off the last to chase morning sun and frame the hazards. Between them, a pair of outdoor rooms — one for weather, one for wind — hold the house together and give the children somewhere to find shadow.',
      'We spent a long time looking at old shacks. The ones that survive here are low, long, and modest in the materials they demand of a remote site. We took that as permission.',
    ],
    designNotes: [
      'Roof pitches were flattened to 9° so the house reads as a horizontal line from the bay track. Eaves were extended to 1200mm on the western elevation to take the afternoon sun off the glass in February.',
      'The north courtyard sits 600mm below the living pavilion — a shallow sunken room sheltered from the southerly and, in winter, caught in a pocket of still, warmed air. It does most of the heavy lifting the house would otherwise ask of active heating.',
      'Internal linings are silvertop ash, raw and unfinished, allowed to patina. The floor is polished concrete over a hydronic slab, with a finer sand-blasted aggregate in the entry and hearth. Everything is recoverable.',
    ],
    materials: ['Silvertop ash', 'Polished concrete', 'Ross sandstone', 'Blackbutt joinery', 'Zinc standing seam'],
    photographer: 'Adam Gibson',
    heroImage: U('1600585154340-be6161a56a0c'),
    gallery: [
      U('1600607687939-ce8a6c25118c', 1600, 1200),
      U('1600566753190-17f0baa2a6c3', 1600, 1200),
      U('1584824486509-112e4181ff6b', 1600, 1200),
      U('1601760562234-9814eea6663a', 1600, 1200),
    ],
    clientQuote: {
      text: 'We asked for something we could live in for thirty years. We got a house that already feels thirty years old — in the best possible way. It has never once felt cold.',
      attribution: 'Catherine and Jonathan R., Coles Bay',
    },
    related: ['three-hut-farm', 'quarry-house', 'foreshore-addition'],
  },
  {
    slug: 'three-hut-farm',
    name: 'Three-Hut Farm',
    location: 'Ross',
    region: 'rural',
    type: 'masterplan',
    year: 2023,
    size: '640 m² across 3 buildings',
    status: 'complete',
    brief:
      'A 240-hectare sheep property rebuilt around three small buildings — a main house, a worker’s cottage and a shearing-shed-turned-studio — on the site of the original 1842 homestead.',
    description: [
      'We inherited a collapsed bluestone homestead, a second shed half-lost to blackberry, and a family of four who wanted to live here permanently after twenty years of weekending. The brief asked us not to build a big house.',
      'Instead, we planned three small ones across the old farm footprint. Each takes one thing seriously — the main house is about the kitchen and the view up to the escarpment; the cottage is a quiet guest suite for grandparents; the converted shearing shed is Peta’s wool studio, used daily.',
      'The three buildings sit inside a kilometre of rebuilt drystone wall and six hundred native plantings. Between them, the farm went back to being a farm.',
    ],
    designNotes: [
      'The main house is oriented 14° east of north to push the kitchen toward the morning sun and turn the main living room away from the prevailing westerly. The chimney reuses salvaged sandstone from the original ruin, relaid by a mason from nearby Campbell Town.',
      'Walls are rammed earth from the site — a mix of creek-bed clay and fines from the old stockyard, stabilised at 5%. The colour shifts across the day from warm ochre at dawn to flat umber at dusk. It performs as well thermally as it does visually.',
      'The shearing shed studio was kept structurally intact — we lifted the slab, insulated underneath, and resheeted the roof in a matching corrugated zinc. Old pen markings are still visible on the floor. We thought it was a shame to lose them.',
    ],
    materials: ['Rammed earth', 'Ross sandstone (salvaged)', 'Corrugated zinc', 'Tas oak', 'Reclaimed jarrah flooring'],
    photographer: 'Adam Gibson',
    heroImage: U('1520607162513-77705c0f0d4a'),
    gallery: [
      U('1507089947368-19c1da9775ae', 1600, 1200),
      U('1564013799919-ab600027ffc6', 1600, 1200),
      U('1502005229762-cf1b2da7c5d6', 1600, 1200),
      U('1516156008625-3a9d6067fab5', 1600, 1200),
    ],
    clientQuote: {
      text: 'The studio is the building I thought I wouldn\'t use. I now spend six days a week in it. Mei knew.',
      attribution: 'Peta M., Three-Hut Farm',
    },
    related: ['quiet-bay-house', 'quarry-house', 'midlands-sheep-station'],
  },
  {
    slug: 'foreshore-addition',
    name: 'Foreshore Addition',
    location: 'Battery Point',
    region: 'urban',
    type: 'addition',
    year: 2024,
    size: '95 m² addition to 140 m² cottage',
    status: 'complete',
    brief:
      'A quiet addition to a heritage-listed 1862 sandstone cottage — a single volume that learns from the original without imitating it.',
    description: [
      'The existing cottage was small, heritage-listed, and much-loved by its owners. What it lacked was a room large enough for a grown family to gather in, and any real connection to the walled garden at the rear. We added one room, one hallway, and a seat.',
      'The addition is a single black-stained larch volume set 600mm back from the heritage fabric, with a full-height glazed link between old and new. Nothing of the original building was altered. Everything that touches it can be removed in a weekend.',
      'Internally, the addition is one long space: sitting, eating, reading. The fire sits at the eastern end; the garden sits at the western end; the kitchen is in between. The original cottage remains the sleeping quarters. We like how clearly the two halves now each do one job.',
    ],
    designNotes: [
      'The roof is a simple skillion, pitched 4° toward the garden, clad in matte-black standing seam zinc. The ceiling inside is hoop pine plywood — a warmer, quieter alternative to the plasterboard the cottage already had.',
      'Doors to the garden are 2700mm high and 900mm wide, stacking flush into a cavity. The transition between the polished concrete floor of the addition and the hardwood of the old cottage is unlined — a single 10mm brass strip, no threshold.',
      'The garden wall was rebuilt in-kind with salvaged sandstone from the original outbuilding demolished on site. The mason who laid it is in his late seventies and told us he hadn\'t used stone this small in forty years.',
    ],
    materials: ['Black-stained larch', 'Standing seam zinc', 'Hoop pine plywood', 'Polished concrete', 'Brass trim'],
    photographer: 'Rory Gardiner',
    heroImage: U('1574362848149-11496d93a7c7'),
    gallery: [
      U('1600607687939-ce8a6c25118c', 1600, 1200),
      U('1613490493576-7fde63acd811', 1600, 1200),
      U('1533090368676-1fd25485db88', 1600, 1200),
      U('1568605114967-8130f3a36994', 1600, 1200),
    ],
    clientQuote: {
      text: 'It does not try to be the cottage. It quietly makes the cottage better.',
      attribution: 'Stephen K., Battery Point',
    },
    related: ['quiet-bay-house', 'kennerley-addition', 'three-hut-farm'],
  },
  {
    slug: 'quarry-house',
    name: 'Quarry House',
    location: 'Bruny Island',
    region: 'coast',
    type: 'house',
    year: 2022,
    size: '265 m²',
    status: 'complete',
    brief:
      'A stone and timber house cut into a disused dolerite quarry on south Bruny — half-underground, facing a long view out to the Tasman Sea.',
    description: [
      'The site came to us already cut. A small commercial quarry had been worked here in the 1970s and left a clean flat pad and a vertical rock face to the west. We did not want to undo that — we wanted the house to sit inside the room the quarry had already made.',
      'The house pushes its back wall hard against the stone face, which now runs through the interior as the rear wall of the kitchen and the fireplace. To the east, everything opens to the water: 14 metres of uninterrupted glazing behind a deep 2.4-metre eave.',
      'The roof is one plane, rising gently eastward. From the road above, you barely see a house — only a line of native planting and a roof edge. That\'s what the site asked for.',
    ],
    designNotes: [
      'The rear wall is un-treated on-site dolerite. We mapped the face, numbered loose stones for the engineer, and otherwise did not touch it. Inside, it reads as a single continuous geological section.',
      'Passive solar was carefully modelled for a 43°S latitude: the 2.4m eave admits winter sun from 20 May to 25 July and shades the house completely from 12 October. Internal mass in the slab and stone wall carries the house overnight in winter with no active heating below 4°C external.',
      'Cedar cladding was used only in sheltered pockets and will silver evenly. On exposed faces we used zinc, which will patina rather than fail. We generally don\'t use copper this close to salt air.',
    ],
    materials: ['On-site dolerite', 'Western red cedar', 'Zinc', 'Blackbutt', 'Polished concrete'],
    photographer: 'Derek Swalwell',
    heroImage: U('1615873968403-89e068629265'),
    gallery: [
      U('1600566753190-17f0baa2a6c3', 1600, 1200),
      U('1584824486509-112e4181ff6b', 1600, 1200),
      U('1523217582562-09d0def993a6', 1600, 1200),
      U('1512917774080-9991f1c4c750', 1600, 1200),
    ],
    clientQuote: {
      text: 'The house feels older than we are, which is exactly what we were hoping for.',
      attribution: 'Helena O., Bruny Island',
    },
    related: ['quiet-bay-house', 'three-hut-farm', 'foreshore-addition'],
  },
  {
    slug: 'midlands-sheep-station',
    name: 'Midlands Sheep Station',
    location: 'Oatlands',
    region: 'rural',
    type: 'masterplan',
    year: 2025,
    size: '1,850 m² across 5 buildings',
    status: 'in-progress',
    brief:
      'A fifty-year masterplan for a working Merino property — new shearing complex, two farm cottages, an adapted-reuse homestead, a small chapel restoration.',
    description: [
      'The brief here is not one building but a timeline. The family have owned this land for five generations; they wanted a plan that could be built in stages over the next fifty years, in priority order, without ever being revisited or redrawn.',
      'We began by mapping every existing building, tree, fence and water course, then spent six months living on the property in two-day stretches with the owners. The resulting document is 180 pages. Only 14 of them are the plans for the buildings we are currently constructing.',
      'Stage one — the shearing complex, the manager\'s cottage, and the chapel restoration — is on site now. The homestead adaptation will follow in 2027.',
    ],
    designNotes: [
      'All new structures sit within a defined 4-hectare "built zone" at the geographic centre of the property. Outside that zone, no new buildings have been planned for the next fifty years. The rest is paddock, stand of elms, dry creek bed.',
      'The shearing complex is a steel-portal structure clad in reclaimed corrugated from six derelict sheds found across the property. Internally it is lined in white-painted pine for light and acoustics.',
      'The chapel is a 1856 convict-built sandstone box, roofless since 1978. Our intervention was minimal: a new oak shingle roof, a single clear-glazed oculus, and the existing stone left entirely as-is. It will be re-used for family weddings and occasional wool shows.',
    ],
    materials: ['Reclaimed corrugated', 'Oatlands sandstone', 'Oak shingle', 'Tas oak', 'Lime render'],
    photographer: 'Peter Whyte (stage 1 in progress)',
    heroImage: U('1449034446853-66c86144b0ad'),
    gallery: [
      U('1459767129954-1b1c1f9b9ace', 1600, 1200),
      U('1565538420870-da08ff96a207', 1600, 1200),
      U('1600596542815-ffad4c1539a9', 1600, 1200),
      U('1523413651479-597eb2da0ad6', 1600, 1200),
    ],
    related: ['three-hut-farm', 'quarry-house', 'quiet-bay-house'],
  },
  {
    slug: 'spring-bay-cabin',
    name: 'Spring Bay Cabin',
    location: 'Triabunna',
    region: 'coast',
    type: 'house',
    year: 2023,
    size: '84 m²',
    status: 'complete',
    brief:
      'A two-bedroom cabin on a steep bush block above Spring Bay — the entire house offset from the ground on twelve concrete piers to protect the understorey.',
    description: [
      'The client had owned the block for twenty years and walked on it weekly. When it came time to build, the only non-negotiable was: do not clear the bush. Not a single tree was removed to build this cabin. Two were pruned.',
      'The building is lifted 600–1200mm above the existing ground plane on twelve concrete piers. Ferns, dogwoods and saplings continue beneath the floor. Rainwater drops directly through the slotted deck.',
      'The plan is eleven metres long and four metres wide — one room deep for crossventilation, a central courtyard for the wood-fired bath, a tiny sleeping loft above the living room. No bedroom doors.',
    ],
    designNotes: [
      'Cladding is vertical-board silver-top ash, un-coated, spaced for airflow. Over seven years it is expected to weather to a uniform soft grey. The roof is 0.48mm zinc.',
      'Heating is a single 4kW combustion firebox; cooling is the south-facing deep porch and operable louvres on both long elevations. No air conditioning. No heat pump.',
      'Water is roof-collected to a 22,500L underslung tank. Waste is a worm-farm septic. The cabin operates off-grid eight months of the year.',
    ],
    materials: ['Silvertop ash', 'Zinc', 'Tas oak', 'Recycled brick (hearth)', 'Copper tapware'],
    photographer: 'Adam Gibson',
    heroImage: U('1480074568708-e7b720bb3f09'),
    gallery: [
      U('1568605114967-8130f3a36994', 1600, 1200),
      U('1535557597501-0fee0a500c57', 1600, 1200),
      U('1502005229762-cf1b2da7c5d6', 1600, 1200),
      U('1416331108676-a22ccb276e35', 1600, 1200),
    ],
    clientQuote: {
      text: 'I\'ve lived here two winters. I haven\'t turned a light on during the day once.',
      attribution: 'Marcus D., Triabunna',
    },
    related: ['quiet-bay-house', 'quarry-house', 'three-hut-farm'],
  },
  {
    slug: 'kennerley-addition',
    name: 'Kennerley Addition',
    location: 'West Hobart',
    region: 'urban',
    type: 'addition',
    year: 2023,
    size: '68 m² addition to 120 m² federation',
    status: 'complete',
    brief:
      'A small rear extension to a Federation-era cottage on a steeply sloping inner-city block, designed around a single eucalypt.',
    description: [
      'A young family had outgrown their front four rooms but loved the cottage and the street. The site fell seven metres from front gate to rear fence; a mature sugar gum sat squarely in the middle of the backyard.',
      'Rather than working around the slope, we built into it. The addition steps down the hill as three half-levels — kitchen, living, a study one landing down — around the eucalypt, which now sits in a shallow courtyard ringed in glass on three sides.',
      'The family wanted to keep the original cottage essentially untouched. We did. The addition connects through a single glazed link at the existing back door and makes no alteration to the front rooms.',
    ],
    designNotes: [
      'Roof profile steps with the floor plate to keep the overall form horizontal from the street. From the front you cannot see that there is an addition at all.',
      'The kitchen joinery is hand-built by a Huon cabinetmaker in Tasmanian oak with brass ring pulls. The bench is a single 3.8m slab of black quartzite cut from a Queenstown quarry we\'ve used for fifteen years.',
      'The study half-level cantilevers 1.8m over the lower garden — a structural moment made possible by a single steel portal buried in the rear cottage wall. From the garden you see only a dark soffit and the base of the eucalypt.',
    ],
    materials: ['Black spotted gum cladding', 'Hoop pine ceilings', 'Tas oak joinery', 'Black quartzite', 'Brass'],
    photographer: 'Natalie Mendham',
    heroImage: U('1600047509807-ba8f99d2cdde'),
    gallery: [
      U('1600607687939-ce8a6c25118c', 1600, 1200),
      U('1613490493576-7fde63acd811', 1600, 1200),
      U('1600566753190-17f0baa2a6c3', 1600, 1200),
      U('1565182999561-18d7dc61c393', 1600, 1200),
    ],
    related: ['foreshore-addition', 'quiet-bay-house', 'spring-bay-cabin'],
  },
  {
    slug: 'derwent-boathouse',
    name: 'Derwent Boathouse',
    location: 'Taroona',
    region: 'urban',
    type: 'house',
    year: 2025,
    size: '215 m²',
    status: 'in-progress',
    brief:
      'A three-bedroom house for a retired marine biologist, set back from a tidal inlet, organised around a long corridor that frames the water.',
    description: [
      'The client spent her working life studying the Derwent estuary. She wanted a home that watched it back. The plan is a single long bar, 27 metres north-to-south, opening toward the water on its long western face.',
      'Every room in the house — kitchen, sleeping, bathing, reading — has a view through the central corridor to the tidal flat. The corridor is deliberately generous: 1800mm wide, with a window seat and a reading desk folded into its length.',
      'Due for completion in late 2026. We are building it with a Triabunna builder we\'ve worked with for a decade, using locally milled blackwood throughout.',
    ],
    designNotes: [
      'Glazing on the western elevation is fully shaded by a continuous 2.1m eave plus retractable bronze-mesh screens on the summer-sun face. The house runs cool without blinds.',
      'The plan is just 7.2m deep — a genuinely one-room-deep house. It cross-ventilates without any mechanical assistance and daylights every internal surface from two sides.',
      'Foundations were a particular challenge: the site is reclaimed estuary flat, with 14m of soft marine silt above bedrock. We used 22 screw-piles rather than bored piers, a significant reduction in embodied carbon.',
    ],
    materials: ['Tasmanian blackwood', 'Standing seam zinc', 'Bronze mesh', 'Lime render', 'Polished concrete'],
    photographer: 'Adam Gibson (due 2026)',
    heroImage: U('1512917774080-9991f1c4c750'),
    gallery: [
      U('1536376072261-38c75010e6c9', 1600, 1200),
      U('1600566753190-17f0baa2a6c3', 1600, 1200),
      U('1584824486509-112e4181ff6b', 1600, 1200),
      U('1600585154340-be6161a56a0c', 1600, 1200),
    ],
    related: ['quiet-bay-house', 'quarry-house', 'kennerley-addition'],
  },
  {
    slug: 'stone-wall-farmhouse',
    name: 'Stone Wall Farmhouse',
    location: 'Richmond',
    region: 'rural',
    type: 'addition',
    year: 2022,
    size: '140 m² addition to 220 m² farmhouse',
    status: 'complete',
    brief:
      'A careful addition to a 1835 convict-built sandstone farmhouse — new living wing, new kitchen, the original rooms returned to their earliest floor plan.',
    description: [
      'The existing farmhouse is one of the oldest continuously occupied houses in southern Tasmania. Over 190 years, it had accumulated six extensions of varying quality. The clients asked us to remove all of them and replace them with one.',
      'We returned the original four rooms to their 1835 floor plan — rebuilt a lost chimney, reopened two blocked doorways, stripped the lining plaster back to the sandstone. The new wing is a low, long form set perpendicular to the old house, joined by a single glazed neck.',
      'The new wing is brick, rendered in lime and limewashed three times a year for the first three years — a deliberately seasonal, imperfect finish that is already beginning to catch the weather.',
    ],
    designNotes: [
      'The joint between old and new is a 3.6m wide glazed link. Both faces of the link are the original sandstone rubble wall; we did not repair them. It reads as an external wall now caught inside a room.',
      'The kitchen is set in the new wing to keep cooking, water and all heavy loading out of the heritage structure. Services drop cleanly to a new slab without a single penetration of the old walls.',
      'Heating is a single hydronic system with a ground-source heat pump, zoned to allow the old rooms to run cooler. The clients wanted to feel the age of the house, not insulate it away.',
    ],
    materials: ['Salvaged Richmond sandstone', 'Lime-rendered brick', 'Oregon joinery', 'Terracotta tile', 'Blackbutt'],
    photographer: 'Anjie Blair',
    heroImage: U('1565538420870-da08ff96a207'),
    gallery: [
      U('1449034446853-66c86144b0ad', 1600, 1200),
      U('1459767129954-1b1c1f9b9ace', 1600, 1200),
      U('1542856391-010fb87dcfed', 1600, 1200),
      U('1518732714860-b62714ce0c59', 1600, 1200),
    ],
    clientQuote: {
      text: 'We didn\'t want the old house tidied up. We wanted the old house loved again. That\'s what Rory did.',
      attribution: 'Alison and David H., Richmond',
    },
    related: ['three-hut-farm', 'midlands-sheep-station', 'foreshore-addition'],
  },
  {
    slug: 'north-face-rebuild',
    name: 'North Face Rebuild',
    location: 'Mt Wellington foothills',
    region: 'urban',
    type: 'house',
    year: 2024,
    size: '245 m²',
    status: 'on-hold',
    brief:
      'Replacement of a 1960s brick home destroyed in the 2023 storms, on a cliff-edge north-facing block. Project paused mid-design during insurance reassessment.',
    description: [
      'The original house was lost to a cyclonic south-westerly in June 2023. The clients came to us before the insurance claim had even settled. We began sketching anyway — it was the right time to think clearly.',
      'The replacement house pulls away from the cliff edge by 6 metres, rebuilds the garden in natives, and sits under a low zinc roof designed specifically for the wind loads this site sees. The main living room faces north into the sun and away from the weather.',
      'The project is currently on hold pending state planning reassessment of the entire escarpment. We expect to be back on site in mid-2026.',
    ],
    designNotes: [
      'Wind load was the governing design criterion. We worked with a Melbourne wind-engineering consultant to model the site at cyclonic category C — the house is structurally designed to withstand a 1-in-500-year event.',
      'All glazing is structurally bonded, triple-glazed, with bronze-mesh storm shutters on the south and west faces. None of this reads as defensive from inside — the house is airy, bright, and warm.',
      'The roof is a single plane pitched 18° into the prevailing wind, with the windward edge held only 400mm above the ridge. There is nothing for the wind to catch.',
    ],
    materials: ['Standing seam zinc', 'Charred larch', 'Bronze mesh', 'Triple glazing', 'Polished concrete'],
    photographer: 'To be confirmed',
    heroImage: U('1574362848149-11496d93a7c7'),
    gallery: [
      U('1600047509807-ba8f99d2cdde', 1600, 1200),
      U('1600607687939-ce8a6c25118c', 1600, 1200),
      U('1568605114967-8130f3a36994', 1600, 1200),
      U('1600585154340-be6161a56a0c', 1600, 1200),
    ],
    related: ['quiet-bay-house', 'derwent-boathouse', 'quarry-house'],
  },
];

export const byType = (t: Project['type']) => projects.filter(p => p.type === t);
export const byRegion = (r: Project['region']) => projects.filter(p => p.region === r);
