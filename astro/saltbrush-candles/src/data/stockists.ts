export type StockistType = 'retail' | 'cafe' | 'hotel' | 'spa';

export type Stockist = {
  name: string;
  suburb: string;
  state: 'SA' | 'VIC' | 'NSW';
  type: StockistType;
  note?: string;
};

export const stockists: Stockist[] = [
  // South Australia (9)
  { name: 'The German Arms General Store', suburb: 'Hahndorf', state: 'SA', type: 'retail', note: 'Full range' },
  { name: 'Vino Lokal', suburb: 'Hahndorf', state: 'SA', type: 'cafe', note: 'Select candles' },
  { name: 'Roundhouse Provedore', suburb: 'Stirling', state: 'SA', type: 'retail', note: 'Full range' },
  { name: 'Uraidla General', suburb: 'Uraidla', state: 'SA', type: 'retail' },
  { name: 'Lot 100 Cellar Door', suburb: 'Nairne', state: 'SA', type: 'retail' },
  { name: 'Mount Lofty House', suburb: 'Crafers', state: 'SA', type: 'hotel', note: 'In-room amenity' },
  { name: 'Mayfield Florist', suburb: 'North Adelaide', state: 'SA', type: 'retail' },
  { name: 'Sunday Soul', suburb: 'Semaphore', state: 'SA', type: 'retail' },
  { name: 'Hahndorf Day Spa', suburb: 'Hahndorf', state: 'SA', type: 'spa' },

  // Victoria (6)
  { name: 'Elwood Provedore', suburb: 'Elwood', state: 'VIC', type: 'retail', note: 'Full range' },
  { name: 'Daylesford Makers Market', suburb: 'Daylesford', state: 'VIC', type: 'retail' },
  { name: 'Lake House Spa', suburb: 'Daylesford', state: 'VIC', type: 'spa' },
  { name: 'Fitzrovia Café', suburb: 'St Kilda', state: 'VIC', type: 'cafe' },
  { name: 'Paper Plane Agency', suburb: 'Northcote', state: 'VIC', type: 'retail' },
  { name: 'Sawmill Settlement Inn', suburb: 'Mansfield', state: 'VIC', type: 'hotel', note: 'In-room amenity' },

  // New South Wales (5)
  { name: 'Pocket City Farms Shop', suburb: 'Camperdown', state: 'NSW', type: 'retail' },
  { name: 'Forage Shop', suburb: 'Bowral', state: 'NSW', type: 'retail' },
  { name: 'Hardys Bay Trading Co.', suburb: 'Hardys Bay', state: 'NSW', type: 'retail' },
  { name: 'Bells at Killcare Boutique Hotel', suburb: 'Killcare', state: 'NSW', type: 'hotel' },
  { name: 'Bathers Pavilion Gift', suburb: 'Balmoral', state: 'NSW', type: 'retail' },
];

export const byState = (state: Stockist['state']) => stockists.filter((s) => s.state === state);
