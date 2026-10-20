# Build brief - Sitelore

2026-09-07 · lead 28199 · skill tideloc-site-build (phases 3, 5, 6; research and image phases skipped by instruction) · preview https://staging.tideloc.com.au/cold/sitebook/v2/

## Who this is for
Blake Hutchison, Tideloc, Wollongong. Sitelore is Tideloc's own product: a site knowledge base held by the asset manager for shopping centres and office buildings. Assets pinned on the floor plan with a photo, tag and grid reference; contractors and their scope on this site; who to call, including after-hours and radio call signs; emergency codes and isolation points; role runbooks by cadence; work requests pinned on the plan and exported as a PDF; handover and contractor transition packs; imports from another system; role-based access.

## What the site has to make happen
Get a property operations lead to open the live demo and book a call. Primary CTA "Book a call" (Tideloc Cal URL). Secondary: open the demo at https://sitebook-self.vercel.app/sign-in.

## Verified live on 2026-09-07
- Demo app serves 200 at sitebook-self.vercel.app and embeds in the site's app explorer with a Desktop and Phone toggle.
- Seed counts used on the site: Ridgeway Fair 178, Marlow Central 703, Quay Tower 375 assets, 18 levels, 1,256 total.
- Rate card and subscription tiers as listed in the concept note (indicative, ex GST).

## Brand tokens (sources)
- Palette: Ink #16213A, Sheet #F6F7F9, Rule #D9DEE7, Marker #F26B1D, Verified #1D8A5A, Overdue #C6262E (product token file `src/app/globals.css`)
- Type: Archivo (semi-condensed) / IBM Plex Sans, IBM Plex Mono for tags and figures (product brand page)
- Logo: the product's own S mark, `public/brand/mark.svg`

## Layout, in two lines
Hero is a one-sentence claim beside the live app in a device panel; the tag chip is the typographic moment and labels every section. Home runs four distinct structures: a ruled ledger of what it holds, an Ink ordered strip of the six handover steps, a three-column typeset spread of who it is for, and a single large price object.

## Imagery
None. No photographs exist for the product and stock and generated images were excluded by instruction. The design carries on type, colour, drawn plan fragments and the live app.

## Questions for Blake / the client
1. Is the indicative rate card the version to show publicly, or should pricing sit behind the call?
2. Does the founder line on Who we are say what you want it to say?
3. Should the demo open to a specific persona from the site rather than the sign-in page?

## Known issues
- Independent QC: first pass FAIL (six findings, all fixed), second pass FAIL (four repetition findings, all fixed). No third pass was run; the site was deployed for Blake's own review in the CRM at his request.
- Quality gate: passes every check except `real-photography`, which cannot pass without photographs.
- The map on the contact page is a keyless Google Maps embed of Wollongong; there is no street address on the site by instruction.
