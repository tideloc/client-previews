# Build brief - CK Physiotherapy & Aquatherapy, Option B "Water first"

2026-09-04 · lead 27477 · skill tideloc-site-build · preview https://staging.tideloc.com.au/cold/coryn-katz-ck-physiotherapy-aquatherapy/v2/

## Who this is for
Coryn Katz, CK Physiotherapy & Aquatherapy, 2 Weonga Road, Dover Heights. "Unique in Sydney's Eastern Suburbs, we offer both land-based and one-on-one aquatic physiotherapy." A private indoor salt water pool heated to 33 to 34 degrees, 1.1 to 1.3 m deep, and Coryn in the water with every client. Also the only WATSU certified physiotherapist in Sydney, NSW (her claim).

## What the site has to make happen
Make an Eastern Suburbs patient book an assessment on Halaxy. Primary CTA "Book an assessment" (every instance opens https://www.halaxy.com/book/appointment/mrs-coryn-katz/physiotherapist/1324311/1037161/select-time in a new tab, exactly as her Wix site does). Secondary: call 0491 114 897.

## Verified live on 2026-09-04
- ckphysio.com.au (Wix): every page carries a "Book your assessment today" button to the Halaxy URL above; the Halaxy page itself sets x-frame-options: deny so it cannot be iframed. Halaxy issues a separate embed snippet from Personal > Profile > Directory Profile Preferences > Embed; a `<!-- HALAXY_EMBED -->` slot sits in the contact page's booking section for it.
- Hours Mon to Thu 7:30am to 7pm, Fri 7:30am to 4pm (site and GBP agree). Medicare rebates processed, private health via EFTPOS.
- GBP: 5.0 from 17 reviews. Reviews quoted are from her testimonials page and Google.
- All copy on the site is hers, verbatim, with spelling normalised to AU English.

## Brand tokens (sources)
- Palette: #32949D primary (Wix --wst-base-2-color, 491 refs), #4BA9AC accent (accent-1, 249 refs), #F7FAFC ground (base-1, 359 refs), #2C5282 headings (accent-4), #4A5568 body (shade-3), #E2E8F0 and #BEE3F8 tints.
- Type: Onest 800/700 display, Onest 400/500 body ('onest' is in her stylesheet; Google twin of Wix Madefor Display Bold which sets her headings).
- Logo: the bold "CK Physiotherapy" wordmark (navy + cyan wave) that her site declares as its schema.org logo. Favicon is the wave mark.

## Layout, in two lines
Full-bleed night pool hero with her claim on the left and a Halaxy booking card (steps, practitioner, location, live hours, one button) as the data object on the right; then a teal specialties band, two photo doors (water / land), the pool as a spec sheet, an eight-row index of the condition groups, Coryn with dated qualifications, three full reviews and a book section with form and map. The typographic moment is the 64px hero claim with "one-on-one aquatic physiotherapy" in the light teal.

## Imagery
4 first-party photos only (ckphysio.com.au: night pool, day pool, treatment room, Coryn), reused with different crops. 0 generated images: three Gemini fills were tried and QC failed them for reading as a different room beside her real pool, so they were removed. No stock.

## Questions for Blake / the client
1. The Halaxy embed code from her account, so the booking calendar can sit on the page rather than linking out.
2. Fees and appointment lengths (nothing on the site; Halaxy shows them once the embed is in).
3. Whether NDIS or DVA are accepted, beyond "we process Medicare rebates".
4. Which logo she wants: the bold "CK Physiotherapy" wordmark (used here) or the older script "CK Physiotherapy & Aquatherapy" in her Wix header.
5. Real in-water photos of Coryn with clients (with consent), and whether the 2500x1667 pool-session image on her site is her or stock (not used).
6. Socials, if any.

## Known issues
- Independent QC failed twice (round 1: generated pool images read as another room, ordinals, hero contrast, one joined quote; round 2: star rows, stepper chrome, section repetition, mobile fold, headshot upscaling, one heading). All fixed. 2026-09-04 evening pass (Blake): nav cut to four links (Treatments, Conditions, About Coryn, Contact) plus phone and Book; /aquatic-physiotherapy/ became /treatments/ with aquatic, land, WATSU and programs sections; on a 390x844 phone the hero booking card's button now sits at y 542 to 590, inside the first screen, with a compact card (Open today line, full hours in a details toggle). Details in ~/tideloc/site-builds/ck-physio/review-b.md.
- 2026-09-08 pass (Blake: "the conditions sections are a little overwhelming"): the home page now lists the eight
  condition groups as tappable rows linking to /conditions/#anchor instead of printing all 29 conditions, and
  /conditions/ is eight <details> accordions (first open, exclusive, terms as pills) instead of eight stacked
  lists. Every condition name is still in the /conditions/ HTML. On a 390px phone the home conditions band went
  1970px to 966px and the conditions page 8563px to 4632px. The duplicated "My approach" block was removed from
  /conditions/ (it lives on /treatments/#programs) and a BreadcrumbList was added.
- 2026-09-08, second pass (Blake): Home added to the nav, above Treatments, in both the desktop bar and the
  menu. Five links plus Book need about 1035px of header, so the full nav now starts at lg (1024px) instead of
  md and tablets get the menu button; the header phone number shows from xl. That also cleared a pre-existing
  sideways scroll: the header overflowed at 768 to 900px and the four-column footer at 768px (now two columns
  until lg). No horizontal overflow from 360px up; 320px still overflows by 27px, unchanged from before.
- 2026-09-08, third pass (Blake): the teal specialties band wrapped its three items onto two lines, because
  beside the lead-in they only had about 640px of the 1216px wrap. The lead-in now sits above the list, so the
  three sit on one line from 1024px up. Two lines at tablet width and three on a phone are unavoidable.
- 2026-09-08, fourth pass (Blake): the /conditions/ accordion rows now use the same row as the home index
  (teal dot, 18px/800 ink heading, 20px by 24px padding, 68px closed height, tint hover) instead of a bigger
  heading with a circled plus. The marker is a chevron rather than the home arrow because these rows open.
  Measured identical on both pages at 1280px.
- 2026-09-08, fifth pass (Blake: strengthen the treatments and conditions hero): both were a pale white band
  with an h1 and one button. PageIntro now takes an optional image and renders an ink hero split against a
  photo panel, with the label in tint, a 52px h1, the lead at 20px, Book plus the phone as a second CTA, and
  an optional jump strip. Treatments uses the day pool and absorbs the old "On this page" white nav band as
  pills; conditions uses the treatment room. Only pool-night is above 1280px wide, so the photo sits in a
  bounded column (521 CSS px from a 588px source at 1280) rather than full bleed, which would have upscaled
  a 592px file to 1800w. About, contact, testimonials and watsu still use the plain white band.
- 2026-09-08, sixth pass (Blake): the /conditions/ accordions all start closed, so the page opens as the same
  eight-row index as the home page. A #hash link still opens the panel it points at.
- 2026-09-08, seventh pass (Blake: tidy the two-doors section on home): the two columns ran 6 and 8 lines so
  the link rows sat at different heights. Each card is now a flex column with the links pinned by mt-auto, so
  they align; each paragraph dropped its last sentence (whole sentences, nothing truncated, and every
  remaining sentence still appears verbatim on /treatments/, checked by script). The programs line became a
  white card with the label split out instead of a half-width rule-and-quote.
- 2026-09-08, eighth pass (Blake): the home hero eyebrow and h1 are centred below sm and left-aligned from
  sm up. The h1's max-w-[13ch] now starts at sm as well: on a 350px phone column it was holding the heading
  to about 215px, which is what made it seven ragged lines. It is five lines full-width now.
- Google Maps iframe on the book section renders blank in headless screenshots only; it loads in a browser.
- Booking is a link-out until the Halaxy embed arrives (same behaviour as her current site).
