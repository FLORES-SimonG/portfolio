import fs from 'fs';
import path from 'path';

export type Locale = 'en' | 'es' | 'de';

const LOCALES_DIR = path.join(process.cwd(), 'src', 'locales');

export function getDefaultLocale(): Locale {
  return 'en';
}

export function isSupportedLocale(locale: string | undefined): locale is Locale {
  return !!locale && ['en', 'es', 'de'].includes(locale);
}

export function loadMessages(locale: Locale) {
  const file = path.join(LOCALES_DIR, `${locale}.json`);
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    return JSON.parse(raw) as Record<string, string>;
  } catch (e) {
    console.error('Could not load messages for', locale, e);
    return {} as Record<string, string>;
  }
}
