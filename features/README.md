# ChordTutor: MVP backlog (Gherkin)

Each `.feature` file is one epic. Each `@US-xxx` tag is one user story. Every scenario is tagged `@mvp`.

| File | Epic |
|---|---|
| 01-app-shell | Access, responsive layout, three tabs, PWA, offline |
| 02-language | Polish and English |
| 03-instrument-settings | Guitar, bass, ukulele, handedness |
| 04-chord-selection | Roots, variants, spelling choice |
| 05-chord-construction-display | Note and degree on every dot, colours, legend |
| 06-voicings | Voicings per instrument, transposition, data quality |
| 07 | (removed: Triad only) |
| 08-chord-explanation | Written explanation per chord type |
| 09-analytics-consent | GA4 behind a consent modal |
| 10-accessibility-quality | Accessibility, performance, theory tests |
| 11-scale-display | The scale behind the chord, and a switch for other matching scales |
| 12-note-spelling | First-visit choice: simplified or theoretically correct note names |
| 13-chord-inversions | The "Chord inversions" tab: chord, variant and inversion |

## Reference: chord formulas

| Type | Steps | Degrees |
|---|---|---|
| Major | 4, 7 | 1 3 5 |
| Minor | 3, 7 | 1 b3 5 |
| 5 | 7 | 1 5 |
| 7 | 4, 7, 10 | 1 3 5 b7 |
| dim | 3, 6 | 1 b3 b5 |
| dim7 | 3, 6, 9 | 1 b3 b5 bb7 |
| aug | 4, 8 | 1 3 #5 |
| sus2 | 2, 7 | 1 2 5 |
| sus4 | 5, 7 | 1 4 5 |
| maj7 | 4, 7, 11 | 1 3 5 7 |
| m7 | 3, 7, 10 | 1 b3 5 b7 |
| 7sus4 | 5, 7, 10 | 1 4 5 b7 |

12 roots x 12 types = 144 chords. Chord types are shown as a single "Variant" list, with no Triads/Other grouping.

## Decisions taken

- The app has three tabs: "Full chords" (11 chord types, scale strip), "Power chords" (the 5 chord) and "Chord inversions" (all 12 types, 144 chords, 480 inversions). Where older stories say "the Chord Explorer" they mean the Full chords tab, and the Power chords tab for the 5 chord. The tab, chord, instrument and inversion are in the address.
- Inversions come from `chord_inversions.md`, which has the bass note, the notes from bottom to top and the steps from the bass but no frets. The fretboard positions are generated: guitar and ukulele play a block of adjacent strings with the bass note lowest and every chord note present (fretted span of at most four frets, open strings only with low frets); bass shows exactly one dot per chord note, close together, the lowest being the bass note (US-1301 to US-1322).

- Under the variants the app shows the scale each chord is built from (US-1101 to US-1109), with a "Show other matching scales" switch that lists every scale or mode containing the chord's notes (US-1110 to US-1118), offered only with the theoretically correct note names: Major, sus2, sus4, maj7 and 5 use the major scale; Minor the natural minor; 7 and 7sus4 Mixolydian; m7 Dorian; dim Locrian; dim7 the whole-half diminished scale; aug the whole-tone scale.
- The "Triad only" toggle was dropped after the MVP build (the former epic 07, US-703 to US-708, is removed). The fretboard and legend always show every note of the chord.
- The theme can be set to System, Light or Dark in the settings (US-1008, US-1012, US-1013).
- The settings show links to the author's Spotify and LinkedIn pages (US-108).
- Chord types sit in one "Variant" list. The earlier Triads / Other chords grouping is dropped (US-701 and US-702 removed; US-405 rewritten).
- Note names are spelled correctly for the chosen root. Double accidentals (Ebb, F##) are handled by a visitor setting chosen in an unskippable first-visit modal and changeable in the settings (US-1201 to US-1210): "Simplified" shows the plain note (D) with the exact spelling in a tooltip; "Theoretically correct" shows Ebb with "Sounds like D" in the tooltip.
- Each dot shows the note (large) and the degree (small), with a colour per degree. Colour is never the only cue.
- No audio, no quizzes, no accounts in the MVP.
- Standard tuning only. Left-handed mode for every instrument. The ukulele is high G (re-entrant) only; no low G switch.
- No finger numbers on the dots.
- The note B is always "B", also in Polish. "H" is not used.
- Bass positions are generated, with the root on the E, A and D strings.
- Analytics data is kept for 12 months.
- Frets 0 to 15 on all instruments.
- Voicings are hand-curated from the reference screenshots for guitar and ukulele. Bass positions are generated from the formula.
- GA4 loads only after consent.

## Differences from the content sheet

The sheet "A Music Theory" is the source for the explanation text, with these changes. They need your approval.

1. It spells with sharps only (C minor = C, D#, G). The app uses C, Eb, G.
2. Its dim7 example is C, D#, F#, A. The app shows C, Eb, Gb, A (A is the plain name for Bbb).
3. It has no Polish version. A draft will be needed, then review by a native speaker. "Steps" becomes "polton" (semitone).
4. It gives one "sound" sentence per type. Each type also needs "What it is" and the relationship to other chords, as US-804 and US-807 expect.

## Open questions

- **Voicing screenshots:** in progress (from the product owner). Either one root plus open shapes, or everything.
- **GA4 retention:** GA4's own event-data retention is 2 or 14 months, not 12. Options: set 14 months and delete older data through the API or exports, or keep the 12-month promise in the privacy notice and automate the deletion (US-912).
