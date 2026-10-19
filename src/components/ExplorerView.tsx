import { useMemo } from 'react';
import { DEGREE_COLORS } from '../degreeColors';
import type { TFunction } from '../i18n';
import { typesForTab, type AppState } from '../settings';
import { chordNotes, type ChordType, type Spelling } from '../theory';
import { voicingsFor } from '../voicings';
import { ChordControls } from './ChordControls';
import { Explanation } from './Explanation';
import { Fretboard } from './Fretboard';
import { ScaleStrip } from './ScaleStrip';

interface Props {
  state: AppState;
  update: (patch: Partial<AppState>) => void;
  t: TFunction;
  spelling: Spelling;
  vertical: boolean;
}

/** The "Full chords" and "Power chords" tabs: the chord, its voicings and an explanation. */
export function ExplorerView({ state, update, t, spelling, vertical }: Props) {
  const { instrument, root, type } = state;
  const types = typesForTab(state.tab);
  const notes = useMemo(() => chordNotes(root, type, spelling), [root, type, spelling]);
  const voicings = useMemo(() => voicingsFor(instrument, root, type), [instrument, root, type]);
  const voicingIndex = Math.min(state.voicing, Math.max(0, voicings.length - 1));
  const title = `${root} ${t(`type.${type}` as 'type.Major')}`;

  return (
    <main id={state.tab}>
      <div className="controls">
        <ChordControls
          t={t}
          instrument={instrument}
          root={root}
          type={type}
          types={types}
          onInstrument={(id) => update({ instrument: id })}
          onRoot={(r) => update({ root: r })}
          onType={(ct: ChordType) => update({ type: ct })}
        />
        {state.tab === 'full' && <ScaleStrip root={root} type={type} chord={notes} spelling={spelling} t={t} />}
      </div>

      <div className="stage">
        <div className="card">
          <div className="card-head">
            <div>
              <h2>{title}</h2>
              <div className="notes-line">{notes.map((n) => n.name).join(' – ')}</div>
            </div>
          </div>

          <Fretboard
            instrument={instrument}
            voicing={voicings[voicingIndex]}
            notes={notes}
            left={state.left}
            spelling={spelling}
            vertical={vertical}
            chordName={title}
            voicingNumber={voicingIndex + 1}
            t={t}
          />

          <div className="card-foot">
            <div className="voicings" role="group" aria-label={t('voicing.label')}>
              <span className="field-label">{t('voicing.label')}</span>
              {voicings.map((_, i) => (
                <button key={i} type="button" className={`voicing-btn${i === voicingIndex ? ' selected' : ''}`} aria-pressed={i === voicingIndex} aria-label={t('voicing.n', { n: i + 1 })} onClick={() => update({ voicing: i })}>
                  {i + 1}
                </button>
              ))}
            </div>
            <ul className="legend" aria-label={t('legend.label')}>
              {notes.map((n) => {
                const col = DEGREE_COLORS[n.degree];
                return (
                  <li key={n.degree}>
                    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
                      {n.degree === '1' && <circle cx="14" cy="14" r="13" fill="none" stroke={col.fill} strokeWidth="2" />}
                      <circle cx="14" cy="14" r="9" fill={col.fill} />
                    </svg>
                    <span>
                      <b>{n.degree}</b> {t(`degree.${n.degree}` as 'degree.1')}: {n.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Explanation root={root} type={type} spelling={spelling} t={t} onSelectType={(ct) => update({ type: ct })} />
      </div>
    </main>
  );
}
