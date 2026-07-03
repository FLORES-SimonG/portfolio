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

  const messagesMap = {
    en: () => import("@/messages/en.json"),
    es: () => import("@/messages/es.json"),
    de: () => import("@/messages/de.json"),
  };

  const messages = (await messagesMap[locale as keyof typeof messagesMap]())
    .default;
    
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
