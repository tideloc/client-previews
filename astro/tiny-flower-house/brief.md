# Build brief - Tiny Flower House

2026-08-26 · lead 5777 · skill tideloc-site-build (v2, side-by-side test against crm-cold-concepts build 3315)
Preview: https://staging.tideloc.com.au/cold/tiny-flower-house/v2/
Compare: https://staging.tideloc.com.au/cold/tiny-flower-house/concept-a/ (existing skill, untouched)

## Who this is for
Lisa, Tiny Flower House, Moss Vale. Grows flowers on the public nature strip outside her house at the corner of North and East Street; sells seasonal bouquets, Australian made gifts and hampers, and wedding and event flowers from a small black cottage workshop. "Not your typical florist. We are guerrilla gardeners."

## What the site has to make happen
Make a Southern Highlands customer send a bunch request for what is in the beds this week, or ring, in any season. Primary CTA "Request a bunch" (header + home form). Secondary: call. Tertiary: directions.

## Verified live on 2026-08-26
- Wix site banner: "Tiny Flower House is now closed for winter. See you in Spring '26." (used verbatim)
- Both Wix storefront pages render "We don't have any products to show here right now."
- Her only in-season instruction: "CALL US TO FIND OUT WHAT'S IN BLOOM THIS WEEK!"
- Her 25 Aug reply to Blake: not happy with Wix as a sales platform, asks how to run a seasonal range.
- Hours Wed-Fri 9-5, Sat 9-12; 0417 000 547; tinyflowerhouse@protonmail.com.

## Brand tokens (sources)
- Palette: #697E5D primary (Wix --color_41), #8CA87C secondary (logo pixel sample), #FFF5EC ground (her page background), #33312F ink, #806C57 captions.
- Type: Jost 300/400 in tracked uppercase, standing in for her Futura LT Book headings, set the way her site sets them; Lato body (scraped). An earlier serif choice was rejected by Blake as AI typography and replaced.
- Logo: sage circle, TINY / FLOWER / HOUSE. The physical shopfront signage is mint, not sage; worth asking which she considers current.

## Layout, in two lines
The first screen is content, not a pitch: the week line, "What is in the beds at the corner of North and East Street, Moss Vale" as the h1, a band of her verge and workshop photos, then her three published stem lists as Spring / Summer / Autumn / Winter tabs with each stem's calendar state. The About page opens on her own manifesto in caps.

## Copy policy
Every sentence traces to her site (inventory in the workdir) or describes a photograph. No prices, no reviews, no reopen date beyond "Spring", no process claims. Format names (wrapped bunch, posy in a box, arrangement in a jug) are descriptions of her product photos.

## Imagery
26 first-party photos from her Wix media at full resolution (w-3 cropped to remove a burned-in caption). 0 generated. No stock.

## Quality control history (for Blake, this is the point of the test)
- Self-review: passed. Blake rejected the hero (the standard AI hero stack) and the serif typography. Both rules now live in the skill and in memory.
- Independent QC agent, fresh context each round: round 1 FAIL (slogan h1, split header, three-element tile, duplicate CTA labels), round 2 FAIL (invented copy: "we plant for your date", "gifts all year", "standing order"), round 3 FAIL (inferred "1 September", "keep for months", process sentences, duplicated form), round 4 FAIL (untraceable subhead, garbled month line, repeated urn photo). Each round fixed and redeployed. Round 5 verdict recorded in review.md.
- Mechanical gate (static profile incl. new hero-stack check): PASS.

## Questions for Blake / Lisa
1. Prices. None exist on her site, so the build ships a request form, not a checkout. Fixed prices per format, or priced on the day?
2. Delivery area and fee.
3. Standing orders or subscriptions: offered? (Not mentioned anywhere on the site, so not on the page.)
4. Facebook / Instagram URLs for the footer.
5. Sage (web) or mint (signage) as the brand colour going forward?

## Known issues
- Mobile: primary CTA is the header button; the form is below the calendar.
- Winter tab shows no stems by design (she publishes none).
