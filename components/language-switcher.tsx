"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

// Keeps the visitor on the same page when switching language
// (/es/projects/x -> /en/projects/x) instead of sending them to the home page.
export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/[^/]+/, "");

  return (
    <ul
      aria-label={label}
      className="flex overflow-hidden rounded-full border border-foreground/15 text-xs"
    >
      {locales.map((l) => (
        <li key={l}>
          <Link
            href={`/${l}${rest}`}
            hrefLang={l}
            lang={l}
            aria-current={l === lang ? "true" : undefined}
            className={`block px-3 py-1.5 transition-colors ${
              l === lang
                ? "bg-seal text-on-seal"
                : "text-foreground/70 hover:bg-foreground/10"
            }`}
          >
            {localeLabels[l]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
