export type ServiceCategory =
  | 'residential'
  | 'emergency'
  | 'solar'
  | 'smart'
  | 'commercial'
  | 'level2';

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  blurb: string;
  description: string;
  scope: string[];
  startingPrice: string;
  timeframe: string;
  icon: string;
  image: string;
};

const U = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const services: Service[] = [
  {
    slug: 'residential-wiring',
    name: 'Residential Wiring & Rewires',
    category: 'residential',
    blurb: 'Full or partial house rewires with minimal wall damage. Honest pricing.',
    description:
      'For Illawarra homes from the cottage on Corrimal St through to the new builds up in West Dapto. We run fresh circuits, swap tired cloth or V90 wiring for TPS, patch behind us and finish with a Certificate of Compliance Electrical Work (CCEW) lodged the same week.',
    scope: [
      'Full-house and partial rewires',
      'New circuits for extensions & granny flats',
      'Ceiling fan & chandelier circuits',
      'Patching & paint-ready plaster work',
      'CCEW lodged with Essential Energy',
    ],
    startingPrice: 'From $1,450',
    timeframe: '1–5 days, most homes',
    icon: 'home',
    image: U('1581094794329-c8112a89af12'),
  },
  {
    slug: 'switchboard-upgrades',
    name: 'Switchboard Upgrades',
    category: 'residential',
    blurb: 'Swap ceramic fuses & undersized boards for modern RCD-protected boards.',
    description:
      'Old ceramic fuses and undersized sub-boards are the number-one reason older Illawarra homes fail a sale inspection. We install modern, labelled, RCD-protected boards with room to grow for solar, EV and hot water load.',
    scope: [
      'Modern enclosure with 18–24 pole capacity',
      'Type 2 surge protection device',
      'RCBO protection on every circuit',
      'Clearly labelled and photographed',
      'Includes CCEW + disposal of old board',
    ],
    startingPrice: 'From $1,980',
    timeframe: '1 day, single-phase',
    icon: 'board',
    image: U('1555963966-b7ae5404b6ed'),
  },
  {
    slug: 'safety-switches-smoke-alarms',
    name: 'Safety Switches & Smoke Alarms',
    category: 'residential',
    blurb: 'NSW-compliant interconnected alarms + RCD protection on every circuit.',
    description:
      'NSW requires interconnected photoelectric smoke alarms in all bedrooms, hallways and living areas. We supply & install sealed 10-year alarms (Brooks or Emerald) and make sure every circuit is RCD-protected to AS/NZS 3000.',
    scope: [
      '10-year sealed photoelectric alarms',
      'Hard-wired & RF interconnected',
      'Landlord compliance reports',
      'RCD testing + replacement',
      'Certificate of Compliance',
    ],
    startingPrice: 'From $340',
    timeframe: 'Same day',
    icon: 'alarm',
    image: U('1585771724684-38269d6639fd'),
  },
  {
    slug: 'emergency-electrician',
    name: '24/7 Emergency Electrician',
    category: 'emergency',
    blurb: 'Power out, burning smell, sparking outlet? Van on the road in 60 minutes.',
    description:
      'When the power trips at midnight or an outlet starts sparking during Sunday dinner, you need a licensed sparky — not a callout line that rings out. Matt or one of the team is on call after-hours across Wollongong, Shellharbour and Kiama, with a fully stocked van and a fixed callout fee.',
    scope: [
      'Van on the road inside 60 min (Wollongong CBD)',
      'Power restoration & fault finding',
      'Burnt-out switchboards & service mains',
      'Storm damage & lightning repairs',
      'Fixed after-hours callout fee',
    ],
    startingPrice: '$220 callout',
    timeframe: '60 min response, 24/7',
    icon: 'bolt',
    image: U('1621905251189-08b45d6a269e'),
  },
  {
    slug: 'solar-installation',
    name: 'Solar Panel Installation',
    category: 'solar',
    blurb: 'CEC-accredited solar from 6.6kW family systems to 30kW commercial arrays.',
    description:
      'Matt is a Clean Energy Council-accredited solar designer and installer. We specify the right inverter (SolarEdge, Fronius, Sungrow) for your roof orientation and local Endeavour Energy export limits, and we commission every system personally — no subbies.',
    scope: [
      '6.6kW – 30kW solar PV',
      'SolarEdge, Fronius & Sungrow inverters',
      'Tier 1 panels (REC, Trina, LONGi)',
      'Battery-ready wiring',
      'Endeavour Energy approval included',
    ],
    startingPrice: 'From $4,990',
    timeframe: '1 day install',
    icon: 'sun',
    image: U('1509391366360-2e959784a276'),
  },
  {
    slug: 'ev-charger-installation',
    name: 'EV Charger Installation',
    category: 'solar',
    blurb: 'Tesla, Wallbox & Ocular home chargers. 7kW or 22kW, wired right first time.',
    description:
      'More than half of our solar customers come back within 18 months wanting an EV charger. We do OCPP-compliant installs for Tesla Wall Connector, Wallbox Pulsar Plus, Ocular LTE and Fronius Wattpilot — with load balancing tied into your solar so you never trip the main.',
    scope: [
      '7kW single-phase or 22kW three-phase',
      'Load balancing with existing solar',
      'Dedicated 32A or 63A circuit',
      'OCPP smart charging setup',
      'Small works authorisation if needed',
    ],
    startingPrice: 'From $1,250',
    timeframe: 'Half-day install',
    icon: 'plug',
    image: U('1593941707882-a5bba14938c7'),
  },
  {
    slug: 'smart-home',
    name: 'Smart Home Automation',
    category: 'smart',
    blurb: 'Clipsal Wiser, C-Bus and Loxone. Proper scene programming, not a voice gimmick.',
    description:
      'We program and install real smart home systems — not a Google speaker stuck in a wall. Clipsal Wiser for new builds, C-Bus for medium-to-large homes, and full Loxone Miniserver projects for clients who want it all under one umbrella. Lighting, blinds, audio, HVAC and security, properly commissioned.',
    scope: [
      'Clipsal Wiser & C-Bus programming',
      'Loxone Miniserver integration',
      'DALI lighting control',
      'Blinds & HVAC integration',
      'Family-friendly wall keypads',
    ],
    startingPrice: 'From $3,400',
    timeframe: '2–10 days',
    icon: 'chip',
    image: U('1587825140708-dfaf72ae4b04'),
  },
  {
    slug: 'led-lighting',
    name: 'LED Lighting & Retrofit',
    category: 'residential',
    blurb: 'Downlights, strip, pendants, outdoor. Dimmable LEDs that don\'t hum at 50%.',
    description:
      'Most of the LED downlights sold at big-box stores buzz on cheap dimmers and are locked to a weird white balance. We spec and install dimmable Phillips, Brightgreen and SAL fittings on proper Clipsal or Lutron dimmers, so your lounge room actually feels like a lounge room at 7pm.',
    scope: [
      'Dimmable LED downlights & strip',
      'Feature & pendant lighting',
      'Warm-white (2700K) or tunable',
      'Clipsal / Lutron dimmer pairing',
      'Outdoor & garden lighting',
    ],
    startingPrice: 'From $85/point',
    timeframe: 'Half-day to 2 days',
    icon: 'bulb',
    image: U('1524484485831-a92ffc0de03f'),
  },
  {
    slug: 'commercial-fitout',
    name: 'Commercial Fitouts & Office',
    category: 'commercial',
    blurb: 'Small fitouts, office lighting, data cabling & mechanical coordination.',
    description:
      'From a three-chair dental fitout on Crown St to a 600m² logistics office in Unanderra, we handle the electrical scope end-to-end. Lighting layouts designed to AS/NZS 1680, dedicated clean-earth for IT, Cat6A data cabling and coordination with your builder\'s program.',
    scope: [
      'Office & retail lighting design',
      'Dedicated clean-earth power',
      'Cat6A structured data cabling',
      'Emergency & exit lighting',
      'Builder program coordination',
    ],
    startingPrice: 'POA',
    timeframe: '1–6 weeks',
    icon: 'office',
    image: U('1497366216548-37526070297c'),
  },
  {
    slug: 'level-2-meter-work',
    name: 'Level 2 ASP — Meter & Service Mains',
    category: 'level2',
    blurb: 'Meter upgrades, service mains, POA disconnect/reconnect. Authorised on the network.',
    description:
      'Matt holds a Level 2 ASP authorisation, which means we can cut, replace and reconnect the service mains feeding your property without waiting three weeks for Endeavour Energy. Meter board upgrades for new solar, three-phase upgrades and underground point-of-attachment work — all done under permit.',
    scope: [
      'Meter board upgrades & replacements',
      'Service mains (overhead & underground)',
      'Single-to-three-phase upgrades',
      'Point of attachment (POA) work',
      'Endeavour Energy permit handling',
    ],
    startingPrice: 'From $880',
    timeframe: '1 day, by permit',
    icon: 'tower',
    image: U('1449844908441-8829872d2607'),
  },
];

export const byCategory = (cat: ServiceCategory) =>
  services.filter((s) => s.category === cat);
