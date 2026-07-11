import "../globals.css";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "@/components/features/common/footer";
import ContactCTA from "@/components/features/common/contact-CTA";
import LayoutWrapper from "@/components/features/common/layout-wrapper";

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

  let messagesData = messages ?? {};
  if (!messagesData || Object.keys(messagesData).length === 0) {
    try {
      messagesData = (await import(`../../messages/${locale}.json`)).default;
    } catch (err) {
      console.warn(`No se encontraron mensajes para el locale "${locale}".`, err);
    }
  }

  return (
    <html lang={locale} suppressContentEditableWarning>
      <body suppressContentEditableWarning>
        <LayoutWrapper locale={locale} messages={messagesData}>
          {children}
          <ContactCTA />
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
