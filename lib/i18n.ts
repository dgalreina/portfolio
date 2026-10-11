import { en } from "@/content/dictionaries/en";
import { es } from "@/content/dictionaries/es";
import { zh } from "@/content/dictionaries/zh";

export const dictionaries = { es, en, zh };

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  zh: "中文",
};

export const htmlLang: Record<Locale, string> = {
  es: "es",
  en: "en",
  zh: "zh-CN",
};

export const hasLocale = (value: string): value is Locale => value in dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale];
