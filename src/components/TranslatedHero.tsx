"use client";

import Hero from "./hero";
import { useTranslations } from "./I18nProvider";

interface TranslatedHeroProps {
  titleKey?: string;
  taglineKey?: string;
  title?: string;
  tagline?: string;
  align?: "start" | "center";
  children?: React.ReactNode;
}

export default function TranslatedHero({
  titleKey,
  taglineKey,
  title,
  tagline,
  align = "center",
  children,
}: TranslatedHeroProps) {
  const t = useTranslations();

  const finalTitle = titleKey ? t(titleKey) : title;
  const finalTagline = taglineKey ? t(taglineKey) : tagline;

  return (
    <Hero title={finalTitle ?? ""} tagline={finalTagline} align={align}>
      {children}
    </Hero>
  );
}
