import { Language, LANGUAGE_CODES } from "@/locales/interface";
import fs from "fs";
import path from "path";



const LOCALES_DIR = path.join(process.cwd(), "src", "locales");

export function getDefaultLocale(): Language {
  return "en";
}

export function isSupportedLocale(
  locale: Language | undefined,
): locale is Language {
  return !!locale && [LANGUAGE_CODES.Spanish, LANGUAGE_CODES.English, LANGUAGE_CODES.German].includes(locale);
}

export function loadMessages(locale: Language) {
  const file = path.join(LOCALES_DIR, `${locale}.json`);
  try {
    const raw = fs.readFileSync(file, "utf-8");
    return JSON.parse(raw) as Record<string, string>;
  } catch (e) {
    console.error("Could not load messages for", locale, e);
    return {} as Record<string, string>;
  }
}
