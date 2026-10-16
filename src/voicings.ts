import raw from './data/chord_voicings.md?raw';
import { CHORD_FORMULAS, DEGREES, rootPitchClass, type ChordType, type RootName } from './theory';
import { MAX_FRET, TUNINGS, type Instrument } from './instruments';

export interface Dot {
  /** Index of the string, 0 = thickest/lowest. */
  string: number;
  fret: number;
}

export interface Voicing {
  dots: Dot[];
  /** Strings that are not played (never set for bass). */
  muted: number[];
  barre?: { fret: number; from: number; to: number };
  kind: 'open' | 'movable' | 'generated' | 'bass';
  source: string;
}

const SOURCE = 'chord_voicings.md';
const ROOT_PC: Record<string, number> = {};
for (const r of ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']) ROOT_PC[r] = rootPitchClass(r as RootName);

type Table = Map<string, Voicing[]>;
const key = (inst: Instrument, pc: number, type: ChordType) => `${inst}|${pc}|${type}`;

function parseDataset(text: string): Table {
  const table: Table = new Map();
  let currentRoot = -1;
  let currentType = '';
  for (const line of text.split('\n')) {
    const header = /^### (\S+) (\S+) \| notes:/.exec(line);
    if (header) {
      currentRoot = ROOT_PC[header[1]];
      currentType = header[2];
      continue;
    }
    const m = /^(Guitar|Ukulele) \| .+? \| voicing \d+ \| (open|movable|generated) \| (.*)$/.exec(line);
    if (!m || currentRoot < 0) continue;
    const inst = m[1].toLowerCase() as Instrument;
    const fields = m[3].split('|').map((s) => s.trim());
    const frets = fields[fields.length - 1].split(/\s+/).map((f) => (f === 'x' ? null : Number(f)));
    const barreMatch = /barre at fret (\d+)/.exec(m[3]);
    const dots: Dot[] = [];
    const muted: number[] = [];
    frets.forEach((f, i) => (f === null ? muted.push(i) : dots.push({ string: i, fret: f })));
    if (dots.some((d) => d.fret > MAX_FRET)) continue; // US-606: never exceed the fretboard
    let barre: Voicing['barre'];
    if (barreMatch) {
      const fret = Number(barreMatch[1]);
      const idx = frets.map((f, i) => (f === fret ? i : -1)).filter((i) => i >= 0);
      if (idx.length > 1) barre = { fret, from: idx[0], to: idx[idx.length - 1] };
    }
    const k = key(inst, currentRoot, currentType as ChordType);
    const list = table.get(k) ?? [];
    list.push({ dots, muted, barre, kind: m[2] as Voicing['kind'], source: SOURCE });
    table.set(k, list);
  }
  return table;
}

const TABLE = parseDataset(raw);

const lowestFret = (v: Voicing) => Math.min(...v.dots.filter((d) => d.fret > 0).map((d) => d.fret), 99);

function sortVoicings(list: Voicing[]): Voicing[] {
  // Open-position shapes first, then movable ones from the lowest on the neck to the highest.
  return [...list].sort((a, b) => {
    const ao = a.kind === 'open' ? 0 : 1;
    const bo = b.kind === 'open' ? 0 : 1;
    return ao - bo || lowestFret(a) - lowestFret(b);
  });
}

/** Bass positions: every chord tone inside a five-fret window, one position per root string. */
export function bassPositions(rootPc: number, type: ChordType): Voicing[] {
  const tones = new Set(CHORD_FORMULAS[type].map((d) => (rootPc + DEGREES[d].steps) % 12));
  const tuning = TUNINGS.bass;
  const out: Voicing[] = [];
  const seen = new Set<string>();
  for (let rootString = 0; rootString < 3; rootString++) {
    const rootFret = (rootPc - tuning[rootString].pc + 12) % 12;
    for (let lo = Math.max(0, rootFret - 4); lo <= rootFret; lo++) {
      const dots: Dot[] = [];
      tuning.forEach((s, string) => {
        for (let fret = lo; fret <= lo + 4 && fret <= MAX_FRET; fret++) {
          if (tones.has((s.pc + fret) % 12)) dots.push({ string, fret });
        }
      });
      const covered = new Set(dots.map((d) => (tuning[d.string].pc + d.fret) % 12));
      if (covered.size < tones.size) continue;
      const id = dots.map((d) => `${d.string}:${d.fret}`).join(',');
      if (!seen.has(id)) {
        seen.add(id);
        out.push({ dots, muted: [], kind: 'bass', source: 'generated from chord formula' });
      }
      break;
    }
  }
  return out.sort((a, b) => Math.min(...a.dots.map((d) => d.fret)) - Math.min(...b.dots.map((d) => d.fret)));
}

export function voicingsFor(instrument: Instrument, root: RootName, type: ChordType): Voicing[] {
  const pc = rootPitchClass(root);
  if (instrument === 'bass') return bassPositions(pc, type);
  return sortVoicings(TABLE.get(key(instrument, pc, type)) ?? []);
}
