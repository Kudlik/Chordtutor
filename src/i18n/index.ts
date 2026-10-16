import { en, type TranslationKey } from './en';
import { pl } from './pl';

export type Lang = 'en' | 'pl';
export const LANGS: { id: Lang; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'pl', label: 'Polski' },
];
const DICTS: Record<Lang, Record<TranslationKey, string>> = { en, pl };

export type TFunction = (key: TranslationKey, vars?: Record<string, string | number>) => string;

export function makeT(lang: Lang): TFunction {
  return (key, vars) => {
    let s: string = DICTS[lang][key] ?? en[key];
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
    return s;
  };
}

export function detectLang(languages: readonly string[]): Lang {
  const first = languages[0]?.toLowerCase() ?? '';
  return first.startsWith('pl') ? 'pl' : 'en';
}

export type { TranslationKey };
