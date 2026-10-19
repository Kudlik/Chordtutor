import { useEffect, useMemo, useState } from 'react';
import { ConsentDialog } from './components/ConsentDialog';
import { ExplorerView } from './components/ExplorerView';
import { InversionsView } from './components/InversionsView';
import { SpellingDialog } from './components/SpellingDialog';
import { SettingsDialog } from './components/SettingsDialog';
import { getConsent } from './analytics';
import { makeT } from './i18n';
import { TABS, useAppState } from './settings';

const TAB_LABEL = { full: 'nav.full', power: 'nav.power', inversions: 'nav.inversions' } as const;

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

export function App() {
  const [state, update] = useAppState();
  const t = useMemo(() => makeT(state.lang), [state.lang]);
  const vertical = useMediaQuery('(max-width: 600px)');
  const [settingsOpen, setSettingsOpen] = useState(false);
  // On the first visit the spelling choice comes first; the consent dialog follows it.
  const spellingPending = state.spelling === null;
  const [consentOpen, setConsentOpen] = useState(() => state.spelling !== null && getConsent() === null);
  const [firstVisit, setFirstVisit] = useState(() => getConsent() === null);
  const spelling = state.spelling ?? 'simple';

  return (
    <div className="app">
      <header className="app-header">
        <h1>{t('app.title')}</h1>
        <nav aria-label={t('nav.main')}>
          {TABS.map((tab) => (
            <a
              key={tab}
              href={`?tab=${tab}`}
              aria-current={state.tab === tab ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                update({ tab });
              }}
            >
              {t(TAB_LABEL[tab])}
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

      {state.tab === 'inversions' ? (
        <InversionsView state={state} update={update} t={t} spelling={spelling} vertical={vertical} />
      ) : (
        <ExplorerView state={state} update={update} t={t} spelling={spelling} vertical={vertical} />
      )}

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
        spelling={spelling}
        onSpelling={(sp) => update({ spelling: sp })}
        theme={state.theme}
        onTheme={(theme) => update({ theme })}
        onLeft={(left) => update({ left })}
        onLang={(lang) => update({ lang })}
        onAnalytics={() => { setSettingsOpen(false); setFirstVisit(false); setConsentOpen(true); }}
        onClose={() => setSettingsOpen(false)}
      />
      <SpellingDialog
        open={spellingPending}
        t={t}
        onChoose={(sp) => {
          update({ spelling: sp });
          if (getConsent() === null) setConsentOpen(true);
        }}
      />
      <ConsentDialog open={consentOpen} firstVisit={firstVisit} t={t} onDone={() => { setConsentOpen(false); setFirstVisit(false); }} />
    </div>
  );
}
