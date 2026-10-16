import { useEffect, useRef, useState } from 'react';
import { DEGREE_COLORS } from '../degreeColors';
import { MAX_FRET, TUNINGS, type Instrument } from '../instruments';
import type { TFunction } from '../i18n';
import type { SpelledNote } from '../theory';
import type { Voicing } from '../voicings';

interface Props {
  instrument: Instrument;
  voicing: Voicing | undefined;
  notes: SpelledNote[];
  left: boolean;
  vertical: boolean;
  chordName: string;
  voicingNumber: number;
  t: TFunction;
}

const INLAYS = [3, 5, 7, 9, 12, 15];
const PAD = 18; // board margin beyond the outer strings

interface Geo {
  w: number;
  h: number;
  /** Point for string `s` at the continuous neck position `u` (0 = nut, f - 0.5 = middle of fret f). */
  P: (s: number, u: number) => { x: number; y: number };
  /** Neck position of the open-string markers, left of / above the nut. */
  openU: number;
  /** Line across all strings at neck position `u`. */
  boundary: (u: number) => { x1: number; y1: number; x2: number; y2: number };
}

function geometry(n: number, vertical: boolean, left: boolean): Geo {
  if (!vertical) {
    const nut = 70, fw = 44, gap = 36, top = 36;
    const w = nut + MAX_FRET * fw + 40;
    const h = top + n * gap + 8;
    const mx = (x: number) => (left ? w - x : x);
    const sy = (s: number) => top + gap / 2 + (n - 1 - s) * gap; // thinnest string on top
    return {
      w, h, openU: -26 / fw,
      P: (s, u) => ({ x: mx(nut + u * fw), y: sy(s) }),
      boundary: (u) => ({ x1: mx(nut + u * fw), x2: mx(nut + u * fw), y1: sy(n - 1) - PAD, y2: sy(0) + PAD }),
    };
  }
  const nut = 84, fh = 40, gap = 46, margin = 36;
  const w = (n - 1) * gap + margin * 2 + 28;
  const h = nut + MAX_FRET * fh + 12;
  const mx = (x: number) => (left ? w - x : x);
  const sx = (s: number) => mx(margin + 28 + s * gap); // thickest string on the left
  return {
    w, h, openU: -28 / fh,
    P: (s, u) => ({ x: sx(s), y: nut + u * fh }),
    boundary: (u) => {
      const a = sx(0), b = sx(n - 1);
      return { x1: Math.min(a, b) - PAD, x2: Math.max(a, b) + PAD, y1: nut + u * fh, y2: nut + u * fh };
    },
  };
}

