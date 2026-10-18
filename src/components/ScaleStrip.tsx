import { DEGREE_COLORS } from '../degreeColors';
import type { TFunction } from '../i18n';
import { SCALE_OF, scaleNotes, type RootName, type SpelledNote } from '../theory';
import type { ChordType } from '../theory';

interface Props {
  root: RootName;
  type: ChordType;
  /** Notes of the selected chord; the matching scale notes are highlighted. */
  chord: SpelledNote[];
  t: TFunction;
}

export function ScaleStrip({ root, type, chord, t }: Props) {
  const scale = SCALE_OF[type];
  const notes = scaleNotes(root, scale);
  // Repeat the root an octave higher, so the scale reads D E F# G A B C# D.
  const shown = [...notes, notes[0]];
  const byPc = new Map(chord.map((n) => [n.pc, n]));

  return (
    <div className="field">
      <div className="field-label" id="scale-label">
        {t('scale.label')}: {root} {t(`scale.${scale}` as 'scale.major')}
      </div>
      <ol className="scale" aria-labelledby="scale-label">
        {shown.map((n, i) => {
          const tone = byPc.get(n.pc);
          const col = tone ? DEGREE_COLORS[tone.degree] : undefined;
          return (
            <li
              key={i}
              className={tone ? 'scale-note chord-tone' : 'scale-note'}
              style={col ? { background: col.fill, color: col.text } : undefined}
              title={n.respelled ? t('board.respelled', { exact: n.exact }) : undefined}
            >
              {n.name}
              {tone && <span className="sr-only"> ({t('scale.chordTone')})</span>}
            </li>
          );
        })}
      </ol>
      <p className="muted scale-hint">{t('scale.hint')}</p>
    </div>
  );
}
