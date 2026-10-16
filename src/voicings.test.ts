import { describe, expect, it } from 'vitest';
import { CHORD_FORMULAS, CHORD_TYPES, DEGREES, ROOT_NAMES, rootPitchClass } from './theory';
import { INSTRUMENTS, MAX_FRET, TUNINGS } from './instruments';
import { voicingsFor } from './voicings';

describe('voicing data (US-607, 608, 606)', () => {
  for (const instrument of INSTRUMENTS) {
    it(`${instrument}: every chord has at least one correct voicing within frets 0-${MAX_FRET}`, () => {
      for (const root of ROOT_NAMES) {
        for (const type of CHORD_TYPES) {
          const list = voicingsFor(instrument, root, type);
          const label = `${instrument} ${root} ${type}`;
          expect(list.length, label).toBeGreaterThan(0);
          const rootPc = rootPitchClass(root);
          const chordPcs = CHORD_FORMULAS[type].map((d) => (rootPc + DEGREES[d].steps) % 12);
          const fifth = (rootPc + 7) % 12;
          for (const v of list) {
            const pcs = new Set(v.dots.map((d) => (TUNINGS[instrument][d.string].pc + d.fret) % 12));
            // Every sounding note belongs to the chord and the root is present.
            for (const pc of pcs) expect(chordPcs, label).toContain(pc);
            expect(pcs.has(rootPc), label).toBe(true);
            // Only the fifth of four-note chords may be omitted.
            for (const pc of chordPcs) if (!pcs.has(pc)) expect(pc === fifth && chordPcs.length === 4, `${label} missing ${pc}`).toBe(true);
            for (const d of v.dots) expect(d.fret >= 0 && d.fret <= MAX_FRET, label).toBe(true);
            // A string is never sounding and muted at once.
            for (const s of v.muted) expect(v.dots.some((d) => d.string === s), label).toBe(false);
            if (instrument === 'bass') {
              expect(v.muted).toHaveLength(0);
              const frets = v.dots.map((d) => d.fret);
              expect(Math.max(...frets) - Math.min(...frets), label).toBeLessThanOrEqual(4);
            }
          }
        }
      }
    });
  }

  it('lists open-position voicings first (US-604)', () => {
    const list = voicingsFor('guitar', 'C', 'Major');
    expect(list[0].kind).toBe('open');
  });

  it('generates ukulele power chords on two adjacent strings (US-613)', () => {
    for (const root of ['A', 'A#', 'B', 'G#'] as const) {
      const [v] = voicingsFor('ukulele', root, '5');
      expect(v.dots).toHaveLength(2);
      expect(Math.abs(v.dots[0].string - v.dots[1].string)).toBe(1);
      expect(v.muted).toHaveLength(2);
    }
  });
});
