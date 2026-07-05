import ExperiencePage from "@/components/features/experience/page/experience-page";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  return <ExperiencePage locale={locale} />;
}
