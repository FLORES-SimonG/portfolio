import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import AboutPage from "@/components/features/about-me/page/about-page";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");

  return {
    title: t("title"),
    description: t("firstParagraph"),
  };
}

export default function Page() {
  return <AboutPage />;
}
