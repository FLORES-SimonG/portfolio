"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import CertificateCard from "@/components/features/certificates/components/certificate-card";
import Grid from "@/components/features/common/grid";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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

    const matched = certificates.reduce<CertificateSerializable[]>((acc, c) => {
      // tag filter
      if (activeTag && !c.tags.includes(activeTag)) return acc;

      // text filter
      if (q) {
        let translated = c.title;
        try {
          translated =
            t(`certificates.certificate.title.${c.title}`) || c.title;
        } catch {
          translated = c.title;
        }

        if (!translated.toLowerCase().includes(q)) return acc;
      }

      acc.push(c);
      return acc;
    }, []);

    return matched.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
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
          type="button"
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
          type="button"
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
                date: new Date(certificate.date) as Date,
              }}
            />
          </li>
        ))}
      </Grid>
    </div>
  );
}
