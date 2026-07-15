
import { getTranslations } from "next-intl/server";

import Hero from "./hero";


interface TranslatedHeroProps {
  titleKey?: string;
  taglineKey?: string;
  title?: string;
  tagline?: string;
  align?: "start" | "center";
  children?: React.ReactNode;
}

export default async function TranslatedHero({
  titleKey,
  taglineKey,
  title,
  tagline,
  align = "center",
  children,
}: TranslatedHeroProps) {
  const t = await getTranslations();

  const finalTitle = titleKey ? t(titleKey) : title;
  const finalTagline = taglineKey ? t(taglineKey) : tagline;

  return (
    <Hero title={finalTitle ?? ""} tagline={finalTagline} align={align}>
      {children}
    </Hero>
  );
}
