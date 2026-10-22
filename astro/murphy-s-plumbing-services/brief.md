# Build brief - Murphy's Plumbing Services

2026-10-23 · lead 27979 · skill tideloc-site-build · preview https://staging.tideloc.com.au/cold/murphy-s-plumbing-services/v2/

## Who this is for
Murphy's Plumbing Services Pty Ltd, Illawarra (ABN main location NSW 2530; CRM suburb Shellharbour). In their words: "Murphy's Plumbing Services specialises in civil and industrial plumbing for complex infrastructure projects. With expertise in materials like PE 100 polyethylene, Ductile Iron Cement Lines (DICL), stainless steel press fit, copper press fit, PVC, and concrete, we deliver durable solutions tailored to every project." Licensed plumbers, pipe layers and excavator operators on the crew (headcount not published, per Blake); a 22-tonne and a 5-tonne excavator for wet or dry hire; certified in PE 100 installations, Electrofusion, Butt Welding and Vac Operations. Blake's brief: B2B, aimed at builders and civil contractors, promote the machinery, the poly welding, and recent Sydney Water infrastructure works alongside small to medium civil jobs.

## What the site has to make happen
The home page exists to make a builder, civil contractor or project manager send a project enquiry (scope, materials, program) through the form or by email. Primary CTA "Send a project enquiry" (header, hero, every page's form band, footer). Secondary: the plant-hire page and the email link. No phone exists on any source, so there is no call CTA yet.

## Verified live on 2026-10-23
- Live site is Squarespace 7.1, four pages (Home, About, Projects, Contact), monochrome theme: black, #1C1C1C, #DCDCDC, #FAFAFA, white. Headings Khula 400, body Poppins 300, buttons Poppins 500.
- Verbatim copy carried over: the h1 sub "Specialising in large-scale pipework for water, sewage, storm water, and gas projects", Who We Are, What We Do, Certifications, About Us, What Sets Us Apart, the projects intro and the contact line.
- Footer facts: ABN 24101951759, Licence 521S, Licence 142861C. Email info@murphysplumbingservices.com.au. No phone, no address, no hours on the site.
- ABR: MURPHY'S PLUMBING SERVICES PTY LTD, active and GST registered from 01 Oct 2002, NSW 2530.
- 39 first-party photos on the live site (all real site photos, phone shot, uncaptioned). The Facebook link in their markup is a dead Squarespace placeholder.
- Old pipeline concept exists at /cold/murphy-s-plumbing-services/concept-a/ (inset photo on light ground). This v2 is registered as Option B beside it.

## Brand tokens (sources)
- Palette: #000000 ink (site.css --black-hsl), #1C1C1C primary/dark band (site.css --darkAccent-hsl), #DCDCDC accent rules (site.css --accent-hsl), #FAFAFA ground (site.css --white-hsl), #FFFFFF secondary (site.css --lightAccent-hsl). Logo pixel sample confirms black line art, no colour.
- Type: Khula 400 / Poppins 300, buttons Poppins 500 at 0.02em (site.css font tweaks; both on Google Fonts, no fallback needed).
- Logo: black MP line monogram over a wide-tracked caps wordmark, from the live site; the monogram is the favicon and header mark.

## Layout, in two lines
Six pages: home, plant hire, services, projects, about, contact. Home is a full-bleed hero (their Kobelco in their trench) with the C2 claim and a portal-editable "Plant for hire" card, then a capability ledger of every scope and material, an ink band with "22 t" and "5 t" set at 11rem (the one typographic moment and the saturated brand move), the welding and certifications ticket, a seven-tile mosaic of recent work, the registration strip, and the enquiry form.

## Imagery
36 first-party photos (live site Squarespace CDN, downsized to 1600px, hero cropped from w-33 to a 2400x1536 band). 0 generated with Gemini. No stock.

## Questions for Blake / the client
1. Phone number. Nothing on the site, the CRM or the web; a contractor site without a phone is the biggest gap and would become the primary CTA.
2. Street address or depot suburb for the footer, schema and map (currently "Illawarra, NSW 2530" from the ABN register, map centred on Dapto 2530).
3. Confirm "Illawarra and Sydney" as the service area, and whether to say "NSW".
4. Which Sydney Water projects: site, head contractor or client, year, pipe sizes, so the Projects page can caption the photos. Also whether they are on a Sydney Water listed-provider panel (worth stating if so).
5. Fleet detail: excavator makes (the photos show a Kobelco), attachments, any vac truck, tipper, or welding machines and their size range, for the plant-hire page.
6. A contact name for builders (estimator or director) and whether to publish insurances or accreditations builders ask for (public liability, SafeWork, WSAA).
7. A real Facebook or LinkedIn page, if one exists.
8. Whether the hire-rate wording on the plant card should stay as "Wet or dry hire" or carry rates (the card is editable in the portal price list).

## Known issues
- Independent QC: round 1 FAIL (10 findings, all actioned in the one re-author), round 2 FAIL (6 findings: 5 fixed after deploy, 1 left). The open one is taste: QC wants the hero claim and the "22 t / 5 t" numerals heavier than Khula 400; the brand sets its headings at 400, so the weight stays locked to the brand.
- Static gate: PASS, all checks, after both deploys.
- Google Maps embed is a keyless postcode-area query (Dapto NSW 2530) until an address is supplied.
- Wet hire and dry hire are explained as plain definitions of the terms (machine with operator / machine only); they are not the client's own sentences.
- Crew headcount removed on Blake's instruction (23 Oct 2026); the client's own site says "a team of six".
