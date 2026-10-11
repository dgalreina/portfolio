import Link from "next/link";
import { LanguageRedirect } from "@/components/language-redirect";
import { localeLabels, locales } from "@/lib/i18n";

// Static export has no redirects/proxy, so "/" picks a language on the client
// and falls back to plain links when JavaScript is disabled.
export default function RootPage() {
  return (
    <>
      <LanguageRedirect />
      <nav className="flex gap-6 text-lg">
        {locales.map((l) => (
          <Link key={l} href={`/${l}`} className="underline underline-offset-4">
            {localeLabels[l]}
          </Link>
        ))}
      </nav>
    </>
  );
}
