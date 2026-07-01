import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { I18nProvider } from "@/components/I18nProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Load locale messages from the messages folder
  const messages = await import(`@/messages/${locale}.json`).then(
    (m) => (m && (m as any).default ? (m as any).default : m)
  );

  return (
    <I18nProvider locale={locale} messages={messages} timeZone="UTC">
      <div className="stack backgrounds">
        <Nav language={locale} />
        {children}
        <Footer />
      </div>
    </I18nProvider>
  );
}
