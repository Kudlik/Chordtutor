# ChordTutor: MVP backlog (Gherkin)

Each `.feature` file is one epic. Each `@US-xxx` tag is one user story. Every scenario is tagged `@mvp`.

| File | Epic |
|---|---|
| 01-app-shell | Access, responsive layout, PWA, offline |
| 02-language | Polish and English |
| 03-instrument-settings | Guitar, bass, ukulele, handedness |
| 04-chord-selection | Roots, variants, spelling choice |
| 05-chord-construction-display | Note and degree on every dot, colours, legend |
| 06-voicings | Voicings per instrument, transposition, data quality |
| 07-triad-view | "Triad only" toggle (dropped) |
| 08-chord-explanation | Written explanation per chord type |
| 09-analytics-consent | GA4 behind a consent modal |
| 10-accessibility-quality | Accessibility, performance, theory tests |

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

12 roots x 12 types = 144 chords. Chord types are shown as a single "Variant" list, with no Triads/Other grouping. The "Triad only" toggle was removed after the MVP build (07-triad-view is no longer in scope).

## Decisions taken

- Chord types sit in one "Variant" list. The earlier Triads / Other chords grouping is dropped (US-701 and US-702 removed; US-405 rewritten).
- Note names are spelled correctly for the chosen root. Double accidentals are shown as the plain enharmonic note, with a tooltip.
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
