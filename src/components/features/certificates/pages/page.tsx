import { certificates } from "@/lib/certificates";

export default function CertificatesPage() {
  return (
    <div>
      <h1>My Certificates</h1>
      <ul>
        {certificates.map((certificate) => (
          <li key={certificate.title}>
            <h2>{certificate.title}</h2>
            <img src={certificate.src} alt={certificate.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
