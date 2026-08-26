# Build brief - Tiny Flower House

2026-08-26 · lead 5777 · skill tideloc-site-build (v2, side-by-side test against crm-cold-concepts build 3315)
Preview: https://staging.tideloc.com.au/cold/tiny-flower-house/v2/
Compare: https://staging.tideloc.com.au/cold/tiny-flower-house/concept-a/ (existing skill, untouched)

## Who this is for
Lisa, Tiny Flower House, Moss Vale. She grows flowers on the public nature strip outside her house at the corner of North and East Street, sells seasonal bunches, Australian made gifts and hampers, and wedding flowers from a small black cottage workshop. "Not your typical florist. We are guerrilla gardeners."

## What the site has to make happen
Make a Southern Highlands customer send a bunch request for what is in the beds this week, or ring, in any season. Primary CTA "Request a bunch" (header, after the calendar on the flowers page, on the home page). Secondary: call. Tertiary: directions.

## Verified live on 2026-08-26
- Her Wix site carries a winter banner: closed until Spring '26.
- Both Wix storefront pages render "We don't have any products to show here right now."
- Her only in-season instruction is "CALL US TO FIND OUT WHAT'S IN BLOOM THIS WEEK!"
- Her 25 Aug reply to Blake: not happy with Wix as a sales platform, asks how to run a seasonal range.
- Workshop hours Wed-Fri 9-5, Sat 9-12; phone 0417 000 547; tinyflowerhouse@protonmail.com.

## Brand tokens (sources)
- Palette: #697E5D primary (Wix --color_41), #8CA87C secondary (logo pixel sample), #FFF5EC ground (her page background), #33312F ink, #806C57 captions only.
- Type: Newsreader 300 display (follows the serif logo lockup; Futura LT Book is not on Google Fonts) / Lato body (scraped).
- Logo: sage circle, TINY / FLOWER / HOUSE. Note: the physical shopfront signage is mint, not sage. The web brand is what she chose online; worth asking which she considers current.

## Layout, in two lines
The home page is a growing calendar with a request form, not a shop: her three published stem lists as Spring / Summer / Autumn / Winter tabs, each stem marked cutting now / budding / resting, so nothing is ever deleted when a season ends. The one typographic moment is the About page opening: "Not your typical florist. We are guerrilla gardeners." at 7.5vw.

## Imagery
26 first-party photos from her Wix media at full resolution, cropped where captions were burned in (w-3 "Flower Meadow"). 0 generated. No stock.

## What is in the build
Astro 4 + Tailwind, compiled CSS, sitemap + robots, canonical + OG on every page, Florist JSON-LD with hours from the site-content kit (she can edit hours, announcement and contact from the portal), keyless map, `tel:` links, three forms (bunch request, wedding, general) posting to the CRM demo endpoint (smoke-tested, emails admin@). Static gate: PASS.

## Questions for Blake / Lisa
1. Prices. None exist anywhere on her site, so the build ships "priced when we cut them" and a request form instead of a checkout. Does she want fixed prices per format, or is priced-on-the-day how she sells?
2. Standing orders or subscriptions: offered? The contact form mentions "a standing order for the office" as an example; nothing is promised.
3. Delivery area and fee.
4. Facebook / Instagram URLs to put in the footer (not linked from the site we captured).
5. Sage (web) or mint (signage)?

## Known issues
- Mobile hero CTA lands at ~818px on an 844px viewport: visible but tight.
- Winter tab is intentionally empty of stems; it reads "The beds rest" plus dried and gifts.
