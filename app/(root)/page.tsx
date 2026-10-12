import Link from "next/link";
import { withBase } from "@/lib/assets";
import { defaultLocale, localeLabels, locales } from "@/lib/i18n";

// Static export has no redirects/proxy, so "/" picks a language from the browser
// settings. The script is inline so it runs while the HTML is parsed, before
// anything is painted (no flash of the language links). The links only show when
// JavaScript is disabled.
const redirectScript = `(function(){var supported=${JSON.stringify(locales)};var langs=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];var target=${JSON.stringify(defaultLocale)};for(var i=0;i<langs.length;i++){var code=String(langs[i]).toLowerCase().split("-")[0];if(supported.indexOf(code)!==-1){target=code;break}}location.replace(${JSON.stringify(withBase(""))}+"/"+target+"/")})();`;

export default function RootPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <noscript>
        <nav className="flex gap-6 text-lg">
          {locales.map((l) => (
            <Link key={l} href={`/${l}`} className="underline underline-offset-4">
              {localeLabels[l]}
            </Link>
          ))}
        </nav>
      </noscript>
    </>
  );
}
