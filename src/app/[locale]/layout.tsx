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
