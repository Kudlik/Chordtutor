import raw from './data/chord_inversions.md?raw';
import { CHORD_FORMULAS, DEGREES, rootPitchClass, type ChordType, type DegreeId, type RootName } from './theory';
import { MAX_FRET, type Instrument } from './instruments';
import type { Dot, Voicing } from './voicings';

export type InversionKind = 'root' | '1st' | '2nd' | '3rd';

export interface Inversion {
  /** 0 = root position, 1 = 1st inversion... */
  index: number;
  kind: InversionKind;
  /** Pitch class of the lowest note. */
  bassPc: number;
  /** The chord degree in the bass (1, 3, 5, b7...). */
  bassDegree: DegreeId;
  /** Pitch classes from the bottom note upward. */
  pcs: number[];
  /** Semitones above the bass for each note, bottom to top. */
  steps: number[];
}

const NOTE_PC: Record<string, number> = { C: 0, 'C#': 1, D: 2, 'D#': 3, E: 4, F: 5, 'F#': 6, G: 7, 'G#': 8, A: 9, 'A#': 10, B: 11 };
const KINDS: Record<string, InversionKind> = { 'root position': 'root', '1st inversion': '1st', '2nd inversion': '2nd', '3rd inversion': '3rd' };

const TABLE = new Map<string, Inversion[]>();
const key = (rootPc: number, type: ChordType) => `${rootPc}|${type}`;

(function parse() {
  let rootPc = -1;
  let type = '';
  for (const line of raw.split('\n')) {
    const header = /^### (\S+) (\S+) \| symbol:/.exec(line);
    if (header) {
      rootPc = NOTE_PC[header[1]];
      type = header[2];
      continue;
    }
    const m = /^Chord \| .+? \| (root position|\dst inversion|\dnd inversion|\drd inversion) \| slash: \S+ \| bass: (\S+) \(.*?\) \| notes bottom to top: ([^|]+) \| steps from bass: (.*)$/.exec(line);
    if (!m || rootPc < 0) continue;
    const pcs = m[3].trim().split(/\s+/).map((n) => NOTE_PC[n]);
    const steps = m[4].trim().split(/\s+/).map(Number);
    const list = TABLE.get(key(rootPc, type as ChordType)) ?? [];
    const bassPc = NOTE_PC[m[2]];
    const bassDegree = CHORD_FORMULAS[type as ChordType].find((d) => (rootPc + DEGREES[d].steps) % 12 === bassPc)!;
    list.push({ index: list.length, kind: KINDS[m[1]], bassPc, bassDegree, pcs, steps });
    TABLE.set(key(rootPc, type as ChordType), list);
  }
})();

export function inversionsFor(root: RootName, type: ChordType): Inversion[] {
  return TABLE.get(key(rootPitchClass(root), type)) ?? [];
}

/** Absolute pitch (semitones) of each open string, thickest/lowest first. */
const OPEN_PITCH: Record<Instrument, number[]> = {
  guitar: [40, 45, 50, 55, 59, 64],
  bass: [28, 33, 38, 43],
  ukulele: [67, 60, 64, 69], // re-entrant: the G is above the C
};

function* product(options: number[][]): Generator<number[]> {
  const pick: number[] = [];
  function* go(i: number): Generator<number[]> {
    if (i === options.length) {
      yield [...pick];
      return;
    }
    for (const f of options[i]) {
      pick[i] = f;
      yield* go(i + 1);
    }
  }
  yield* go(0);
}

function* productOf<T>(options: T[][]): Generator<T[]> {
  const pick: T[] = [];
  function* go(i: number): Generator<T[]> {
    if (i === options.length) {
      yield [...pick];
      return;
    }
    for (const o of options[i]) {
      pick[i] = o;
      yield* go(i + 1);
    }
  }
  yield* go(0);
}

const MAX_POSITIONS = 10;
const spanOf = (frets: number[]) => {
  const fretted = frets.filter((f) => f > 0);
  return fretted.length ? Math.max(...fretted) - Math.min(...fretted) : 0;
};
const lowestFret = (v: Voicing) => Math.min(...v.dots.map((d) => d.fret));

