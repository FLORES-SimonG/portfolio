import TranslatedHero from "@/components/features/common/translated-hero";
import CertificatesSearch from "@/components/features/certificates/certificates-search";
import { certificatesWithTags } from "@/lib/certificates";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Learn more about my certificates and achievements.",
};

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
