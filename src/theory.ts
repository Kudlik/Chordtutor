export const CHORD_TYPES = ['Major', 'Minor', '7', '5', 'dim', 'dim7', 'aug', 'sus2', 'sus4', 'maj7', 'm7', '7sus4'] as const;
export type ChordType = (typeof CHORD_TYPES)[number];

export type DegreeId = '1' | '2' | 'b3' | '3' | '4' | 'b5' | '5' | '#5' | 'bb7' | 'b7' | '7';

interface DegreeDef {
  /** Semitones above the root. */
  steps: number;
  /** Generic interval number (1 = unison, 3 = third...), decides the letter name. */
  number: number;
}

export const DEGREES: Record<DegreeId, DegreeDef> = {
  '1': { steps: 0, number: 1 },
  '2': { steps: 2, number: 2 },
  b3: { steps: 3, number: 3 },
  '3': { steps: 4, number: 3 },
  '4': { steps: 5, number: 4 },
  b5: { steps: 6, number: 5 },
  '5': { steps: 7, number: 5 },
  '#5': { steps: 8, number: 5 },
  bb7: { steps: 9, number: 7 },
  b7: { steps: 10, number: 7 },
  '7': { steps: 11, number: 7 },
};

export const CHORD_FORMULAS: Record<ChordType, DegreeId[]> = {
  Major: ['1', '3', '5'],
  Minor: ['1', 'b3', '5'],
  '7': ['1', '3', '5', 'b7'],
  '5': ['1', '5'],
  dim: ['1', 'b3', 'b5'],
  dim7: ['1', 'b3', 'b5', 'bb7'],
  aug: ['1', '3', '#5'],
  sus2: ['1', '2', '5'],
  sus4: ['1', '4', '5'],
  maj7: ['1', '3', '5', '7'],
  m7: ['1', 'b3', '5', 'b7'],
  '7sus4': ['1', '4', '5', 'b7'],
};

/** Related chord types shown as "compare with" links. */
export const RELATED: Record<ChordType, ChordType[]> = {
  Major: ['Minor', 'maj7', '7'],
  Minor: ['Major', 'm7'],
  '7': ['Major', 'maj7'],
  '5': ['Major', 'Minor'],
  dim: ['Minor', 'dim7'],
  dim7: ['dim'],
  aug: ['Major'],
  sus2: ['Major', 'sus4'],
  sus4: ['Major', 'sus2', '7sus4'],
  maj7: ['Major', '7'],
  m7: ['Minor', '7'],
  '7sus4': ['sus4', '7'],
};

/** How notes are named: `simple` shows plain notes, `correct` also uses double flats and sharps (Ebb, F##). */
export type Spelling = 'simple' | 'correct';

export const ROOT_NAMES = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'] as const;
export type RootName = (typeof ROOT_NAMES)[number];

/** The 12 root buttons: pitch class and the names offered for it. */
export const ROOT_BUTTONS: { pc: number; names: RootName[] }[] = [
  { pc: 0, names: ['C'] },
  { pc: 1, names: ['C#', 'Db'] },
  { pc: 2, names: ['D'] },
  { pc: 3, names: ['D#', 'Eb'] },
  { pc: 4, names: ['E'] },
  { pc: 5, names: ['F'] },
  { pc: 6, names: ['F#', 'Gb'] },
  { pc: 7, names: ['G'] },
  { pc: 8, names: ['G#', 'Ab'] },
  { pc: 9, names: ['A'] },
  { pc: 10, names: ['A#', 'Bb'] },
  { pc: 11, names: ['B'] },
];

const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const NATURAL_PC = [0, 2, 4, 5, 7, 9, 11];
const SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const FLAT_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const mod = (n: number, m: number) => ((n % m) + m) % m;

export function rootPitchClass(root: RootName): number {
  const letter = LETTERS.indexOf(root[0]);
  const acc = root.endsWith('#') ? 1 : root.endsWith('b') ? -1 : 0;
  return mod(NATURAL_PC[letter] + acc, 12);
}

