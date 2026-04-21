export type PressItem = {
  publication: string;
  issue: string;
  project: string;
  country: string;
  url?: string;
};

export const press: PressItem[] = [
  {
    publication: 'Houses Magazine',
    issue: 'Issue 156, 2025',
    project: 'Three-Hut Farm',
    country: 'AU',
  },
  {
    publication: 'Artichoke',
    issue: 'Issue 84, 2024',
    project: 'Foreshore Addition',
    country: 'AU',
  },
  {
    publication: 'The Local Project',
    issue: 'Feature — Autumn 2024',
    project: 'Quarry House',
    country: 'AU',
  },
  {
    publication: 'Dezeen',
    issue: 'Residential, Sept 2023',
    project: 'Spring Bay Cabin',
    country: 'UK',
  },
  {
    publication: 'Wallpaper*',
    issue: 'Architecture Directory 2025',
    project: 'Practice profile',
    country: 'UK',
  },
];
