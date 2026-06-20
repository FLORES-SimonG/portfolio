"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "./I18nProvider";
import ReactCountryFlag from "react-country-flag";
import { Language, LANGUAGE_CODES } from "@/locales/interface";

interface LanguageSwitcherProps {
  current: Language;
}

const SUPPORTED: { code: Language; labelKey: string; countryCode: string }[] = [
  { code: LANGUAGE_CODES.English, labelKey: "lang.en", countryCode: "GB" },
  { code: LANGUAGE_CODES.Spanish, labelKey: "lang.es", countryCode: "ES" },
  { code: LANGUAGE_CODES.German, labelKey: "lang.de", countryCode: "DE" },
];

function buildPathWithLang(pathname: string, lang: Language) {
  const segments = pathname.split("/");
  let newPath = pathname;
  if (
    segments[1] &&
    [
      LANGUAGE_CODES.English,
      LANGUAGE_CODES.Spanish,
      LANGUAGE_CODES.German,
    ].includes(segments[1] as Language)
  ) {
    segments[1] = lang;
    newPath = segments.join("/") || "/";
  } else {
    newPath = `/${lang}${pathname}`;
  }
  if (newPath === "") newPath = `/${lang}`;
  return newPath;
}

export default function LanguageSwitcher({ current }: LanguageSwitcherProps) {
  const t = useTranslations();
  const pathname = usePathname() ?? "/";

  return (
    <div className="language-switcher language-inline">
      {SUPPORTED.map((s) => {
        const np = buildPathWithLang(pathname, s.code);
        const isCurrent = current === s.code;
        return (
          <Link
            key={s.code}
            href={np}
            className={`lang-link p-px ${isCurrent ? "active" : ""}`}
            onClick={() => {
              try {
                localStorage.setItem("preferred-lang", s.code);
              } catch (e) {
                /* ignore */
              }
            }}
            aria-current={isCurrent ? "true" : undefined}
            title={t(s.labelKey)}
          >
            <ReactCountryFlag
              svg
              countryCode={s.countryCode}
              style={{ width: "1.1em", height: "1.1em" }}
              title={t(s.labelKey)}
            />
          </Link>
        );
      })}
    </div>
  );
}
