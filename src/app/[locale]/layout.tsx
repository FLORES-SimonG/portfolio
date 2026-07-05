import "../globals.css";
import { setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NavigationMenu from "@/components/features/common/navigation-menu";
import Footer from "@/components/features/common/footer";
import ContactCTA from "@/components/features/common/contact-CTA";


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

  return (
    <html lang={locale} suppressContentEditableWarning>
      <body suppressContentEditableWarning>
        <NextIntlClientProvider>
          <div className="stack backgrounds">
            <NavigationMenu language={locale} />
            {children}
            <ContactCTA />
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
