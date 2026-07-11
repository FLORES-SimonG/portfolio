import AboutPage from "@/components/features/about-me/page/about-page";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

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
