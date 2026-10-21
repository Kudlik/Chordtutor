import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { DEGREE_COLORS } from '../degreeColors';
import type { TFunction } from '../i18n';
import { altNoteText } from '../spelling';
import { SCALE_OF, matchingScales, scaleChips, type ChordType, type RootName, type ScaleId, type Spelling, type SpelledNote } from '../theory';

interface Props {
  root: RootName;
  type: ChordType;
  /** Notes of the selected chord; the matching scale notes are highlighted. */
  chord: SpelledNote[];
  spelling: Spelling;
  t: TFunction;
}

function ScaleRow({ root, scale, chord, spelling, t, labelId }: { root: RootName; scale: ScaleId; chord: SpelledNote[]; spelling: Spelling; t: TFunction; labelId: string }) {
  const notes = scaleChips(root, scale, chord, spelling);
  // Repeat the root an octave higher, so the scale reads D E F# G A B C# D.
  const shown = [...notes, { ...notes[0], interval: '8' }];
  const listRef = useRef<HTMLOListElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const [tipLeft, setTipLeft] = useState(0);
  const active = hover ?? pinned;

  // Close the tooltip when the scale changes, and when tapping outside a note.
  useEffect(() => {
    setHover(null);
    setPinned(null);
  }, [root, scale, spelling]);
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (!(e.target as Element | null)?.closest?.('[data-chip]')) setPinned(null);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  // Centre the tooltip over its note, but keep it inside the row.
  useLayoutEffect(() => {
    const list = listRef.current;
    const tip = tipRef.current;
    if (active === null || !list || !tip) return;
    const chip = list.children[active] as HTMLElement;
    const center = chip.offsetLeft + chip.offsetWidth / 2;
    const left = Math.min(Math.max(center - tip.offsetWidth / 2, 0), Math.max(0, list.clientWidth - tip.offsetWidth));
    setTipLeft(left);
  }, [active, shown.length]);

  const toggle = (i: number) => setPinned((cur) => (cur === i ? null : i));
  const nameOf = (interval: string) => t(`degree.${interval}` as 'degree.1');
  const lines = (i: number): string[] => {
    const n = shown[i];
    const out = [`${n.interval} · ${nameOf(n.interval)}`];
    if (n.tone && n.tone.degree !== n.interval && !(n.interval === '8' && n.tone.degree === '1')) out.push(t('scale.chordNote', { degree: `${n.tone.degree} · ${nameOf(n.tone.degree)}` }));
    if (n.respelled) out.push(altNoteText(t, spelling, n.alt));
    return out;
  };

  return (
    <div className="scale-wrap">
      <ol className="scale" aria-labelledby={labelId} ref={listRef}>
        {shown.map((n, i) => {
          const tone = n.tone;
          const col = tone ? DEGREE_COLORS[tone.degree] : undefined;
          return (
            <li key={i} className="scale-cell">
              <span
                data-chip
                role="button"
                tabIndex={0}
                aria-pressed={pinned === i}
                aria-label={`${n.name}, ${n.interval}, ${nameOf(n.interval)}${tone ? `, ${t('scale.chordTone')}` : ''}`}
                className={tone ? 'scale-note chord-tone' : 'scale-note'}
                style={col ? { background: col.fill, color: col.text } : undefined}
                onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(i)}
                onPointerLeave={(e) => e.pointerType === 'mouse' && setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(i);
                  }
                  if (e.key === 'Escape') setPinned(null);
                }}
              >
                {n.name}
              </span>
            </li>
          );
        })}
      </ol>
      {active !== null && (
        <div ref={tipRef} className="scale-tip" role="tooltip" style={{ left: tipLeft }}>
          {lines(active).map((line, i) => (
            <div key={i} className={i === 0 ? 'scale-tip-main' : 'scale-tip-extra'}>
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ScaleStrip({ root, type, chord, spelling, t }: Props) {
  const [showOthers, setShowOthers] = useState(false);
  const main = SCALE_OF[type];
  // Other scales are only offered with the theoretically correct note names.
  const canShowOthers = spelling === 'correct';
  const others = canShowOthers ? matchingScales(type).filter((id) => id !== main) : [];
  const label = (id: ScaleId) => `${root} ${t(`scale.${id}` as 'scale.major')}`;

  return (
    <div className="field">
      <div className="field-label" id="scale-label">
        {t('scale.label')}: {label(main)}
      </div>
      <ScaleRow root={root} scale={main} chord={chord} spelling={spelling} t={t} labelId="scale-label" />
      <p className="muted scale-hint">{t('scale.hint')}</p>

      {others.length > 0 && (
        <label className="check">
          <input type="checkbox" checked={showOthers} onChange={(e) => setShowOthers(e.target.checked)} />
          <span>{t('scale.showOthers')}</span>
        </label>
      )}

      {canShowOthers && showOthers && (
        <section aria-label={t('scale.othersHeading')} className="other-scales">
          <div className="field-label">{t('scale.othersHeading')}</div>
          {others.map((id) => (
            <div key={id} className="other-scale">
              <div className="scale-name" id={`scale-${id}`}>
                {label(id)}
              </div>
              <ScaleRow root={root} scale={id} chord={chord} spelling={spelling} t={t} labelId={`scale-${id}`} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
