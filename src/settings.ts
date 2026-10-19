import { useCallback, useEffect, useMemo, useState } from 'react';
import { INSTRUMENTS, type Instrument } from './instruments';
import { CHORD_TYPES, ROOT_NAMES, type ChordType, type RootName, type Spelling } from './theory';
import { detectLang, type Lang } from './i18n';
import { readStore, writeStore } from './storage';

export type Tab = 'full' | 'power' | 'inversions';
export const TABS: Tab[] = ['full', 'power', 'inversions'];

/** Chord types offered on each tab. */
export function typesForTab(tab: Tab): ChordType[] {
  if (tab === 'power') return ['5'];
  if (tab === 'full') return CHORD_TYPES.filter((t) => t !== '5');
  return [...CHORD_TYPES];
}

export interface AppState {
  tab: Tab;
  /** Index of the selected inversion on the inversions tab (0 = root position). */
  inversion: number;
  /** The chord type to come back to after visiting the power chords tab. */
  savedType: ChordType;
  instrument: Instrument;
  root: RootName;
  type: ChordType;
  voicing: number;
  left: boolean;
  lang: Lang;
  theme: Theme;
  /** null until the visitor has chosen on the first visit. */
  spelling: Spelling | null;
}

export type Theme = 'system' | 'light' | 'dark';

function fromUrl(): Partial<AppState> {
  const p = new URLSearchParams(window.location.search);
  const out: Partial<AppState> = {};
  const root = p.get('root');
  const type = p.get('type');
  const inst = p.get('inst');
  const tab = p.get('tab');
  const inv = Number(p.get('inv'));
  if ((TABS as string[]).includes(tab ?? '')) out.tab = tab as Tab;
  if (Number.isInteger(inv) && inv >= 0 && inv < 4) out.inversion = inv;
  if (root && (ROOT_NAMES as readonly string[]).includes(root)) out.root = root as RootName;
  if (type && (CHORD_TYPES as readonly string[]).includes(type)) out.type = type as ChordType;
  if (inst && (INSTRUMENTS as readonly string[]).includes(inst)) out.instrument = inst as Instrument;
  return out;
}

function initial(): AppState {
  const url = fromUrl();
  const storedInst = readStore('ct.instrument');
  const storedLang = readStore('ct.lang');
  const tab = url.tab ?? 'full';
  const allowed = typesForTab(tab);
  const type = url.type && allowed.includes(url.type) ? url.type : allowed[0];
  return {
    tab,
    inversion: url.inversion ?? 0,
    savedType: type === '5' ? 'Major' : type,
    instrument: url.instrument ?? ((INSTRUMENTS as readonly string[]).includes(storedInst ?? '') ? (storedInst as Instrument) : 'guitar'),
    root: url.root ?? 'C',
    type,
    voicing: 0,
    left: readStore('ct.left') === '1',
    theme: ((t) => (t === 'light' || t === 'dark' ? t : 'system'))(readStore('ct.theme')),
    spelling: ((v) => (v === 'simple' || v === 'correct' ? v : null))(readStore('ct.spelling')),
    lang: storedLang === 'pl' || storedLang === 'en' ? storedLang : detectLang(navigator.languages?.length ? navigator.languages : [navigator.language ?? 'en']),
  };
}

export function useAppState() {
  const [state, setState] = useState<AppState>(initial);

  const update = useCallback((patch: Partial<AppState>) => {
    setState((s) => {
      const next = { ...s, ...patch };
      if ('tab' in patch && patch.tab !== s.tab) {
        next.voicing = 0;
        const allowed = typesForTab(next.tab);
        if (next.tab === 'power' && s.type !== '5') next.savedType = s.type;
        if (!allowed.includes(next.type)) next.type = allowed.includes(s.savedType) && next.tab !== 'power' ? s.savedType : allowed[0];
      }
      if ('instrument' in patch) writeStore('ct.instrument', next.instrument);
      if ('left' in patch) writeStore('ct.left', next.left ? '1' : '0');
      if ('spelling' in patch && next.spelling) writeStore('ct.spelling', next.spelling);
      if ('theme' in patch) writeStore('ct.theme', next.theme);
      if ('lang' in patch) writeStore('ct.lang', next.lang);
      return next;
    });
  }, []);

  // Keep the chord and instrument in the address (US-409).
  useEffect(() => {
    const p = new URLSearchParams({ tab: state.tab, root: state.root, type: state.type, inst: state.instrument });
    if (state.tab === 'inversions') p.set('inv', String(state.inversion));
    try {
      window.history.replaceState(null, '', `?${p.toString()}`);
    } catch {
      /* ignore */
    }
  }, [state.tab, state.root, state.type, state.instrument, state.inversion]);

  useEffect(() => {
    document.documentElement.lang = state.lang;
  }, [state.lang]);

  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  return useMemo(() => [state, update] as const, [state, update]);
}