/** Keeps the first of two shapes that are the same grip 12 frets apart. */
function dropOctaveRepeats() {
  const seen = new Set<string>();
  return (v: Voicing) => {
    const frets = v.dots.map((d) => d.fret);
    const base = frets.includes(0) ? 0 : Math.min(...frets);
    const id = `${v.dots.map((d, i) => `${d.string}:${frets[i] - base}`).join(',')}`;
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  };
}

/** Positions of an inversion: the lowest sounding note is the bass of the inversion and every note of the chord is played. */
export function inversionPositions(instrument: Instrument, inversion: Inversion): Voicing[] {
  const open = OPEN_PITCH[instrument];
  const chordPcs = new Set(inversion.pcs);
  const source = 'generated from chord_inversions.md';

  if (instrument === 'bass') {
    // A bass plays one note at a time: one dot per chord note, close together, the lowest being the bass note.
    const pitch = (d: Dot) => open[d.string] + d.fret;
    const found: { voicing: Voicing; distinct: boolean; span: number }[] = [];
    const seen = new Set<string>();
    for (let lo = 0; lo <= MAX_FRET; lo++) {
      const options = inversion.pcs.map((pc) => {
        const dots: Dot[] = [];
        open.forEach((p, string) => {
          for (let fret = lo; fret <= Math.min(lo + 4, MAX_FRET); fret++) if ((p + fret) % 12 === pc) dots.push({ string, fret });
        });
        return dots;
      });
      if (options.some((o) => o.length === 0)) continue;
      for (const dots of productOf(options)) {
        const bass = dots[0]; // the first note of an inversion is its bass
        if (dots.slice(1).some((d) => pitch(d) <= pitch(bass))) continue;
        if (!dots.some((d) => d.fret === lo)) continue; // the window starts on a used fret, so shapes are not repeated
        const id = dots.map((d) => `${d.string}:${d.fret}`).sort().join(',');
        if (seen.has(id)) continue;
        seen.add(id);
        const frets = dots.map((d) => d.fret);
        found.push({
          voicing: { dots, muted: [], kind: 'inversion', source, bass },
          distinct: new Set(dots.map((d) => d.string)).size === dots.length,
          span: Math.max(...frets) - Math.min(...frets),
        });
      }
    }
    // Shapes with each note on its own string first, then the lowest on the neck.
    return found
      .sort((x, y) => Number(y.distinct) - Number(x.distinct) || lowestFret(x.voicing) - lowestFret(y.voicing) || x.span - y.span)
      .map((f) => f.voicing)
      .slice(0, MAX_POSITIONS);
  }

  // Guitar and ukulele: a block of adjacent strings is played, the rest muted.
  const found: Voicing[] = [];
  const n = open.length;
  for (let a = 0; a < n; a++) {
    for (let b = a + inversion.steps.length - 1; b < n; b++) {
      const strings = Array.from({ length: b - a + 1 }, (_, i) => a + i);
      const options = strings.map((s) => {
        const frets: number[] = [];
        for (let f = 0; f <= MAX_FRET; f++) if (chordPcs.has((open[s] + f) % 12)) frets.push(f);
        return frets;
      });
      for (const frets of product(options)) {
        if (spanOf(frets) > 4) continue;
        // An open string only combines with low frets, as in open chords.
        if (frets.includes(0) && Math.max(...frets) > 5) continue;
        const pitches = frets.map((f, i) => open[strings[i]] + f);
        const low = Math.min(...pitches);
        if (low % 12 !== inversion.bassPc) continue;
        if (new Set(pitches.map((p) => p % 12)).size < chordPcs.size) continue;
        const dots: Dot[] = frets.map((fret, i) => ({ string: strings[i], fret }));
        const muted = open.map((_, s) => s).filter((s) => !strings.includes(s));
        found.push({ dots, muted, kind: 'inversion', source, bass: dots[pitches.indexOf(low)] });
      }
    }
  }
  // Shapes with no doubled notes first (just the chord notes), then lowest on the neck.
  return found
    .sort((x, y) => x.dots.length - y.dots.length || lowestFret(x) - lowestFret(y))
    .filter(dropOctaveRepeats())
    .slice(0, MAX_POSITIONS);
}
