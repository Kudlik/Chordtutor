import { useMemo } from 'react';
import { DEGREE_COLORS } from '../degreeColors';
import type { TFunction } from '../i18n';
import { inversionPositions, inversionsFor } from '../inversions';
import { typesForTab, type AppState } from '../settings';
import { SYMBOL_SUFFIX, chordNotes, type ChordType, type Spelling } from '../theory';
import { ChordControls } from './ChordControls';
import { Fretboard } from './Fretboard';

interface Props {
  state: AppState;
  update: (patch: Partial<AppState>) => void;
  t: TFunction;
  spelling: Spelling;
  vertical: boolean;
}

const KIND_KEY = { root: 'inv.root', '1st': 'inv.1st', '2nd': 'inv.2nd', '3rd': 'inv.3rd' } as const;

/** The "Chord inversions" tab: pick a chord, its variant and its inversion. */
export function InversionsView({ state, update, t, spelling, vertical }: Props) {
  const { instrument, root, type } = state;
  const notes = useMemo(() => chordNotes(root, type, spelling), [root, type, spelling]);
  const inversions = useMemo(() => inversionsFor(root, type), [root, type]);
  const invIndex = Math.min(state.inversion, inversions.length - 1);
  const inversion = inversions[invIndex];
  const positions = useMemo(() => inversionPositions(instrument, inversion), [instrument, inversion]);
  const posIndex = Math.min(state.voicing, Math.max(0, positions.length - 1));

  const byPc = new Map(notes.map((n) => [n.pc, n]));
  const bassNote = byPc.get(inversion.bassPc)!;
  const symbol = `${root}${SYMBOL_SUFFIX[type]}`;
  const slashOf = (bassPc: number) => `${symbol}/${byPc.get(bassPc)!.name}`;
  const slash = invIndex === 0 ? symbol : slashOf(inversion.bassPc);
  const chordName = `${root} ${t(`type.${type}` as 'type.Major')}`;
  const bottomToTop = inversion.pcs.map((pc) => byPc.get(pc)!);
  const kindLabel = t(KIND_KEY[inversion.kind]);
  const symmetric = type === 'aug' || type === 'dim7';

  return (
    <main id="inversions">
      <div className="controls">
        <ChordControls
          t={t}
          instrument={instrument}
          root={root}
          type={type}
          types={typesForTab('inversions')}
          onInstrument={(id) => update({ instrument: id })}
          onRoot={(r) => update({ root: r })}
          onType={(ct: ChordType) => update({ type: ct })}
        />

        <div className="field">
          <div className="field-label" id="inversion-label">{t('inv.label')}</div>
          <div className="inversions" role="group" aria-labelledby="inversion-label">
            {inversions.map((inv, i) => (
              <button key={i} type="button" className={`inv-btn${i === invIndex ? ' selected' : ''}`} aria-pressed={i === invIndex} onClick={() => update({ inversion: i, voicing: 0 })}>
                <span className="inv-btn-kind">{t(KIND_KEY[inv.kind])}</span>
                <span className="inv-btn-slash">{i === 0 ? symbol : slashOf(inv.bassPc)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="stage">
        <div className="card">
          <div className="card-head">
            <div>
              <h2>{slash}</h2>
              <div className="notes-line">
                {chordName} · {kindLabel}
              </div>
              <div className="notes-line">{bottomToTop.map((n) => n.name).join(' – ')}</div>
            </div>
          </div>

          <Fretboard
            instrument={instrument}
            voicing={positions[posIndex]}
            notes={notes}
            left={state.left}
            spelling={spelling}
            vertical={vertical}
            chordName={`${slash} (${kindLabel})`}
            voicingNumber={posIndex + 1}
            t={t}
          />

          <div className="card-foot">
            <div className="voicings" role="group" aria-label={t('inv.position')}>
              <span className="field-label">{t('inv.position')}</span>
              {positions.map((_, i) => (
                <button key={i} type="button" className={`voicing-btn${i === posIndex ? ' selected' : ''}`} aria-pressed={i === posIndex} aria-label={t('inv.positionN', { n: i + 1 })} onClick={() => update({ voicing: i })}>
                  {i + 1}
                </button>
              ))}
            </div>
            <ul className="legend" aria-label={t('legend.label')}>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
                  <circle cx="14" cy="14" r="8" fill="none" stroke="var(--ink-variant)" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="12.5" fill="none" stroke="var(--ink)" strokeWidth="2" strokeDasharray="4 3" />
                </svg>
                <span>
                  <b>{t('inv.bass')}</b>: {bassNote.name}
                </span>
              </li>
              {bottomToTop.map((n) => {
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
          <p className="muted scale-hint">{t(instrument === 'bass' ? 'inv.bassHint' : 'inv.positionsHint')}</p>
        </div>

        <div className="explanation">
          <section>
            <h3>{t('exp.what')}</h3>
            <p>{t('inv.what')}</p>
            <p>{t('inv.bassIs', { note: bassNote.name, degree: t(`degree.${inversion.bassDegree}` as 'degree.1').toLowerCase(), chord: chordName })}</p>
          </section>
          <section>
            <h3>{t('exp.sound')}</h3>
            <p>{t(`inv.${inversion.kind === 'root' ? 'root' : inversion.kind}.sound` as 'inv.root.sound')}</p>
          </section>
          <section>
            <h3>{t('exp.built')}</h3>
            <dl className="built stacked">
              <dt>{t('inv.built')}</dt>
              <dd>{bottomToTop.map((n) => n.name).join(', ')}</dd>
              <dt>{t('inv.steps')}</dt>
              <dd>{inversion.steps.join(', ')}</dd>
              <dt>{t('inv.slash')}</dt>
              <dd>{slash}</dd>
            </dl>
            {invIndex > 0 && <p className="glossary-line">{t('inv.slashHelp', { example: slash, chord: chordName, note: bassNote.name })}</p>}
            {symmetric && <p className="glossary-line">{t('inv.symmetric')}</p>}
          </section>
        </div>
      </div>
    </main>
  );
}
