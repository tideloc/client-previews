/** Every fact on the site, with its source (content-inventory.md). Nothing here is invented. */
export const facts = {
  name: "Murphy's Plumbing Services",
  legal: "Murphy's Plumbing Services Pty Ltd",
  abn: '24 101 951 759',
  abnRegistered: '1 October 2002',
  licences: ['521S', '142861C'],
  base: 'Illawarra, NSW 2530',
  certs: ['PE 100 installations', 'Electrofusion', 'Butt Welding', 'Vac Operations'],
  scopes: ['Water supply', 'Sewage', 'Stormwater', 'Gas', 'Deep trenching', 'Manhole installations', 'Treatment plant piping'],
  materials: ['PE 100 polyethylene', 'Ductile Iron Cement Lined (DICL)', 'Steel', 'Stainless steel press fit', 'Copper press fit', 'PVC', 'Concrete'],
  installs: ['Steel and DICL installations', 'PE 100 Electrofusion', 'PE 100 Butt Welding', 'Press Fit'],
  plant: [
    { name: '22-tonne excavator', hire: 'Wet or dry hire' },
    { name: '5-tonne excavator', hire: 'Wet or dry hire' },
  ],
  crew: 'Licensed plumbers, pipe layers and excavator operators',
  recent: 'Recent projects include Sydney Water infrastructure works, alongside small and medium civil plumbing jobs.',
  packages: [
    { name: 'Pipework subcontract', what: 'Water supply, sewage, stormwater and gas pipework for civil infrastructure projects, from deep trenching and manhole installations to treatment plant piping.', note: 'Materials: PE 100, DICL, steel, stainless and copper press fit, PVC, concrete.' },
    { name: 'PE 100 welding', what: 'Electrofusion and butt welding of PE 100 polyethylene, by a crew certified in PE 100 installations, Electrofusion and Butt Welding.', note: 'Also: Vac Operations certified.' },
    { name: 'Plant hire, wet or dry', what: 'A 22-tonne and a 5-tonne excavator, with one of our operators (wet) or on their own for your operator (dry).', note: 'Operators are part of the plumbing crew.' },
  ],
};
