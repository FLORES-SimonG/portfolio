"use client";

import Hero from "./Hero";
import { useTranslations } from "./I18nProvider";

export default function TranslatedHero({
  titleKey,
  taglineKey,
  title,
  tagline,
  align = "center",
  children,
}: {
  titleKey?: string;
  taglineKey?: string;
  title?: string;
  tagline?: string;
  align?: "start" | "center";
  children?: React.ReactNode;
}) {
  const t = useTranslations();

  const finalTitle = titleKey ? t(titleKey, title) : title;
  const finalTagline = taglineKey ? t(taglineKey, tagline) : tagline;

  return (
    <Hero title={finalTitle ?? ""} tagline={finalTagline} align={align}>
      {children}
    </Hero>
  );
}
