/**
 * Floor plans and asset pins from the Sitebook demo seed, so every drawing on the site is the app's own data.
 * Plan: ~/Projects/sitebook/public/plans/ridgeway-fair-g.svg (copied to public/plans/).
 * Pins: ~/Projects/sitebook/src/data/seed/ridgeway-fair.json, assets on level ridgeway-fair:level:g.
 * x and y are the seed's normalised plate coordinates (0 to 1 of the 1600 x 1000 drawing); gridRef is the seed's own.
 */
export interface PlanDef { file: string; width: number; height: number; cols: number; rows: number; site: string; level: string }
export interface SeedPin { tag: string; name: string; gridRef: string; x: number; y: number }

export const RIDGEWAY_G: PlanDef = {
  file: 'plans/ridgeway-fair-g.svg', width: 1600, height: 1000, cols: 8, rows: 6, site: 'Ridgeway Fair', level: 'Ground',
};

const seed: SeedPin[] = [
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
];

export const ridgewayPin = (tag: string): SeedPin => {
  const p = seed.find((s) => s.tag === tag);
  if (!p) throw new Error(`No seed pin for ${tag}`);
  return p;
};
