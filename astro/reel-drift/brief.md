# Build brief - Reel Drift

2026-09-06 · lead 28198 (created today from Blake's Instagram screenshot) · CRM Option B row 3347 · skill tideloc-site-build · preview https://staging.tideloc.com.au/cold/reel-drift/v2/

## Who this is for
Reel Drift (Instagram reel.drift.wa), Western Australia. A new fishing content channel, six posts old: "Learning the water | Sharing the journey | One drift at a time". Bream on soft plastics from the boat with family and mates, light tackle, reels on Instagram, full adventures promised on YouTube @ReelDriftWA. Owner not named anywhere.

## What the site has to make happen
Make a WA angler who lands from Instagram or YouTube watch the latest drift and follow. Primary CTA "Watch the latest drift" (to /videos/). Secondary: send a message through the enquiry form (brands, collabs, mates).

## Verified live on 2026-09-06
- Instagram bio: "Learning the water | Sharing the journey | One drift at a time"
- Six posts, 28 Jun to 31 Jul 2026: five reels plus the branded "SOMETHING NEW IS COMING." card. Captions quoted verbatim in content-inventory.md.
- Gear named in captions: Millerods Grub Freak, Daiwa Certate 2500S, Varivas light game braid PE 0.6, Yamatoyo Chinu Harris 3lb, Veetail 70 in Yabby oil, Hurricane Lures Sprat (in the net). Tagged: Tackle West, Outback Breamer Baits, Shimano Fish AU.
- YouTube @ReelDriftWA named in the 28 Jun post; the channel page showed no videos on 2026-09-06.
- No website, no Facebook page, no phone, email, address or hours published.

## Brand tokens (sources)
- Palette: navy #0B1E3A primary/ink/accent (logo pixel sample of the branded post), cream #F6EEE2 ground (same sample, profile picture background), cream tint #E9E1D5 secondary (sample edge tone). No third colour exists in their material.
- Type: Montserrat 800 caps with full stop for headlines and 300 tracked caps for labels (matches "SOMETHING NEW IS COMING." and the "REEL DRIFT" wordmark), Inter body (small copy on the graphic), Caveat for the one handwritten sign-off "Until the next drift."
- Logo: rod arc, tracked wordmark, double wave. Cropped from the 28 Jun post graphic and cut to transparent navy and cream PNGs; favicon from the rod arc. No vector file exists.

## Layout, in two lines
Full-bleed sunset river photo with the bio as a three-line claim and the Drift log card (six dated posts, driven by the portal price list so the client adds a row per outing), then a navy manifesto band, wrapping video tabs (Reels real; Full adventures and Tips are placeholder slots for YouTube), the gear list beside the bream-in-the-net frame, the winter bream question beside the casting photo, and the follow-and-message row. The one typographic moment is the Caveat sign-off at the foot of the manifesto band.

## Imagery
6 first-party frames (Instagram reel covers and the branded post; letterbox bars cropped, rounded black corners cropped off the casting frame). 3 generated with Gemini, seed reel-drift-20260906 (styled to: documentary, early light, cream sky, navy-green river, paperbarks and gums, aluminium tinnie): gen-river-dawn.jpg, gen-soft-plastic.jpg, gen-river-bank.jpg. A fourth (gen-bream-release.jpg) was generated and discarded after QC. No stock.

## Placeholder video tabs (as requested)
Reels tab shows the six real posts linking to Instagram. Full adventures and Tips tabs each hold three navy placeholder tiles labelled coming soon, ready to swap for YouTube embeds. Component: src/components/LatestDrifts.astro.

## Questions for Blake / the client
1. Owner name(s) and a first-person "who we are" line for the About page.
2. A contact email for brands and collabs (the gate's contact-cta check fails without a tel: or mailto: link; none is published).
3. YouTube channel URL and the first video titles for the placeholder tabs.
4. Home water or launch area, if they want it named (the site says only "Western Australian rivers and estuaries").
5. A full-resolution landscape photo for the hero and a vector logo (the current mark is cut from the Instagram graphic).

## Known issues
- Independent QC: FAIL on round 1 (six findings, all fixed) and FAIL on round 2 (seven findings). Round-2 fact findings 1 to 3, the black-corner asset (4) and the mosaic layout bug (5) were fixed. Two taste findings remain per the skill's two-round limit:
  - QC 2.6: the generated boat is a bare aluminium punt, not their white Quintrex with the Garmin trolling motor. Three generated frames remain (About hero, winter bream section, contact page). Replace with first-party photos when the client supplies them.
  - QC 2.7: the hero photograph (a 1179px reel cover) is soft at 1440 wide and sits under a navy gradient; QC judged it read as a wash. Overlay was lightened after the verdict; a full-res hero photo is the real fix.
- Gate: contact-cta FAIL (no tel:/mailto: exists to link). Everything else passes, including v2-hero-echo (unique among 7 peers) and palette adherence.
- No concept-a from the old pipeline exists for this slug, so no comparison shot.
