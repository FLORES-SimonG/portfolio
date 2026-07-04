import "../globals.css";
import { setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer";
import NavigationMenu from "@/components/navigation-menu";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  // const messagesMap = {
  //   en: () => import("@/messages/en.json"),
  //   es: () => import("@/messages/es.json"),
  //   de: () => import("@/messages/de.json"),
  // };

  // const messagesDefault = (await messagesMap[locale as keyof typeof messagesMap]())
  //   .default;

  return (
    <html lang={locale} suppressContentEditableWarning>
      <body suppressContentEditableWarning>
        <NextIntlClientProvider>
          <div className="stack backgrounds">
            <NavigationMenu language={locale} />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
