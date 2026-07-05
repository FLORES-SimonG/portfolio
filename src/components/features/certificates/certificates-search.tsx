"use client";

import { useMemo, useState } from "react";
import CertificateCard from "@/components/certificate-card";
import Grid from "@/components/Grid";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

type CertificateSerializable = {
  title: string;
  src: string;
  date: string;
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
        <Input
          aria-label={t("certificates.searchPlaceholder")}
          placeholder={t("certificates.searchPlaceholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=""
        />
        <button
          onClick={() => {
            setQuery("");
            setActiveTag(null);
          }}
          className="btn"
        >
          {t("common.clear")}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          className={cn(
            activeTag === null ? "text-primary font-bold transition-all" : null,
          )}
          onClick={() => setActiveTag(null)}
        >
          {t("certificates.allTags")}
        </button>
        |
        {allTags.map((tag) => (
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            key={tag}
          >
            <Badge
              variant={activeTag === tag ? "default" : "secondary"}
              className=" border-primary/50"
            >
              {tag}
            </Badge>
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
