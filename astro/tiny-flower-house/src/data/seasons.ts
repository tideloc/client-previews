/** Her published stem lists, verbatim from tinyflowerhouse.com.au (seasonal flowers page).
 *  Nothing here is deleted when a season ends; the state changes. */
export type SeasonKey = 'spring' | 'summer' | 'autumn' | 'winter';
export type StemState = 'cutting' | 'budding' | 'resting';

export interface Season {
  key: SeasonKey;
  label: string;
  months: string;
  from: string;      // human line used when the season is next
  stems: string[];
  note: string;
}

export const seasons: Season[] = [
  {
    key: 'spring', label: 'Spring', months: 'September to November', from: 'from 1 September',
    stems: ['Daffodils', 'Snowball Viburnum', 'Ranunculus', 'Lilac', 'Dianthus', 'Hellebores', 'Foxgloves', 'Peonies', 'Arum Lilies', 'Stock', 'Violas', 'Blossoms', 'Roses', 'Larkspur', 'False Dill', "Queen Ann's Lace"],
    note: 'The first bunches go out as soon as the verge wakes up.',
  },
  {
    key: 'summer', label: 'Summer', months: 'December to February', from: 'from December',
    stems: ['China Asters', 'Dahlias', 'Chocolate Lace Flower', 'Snapdragons', 'Zinnias', 'Hydrangea', 'Cosmos', 'Amaranth', 'Roses', 'Lilies', 'Feverfew'],
    note: 'Cut early, before the heat, and wrapped the same morning.',
  },
  {
    key: 'autumn', label: 'Autumn', months: 'March to May', from: 'from March',
    stems: ['Dahlias', 'Chrysanthemums', 'Zinnias', 'Amaranth', 'Statice', 'Roses', 'Agastache', 'China Asters', 'Yarrow', 'Celosia'],
    note: 'The dahlias keep going until the first frost.',
  },
  {
    key: 'winter', label: 'Winter', months: 'June to August', from: 'from June',
    stems: [],
    note: 'The beds rest until spring.',
  },
];

/** Southern hemisphere season for a date. */
export function seasonFor(d: Date): SeasonKey {
  const m = d.getMonth() + 1;
  if (m >= 9 && m <= 11) return 'spring';
  if (m === 12 || m <= 2) return 'summer';
  if (m >= 3 && m <= 5) return 'autumn';
  return 'winter';
}

export function nextSeason(k: SeasonKey): SeasonKey {
  const order: SeasonKey[] = ['spring', 'summer', 'autumn', 'winter'];
  return order[(order.indexOf(k) + 1) % 4];
}

export function stateFor(season: SeasonKey, now: SeasonKey): StemState {
  if (season === now) return 'cutting';
  if (season === nextSeason(now)) return 'budding';
  return 'resting';
}

export const stateLabel: Record<StemState, string> = {
  cutting: 'cutting now',
  budding: 'budding',
  resting: 'resting',
};

/** Formats she sells, as seen in her own photographs. No prices exist on her site. */
export const formats = [
  { name: 'Wrapped bunch', line: 'Whatever is best on the verge that morning, hand tied in paper.' },
  { name: 'Posy in a box', line: 'A smaller bunch in a box with ribbon. Good for a hospital room or a thank you.' },
  { name: 'Arrangement in a jug', line: 'Ready to stand on a table with nothing to trim at the other end.' },
];