export interface SpelledNote extends SpelledPitch {
  degree: DegreeId;
}

export interface SpelledPitch {
  pc: number;
  /** Name shown to the user, depending on the chosen spelling. */
  name: string;
  /** The other name for the same note: the plain note in "correct" mode, the exact spelling in "simple" mode. */
  alt: string;
  /** True when the exact spelling has a double accidental, so the two names differ. */
  respelled: boolean;
}

/** Spell the note `steps` semitones above the root, using the letter `number` - 1 letters above the root's. */
function spellInterval(root: RootName, steps: number, number: number, spelling: Spelling): SpelledPitch {
  const pc = mod(rootPitchClass(root) + steps, 12);
  const letterIdx = mod(LETTERS.indexOf(root[0]) + number - 1, 7);
  const diff = mod(pc - NATURAL_PC[letterIdx] + 6, 12) - 6;
  const exact = LETTERS[letterIdx] + (diff > 0 ? '#'.repeat(diff) : 'b'.repeat(-diff));
  const respelled = Math.abs(diff) >= 2;
  const useFlats = diff < 0;
  const plain = respelled ? (useFlats ? FLAT_NAMES : SHARP_NAMES)[pc] : exact;
  return spelling === 'correct' ? { pc, name: exact, alt: plain, respelled } : { pc, name: plain, alt: exact, respelled };
}

export function spellDegree(root: RootName, degree: DegreeId, spelling: Spelling = 'correct'): SpelledNote {
  const { steps, number } = DEGREES[degree];
  return { ...spellInterval(root, steps, number, spelling), degree };
}

export type ScaleId =
  | 'major' | 'naturalMinor' | 'dorian' | 'phrygian' | 'lydian' | 'mixolydian' | 'locrian'
  | 'harmonicMinor' | 'melodicMinor' | 'majorPentatonic' | 'minorPentatonic' | 'blues'
  | 'lydianDominant' | 'wholeTone' | 'diminished' | 'diminishedHalfWhole';

/** Scale intervals as [semitones above the root, letter number]. */
const SCALES: Record<ScaleId, [number, number][]> = {
  major: [[0, 1], [2, 2], [4, 3], [5, 4], [7, 5], [9, 6], [11, 7]],
  naturalMinor: [[0, 1], [2, 2], [3, 3], [5, 4], [7, 5], [8, 6], [10, 7]],
  dorian: [[0, 1], [2, 2], [3, 3], [5, 4], [7, 5], [9, 6], [10, 7]],
  phrygian: [[0, 1], [1, 2], [3, 3], [5, 4], [7, 5], [8, 6], [10, 7]],
  lydian: [[0, 1], [2, 2], [4, 3], [6, 4], [7, 5], [9, 6], [11, 7]],
  mixolydian: [[0, 1], [2, 2], [4, 3], [5, 4], [7, 5], [9, 6], [10, 7]],
  locrian: [[0, 1], [1, 2], [3, 3], [5, 4], [6, 5], [8, 6], [10, 7]],
  harmonicMinor: [[0, 1], [2, 2], [3, 3], [5, 4], [7, 5], [8, 6], [11, 7]],
  melodicMinor: [[0, 1], [2, 2], [3, 3], [5, 4], [7, 5], [9, 6], [11, 7]],
  majorPentatonic: [[0, 1], [2, 2], [4, 3], [7, 5], [9, 6]],
  minorPentatonic: [[0, 1], [3, 3], [5, 4], [7, 5], [10, 7]],
  blues: [[0, 1], [3, 3], [5, 4], [6, 5], [7, 5], [10, 7]],
  lydianDominant: [[0, 1], [2, 2], [4, 3], [6, 4], [7, 5], [9, 6], [10, 7]],
  wholeTone: [[0, 1], [2, 2], [4, 3], [6, 4], [8, 5], [10, 7]],
  // Whole-half diminished: the scale that contains dim7.
  diminished: [[0, 1], [2, 2], [3, 3], [5, 4], [6, 5], [8, 6], [9, 6], [11, 7]],
  // Half-whole diminished: the dominant diminished scale.
  diminishedHalfWhole: [[0, 1], [1, 2], [3, 3], [4, 3], [6, 4], [7, 5], [9, 6], [10, 7]],
};

