import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries/es";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${lang}#projects`, label: dict.nav.projects },
    { href: `/${lang}#cv`, label: dict.nav.cv },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-foreground/10 bg-background/80 backdrop-blur">
      {/* Mobile: logo + language switcher on the first row, section links on the second. */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-1 px-6 py-3">
        <Link href={`/${lang}`} className="font-serif font-semibold tracking-tight">
          portfolio
        </Link>

        <nav className="order-last w-full sm:order-none sm:ml-auto sm:w-auto">
          <ul className="flex items-center gap-5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-foreground/70 transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto sm:ml-0">
          <LanguageSwitcher lang={lang} label={dict.nav.language} />
        </div>
      </div>
    </header>
  );
}
