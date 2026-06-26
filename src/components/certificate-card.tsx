interface CertificateCardProps {
  certificate: {
    title: string;
    src: string;
  };
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <a href="#" className="group relative block overflow-hidden">
      <img
        src={certificate.src}
        alt={certificate.title}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap bg-red-500">
          {" "}
          New{" "}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">
          {certificate.title}
        </h3>

        <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

        <form className="mt-4">
          <button
            type="button"
            className="block w-full rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
          >
            See Details
          </button>
        </form>
      </div>
    </a>
  );
}
