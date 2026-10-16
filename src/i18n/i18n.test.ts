import { describe, expect, it } from 'vitest';
import { en } from './en';
import { pl } from './pl';
import { detectLang, makeT } from './index';

describe('translations (US-201, 205, 206)', () => {
  it('Polish has exactly the English keys and no empty strings', () => {
    expect(Object.keys(pl).sort()).toEqual(Object.keys(en).sort());
    for (const v of Object.values(pl)) expect(v.trim()).not.toBe('');
  });
  it('follows the browser language', () => {
    expect(detectLang(['pl-PL'])).toBe('pl');
    expect(detectLang(['en-GB'])).toBe('en');
    expect(detectLang(['de-DE'])).toBe('en');
  });
  it('never uses the name H for the note B', () => {
    for (const v of Object.values(pl)) expect(v).not.toMatch(/\bH\b/);
  });
  it('interpolates variables', () => {
    expect(makeT('en')('voicing.n', { n: 2 })).toBe('Voicing 2');
  });
});
