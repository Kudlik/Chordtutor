import { describe, expect, it } from 'vitest';
import { CHORD_FORMULAS, DEGREES, CHORD_TYPES, ROOT_NAMES, chordNotes, rootPitchClass, spellDegree, stepsOf, type ChordType, type RootName } from './theory';
import raw from './data/chord_voicings.md?raw';

const names = (r: RootName, t: ChordType) => chordNotes(r, t).map((n) => n.name).join(',');

describe('chord spelling (US-502, 503, 403)', () => {
  const cases: [RootName, ChordType, string][] = [
    ['C', 'Major', 'C,E,G'], ['C', 'Minor', 'C,Eb,G'], ['C', '5', 'C,G'], ['C', '7', 'C,E,G,Bb'],
    ['C', 'dim', 'C,Eb,Gb'], ['C', 'dim7', 'C,Eb,Gb,A'], ['C', 'aug', 'C,E,G#'], ['C', 'sus2', 'C,D,G'],
    ['C', 'sus4', 'C,F,G'], ['C', 'maj7', 'C,E,G,B'], ['C', 'm7', 'C,Eb,G,Bb'], ['C', '7sus4', 'C,F,G,Bb'],
    ['C#', 'Major', 'C#,E#,G#'], ['Db', 'Major', 'Db,F,Ab'], ['F#', 'Major', 'F#,A#,C#'], ['Gb', 'Major', 'Gb,Bb,Db'],
    ['Eb', 'Minor', 'Eb,Gb,Bb'], ['D#', 'Minor', 'D#,F#,A#'], ['C#', 'dim7', 'C#,E,G,Bb'], ['G#', 'dim7', 'G#,B,D,F'],
    ['F#', 'maj7', 'F#,A#,C#,E#'], ['A', 'sus4', 'A,D,E'], ['G', 'Major', 'G,B,D'], ['G', '7', 'G,B,D,F'],
  ];
  it.each(cases)('%s %s = %s', (r, t, expected) => expect(names(r, t)).toBe(expected));

  it('shows double accidentals as plain notes with the exact spelling kept', () => {
    const n = spellDegree('C', 'bb7');
    expect(n.name).toBe('A');
    expect(n.exact).toBe('Bbb');
    expect(n.respelled).toBe(true);
  });

  it('never uses H', () => {
    for (const r of ROOT_NAMES) for (const t of CHORD_TYPES) expect(names(r, t)).not.toMatch(/H/);
  });
});

describe('all 144 combinations (US-1011)', () => {
  const sharpRoots = ROOT_NAMES.filter((r) => !r.includes('b'));
  it('has 12 roots x 12 types', () => {
    expect(new Set(ROOT_NAMES.map(rootPitchClass)).size).toBe(12);
    expect(CHORD_TYPES).toHaveLength(12);
  });

  it('every spelling lands on the right pitch class and is a plain note name', () => {
    for (const r of ROOT_NAMES) {
      for (const t of CHORD_TYPES) {
        chordNotes(r, t).forEach((n) => {
          expect(n.pc).toBe((rootPitchClass(r) + DEGREES[n.degree].steps) % 12);
          expect(n.name).toMatch(/^[A-G](#|b)?$/);
        });
      }
    }
  });

  it('matches the pitch classes listed in the voicing dataset for every chord', () => {
    const SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    let count = 0;
    for (const m of raw.matchAll(/^### (\S+) (\S+) \| notes: (.*) \| steps: (.*)$/gm)) {
      const root = m[1] as RootName;
      const type = m[2] as ChordType;
      const fromData = m[3].split(' ');
      const fromApp = chordNotes(root, type).map((n) => SHARPS[n.pc]);
      expect(fromApp, `${root} ${type}`).toEqual(fromData);
      expect(stepsOf(type)).toEqual(m[4].split(' ').slice(1).map(Number));
      count++;
    }
    expect(count).toBe(144);
    expect(sharpRoots).toHaveLength(12);
  });

  it('formulas have the agreed degrees', () => {
    expect(CHORD_FORMULAS.dim7).toEqual(['1', 'b3', 'b5', 'bb7']);
    expect(CHORD_FORMULAS['7sus4']).toEqual(['1', '4', '5', 'b7']);
  });
});
