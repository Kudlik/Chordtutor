import { readStore, writeStore } from './storage';

export type Consent = 'granted' | 'denied';
const KEY = 'ct.consent';
const GA_ID = (import.meta.env.VITE_GA_ID as string | undefined)?.trim();

export function getConsent(): Consent | null {
  const v = readStore(KEY);
  return v === 'granted' || v === 'denied' ? v : null;
}

let loaded = false;

function loadGA(): void {
  if (loaded || !GA_ID) return;
  loaded = true;
  const w = window as unknown as Record<string, unknown>;
  w[`ga-disable-${GA_ID}`] = false;
  const dl = (w.dataLayer = (w.dataLayer as unknown[]) ?? []);
  w.gtag = function () {
    // gtag requires the real `arguments` object
    // eslint-disable-next-line prefer-rest-params
    dl.push(arguments);
  };
  const gtag = w.gtag as (...a: unknown[]) => void;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(s);
}

function removeAnalyticsCookies(): void {
  const host = location.hostname.split('.');
  const domains = [location.hostname, ...host.map((_, i) => '.' + host.slice(i).join('.'))];
  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0].trim();
    if (name === '_ga' || name.startsWith('_ga_') || name === '_gid') {
      for (const d of domains) document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  }
}

export function setConsent(c: Consent): void {
  writeStore(KEY, c);
  if (c === 'granted') {
    loadGA();
  } else {
    if (GA_ID) (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
    removeAnalyticsCookies();
  }
}

/** Called once at start: analytics only ever loads after an explicit "granted". */
export function initAnalytics(): void {
  if (getConsent() === 'granted') loadGA();
}
