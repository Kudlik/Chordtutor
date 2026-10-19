import { describe, expect, it } from 'vitest';
import { CHORD_FORMULAS, CHORD_TYPES, DEGREES, ROOT_NAMES, SYMBOL_SUFFIX, rootPitchClass, type ChordType } from './theory';
import { INSTRUMENTS, MAX_FRET, TUNINGS } from './instruments';
import raw from './data/chord_inversions.md?raw';
import { inversionPositions, inversionsFor } from './inversions';

describe('inversion data from chord_inversions.md', () => {
  it('has the right number of inversions for every chord', () => {
    for (const r of ROOT_NAMES) for (const t of CHORD_TYPES) {
      expect(inversionsFor(r, t), `${r} ${t}`).toHaveLength(CHORD_FORMULAS[t].length);
    }
  });

  it('every inversion contains exactly the chord notes, with the right bass', () => {
    for (const r of ROOT_NAMES) for (const t of CHORD_TYPES) {
      const chord = new Set(CHORD_FORMULAS[t].map((d) => (rootPitchClass(r) + DEGREES[d].steps) % 12));
      inversionsFor(r, t).forEach((inv, i) => {
        expect(new Set(inv.pcs), `${r} ${t} #${i}`).toEqual(chord);
        expect(inv.pcs[0]).toBe(inv.bassPc);
        expect(inv.steps[0]).toBe(0);
        expect(inv.index).toBe(i);
        // steps match the notes
        inv.pcs.forEach((pc, k) => expect((inv.bassPc + inv.steps[k]) % 12, `${r} ${t} #${i}`).toBe(pc));
        // root position has the root in the bass, the others follow the formula order
        expect(inv.bassDegree).toBe(CHORD_FORMULAS[t][i]);
      });
    }
  });
});

describe('generated inversion positions', () => {
  it('every inversion of every chord has at least one position on every instrument', () => {
    const missing: string[] = [];
    for (const inst of INSTRUMENTS) for (const r of ROOT_NAMES) for (const t of CHORD_TYPES) {
      for (const inv of inversionsFor(r, t)) {
        const list = inversionPositions(inst, inv);
        if (!list.length) missing.push(`${inst} ${r} ${t} #${inv.index}`);
      }
    }
    expect(missing.slice(0, 20), `${missing.length} missing`).toEqual([]);
  });
});

describe('chord symbols', () => {
  it('match the symbols in chord_inversions.md for all 144 chords', () => {
    let count = 0;
    for (const m of raw.matchAll(/^### (\S+) (\S+) \| symbol: (\S+) \|/gm)) {
      expect(m[3], `${m[1]} ${m[2]}`).toBe(m[1] + SYMBOL_SUFFIX[m[2] as ChordType]);
      count++;
    }
    expect(count).toBe(144);
  });
});

describe('inversion positions are correct and playable', () => {
  it('lowest note is the bass, all chord notes are played, nothing else, within the rules', () => {
    for (const inst of INSTRUMENTS) for (const r of ROOT_NAMES) for (const t of CHORD_TYPES) {
      const chordPcs = new Set(CHORD_FORMULAS[t].map((d) => (rootPitchClass(r) + DEGREES[d].steps) % 12));
      for (const inv of inversionsFor(r, t)) {
        const list = inversionPositions(inst, inv);
        expect(list.length, `${inst} ${r} ${t} #${inv.index}`).toBeLessThanOrEqual(10);
        for (const v of list) {
          const label = `${inst} ${r} ${t} #${inv.index} ${v.dots.map((d) => d.fret).join(' ')}`;
          const pcs = new Set(v.dots.map((d) => (TUNINGS[inst].find((_, i) => i === d.string)!.pc + d.fret) % 12));
          expect(pcs, label).toEqual(chordPcs);
          expect(v.bass, label).toBeDefined();
          expect((TUNINGS[inst][v.bass!.string].pc + v.bass!.fret) % 12, label).toBe(inv.bassPc);
          for (const d of v.dots) expect(d.fret >= 0 && d.fret <= MAX_FRET, label).toBe(true);
          if (inst !== 'bass') {
            const fretted = v.dots.map((d) => d.fret).filter((f) => f > 0);
            if (fretted.length) expect(Math.max(...fretted) - Math.min(...fretted), label).toBeLessThanOrEqual(4);
            if (v.dots.some((d) => d.fret === 0)) expect(Math.max(...v.dots.map((d) => d.fret)), label).toBeLessThanOrEqual(5);
            for (const s of v.muted) expect(v.dots.some((d) => d.string === s), label).toBe(false);
          } else {
            const frets = v.dots.map((d) => d.fret);
            expect(Math.max(...frets) - Math.min(...frets), label).toBeLessThanOrEqual(4);
            expect(v.muted).toHaveLength(0);
            // One dot per chord note: a triad shows three notes, a tetrad four.
            expect(v.dots, label).toHaveLength(inv.steps.length);
          }
        }
      }
    }
  });
});
