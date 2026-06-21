import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/components/I18nProvider";
import { loadMessages, isSupportedLocale, getDefaultLocale } from "@/lib/i18n";
import "../globals.css";
import { Language } from "@/locales/interface";

export const metadata: Metadata = {
  title: "Simón G. Flores: Personal Site",
  description: "The personal site of Simón G. Flores",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: any;
}) {
  const awaitedParams = await params;
  const localeParam = awaitedParams?.locale;
  const locale: Language = isSupportedLocale(localeParam)
    ? localeParam
    : getDefaultLocale();
  const messages = loadMessages(locale);

  return (
    <I18nProvider messages={messages}>
      <div className="stack backgrounds">
        <Nav language={locale} />
        {children}
        <Footer />
      </div>
    </I18nProvider>
  );
}
