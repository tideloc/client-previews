# Build brief - CK Physiotherapy & Aquatherapy, Option C "Clinic index"

2026-09-04 · lead 27477 · skill tideloc-site-build · preview https://staging.tideloc.com.au/cold/coryn-katz-ck-physiotherapy-aquatherapy/v3/

## Who this is for
Coryn Katz, CK Physiotherapy & Aquatherapy, 2 Weonga Road, Dover Heights. "Unique in Sydney's Eastern Suburbs, we offer both land-based and one-on-one aquatic physiotherapy." A physiotherapist with over 20 years experience and her own indoor salt water therapy pool (33-34°C, 1.1-1.3 m), the only WATSU certified physiotherapist in Sydney, treating arthritis and joint replacements, balance and falls, neurological conditions, chronic pain, back and neck pain, pre and post-natal, sport injuries and deconditioning. "I get into the water with each and every client for hands-on aquatic therapy."

## What the site has to make happen
The home page exists to make an Eastern Suburbs patient who has just searched a condition by name book an assessment on Halaxy. Primary CTA "Book online" (every one opens her Halaxy booking page in a new tab). Secondary: call 0491 114 897.

## Verified live on 2026-09-04
- ckphysio.com.au is a six-page Wix site; every page's "Book your assessment today" links to https://www.halaxy.com/book/appointment/mrs-coryn-katz/physiotherapist/1324311/1037161/select-time
- Halaxy's public booking page sends `x-frame-options: deny`, so it cannot be iframed. Halaxy issues a separate embed code from Personal > Profile > Directory Profile Preferences > Embed. The contact page carries a `<!-- HALAXY_EMBED -->` marker where that drops in.
- Hours on the site and GBP agree: Monday to Thursday 7:30am to 7pm, Friday 7:30am to 4pm. Phone 0491 114 897, email corynkatz@gmail.com.
- GBP: 5.0 from 17 reviews. Five Google reviews quoted; eight site testimonials quoted verbatim with the first name + initial + condition format the site uses.
- Site JSON-LD declares the bold "CK Physiotherapy" wordmark as the logo; the Wix header shows an older script logo.

## Brand tokens (sources)
- Palette: #102048 navy primary/ink (logo pixel sample), #08A8D8 cyan accent (logo), #EDF2F7 ground (Wix shade-1, 201 refs), #4A5568 text (Wix shade-3, 184 refs), #BEE3F8 tint (Wix accent-2), #E6FFFA mint (Wix accent-3)
- Type: Figtree 600/700/800 display (logo wordmark is a Gotham-class geometric bold, mapped per research-procedure) / IBM Plex Sans 400/500/600 body (`ibm-plex-sans` is in her Wix stylesheet)
- Logo: the "CK Physiotherapy" wordmark PNG from the site's schema.org markup; favicon is its wave mark

## Layout, in two lines
Split hero, solid navy left with her two claims and the Halaxy booking strip, day-pool photo right; then the conditions index (all eight groups, every sub-condition) is the first band, followed by water/land rows, the pool spec band, a dated qualifications timeline, a testimonials ledger and the visit block. The one typographic moment is the conditions index: Figtree 800 group names with cyan numerals over dense Plex lists, sharp corners everywhere.

## Pages
`/`, `/aquatic-physiotherapy/`, `/watsu/`, `/conditions/` (anchors per group), `/about/`, `/testimonials/`, `/contact/` (booking strip + facility + hours + form + map). Hours, phone, email, address and the booking URL sit in `src/content/site.json` and are portal-editable through the kit's data-tl slots.

## Imagery
4 first-party photos (ckphysio.com.au: pool at night in the hero and on the aquatic and contact pages, pool by day in the water row and aquatic page, treatment room, Coryn's headshot). 1 generated with Gemini (seed ck-physio-20260904, styled to: warm turquoise salt water, no room, no people), listed: gen-water-surface.jpg (abstract water texture in the home pool band and on the WATSU page, never presented as the facility). Three other generated room images were produced and rejected at QC because they did not match the real pool; they are not shipped. No stock. Two 2500x1667 Wix stock frames on her site (physio with client, pool session) were not used.

## Questions for Blake / the client
1. The Halaxy embed code (Personal > Profile > Directory Profile Preferences > Embed) so bookings can sit on the page instead of linking out.
2. Fees and appointment lengths (nothing on the site; Halaxy shows them once the embed is in).
3. Which logo: the bold "CK Physiotherapy" wordmark (used here, it is what the site declares) or the script "CK Physiotherapy & Aquatherapy" in the Wix header.
4. Is the woman in the in-water photo on her site (2500x1667, Wix media) Coryn, and can it be used? If yes it should replace gen-pool-steps in the hero row.
5. Medicare EPC/CDM, NDIS and DVA: only "we process Medicare rebates" and "private health claims via an EFTPOS machine" are on the site.
6. Any socials to link.

## Known issues
- Google Maps iframe on the contact page renders blank in headless screenshots only.
- The day pool photo (592px) is used at card size only; a full-res version from Coryn would let it carry a larger slot.
