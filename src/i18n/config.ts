export const locales = ["en", "zh-CN", "zh-TW"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-CN";

export const LOCALE_COOKIE_NAME =
  process.env.NEXT_LOCALE_COOKIE_NAME || "LITCHI_LOCALE";
