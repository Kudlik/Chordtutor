import { useEffect, useMemo, useState } from 'react';
import { Explanation } from './components/Explanation';
import { ConsentDialog } from './components/ConsentDialog';
import { Fretboard } from './components/Fretboard';
import { Segmented } from './components/Segmented';
import { SettingsDialog } from './components/SettingsDialog';
import { DEGREE_COLORS } from './degreeColors';
import { getConsent } from './analytics';
import { makeT } from './i18n';
import { INSTRUMENTS, type Instrument } from './instruments';
import { useAppState } from './settings';
import {
  CHORD_TYPES, ROOT_BUTTONS, chordNotes, rootPitchClass,
  type ChordType, type RootName,
} from './theory';
import { voicingsFor } from './voicings';

/** Tabs of the main navigation. More can be added later (US-106). */
const TABS = [{ id: 'explorer', labelKey: 'nav.explorer' as const }];

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatches(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return matches;
}

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12l5 5L20 6" />
  </svg>
);

export function App() {
  const [state, update] = useAppState();
  const t = useMemo(() => makeT(state.lang), [state.lang]);
  const vertical = useMediaQuery('(max-width: 600px)');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consentOpen, setConsentOpen] = useState(() => getConsent() === null);
  const [firstVisit, setFirstVisit] = useState(() => getConsent() === null);

  const { instrument, root, type } = state;
  const notes = useMemo(() => chordNotes(root, type), [root, type]);
  const voicings = useMemo(() => voicingsFor(instrument, root, type), [instrument, root, type]);
  const voicingIndex = Math.min(state.voicing, Math.max(0, voicings.length - 1));
  const typeLabel = t(`type.${type}` as 'type.Major');
  const title = `${root} ${typeLabel}`;

  const selectRoot = (pc: number, names: RootName[]) => {
    if (rootPitchClass(root) !== pc) update({ root: names[0] });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>{t('app.title')}</h1>
        <nav aria-label={t('nav.main')}>
          {TABS.map((tab) => (
            <a key={tab.id} href={`#${tab.id}`} aria-current="page">
              {t(tab.labelKey)}
            </a>
          ))}
        </nav>
        <button type="button" className="icon-btn" aria-label={t('settings.open')} onClick={() => setSettingsOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
          </svg>
        </button>
      </header>

      <main id="explorer">
        <div className="controls">
          <Segmented<Instrument>
            label={t('instrument.label')}
            value={instrument}
            onChange={(id) => update({ instrument: id })}
            options={INSTRUMENTS.map((id) => ({ id, label: t(`instrument.${id}` as 'instrument.guitar') }))}
          />

          <div className="field">
            <div className="field-label" id="root-label">{t('root.label')}</div>
            <div className="roots" role="group" aria-labelledby="root-label">
              {ROOT_BUTTONS.map(({ pc, names }) => {
                const selected = rootPitchClass(root) === pc;
                const label = names.length === 2 ? `${names[0]}/${names[1]}` : names[0];
                return (
                  <button key={pc} type="button" className={`root-btn${selected ? ' selected' : ''}`} aria-pressed={selected} onClick={() => selectRoot(pc, names)}>
                    {label}
                  </button>
                );
              })}
            </div>
            {(() => {
              const names = ROOT_BUTTONS.find((b) => b.pc === rootPitchClass(root))!.names;
              if (names.length < 2) return null;
              return (
                <div className="spelling">
                  <Segmented<RootName> label={t('root.spelling')} value={root} onChange={(id) => update({ root: id })} options={names.map((n) => ({ id: n, label: n }))} />
                </div>
              );
            })()}
          </div>

          <div className="field">
            <div className="field-label" id="variant-label">{t('variant.label')}</div>
            <div className="variants" role="group" aria-labelledby="variant-label">
              {CHORD_TYPES.map((ct: ChordType) => (
                <button key={ct} type="button" className={`variant-btn${ct === type ? ' selected' : ''}`} aria-pressed={ct === type} onClick={() => update({ type: ct })}>
                  {ct === type && <Check />}
                  {t(`type.${ct}` as 'type.Major')}
                </button>
              ))}
            </div>
          </div>
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

          <Explanation root={root} type={type} t={t} onSelectType={(ct) => update({ type: ct })} />
        </div>
      </main>

      <footer>
        <button type="button" className="btn-text" onClick={() => { setFirstVisit(false); setConsentOpen(true); }}>
          {t('footer.privacy')}
        </button>
      </footer>

      <SettingsDialog
        open={settingsOpen}
        t={t}
        left={state.left}
        lang={state.lang}
        theme={state.theme}
        onTheme={(theme) => update({ theme })}
        onLeft={(left) => update({ left })}
        onLang={(lang) => update({ lang })}
        onAnalytics={() => { setSettingsOpen(false); setFirstVisit(false); setConsentOpen(true); }}
        onClose={() => setSettingsOpen(false)}
      />
      <ConsentDialog open={consentOpen} firstVisit={firstVisit} t={t} onDone={() => { setConsentOpen(false); setFirstVisit(false); }} />
    </div>
  );
}
