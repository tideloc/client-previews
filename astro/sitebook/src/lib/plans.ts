/**
 * Floor plans and asset pins from the Centrebook demo seed, so every drawing on the site is the app's own data.
 * Plans are copied from ~/Projects/sitebook/public/plans/ into public/plans/. Pins are copied from
 * ~/Projects/sitebook/src/data/seed/<site>.json, verified assets on the named level only.
 * x and y are the seed's normalised plate coordinates (0 to 1 of the 1600 x 1000 drawing); gridRef is the seed's own.
 *
 * Wattleford Central and Brindle Park Shopping Centre are invented centres drawn on layouts derived from
 * OpenStreetMap data (osm: true). Names, shops and assets are invented. Every place an osm plan is shown
 * must carry OSM_CREDIT, which PlanGrid prints under the figure.
 */
export interface SeedPin { tag: string; name: string; gridRef: string; x: number; y: number }
export interface PlanDef {
  file: string; width: number; height: number; cols: number; rows: number;
  site: string; level: string; pins: SeedPin[]; osm?: boolean;
}

export const OSM_CREDIT = {
  text: 'Layout derived from OpenStreetMap data, © OpenStreetMap contributors, ODbL',
  href: 'https://www.openstreetmap.org/copyright',
};

/** Ridgeway Fair (invented), ground. Seed: ridgeway-fair.json, level ridgeway-fair:level:g. */
export const RIDGEWAY_G: PlanDef = {
  file: 'plans/ridgeway-fair-g.svg', width: 1600, height: 1000, cols: 8, rows: 6, site: 'Ridgeway Fair', level: 'Ground',
  pins: [
    { tag: 'DB-02', name: 'Distribution board, back of house corridor north', gridRef: 'E1', x: 0.6216, y: 0.1406 },
    { tag: 'AHU-01', name: 'Air handling unit serving Grain & Grind', gridRef: 'C5', x: 0.2703, y: 0.6946 },
    { tag: 'FIP-01', name: 'Fire indicator panel', gridRef: 'H1', x: 0.9483, y: 0.1397 },
    { tag: 'HYD-02', name: 'Fire hydrant, mall', gridRef: 'G3', x: 0.7809, y: 0.4894 },
    { tag: 'FCU-03', name: 'Fan coil unit, Marble Kitchenware', gridRef: 'D2', x: 0.4804, y: 0.2939 },
    { tag: 'PMP-01', name: 'Pump, fire pump room', gridRef: 'A5', x: 0.0607, y: 0.8287 },
    { tag: 'DB-12', name: 'Distribution board, Pocket Pharmacy', gridRef: 'E4', x: 0.6191, y: 0.6566 },
    { tag: 'MSB-01', name: 'Main switchboard', gridRef: 'A3', x: 0.0308, y: 0.3467 },
    { tag: 'GT-02', name: 'Grease arrestor', gridRef: 'H4', x: 0.9578, y: 0.5322 },
    { tag: 'CU-01', name: 'Condensing unit, Bakehouse 12', gridRef: 'G2', x: 0.7734, y: 0.2205 },
    { tag: 'DB-05', name: 'Distribution board, back of house corridor south', gridRef: 'E6', x: 0.5356, y: 0.8596 },
  ],
};

/** Wattleford Central (invented, OSM-derived layout), level 1. Seed: wattleford.json, level wattleford:level:l1. */
export const WATTLEFORD_L1: PlanDef = {
  file: 'plans/osm/wattleford-l1.svg', width: 1600, height: 1000, cols: 8, rows: 6,
  site: 'Wattleford Central', level: 'Level 1', osm: true,
  pins: [
    { tag: 'WM-01', name: 'Main water meter and isolation', gridRef: 'A2', x: 0.118, y: 0.2092 },
    { tag: 'HWU-10', name: 'Hot water unit, Hazel House', gridRef: 'B3', x: 0.2483, y: 0.4451 },
    { tag: 'AHU-32', name: 'Air handling unit serving Marlowe Footwear', gridRef: 'C3', x: 0.368, y: 0.4293 },
    { tag: 'HYD-12', name: 'Fire hydrant, Entry', gridRef: 'D3', x: 0.4593, y: 0.3793 },
    { tag: 'DB-57', name: 'Distribution board, Meridian Footwear', gridRef: 'E2', x: 0.5029, y: 0.3177 },
    { tag: 'AHU-17', name: 'Air handling unit serving Kestrel Coffee House', gridRef: 'F2', x: 0.6676, y: 0.3325 },
    { tag: 'MSSB-07', name: 'Mechanical services switchboard', gridRef: 'F2', x: 0.7288, y: 0.1897 },
    { tag: 'HR-19', name: 'Hose reel, Entry', gridRef: 'E3', x: 0.6204, y: 0.4076 },
    { tag: 'HYD-17', name: 'Fire hydrant, Entry', gridRef: 'G3', x: 0.8049, y: 0.3819 },
    { tag: 'HYD-16', name: 'Fire hydrant, Mall, lifts and escalators', gridRef: 'E4', x: 0.5783, y: 0.5505 },
    { tag: 'AHU-23', name: 'Air handling unit serving Fern Supply', gridRef: 'F4', x: 0.7343, y: 0.5813 },
    { tag: 'GT-04', name: 'Grease arrestor', gridRef: 'E4', x: 0.5426, y: 0.6262 },
    { tag: 'EM-14', name: 'Emergency lighting test switch, Mall', gridRef: 'D4', x: 0.3968, y: 0.5976 },
  ],
};

/** Brindle Park Shopping Centre (invented, OSM-derived layout), ground. Seed: brindle-park.json, level brindle-park:level:g. */
export const BRINDLE_PARK_G: PlanDef = {
  file: 'plans/osm/brindle-park-g.svg', width: 1600, height: 1000, cols: 8, rows: 6,
  site: 'Brindle Park Shopping Centre', level: 'Ground', osm: true,
  pins: [
    { tag: 'MSB-01', name: 'Main switchboard', gridRef: 'G4', x: 0.7701, y: 0.6178 },
    { tag: 'CH-01', name: 'Chiller', gridRef: 'C6', x: 0.2797, y: 0.9175 },
    { tag: 'HYD-01', name: 'Fire hydrant, Carpark', gridRef: 'C2', x: 0.365, y: 0.3036 },
    { tag: 'HYD-05', name: 'Fire hydrant, Mall', gridRef: 'E4', x: 0.5305, y: 0.5147 },
    { tag: 'FCU-04', name: 'Fan coil unit, Centre management', gridRef: 'E2', x: 0.5815, y: 0.3279 },
    { tag: 'HWU-05', name: 'Hot water unit, Linen & Co', gridRef: 'G5', x: 0.8163, y: 0.7391 },
  ],
};

export const planPin = (plan: PlanDef, tag: string): SeedPin => {
  const p = plan.pins.find((s) => s.tag === tag);
  if (!p) throw new Error(`No seed pin for ${tag} on ${plan.site} ${plan.level}`);
  return p;
};
