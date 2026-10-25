# Build brief - Murphy's Plumbing Services, Option C (premium)

2026-10-25 · lead 27979 · skill tideloc-site-build · preview https://staging.tideloc.com.au/cold/murphy-s-plumbing-services/v3/ · CRM Option C row 3365

## Who this is for
Same business as Option B (v2). Blake's brief for this option (25 Oct 2026, after rejecting a dark premium cut): the highest quality site for this industry, aligned to builders, because a builder's first look is to check he is a legitimate plumber.

## What the site has to make happen
Let a builder or estimator confirm in one screen that this is a registered, licensed, certified civil plumbing subcontractor with its own plant, then send a project enquiry. Primary CTA "Send a project enquiry". Secondary: download the capability statement PDF for the subcontractor register.

## Verified live on 2026-10-23 (unchanged)
See Option B's brief: Squarespace source, monochrome theme, Khula / Poppins, verbatim copy, ABN 24101951759, licences 521S and 142861C, email only, 39 first-party photos. No crew headcount anywhere (Blake, 23 Oct).

## Brand tokens (sources)
- Same five brand hexes as Option B, light ground: #FAFAFA ground, #FFF hero and matrix, #000 ink, #1C1C1C verification band, plant panel, map band and footer, #DCDCDC rules. Colour comes from the photographs and renders.
- Type: Khula 400 headings, Poppins 300 body, Poppins 500 buttons and tracked-caps eyebrows.
- Logo: MP monogram as header mark and favicon.

## Layout, in two lines
Six pages plus a print page: home (split hero, verification band with ABN and licence register links, three engagement packages, capability matrix, labelled exploded 22 t render in an ink panel, work mosaic, builder enquiry form), capability, plant hire, projects, company ("On the record" table), contact. The capability statement PDF (two A4 pages, 641 KB) is generated from the same facts module and linked from the hero, footer and company page.

## Imagery
36 first-party photos. 4 colourised exploded renders generated with Gemini (gen-col-excavator-22t, gen-col-excavator-5t, gen-col-electrofusion, gen-col-flanged-joint; backgrounds keyed to #1C1C1C, used only inside ink panels) with HTML callout labels. Two earlier hairline line drawings remain in src/assets but are no longer placed. No stock.

## Questions for Blake / the client
Same eight as Option B (phone, address, Sydney Water project names, fleet detail, contact name, socials, insurances, plant-card wording). Plus:
9. The renders are generic machines and fittings, not his exact plant. If he wants them exact, we need the excavator models and the fitting standards he uses.
10. Licence 521S: confirm which register it belongs to (the NSW Fair Trading link is a search page, not a direct record). Insurances and any Sydney Water listed-provider status, if he wants them on the record table and the PDF.

## Known issues
- Independent QC verdict for this option: see the end of review-v3.md in the workdir (deployed on Blake's standing "stage it" instruction while QC ran).
- Static gate: see below.
- Google Maps embed on contact is a keyless postcode query (Dapto NSW 2530) until an address is supplied; rendered greyscale to sit on the dark page.
