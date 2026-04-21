export type Project = {
  slug: string;
  name: string;
  type: string;
  suburb: string;
  description: string;
  image: string;
  monthYear: string;
};

const U = (id: string, w = 1100, h = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const projects: Project[] = [
  {
    slug: 'balgownie-full-rewire',
    name: 'Balgownie weatherboard — full rewire',
    type: 'Residential rewire',
    suburb: 'Balgownie',
    description:
      'Four-bedroom 1940s weatherboard with mixed V90 and cloth wiring. New sub-board, 28 circuits, all cables through existing walls without pulling plaster. CCEW lodged in five working days.',
    image: U('1581094794329-c8112a89af12'),
    monthYear: 'March 2026',
  },
  {
    slug: 'mt-keira-solar-battery',
    name: 'Mt Keira 10kW solar + battery',
    type: 'Solar + battery',
    suburb: 'Mt Keira',
    description:
      '28 × 370W REC panels, Fronius GEN24 Plus 10.0 inverter and BYD 10.24kWh battery. Designed for south-western export and load-shifted to cover overnight EV charging.',
    image: U('1509391366360-2e959784a276'),
    monthYear: 'February 2026',
  },
  {
    slug: 'wollongong-ev-tesla-wall',
    name: 'Wollongong Tesla Wall Connector',
    type: 'EV charger install',
    suburb: 'Wollongong',
    description:
      'Wall Connector tied into existing 10kW solar with Powerwall 2. Load-managed so total household draw stays under 63A, avoiding a service mains upgrade.',
    image: U('1593941707882-a5bba14938c7'),
    monthYear: 'February 2026',
  },
  {
    slug: 'thirroul-loxone-fitout',
    name: 'Thirroul full Loxone smart home',
    type: 'Smart home fitout',
    suburb: 'Thirroul',
    description:
      'New-build architectural home with 64 DALI light circuits, motorised blinds, zoned HVAC and audio. Programmed over three weeks alongside the builder\'s practical completion.',
    image: U('1587825140708-dfaf72ae4b04'),
    monthYear: 'January 2026',
  },
  {
    slug: 'crown-st-office-fitout',
    name: 'Crown St co-working fitout',
    type: 'Commercial fitout',
    suburb: 'Wollongong CBD',
    description:
      '420m² co-working space across two floors. Linear LED lighting with DALI scene control, 84 Cat6A data outlets, dedicated UPS-protected circuits and compliant exit/emergency.',
    image: U('1497366216548-37526070297c'),
    monthYear: 'December 2025',
  },
  {
    slug: 'figtree-switchboard',
    name: 'Figtree duplex switchboard upgrade',
    type: 'Switchboard upgrade',
    suburb: 'Figtree',
    description:
      'Two-unit duplex with a shared 1980s fuse board. Split into two modern 18-pole boards with individual main switches, Type 2 surge protection and per-circuit RCBOs.',
    image: U('1555963966-b7ae5404b6ed'),
    monthYear: 'November 2025',
  },
  {
    slug: 'port-kembla-level2-meter',
    name: 'Port Kembla three-phase meter upgrade',
    type: 'Level 2 meter work',
    suburb: 'Port Kembla',
    description:
      'Single-phase-to-three-phase upgrade for a home workshop. Coordinated underground POA with Endeavour Energy, new meter panel and 80A main switch — one-day disruption.',
    image: U('1449844908441-8829872d2607'),
    monthYear: 'October 2025',
  },
  {
    slug: 'kiama-led-retrofit',
    name: 'Kiama beachhouse LED retrofit',
    type: 'LED lighting retrofit',
    suburb: 'Kiama',
    description:
      'Replaced 62 halogen downlights and three pendants with dimmable Brightgreen D900 fittings on two Clipsal Saturn Zen dimmer banks. Warm-white 2700K throughout.',
    image: U('1524484485831-a92ffc0de03f'),
    monthYear: 'September 2025',
  },
];
