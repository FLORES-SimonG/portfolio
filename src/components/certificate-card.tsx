import Image from "next/image";

interface CertificateCardProps {
  certificate: {
    title: string;
    src: string;
    issuer?: string;
  };
}

export default function CertificateCard({
  certificate,
}: CertificateCardProps) {
  return (
    <a
      href={certificate.src}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-64 overflow-hidden rounded-2xl border border-(--gray-800) bg-(--gradient-subtle) shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={certificate.src}
        alt={certificate.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

      <span className="absolute top-4 right-4 rounded-full bg-(--accent-regular) px-3 py-1 text-xs font-medium text-white">
        Certificate
      </span>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-lg font-semibold text-white">
          {certificate.title}
        </p>

        {certificate.issuer && (
          <p className="mt-1 text-sm text-gray-300">
            {certificate.issuer}
          </p>
        )}
      </div>
    </a>
  );
}