/** The scale shown for each chord type: the one the chord is built from. */
export const SCALE_OF: Record<ChordType, ScaleId> = {
  Major: 'major',
  Minor: 'naturalMinor',
  '7': 'mixolydian',
  '5': 'major',
  dim: 'locrian',
  dim7: 'diminished',
  aug: 'wholeTone',
  sus2: 'major',
  sus4: 'major',
  maj7: 'major',
  m7: 'dorian',
  '7sus4': 'mixolydian',
};

/** Scales that contain every note of the chord type, the default scale first. */
export function matchingScales(type: ChordType): ScaleId[] {
  const chordSteps = CHORD_FORMULAS[type].map((d) => DEGREES[d].steps);
  const fits = (id: ScaleId) => chordSteps.every((st) => SCALES[id].some(([steps]) => steps === st));
  const first = SCALE_OF[type];
  return [first, ...(Object.keys(SCALES) as ScaleId[]).filter((id) => id !== first && fits(id))];
}

/** Notes of the scale starting on the root, without the repeated octave note. */
export function scaleNotes(root: RootName, scale: ScaleId, spelling: Spelling = 'correct'): SpelledPitch[] {
  return SCALES[scale].map(([steps, number]) => spellInterval(root, steps, number, spelling));
}

export interface ScaleChip extends SpelledPitch {
  /** The chord note this scale note is, when it is one. */
  tone?: SpelledNote;
  /** Interval from the root as a degree: 1, 2, b3, #4, 5, b7... */
  interval: string;
}

const MAJOR_STEPS: Record<number, number> = { 1: 0, 2: 2, 3: 4, 4: 5, 5: 7, 6: 9, 7: 11 };

/** The interval of a scale note from the root, written like the chord degrees. */
function intervalLabel(steps: number, number: number): string {
  const diff = steps - MAJOR_STEPS[number];
  return (diff < 0 ? 'b'.repeat(-diff) : '#'.repeat(diff)) + number;
}

/** Scale notes for display. A scale note that is also a chord note takes the chord's spelling,
 *  so the scale and the fretboard always agree (e.g. C dim7 shows Bbb, not A, in its scale). */
export function scaleChips(root: RootName, scale: ScaleId, chord: SpelledNote[], spelling: Spelling): ScaleChip[] {
  const byPc = new Map(chord.map((n) => [n.pc, n]));
  const def = SCALES[scale];
  return scaleNotes(root, scale, spelling).map((n, i) => {
    const interval = intervalLabel(def[i][0], def[i][1]);
    const tone = byPc.get(n.pc);
    return tone ? { pc: n.pc, name: tone.name, alt: tone.alt, respelled: tone.respelled, tone, interval } : { ...n, interval };
  });
}

export function chordNotes(root: RootName, type: ChordType, spelling: Spelling = 'correct'): SpelledNote[] {
  return CHORD_FORMULAS[type].map((d) => spellDegree(root, d, spelling));
}

export function stepsOf(type: ChordType): number[] {
  return CHORD_FORMULAS[type].slice(1).map((d) => DEGREES[d].steps);
}

/** Suffix of the chord symbol: C, Cm, C7, C5, Cdim, Cdim7, Caug, Csus2, Csus4, Cmaj7, Cm7, C7sus4. */
export const SYMBOL_SUFFIX: Record<ChordType, string> = {
  Major: '', Minor: 'm', '7': '7', '5': '5', dim: 'dim', dim7: 'dim7', aug: 'aug', sus2: 'sus2', sus4: 'sus4', maj7: 'maj7', m7: 'm7', '7sus4': '7sus4',
};

export function isBlackKey(pc: number): boolean {
  return [1, 3, 6, 8, 10].includes(pc);
}
