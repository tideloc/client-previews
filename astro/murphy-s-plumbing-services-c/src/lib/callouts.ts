/** Callout positions for the exploded renders (percent of the image box). Labels name generic parts only. */
export type Callout = { x: number; y: number; label: string; sub?: string; side?: 'left' | 'right' | 'above' | 'below' };
export const c22: Callout[] = [
  { x: 27, y: 55, label: 'Bucket', sub: 'Deep trenching', side: 'below' },
  { x: 38, y: 16, label: 'Boom and dipper', side: 'left' },
  { x: 66, y: 36, label: 'Cab', side: 'above' },
  { x: 74, y: 58, label: '22-tonne excavator', sub: 'Wet or dry hire', side: 'right' },
  { x: 60, y: 66, label: 'Slew ring', side: 'left' },
  { x: 50, y: 92, label: 'Undercarriage and tracks', side: 'left' },
];
export const c5: Callout[] = [
  { x: 76, y: 30, label: '5-tonne excavator', sub: 'Wet or dry hire', side: 'below' },
  { x: 31, y: 30, label: 'Boom and dipper', side: 'above' },
  { x: 30, y: 73, label: 'Bucket', side: 'below' },
  { x: 62, y: 20, label: 'Cab', sub: 'Our operator on wet hire, yours on dry', side: 'above' },
  { x: 73, y: 77, label: 'Undercarriage and tracks', side: 'below' },
];
export const cButt: Callout[] = [
  { x: 10, y: 52, label: 'PE 100 pipe', side: 'below' },
  { x: 34, y: 30, label: 'Clamp carriage', side: 'above' },
  { x: 54, y: 48, label: 'Heater plate', side: 'below' },
  { x: 64, y: 28, label: 'Facing tool', side: 'above' },
  { x: 68, y: 74, label: 'Hydraulic unit', side: 'below' },
  { x: 90, y: 40, label: 'Butt welding', sub: 'Certified', side: 'above' },
];
export const cEf: Callout[] = [
  { x: 18, y: 18, label: 'PE 100 pipe', side: 'below' },
  { x: 42, y: 38, label: 'Electrofusion coupler', sub: 'Heating coil fuses pipe to coupler', side: 'below' },
  { x: 55, y: 26, label: 'Terminal pins', side: 'right' },
  { x: 64, y: 58, label: 'Alignment clamp', side: 'right' },
  { x: 90, y: 88, label: 'Electrofusion', sub: 'Certified', side: 'left' },
];
export const cFl: Callout[] = [
  { x: 24, y: 39, label: 'DICL flanged pipe', side: 'below' },
  { x: 38, y: 44, label: 'Gasket', side: 'below' },
  { x: 50, y: 20, label: 'Gate valve', side: 'right' },
  { x: 27, y: 12, label: 'Bolts and nuts', side: 'right' },
  { x: 78, y: 62, label: 'Flanged spigot', side: 'below' },
];
