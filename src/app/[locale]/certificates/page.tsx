import TranslatedHero from "@/components/features/common/translated-hero";
import CertificatesSearch from "@/components/features/certificates/components/certificates-search";
import { certificatesWithTags } from "@/lib/certificates";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("certificates");

  return {
    title: t("title"),
    description: t("tagline"),
  };
}

export default function CertificatesPage() {
  const serializable = certificatesWithTags.map((c) => ({
    ...c,
    date: c.date.toISOString(),
  }));

  return (
    <div className="stack gap-20 p-8">
      <main className="wrapper stack gap-8">
        <TranslatedHero
          titleKey="certificates.title"
          taglineKey="certificates.tagline"
          align="start"
        />
        <CertificatesSearch certificates={serializable} />
      </main>
    </div>
  );
}
