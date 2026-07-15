"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";

import { Language, LANGUAGE_CODES } from "@/messages/interface";

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
  const supportedLangs = [
    LANGUAGE_CODES.English,
    LANGUAGE_CODES.Spanish,
    LANGUAGE_CODES.German,
  ];

  if (segments[1] && supportedLangs.includes(segments[1] as Language)) {
    // replace the locale segment
    segments[1] = lang;

    // If there is a slug after the section (e.g. /es/experience/slug-part),
    // try to replace or add the language suffix on the last segment.
    if (segments.length > 3) {
      // find last non-empty segment index
      let lastIndex = segments.length - 1;
      while (lastIndex > 1 && segments[lastIndex] === "") lastIndex--;
      const last = segments[lastIndex];
      if (last) {
        // Replace existing suffix like -es, .es, _es or add -<lang> if none.
        const newLast = last.replace(/([._-])?(en|es|de)$/i, `-${lang}`);
        segments[lastIndex] = newLast === last ? `${last}-${lang}` : newLast;
      }
    }

    newPath = segments.join("/") || "/";
  } else {
    // no locale in path — prefix it
    newPath = `/${lang}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  }

  if (newPath === "") newPath = `/${lang}`;
  return newPath;
}

export default function LanguageSwitcher({ current }: LanguageSwitcherProps) {
  const t = useTranslations();
  const pathname = usePathname() ?? "/";
  const router = useRouter();

  return (
    <div className="language-switcher language-inline flex gap-1">
      {SUPPORTED.map((s) => {
        const np = buildPathWithLang(pathname, s.code);
        const isCurrent = current === s.code;
        return (
          <button
            key={s.code}
            className={`lang-link p-px ${isCurrent ? "active" : ""}`}
            onClick={() => {
              router.push(np);
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
          </button>
        );
      })}
    </div>
  );
}
