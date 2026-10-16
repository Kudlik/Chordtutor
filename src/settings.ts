import { useCallback, useEffect, useMemo, useState } from 'react';
import { INSTRUMENTS, type Instrument } from './instruments';
import { CHORD_TYPES, ROOT_NAMES, type ChordType, type RootName } from './theory';
import { detectLang, type Lang } from './i18n';
import { readStore, writeStore } from './storage';

export interface AppState {
  instrument: Instrument;
  root: RootName;
  type: ChordType;
  voicing: number;
  triad: boolean;
  left: boolean;
  lang: Lang;
  theme: Theme;
}

export type Theme = 'system' | 'light' | 'dark';

function fromUrl(): Partial<AppState> {
  const p = new URLSearchParams(window.location.search);
  const out: Partial<AppState> = {};
  const root = p.get('root');
  const type = p.get('type');
  const inst = p.get('inst');
  if (root && (ROOT_NAMES as readonly string[]).includes(root)) out.root = root as RootName;
  if (type && (CHORD_TYPES as readonly string[]).includes(type)) out.type = type as ChordType;
  if (inst && (INSTRUMENTS as readonly string[]).includes(inst)) out.instrument = inst as Instrument;
  return out;
}

function initial(): AppState {
  const url = fromUrl();
  const storedInst = readStore('ct.instrument');
  const storedLang = readStore('ct.lang');
  return {
    instrument: url.instrument ?? ((INSTRUMENTS as readonly string[]).includes(storedInst ?? '') ? (storedInst as Instrument) : 'guitar'),
    root: url.root ?? 'C',
    type: url.type ?? 'Major',
    voicing: 0,
    triad: false,
    left: readStore('ct.left') === '1',
    theme: ((t) => (t === 'light' || t === 'dark' ? t : 'system'))(readStore('ct.theme')),
    lang: storedLang === 'pl' || storedLang === 'en' ? storedLang : detectLang(navigator.languages?.length ? navigator.languages : [navigator.language ?? 'en']),
  };
}

export function useAppState() {
  const [state, setState] = useState<AppState>(initial);

  const update = useCallback((patch: Partial<AppState>) => {
    setState((s) => {
      const next = { ...s, ...patch };
      if ('instrument' in patch) writeStore('ct.instrument', next.instrument);
      if ('left' in patch) writeStore('ct.left', next.left ? '1' : '0');
      if ('theme' in patch) writeStore('ct.theme', next.theme);
      if ('lang' in patch) writeStore('ct.lang', next.lang);
      return next;
    });
  }, []);

  // Keep the chord and instrument in the address (US-409).
  useEffect(() => {
    const p = new URLSearchParams({ root: state.root, type: state.type, inst: state.instrument });
    try {
      window.history.replaceState(null, '', `?${p.toString()}`);
    } catch {
      /* ignore */
    }
  }, [state.root, state.type, state.instrument]);

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
