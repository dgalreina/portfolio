import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";

// Public address of the site (custom domain, served from the root).
export const SITE_URL = profile.website;

// hreflang codes for each language, and the one used when none matches.
export const hreflang: Record<Locale, string> = { es: "es", en: "en", zh: "zh-CN" };
export const ogLocale: Record<Locale, string> = { es: "es_ES", en: "en_US", zh: "zh_CN" };
const DEFAULT_LOCALE_PATH = "en";

/** Paths are relative to the site root and end with "/" (trailingSlash: true), e.g. "/projects/x/". */
export const localizedPath = (lang: Locale, path = "/") => `/${lang}${path}`;

/** `alternates.languages` for the same page in every language (+ x-default). */
export function languageAlternates(
  locales: readonly Locale[],
  path = "/",
): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((l) => [hreflang[l], localizedPath(l, path)])),
    "x-default": `/${DEFAULT_LOCALE_PATH}${path}`,
  };
}
