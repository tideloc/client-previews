export type Stockist = {
  name: string;
  city: string;
  state: string;
  category: 'market' | 'grocer' | 'butcher' | 'bottleshop' | 'restaurant';
  address: string;
};

export const stockists: Stockist[] = [
  { name: 'Jan Powers Farmers Market', city: 'Brisbane', state: 'QLD', category: 'market', address: 'Brisbane Powerhouse, 119 Lamington St' },
  { name: 'West End Markets', city: 'Brisbane', state: 'QLD', category: 'market', address: 'Davies Park, West End' },
  { name: 'The Greenhouse Grocer', city: 'New Farm', state: 'QLD', category: 'grocer', address: '47 Merthyr Rd' },
  { name: 'Peasant Kitchen', city: 'Bulimba', state: 'QLD', category: 'grocer', address: '132 Oxford St' },
  { name: 'The Local Butcher Boy', city: 'Paddington', state: 'QLD', category: 'butcher', address: '163 Latrobe Tce' },
  { name: 'Sampson & Foss Butchers', city: 'Toowoomba', state: 'QLD', category: 'butcher', address: '402 Ruthven St' },
  { name: 'The Gresham', city: 'Brisbane CBD', state: 'QLD', category: 'bottleshop', address: '308 Queen St' },
  { name: 'Harris Farm Markets', city: 'Byron Bay', state: 'NSW', category: 'grocer', address: '2 Fawcett St' },
  { name: 'The Bellingen General Store', city: 'Bellingen', state: 'NSW', category: 'grocer', address: '121 Hyde St' },
  { name: 'Rocksalt Kitchen', city: 'Surfers Paradise', state: 'QLD', category: 'restaurant', address: 'Hilton Surfers Paradise' },
  { name: 'Gauge', city: 'South Brisbane', state: 'QLD', category: 'restaurant', address: '77 Grey St' },
  { name: 'The Flour Mill', city: 'Newcastle', state: 'NSW', category: 'grocer', address: '18 King St' },
];
