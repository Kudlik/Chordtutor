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
  /** Name shown to the user: double accidentals become the plain enharmonic note. */
  name: string;
  /** Theoretically correct spelling, e.g. "Bbb". */
  exact: string;
  /** True when `name` differs from `exact`. */
  respelled: boolean;
}

/** Spell the note `steps` semitones above the root, using the letter `number` - 1 letters above the root's. */
function spellInterval(root: RootName, steps: number, number: number): SpelledPitch {
  const pc = mod(rootPitchClass(root) + steps, 12);
  const letterIdx = mod(LETTERS.indexOf(root[0]) + number - 1, 7);
  const diff = mod(pc - NATURAL_PC[letterIdx] + 6, 12) - 6;
  const exact = LETTERS[letterIdx] + (diff > 0 ? '#'.repeat(diff) : 'b'.repeat(-diff));
  if (Math.abs(diff) < 2) return { pc, name: exact, exact, respelled: false };
  const useFlats = root.endsWith('b') || root === 'F';
  return { pc, name: (useFlats ? FLAT_NAMES : SHARP_NAMES)[pc], exact, respelled: true };
}

export function spellDegree(root: RootName, degree: DegreeId): SpelledNote {
  const { steps, number } = DEGREES[degree];
  return { ...spellInterval(root, steps, number), degree };
}

export type ScaleId = 'major' | 'naturalMinor' | 'dorian' | 'mixolydian' | 'locrian' | 'wholeTone' | 'diminished';

/** Scale intervals as [semitones above the root, letter number]. */
const SCALES: Record<ScaleId, [number, number][]> = {
  major: [[0, 1], [2, 2], [4, 3], [5, 4], [7, 5], [9, 6], [11, 7]],
  naturalMinor: [[0, 1], [2, 2], [3, 3], [5, 4], [7, 5], [8, 6], [10, 7]],
  dorian: [[0, 1], [2, 2], [3, 3], [5, 4], [7, 5], [9, 6], [10, 7]],
  mixolydian: [[0, 1], [2, 2], [4, 3], [5, 4], [7, 5], [9, 6], [10, 7]],
  locrian: [[0, 1], [1, 2], [3, 3], [5, 4], [6, 5], [8, 6], [10, 7]],
  wholeTone: [[0, 1], [2, 2], [4, 3], [6, 4], [8, 5], [10, 7]],
  // Whole-half diminished: the scale that contains dim7.
  diminished: [[0, 1], [2, 2], [3, 3], [5, 4], [6, 5], [8, 6], [9, 6], [11, 7]],
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

/** Notes of the scale starting on the root, without the repeated octave note. */
export function scaleNotes(root: RootName, scale: ScaleId): SpelledPitch[] {
  return SCALES[scale].map(([steps, number]) => spellInterval(root, steps, number));
}

export function chordNotes(root: RootName, type: ChordType): SpelledNote[] {
  return CHORD_FORMULAS[type].map((d) => spellDegree(root, d));
}

export function stepsOf(type: ChordType): number[] {
  return CHORD_FORMULAS[type].slice(1).map((d) => DEGREES[d].steps);
}

export function isBlackKey(pc: number): boolean {
  return [1, 3, 6, 8, 10].includes(pc);
}
