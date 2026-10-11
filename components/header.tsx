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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href={`/${lang}`} className="font-serif font-semibold tracking-tight">
          portfolio
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <ul className="flex items-center gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-foreground/70 transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <LanguageSwitcher lang={lang} label={dict.nav.language} />
        </nav>
      </div>
    </header>
  );
}
