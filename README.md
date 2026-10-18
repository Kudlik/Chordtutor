# ChordTutor

ChordTutor is a free, no-signup web app that teaches **how chords are built**, not only which shapes to grab. Pick any root and chord type, and the fretboard shows every note with its name *and* its degree in the chord (1, b3, 5, b7...), so you learn the recipe behind the chord and can work out new ones yourself.

It is made for beginners and self-taught musicians who play guitar, bass or ukulele, in Polish or English.

## What it does (MVP)

- **Chord Explorer**: 12 roots x 12 chord types (Major, Minor, 7, 5, dim, dim7, aug, sus2, sus4, maj7, m7, 7sus4) = 144 chords.
- **Three instruments**: guitar (6 strings), bass (4) and ukulele (4, re-entrant high G), standard tuning only, frets 0 to 15, left-handed mode.
- **Notes and degrees on every dot**: note name large, degree small, one fixed colour per degree, root marked with a ring. Colour is never the only cue. Spelling follows the chosen root (C# Major = C#, E#, G#; Db Major = Db, F, Ab). On the first visit a modal asks whether to use **simplified** names (plain notes, for learning the basics) or **theoretically correct** ones (including double flats and sharps such as Ebb or F##); it can be changed any time in the settings.
- **Scale under the variants**: the scale each chord is built from (D Major shows D E F# G A B C# D), with the chord notes highlighted in the degree colours. A switch lists all other matching scales and modes (Dorian, Lydian, pentatonic, blues...).
- **Voicings**: up to three hand-curated, programmatically verified voicings per chord for guitar and ukulele (open shapes first, then movable shapes); bass positions are generated from the chord formula.
- **Written explanation** per chord type: what it is, how it sounds, how it is built (steps, degrees, worked example), related chords and a small glossary.
- **Polish and English** interface, following the browser language. The note B is always "B".
- **Installable PWA**, works offline after the first visit, responsive (the fretboard turns vertical on phones), theme setting (System, Light or Dark; System follows the OS).
- **Shareable URLs**: the chord and instrument are in the address (`?root=G&type=7&inst=ukulele`).
- **Privacy first**: Google Analytics 4 loads only after the visitor accepts a consent modal; the choice can be changed from the footer at any time.

Out of scope for the MVP: audio, quizzes, accounts, alternative tunings, low-G ukulele.

## Tech stack

Vite, React 19, TypeScript, vite-plugin-pwa, Vitest. No backend. Voicing data is parsed at build time from [`src/data/chord_voicings.md`](src/data/chord_voicings.md).

## Project layout

| Path | Purpose |
|---|---|
| `src/theory.ts` | Chord formulas, degrees, note spelling |
| `src/voicings.ts` | Voicing dataset parser and bass position generator |
| `src/components/` | Fretboard (SVG), explanation, dialogs |
| `src/i18n/` | English and Polish text; a missing Polish key fails the build |
| `src/analytics.ts` | Consent-gated GA4 |
| `features/` | The MVP backlog as Gherkin user stories (`@US-xxx`) |
| `BUGS.md` | Known bugs and the report template |
| `docs/` | Design mockups and the "A Music Theory" content sheet |

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # theory (all 144 chords), voicing data, translations, colour contrast
npm run build      # typecheck + production build
```

Copy `.env.example` to `.env.local` and set `VITE_GA_ID` to enable analytics. With it empty, nothing is ever loaded.

## Branches and deployment

| Branch | Purpose | Deployed to |
|---|---|---|
| `main` | Production | Vercel production |
| `staging` | Pre-release testing | Vercel preview for `staging` |

Work on feature branches, open a PR into `staging`, test the preview, then merge `staging` into `main`. GitHub Actions (`.github/workflows/ci.yml`) runs typecheck, tests and build on every push and PR to either branch. Vercel builds with `npm run build` and serves `dist` (see `vercel.json`).

## Decisions taken

- One flat "Variant" list for chord types; no Triads / Other grouping.
- Note names are spelled correctly for the chosen root. Double accidentals are a visitor choice: simplified (plain note, exact spelling in a tooltip) or theoretically correct (Ebb, F##, plain note in the tooltip), picked in an unskippable first-visit modal and changeable in the settings.
- No audio, quizzes or accounts. Standard tuning only. Frets 0 to 15 on all instruments. No finger numbers.
- Analytics data is kept for 12 months (see open questions).

## Differences from the content sheet

The explanation text derives from the "A Music Theory" sheet, with these changes that need approval:

1. The sheet spells with sharps only (C minor = C, D#, G). The app uses C, Eb, G.
2. The sheet's dim7 example is C, D#, F#, A. The app shows C, Eb, Gb, A (A is the plain name for Bbb).
3. The sheet has no Polish version. The Polish text is a draft and needs review by a native speaker.
4. The sheet gives one "sound" sentence per type. Each type also has "What it is" and a relationship to other chords.

## Open questions

- **Voicing review:** the voicings come from `chord_voicings.md` and are verified by tests to contain exactly the chord's notes. Fingerings were not checked by ear or by a teacher.
- **GA4 retention:** GA4 keeps event data for 2 or 14 months, not 12. Either set 14 months and delete older data via API/exports, or keep the 12-month promise in the privacy notice and automate deletion.
- **Colour-blind check:** degree colours are tested for text contrast (WCAG AA); a simulation for deuteranopia, protanopia and tritanopia still needs a manual review.
- **Credits:** the Settings screen mock shows Instagram and Spotify links; add the URLs when available.
