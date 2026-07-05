"use client";

import { useMemo, useState } from "react";
import CertificateCard from "@/components/certificate-card";
import Grid from "@/components/Grid";
import { useTranslations } from "@/components/I18nProvider";

type CertificateSerializable = {
  title: string;
  src: string;
  date: string; // ISO
  type: "learningPath" | "course";
  tags: string[];
};

export default function CertificatesSearch({
  certificates,
}: {
  certificates: CertificateSerializable[];
}) {
  const t = useTranslations();
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    certificates.forEach((c) => c.tags.forEach((tag) => s.add(tag)));
    return Array.from(s).sort();
  }, [certificates]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return certificates
      .filter((c) => (activeTag ? c.tags.includes(activeTag) : true))
      .filter((c) => {
        if (!q) return true;
        let translated = c.title;
        try {
          translated =
            t(`certificates.certificate.title.${c.title}`) || c.title;
        } catch (e) {
          translated = c.title;
        }
        return translated.toLowerCase().includes(q);
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [certificates, query, activeTag, t]);

  return (
    <div className="stack gap-6">
      <div className="flex items-center gap-4">
        <input
          aria-label={(() => {
            try {
              return t("certificates.searchPlaceholder");
            } catch (e) {
              return "Buscar certificados...";
            }
          })()}
          placeholder={(() => {
            try {
              return t("certificates.searchPlaceholder");
            } catch (e) {
              return "Buscar certificados...";
            }
          })()}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input flex-1"
        />
        <button
          onClick={() => {
            setQuery("");
            setActiveTag(null);
          }}
          className="btn"
        >
          {(() => {
            try {
              return t("common.clear");
            } catch (e) {
              return "Limpiar";
            }
          })()}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          className={`btn-sm ${activeTag === null ? "btn-active" : ""}`}
          onClick={() => setActiveTag(null)}
        >
          {(() => {
            try {
              return t("certificates.allTags");
            } catch (e) {
              return "Todas";
            }
          })()}
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`btn-sm ${activeTag === tag ? "btn-active" : ""}`}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <Grid variant="small">
        {filtered.map((certificate) => (
          <li key={certificate.title}>
            <CertificateCard
              certificate={{
                ...certificate,
                date: new Date(certificate.date) as any,
              }}
            />
          </li>
        ))}
      </Grid>
    </div>
  );
}
