"use client";
import { ICertificate } from "@/lib/certificates";
import Image from "next/image";
import { encodeBase64 } from "@/lib/encoding";
import { useTranslations } from "next-intl";

interface CertificateCardProps {
  certificate: ICertificate | (ICertificate & { date?: string });
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const t = useTranslations();
  const typeTranslation = t("certificates.certificate." + certificate.type);

  return (
    <a
      href={certificate.src}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-64 overflow-hidden rounded-2xl border border-(--gray-800) bg-(--gradient-subtle) shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={`/api/image-proxy/${encodeBase64(certificate.src)}`}
        alt={certificate.title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

      <span className="absolute top-4 right-4 rounded-full bg-(--accent-regular) px-3 py-1 text-xs font-medium text-white">
        {typeTranslation}
      </span>
      <div className="absolute bottom-0 left-0 right-0 p-5">
  <p className="text-lg font-semibold text-white">{t(`certificates.certificate.title.${certificate.title}`)}</p>
      </div>
    </a>
  );
}
