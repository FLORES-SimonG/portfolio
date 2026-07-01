'use client';

import React from "react";
import {NextIntlClientProvider, useTranslations as nextUseTranslations} from 'next-intl';

// Thin wrapper that re-exports Next's client provider and hook so other
// components can keep importing from the local path (`@/components/I18nProvider`).
// This avoids updating many imports across the codebase.

export function I18nProvider({
  messages,
  locale,
  timeZone,
  children,
}: {
  messages: Record<string, any>;
  locale?: string;
  timeZone?: string;
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
}

// Re-export the next-intl client hook with the same name used in the codebase.
export function useTranslations() {
  return nextUseTranslations();
}
