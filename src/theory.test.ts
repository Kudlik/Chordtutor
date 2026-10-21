import { describe, expect, it } from 'vitest';
import { CHORD_FORMULAS, DEGREES, SCALE_OF, matchingScales, scaleChips, scaleNotes, CHORD_TYPES, ROOT_NAMES, chordNotes, rootPitchClass, spellDegree, stepsOf, type ChordType, type RootName } from './theory';
import raw from './data/chord_voicings.md?raw';

const names = (r: RootName, t: ChordType) => chordNotes(r, t).map((n) => n.name).join(',');

describe('chord spelling (US-502, 503, 403)', () => {
  const cases: [RootName, ChordType, string][] = [
    ['C', 'Major', 'C,E,G'], ['C', 'Minor', 'C,Eb,G'], ['C', '5', 'C,G'], ['C', '7', 'C,E,G,Bb'],
    ['C', 'dim', 'C,Eb,Gb'], ['C', 'dim7', 'C,Eb,Gb,Bbb'], ['C', 'aug', 'C,E,G#'], ['C', 'sus2', 'C,D,G'],
    ['C', 'sus4', 'C,F,G'], ['C', 'maj7', 'C,E,G,B'], ['C', 'm7', 'C,Eb,G,Bb'], ['C', '7sus4', 'C,F,G,Bb'],
    ['C#', 'Major', 'C#,E#,G#'], ['Db', 'Major', 'Db,F,Ab'], ['F#', 'Major', 'F#,A#,C#'], ['Gb', 'Major', 'Gb,Bb,Db'],
    ['Eb', 'Minor', 'Eb,Gb,Bb'], ['D#', 'Minor', 'D#,F#,A#'], ['C#', 'dim7', 'C#,E,G,Bb'], ['G#', 'dim7', 'G#,B,D,F'], ['F', 'dim7', 'F,Ab,Cb,Ebb'], ['D#', 'Major', 'D#,F##,A#'], ['Gb', 'Minor', 'Gb,Bbb,Db'], ['A#', 'aug', 'A#,C##,E##'],
    ['F#', 'maj7', 'F#,A#,C#,E#'], ['A', 'sus4', 'A,D,E'], ['G', 'Major', 'G,B,D'], ['G', '7', 'G,B,D,F'],
  ];
  it.each(cases)('%s %s = %s', (r, t, expected) => expect(names(r, t)).toBe(expected));

  it('correct spelling uses double accidentals and keeps the plain note as the alternative', () => {
    const n = spellDegree('C', 'bb7', 'correct');
    expect(n).toMatchObject({ name: 'Bbb', alt: 'A', respelled: true });
    expect(spellDegree('D#', '3', 'correct')).toMatchObject({ name: 'F##', alt: 'G', respelled: true });
    expect(spellDegree('C', '3', 'correct')).toMatchObject({ name: 'E', alt: 'E', respelled: false });
  });

  it('simple spelling shows plain notes and keeps the exact spelling as the alternative', () => {
    expect(spellDegree('C', 'bb7', 'simple')).toMatchObject({ name: 'A', alt: 'Bbb', respelled: true });
    expect(spellDegree('D#', '3', 'simple')).toMatchObject({ name: 'G', alt: 'F##', respelled: true });
    const simple = (r: RootName, t: ChordType) => chordNotes(r, t, 'simple').map((n) => n.name).join(',');
    expect(simple('F', 'dim7')).toBe('F,Ab,Cb,D');
    expect(simple('C', 'dim7')).toBe('C,Eb,Gb,A');
    expect(simple('A#', 'aug')).toBe('A#,D,F#');
    for (const r of ROOT_NAMES) for (const t of CHORD_TYPES) chordNotes(r, t, 'simple').forEach((n) => expect(n.name).toMatch(/^[A-G](#|b)?$/));
  });

  it('both spellings describe the same sounds', () => {
    for (const r of ROOT_NAMES) for (const t of CHORD_TYPES) {
      const a = chordNotes(r, t, 'simple').map((n) => n.pc);
      const b = chordNotes(r, t, 'correct').map((n) => n.pc);
      expect(a).toEqual(b);
    }
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
          expect(n.name).toMatch(/^[A-G](##|#|bb|b)?$/);
          expect(n.alt).toMatch(/^[A-G](##|#|bb|b)?$/);
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
        notes.forEach((n) => expect(n.name).toMatch(/^[A-G](##|#|bb|b)?$/));
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

  it('a scale note that is a chord note uses the chord spelling', () => {
    const names = (r: RootName, t: ChordType, sp: 'simple' | 'correct') => scaleChips(r, SCALE_OF[t], chordNotes(r, t, sp), sp).map((n) => n.name).join(' ');
    expect(names('C', 'dim7', 'correct')).toBe('C D Eb F Gb Ab Bbb B');
    expect(names('C', 'dim7', 'simple')).toBe('C D Eb F Gb Ab A B');
    expect(names('Eb', 'dim7', 'correct')).toBe('Eb F Gb Ab Bbb Cb Dbb D');
    expect(names('D', 'Major', 'correct')).toBe('D E F# G A B C#');
    // Every highlighted note carries exactly the chord's name, in both spellings.
    for (const sp of ['simple', 'correct'] as const) {
      for (const r of ROOT_NAMES) for (const t of CHORD_TYPES) {
        const chord = chordNotes(r, t, sp);
        const chips = scaleChips(r, SCALE_OF[t], chord, sp);
        for (const c of chord) expect(chips.some((chip) => chip.tone?.pc === c.pc && chip.name === c.name), `${sp} ${r} ${t} ${c.name}`).toBe(true);
      }
    }
    // Other matching scales too.
    for (const r of ROOT_NAMES) for (const t of CHORD_TYPES) {
      const chord = chordNotes(r, t, 'correct');
      for (const id of matchingScales(t)) {
        const chips = scaleChips(r, id, chord, 'correct');
        for (const c of chord) expect(chips.some((chip) => chip.name === c.name), `${r} ${t} in ${id}: ${c.name}`).toBe(true);
      }
    }
  });

  it('gives every scale note its interval from the root', () => {
    const chips = (r: RootName, id: Parameters<typeof scaleNotes>[1]) => scaleChips(r, id, [], 'correct');
    const iv = (id: Parameters<typeof scaleNotes>[1]) => chips('C', id).map((c) => c.interval).join(' ');
    expect(iv('major')).toBe('1 2 3 4 5 6 7');
    expect(iv('naturalMinor')).toBe('1 2 b3 4 5 b6 b7');
    expect(iv('mixolydian')).toBe('1 2 3 4 5 6 b7');
    expect(iv('lydian')).toBe('1 2 3 #4 5 6 7');
    expect(iv('phrygian')).toBe('1 b2 b3 4 5 b6 b7');
    expect(iv('locrian')).toBe('1 b2 b3 4 b5 b6 b7');
    expect(iv('blues')).toBe('1 b3 4 b5 5 b7');
    // The intervals of every scale start on the root.
    for (const id of ['major', 'naturalMinor', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'locrian', 'harmonicMinor', 'melodicMinor', 'majorPentatonic', 'minorPentatonic', 'blues', 'lydianDominant', 'wholeTone', 'diminished', 'diminishedHalfWhole'] as const) {
      const c = chips('D', id);
      expect(c[0].interval).toBe('1');
    }
  });
});
