"use client";

import React, { createContext, useContext } from "react";

type Messages = Record<string, string>;

const I18nContext = createContext<Messages | null>(null);

export function I18nProvider({
  messages,
  children,
}: {
  messages: Messages;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={messages}>{children}</I18nContext.Provider>
  );
}

export function useTranslations() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return (key: string, fallback?: string) => fallback ?? key;
  }

  return (key: string, fallback?: string) => {
    return ctx[key] ?? fallback ?? key;
  };
}
