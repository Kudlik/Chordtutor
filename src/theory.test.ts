import { describe, expect, it } from 'vitest';
import { CHORD_FORMULAS, DEGREES, SCALE_OF, matchingScales, scaleNotes, CHORD_TYPES, ROOT_NAMES, chordNotes, rootPitchClass, spellDegree, stepsOf, type ChordType, type RootName } from './theory';
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

describe('scales shown under the variants', () => {
  const scale = (r: RootName, t: ChordType) => scaleNotes(r, SCALE_OF[t]).map((n) => n.name).join(' ');

  it('spells the scale of each chord type correctly', () => {
    expect(scale('D', 'Major')).toBe('D E F# G A B C#');
    expect(scale('C', 'Minor')).toBe('C D Eb F G Ab Bb');
    expect(scale('G', '7')).toBe('G A B C D E F');
    expect(scale('C', 'm7')).toBe('C D Eb F G A Bb');
    expect(scale('B', 'dim')).toBe('B C D E F G A');
    expect(scale('C', 'aug')).toBe('C D E F# G# Bb');
    expect(scale('C', 'dim7')).toBe('C D Eb F Gb Ab A B');
    expect(scale('Db', 'Major')).toBe('Db Eb F Gb Ab Bb C');
    expect(scale('F#', 'Major')).toBe('F# G# A# B C# D# E#');
  });

  it('starts on the root and contains every note of the chord, for all 144 chords', () => {
    for (const r of ROOT_NAMES) {
      for (const t of CHORD_TYPES) {
        const notes = scaleNotes(r, SCALE_OF[t]);
        expect(notes[0].pc, `${r} ${t}`).toBe(rootPitchClass(r));
        const pcs = new Set(notes.map((n) => n.pc));
        for (const c of chordNotes(r, t)) expect(pcs.has(c.pc), `${r} ${t} lacks ${c.name}`).toBe(true);
        notes.forEach((n) => expect(n.name).toMatch(/^[A-G](#|b)?$/));
      }
    }
  });

  it('lists the default scale first, then every other scale that holds the chord', () => {
    for (const t of CHORD_TYPES) {
      const list = matchingScales(t);
      expect(list[0], t).toBe(SCALE_OF[t]);
      expect(new Set(list).size).toBe(list.length);
      for (const id of list) {
        const pcs = new Set(scaleNotes('C', id).map((n) => n.pc));
        for (const c of chordNotes('C', t)) expect(pcs.has(c.pc), `${t} in ${id}`).toBe(true);
      }
    }
  });

  it('finds the expected alternatives', () => {
    expect(matchingScales('Major')).toEqual(expect.arrayContaining(['major', 'lydian', 'mixolydian', 'majorPentatonic']));
    expect(matchingScales('Minor')).toEqual(expect.arrayContaining(['naturalMinor', 'dorian', 'phrygian', 'minorPentatonic', 'blues']));
    expect(matchingScales('7')).toEqual(expect.arrayContaining(['mixolydian', 'lydianDominant', 'diminishedHalfWhole']));
    expect(matchingScales('Major')).not.toContain('naturalMinor');
    expect(matchingScales('aug')).toContain('wholeTone');
  });

  it('spells the extra scales', () => {
    expect(scaleNotes('C', 'blues').map((n) => n.name).join(' ')).toBe('C Eb F Gb G Bb');
    expect(scaleNotes('A', 'minorPentatonic').map((n) => n.name).join(' ')).toBe('A C D E G');
    expect(scaleNotes('C', 'harmonicMinor').map((n) => n.name).join(' ')).toBe('C D Eb F G Ab B');
    expect(scaleNotes('C', 'lydian').map((n) => n.name).join(' ')).toBe('C D E F# G A B');
    expect(scaleNotes('C', 'diminishedHalfWhole').map((n) => n.name).join(' ')).toBe('C Db Eb E F# G A Bb');
  });
});
