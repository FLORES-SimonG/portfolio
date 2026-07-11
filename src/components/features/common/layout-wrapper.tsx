"use client";

import { NextIntlClientProvider } from "next-intl";
import NavigationMenu from "@/components/features/common/navigation-menu";
import { Language } from "@/messages/interface";

interface LayoutWrapperProps {
  children: React.ReactNode;
  locale: Language;
  messages: Record<string, string>;
}

export default function LayoutWrapper({
  children,
  locale,
  messages
}: LayoutWrapperProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="stack backgrounds">
        <NavigationMenu language={locale} />
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
