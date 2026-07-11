import ExperiencePage from "@/components/features/experience/page/experience-page";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  return <ExperiencePage locale={locale} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("experience");

  return {
    title: t("title"),
    description: t("tagline"),
  };
}
