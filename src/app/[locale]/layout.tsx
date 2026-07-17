import "../globals.css";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import ContactCTA from "@/components/features/common/contact-CTA";
import Footer from "@/components/features/common/footer";
import LayoutWrapper from "@/components/features/common/layout-wrapper";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
  messages?: Record<string, string>;
};

export default async function LocaleLayout({ children, params, messages }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const timeZone = 'Europe/Vienna';
  const DOMAIN = 'https://sgfloreskuehn.de';
  const EMAIL = 'developer@sgfloreskuehn.de';
  const DEFAULT_DESCRIPTION = 'Portfolio - Simón G. Flores: Software Developer';

  let messagesData = messages ?? {};
  if (!messagesData || Object.keys(messagesData).length === 0) {
    try {
      messagesData = (await import(`../../messages/${locale}.json`)).default;
    } catch (err) {
      console.warn(`No se encontraron mensajes para el locale "${locale}".`, err);
    }
  }

  return (
    <html suppressContentEditableWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:site_name" content="Simón G. Flores" />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:image" content={`${DOMAIN}/assets/FloresSimonG.png`} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* hreflang links for locales */}
        {Array.from(routing.locales).map((l) => (
          <link
            key={l}
            rel="alternate"
            href={`${DOMAIN}/${l}`}
            hrefLang={l}
          />
        ))}
        <link rel="alternate" href={`${DOMAIN}/`} hrefLang="x-default" />

        {/* JSON-LD: Person + Website */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Simón G. Flores",
          url: DOMAIN,
          email: EMAIL,
          jobTitle: "Full-stack Developer",
          sameAs: ["https://github.com/FLORES-SimonG", "https://www.linkedin.com/in/simongf94/"]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Simón G. Flores",
          url: DOMAIN
        }) }} />
      </head>
      <body suppressContentEditableWarning>
        <LayoutWrapper locale={locale} messages={messagesData} timeZone={timeZone}>
          {children}
          <ContactCTA />
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
