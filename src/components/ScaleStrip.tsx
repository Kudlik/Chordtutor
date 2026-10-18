import { useState } from 'react';
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
  const shown = [...notes, notes[0]];
  return (
    <ol className="scale" aria-labelledby={labelId}>
      {shown.map((n, i) => {
        const tone = n.tone;
        const col = tone ? DEGREE_COLORS[tone.degree] : undefined;
        return (
          <li
            key={i}
            className={tone ? 'scale-note chord-tone' : 'scale-note'}
            style={col ? { background: col.fill, color: col.text } : undefined}
            title={n.respelled ? altNoteText(t, spelling, n.alt) : undefined}
          >
            {n.name}
            {tone && <span className="sr-only"> ({t('scale.chordTone')})</span>}
          </li>
        );
      })}
    </ol>
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
