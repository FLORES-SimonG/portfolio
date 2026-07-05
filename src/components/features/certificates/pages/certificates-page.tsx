import CertificateCard from "@/components/certificate-card";
import Grid from "@/components/Grid";
import TranslatedHero from "@/components/TranslatedHero";
import { certificatesWithTags } from "@/lib/certificates";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Learn more about my certificates and achievements.",
};

export default function CertificatesPage() {
  return (
    <div className="stack gap-20 p-8">
      <main className="wrapper stack gap-8">
        <TranslatedHero
          titleKey="certificates.title"
          taglineKey="certificates.tagline"
          align="start"
        />
        <Grid variant="small">
          {certificatesWithTags
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((certificate) => (
              <li key={certificate.title}>
                <CertificateCard certificate={certificate} />
              </li>
            ))}
        </Grid>
      </main>
    </div>
  );
}
