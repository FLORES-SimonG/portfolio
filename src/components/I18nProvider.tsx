"use client";

import React, { createContext, useContext } from "react";

type Messages = Record<string, any>;

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

export function useTranslations(p0?: string) {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return (key: string, fallback?: string) => fallback ?? key;
  }

  function lookup(key: string) {
    const parts = key.split('.');
    let cur: any = ctx;
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) {
        cur = cur[p];
      } else {
        return undefined;
      }
    }
    return cur;
  }

  return (key: string, fallback?: string) => {
    const found = lookup(key);
    if (typeof found === 'string') return found;
    return fallback ?? key;
  };
}
