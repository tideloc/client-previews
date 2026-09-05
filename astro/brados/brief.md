# Build brief - Brado's

2026-09-05 · lead 28197 · skill tideloc-site-build · preview https://staging.tideloc.com.au/cold/brados/v2/

## Who this is for
Brado's, Shellharbour (Blake, 2026-09-05: "Shellharbour not Figtree"; the site shows Shellharbour NSW 2529 with no street because none was given). A demo rebrand requested by Blake: "based on Chicko's Chicken at Figtree but call it Brado's". A takeaway chicken shop on the Princes Highway: chicken schnitzel burgers in a signature bread roll, tenders cut from the tenderloin, Texas fried chicken, Portuguese wings, BBQ chicken, hot food, salads, gelato and cakes. "Wollongong's home of legendary chicken schnitzel burgers." Every fact, price, hour and photo is Chicko's, verified live on 2026-09-05; only the name is Brado's.

## What the site has to make happen
Make a Shellharbour customer open the menu and come in or call ahead. Primary CTA "See the menu". Secondary: call (text link everywhere), directions, catering enquiry form on /catering/, community nomination form on /community/.

## Verified live on 2026-09-05
- chickos.com.au is a Wix store: 202 products in 24 categories, every one priced and photographed square on the brand yellow. No hours on the site, no about, contact or catering page; catering is a marquee ribbon.
- Hours from Google Maps: seven days 10am to 8:30pm. Google shows dine-in, takeaway and delivery.
- Home copy: "IT'S WHAT WE'RE FAMOUS FOR.", "NEW IN", "EXPLORE BY CATEGORY", "Catering that brings everyone to the table.", "OUR TENDERS" (tenderloin copy), "HAPPINESS IN EVERY BITE.", "ABOUT US." ("For over 22 years ... part of Wollongong").
- /community: Team of the Week ($150 voucher), Tradie of the Week ($100 Bunnings voucher), charity hoodies (100% to the Children's Ward at Wollongong Hospital), five pillars.
- /allergendietary: gluten free, vegetarian and vegan lists and the contains lists (fish, egg, milk, sesame, soy, tree nut, wheat).
- The live catering photo is shutterstock_2227481359.jpg. Refused.

## Brand tokens (sources)
- Palette: #FFDE39 primary (Wix --color_18/41-48, 1140 refs, hero and product backdrops, logo sample #FECA0C); #EC2128 accent (484 refs, every H2 and nav label); #403D77 ink (4630 refs, footer and buttons); #F8F6F6 ground (57 refs); #FFC80D secondary (187 refs, hover only).
- Type: Oswald 500-700 (Wix --font_0 oswald-medium, all titles, set caps with a full stop) / Inter (the body upload's declared fallback is orig_inter_regular; nav face DIN Next Light is not on Google Fonts, Inter caps with tracking stands in).
- Logo: Chicko's roundel not used. Brado's is a type-only wordmark: yellow B tile plus BRADO'S in Oswald 700 red. Favicon is the B tile.

## Layout, in two lines
Six pages. Home is a split hero (yellow claim panel with the ink hours object, burger photo whose own backdrop is the same yellow), then New in prices, nine category photo tiles, the tenders band with the cut-out tender, family packs, the ink catering band, about, the community figures and find us. /menu/ is the portal price list, 207 lines in 23 sections with anchors from the tiles.
The one typographic moment is the four-line "IT'S WHAT WE'RE FAMOUS FOR." at 8.5rem with FAMOUS in red.

## Imagery
74 first-party photos (chickos.com.au product pages and home page): the hero burger pair, the cut-out tender, the tender box (cropped to remove the printed logo), 70 square product shots. 0 generated. No stock. Not used: every chip box with the printed Chicko's logo, the stock catering photo, all customer, junior team and staff photos.

## Questions for Blake / the client
1. Phone and email on the build are placeholders (0417 000 547, hello@brados.com.au). Chicko's real ones were deliberately not used under the Brado's name. What should they be?
2. Brado's is now in Shellharbour with no street address. What address should the map, footer and schema carry?
3. "For over 22 years ... part of Shellharbour" (Chicko's line with the suburb swapped) and the community initiatives are Chicko's history and programs. Fine for a demo, or should the about copy be neutral?
4. Catering: only trays, family packs and whole cakes are priced. Is there a catering menu beyond the retail menu?
5. Online ordering: Chicko's runs a Wix store. The demo links the menu and takes catering enquiries only. Is ordering in scope?
6. Four menu names were spelling-corrected (Mousse, Jalapeno, Moroccan, Tabouli). Keep the corrections?
7. Photos of the shop, counter and team are needed to replace the product-only imagery on about and community.

## Known issues
- Independent QC round 1 returned FAIL with 8 findings; all 8 were actioned in the one re-author (see ~/tideloc/site-builds/brados/review.md). Blake stopped QC round 2 and asked for the sample to ship as-is, so there is no PASS on record.
- The Google Maps embed on /contact/ renders blank in the headless screenshot tool; it loads in Chrome (review/chrome-contact-map.jpg).
- Static gate: PASS after meta-description trims and a contact-page form.