export function Fretboard({ instrument, voicing, notes, left, vertical, chordName, voicingNumber, t }: Props) {
  const tuning = TUNINGS[instrument];
  const n = tuning.length;
  const g = geometry(n, vertical, left);
  const byPc = new Map(notes.map((note) => [note.pc, note]));
  const isBass = instrument === 'bass';
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);

  // Close the tooltip when the chord or voicing changes, and when tapping outside a dot.
  useEffect(() => {
    setHover(null);
    setPinned(null);
  }, [voicing, notes]);
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (!(e.target as Element | null)?.closest?.('[data-dot]')) setPinned(null);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  const dots = (voicing?.dots ?? []).flatMap((d) => {
    const note = byPc.get((tuning[d.string].pc + d.fret) % 12);
    return note ? [{ ...d, note }] : [];
  });
  const played = new Set(dots.map((d) => d.string));
  const mutedStrings = isBass ? [] : tuning.map((_, i) => i).filter((i) => !played.has(i));

  const barre = voicing?.barre && dots.filter((d) => d.fret === voicing.barre!.fret).length > 1 ? voicing.barre : undefined;

  const description = () => {
    if (!voicing) return t('board.none');
    const head = t(isBass ? 'board.descBass' : 'board.desc', {
      instrument: t(`instrument.${instrument}` as 'instrument.guitar'),
      chord: chordName,
      n: voicingNumber,
    });
    const parts = tuning.map((s, i) => {
      const label = t('board.string', { n: i + 1, label: s.label });
      const here = dots.filter((d) => d.string === i).sort((a, b) => a.fret - b.fret);
      if (!here.length) return isBass ? '' : `${label}: ${t('board.muted')}`;
      const items = here.map(
        (d) => `${d.fret === 0 ? t('board.open') : t('board.fret', { n: d.fret })}, ${d.note.name}, ${d.note.degree}${d.note.degree === '1' ? ` (${t('board.root')})` : ''}`,
      );
      return `${label}: ${items.join(' / ')}`;
    });
    return `${head} ${parts.filter(Boolean).join('; ')}`;
  };

  const b0 = g.boundary(0), b1 = g.boundary(MAX_FRET);
  const board = {
    x: Math.min(b0.x1, b0.x2, b1.x1, b1.x2),
    y: Math.min(b0.y1, b0.y2, b1.y1, b1.y2),
    width: Math.abs(Math.max(b0.x1, b0.x2, b1.x1, b1.x2) - Math.min(b0.x1, b0.x2, b1.x1, b1.x2)),
    height: Math.abs(Math.max(b0.y1, b0.y2, b1.y1, b1.y2) - Math.min(b0.y1, b0.y2, b1.y1, b1.y2)),
  };

  const dotR = vertical ? 17 : 18;
  const openR = 15;
  const mid = (n - 1) / 2;
  const stringEnd = (s: number) => ({ a: g.P(s, 0), b: g.P(s, MAX_FRET) });

  return (
    <svg ref={svgRef} viewBox={`0 0 ${g.w} ${g.h}`} role="img" aria-label={description()} className={`fretboard${vertical ? ' vertical' : ''}`} style={{ width: '100%', maxWidth: g.w, height: 'auto', display: 'block', margin: '0 auto' }}>
      <g fontFamily="Roboto, system-ui, sans-serif" textAnchor="middle">
        <rect {...board} rx={4} fill="var(--board)" />

        {INLAYS.flatMap((f) => (f === 12 ? [mid - 1, mid + 1] : [mid]).map((s) => <circle key={`${f}-${s}`} cx={g.P(s, f - 0.5).x} cy={g.P(s, f - 0.5).y} r={6} fill="var(--fret-line)" opacity={0.7} />))}

        {Array.from({ length: MAX_FRET }, (_, i) => i + 1).map((f) => (
          <line key={f} {...g.boundary(f)} stroke="var(--fret-line)" strokeWidth={1.5} />
        ))}
        <line {...g.boundary(0)} stroke="var(--ink-variant)" strokeWidth={6} />

        {tuning.map((_, i) => {
          const { a, b } = stringEnd(i);
          return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="var(--outline)" strokeWidth={3 - (2 * i) / (n - 1)} />;
        })}

        {/* string names, beside the open markers */}
        {tuning.map((s, i) => {
          const p = g.P(i, g.openU);
          const at = vertical ? { x: p.x, y: p.y - 26 } : { x: left ? g.w - 14 : 14, y: p.y + 4 };
          return (
            <text key={i} {...at} fontSize={11} fontWeight={500} fill="var(--ink-variant)">
              {s.label}
            </text>
          );
        })}

        {/* fret numbers 0..15 */}
        {Array.from({ length: MAX_FRET + 1 }, (_, f) => {
          const p = g.P(vertical ? 0 : n - 1, f === 0 ? g.openU : f - 0.5);
          const at = vertical ? { x: left ? g.w - 12 : 12, y: p.y + 4 } : { x: p.x, y: 20 };
          return (
            <text key={f} {...at} fontSize={12} fill="var(--ink-variant)">
              {f}
            </text>
          );
        })}

        {barre && (() => {
          const a = g.P(barre.from, barre.fret - 0.5), b = g.P(barre.to, barre.fret - 0.5);
          return <rect x={Math.min(a.x, b.x) - dotR} y={Math.min(a.y, b.y) - dotR} width={Math.abs(a.x - b.x) + 2 * dotR} height={Math.abs(a.y - b.y) + 2 * dotR} rx={dotR} fill="var(--ink-variant)" opacity={0.35} />;
        })()}

        {mutedStrings.map((s) => {
          const p = g.P(s, g.openU);
          return (
            <text key={`x${s}`} x={p.x} y={p.y + 7} fontSize={20} fontWeight={500} fill="var(--ink-variant)">
              ×
            </text>
          );
        })}

        {dots.map((d, i) => {
          const open = d.fret === 0;
          const p = g.P(d.string, open ? g.openU : d.fret - 0.5);
          const col = DEGREE_COLORS[d.note.degree];
          const r = open ? openR : dotR;
          const degreeName = t(`degree.${d.note.degree}` as 'degree.1');
          return (
            <g
              key={i}
              data-dot
              tabIndex={0}
              role="button"
              aria-label={`${d.note.name}, ${d.note.degree}, ${degreeName}`}
              aria-pressed={pinned === i}
              style={{ cursor: 'pointer', outline: 'none' }}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(i)}
              onPointerLeave={(e) => e.pointerType === 'mouse' && setHover(null)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              onClick={() => setPinned((cur) => (cur === i ? null : i))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setPinned((cur) => (cur === i ? null : i));
                }
                if (e.key === 'Escape') setPinned(null);
              }}
            >
              <circle cx={p.x} cy={p.y} r={r + 8} fill="transparent" />
              {d.note.degree === '1' && <circle cx={p.x} cy={p.y} r={r + 5} fill="none" stroke={col.fill} strokeWidth={2} />}
              <circle cx={p.x} cy={p.y} r={r} fill={col.fill} stroke={open ? 'var(--outline)' : 'none'} strokeWidth={1.5} />
              <text x={p.x} y={p.y + (open ? 1 : 3)} fontSize={open ? 12 : vertical ? 14 : 16} fontWeight={500} fill={col.text} pointerEvents="none">
                {d.note.name}
              </text>
              <text x={p.x} y={p.y + (open ? 11 : 16)} fontSize={open ? 8 : 10} fill={col.text} pointerEvents="none">
                {d.note.degree}
              </text>
            </g>
          );
        })}

        {(() => {
          const idx = hover ?? pinned;
          const d = idx === null ? undefined : dots[idx];
          if (!d) return null;
          const open = d.fret === 0;
          const p = g.P(d.string, open ? g.openU : d.fret - 0.5);
          const r = (open ? openR : dotR) + 6;
          const line1 = `${d.note.degree} · ${t(`degree.${d.note.degree}` as 'degree.1')}`;
          const line2 = d.note.respelled ? t('board.respelled', { exact: d.note.exact }) : null;
          const w = Math.max(line1.length, line2?.length ?? 0) * 6.6 + 20;
          const h = line2 ? 44 : 28;
          const x = Math.min(Math.max(p.x - w / 2, 4), g.w - w - 4);
          const above = p.y - r - h - 4 >= 0;
          const y = above ? p.y - r - h : p.y + r + 4;
          return (
            <g pointerEvents="none" role="tooltip">
              <rect x={x} y={y} width={w} height={h} rx={8} fill="var(--ink)" />
              <text x={x + w / 2} y={y + 18} fontSize={12} fontWeight={500} fill="var(--bg)">
                {line1}
              </text>
              {line2 && (
                <text x={x + w / 2} y={y + 35} fontSize={11} fill="var(--bg)">
                  {line2}
                </text>
              )}
            </g>
          );
        })()}
      </g>
    </svg>
  );
}
