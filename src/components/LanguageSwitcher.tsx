"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from './I18nProvider';
import Icon from './Icon';
import { Language, LANGUAGE_CODES } from '@/locales/interface';

interface LanguageSwitcherProps {
  current: Language;
}

const SUPPORTED: { code: Language; labelKey: string; flagIcon: string }[] = [
  { code: LANGUAGE_CODES.English, labelKey: 'lang.en', flagIcon: 'flag-en' },
  { code: LANGUAGE_CODES.Spanish, labelKey: 'lang.es', flagIcon: 'flag-es' },
  { code: LANGUAGE_CODES.German, labelKey: 'lang.de', flagIcon: 'flag-de' },
];

function buildPathWithLang(pathname: string, lang: Language) {
  const segments = pathname.split('/');
  let newPath = pathname;
  if (segments[1] && [LANGUAGE_CODES.English, LANGUAGE_CODES.Spanish, LANGUAGE_CODES.German].includes(segments[1] as Language)) {
    segments[1] = lang;
    newPath = segments.join('/') || '/';
  } else {
    newPath = `/${lang}${pathname}`;
  }
  if (newPath === '') newPath = `/${lang}`;
  return newPath;
}

export default function LanguageSwitcher({ current }: LanguageSwitcherProps) {
  const t = useTranslations();
  const pathname = usePathname() ?? '/';

  return (
    <div className="language-switcher language-inline">
      {SUPPORTED.map((s) => {
        const np = buildPathWithLang(pathname, s.code);
        const isCurrent = current === s.code;
        return (
          <Link
            key={s.code}
            href={np}
            className={`lang-link ${isCurrent ? 'active' : ''}`}
            onClick={() => {
              try {
                localStorage.setItem('preferred-lang', s.code);
              } catch (e) {
                /* ignore */
              }
            }}
            aria-current={isCurrent ? 'true' : undefined}
            title={t(s.labelKey)}
          >
            <Icon icon={s.flagIcon as any} size="1.1em" />
          </Link>
        );
      })}
    </div>
  );
}

