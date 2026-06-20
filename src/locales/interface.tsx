export const LANGUAGE_CODES = {
  German: "de",
  Spanish: "es",
  English: "en",
} as const;

export type Language = (typeof LANGUAGE_CODES)[keyof typeof LANGUAGE_CODES];
