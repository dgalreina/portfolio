import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { locales } from "@/lib/i18n";
import { hreflang, localizedPath, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// One entry per page and language, each pointing to its translations.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...projects.map((p) => `/projects/${p.slug}/`)];

  return pages.flatMap((path) => {
    const languages = Object.fromEntries(
      locales.map((l) => [hreflang[l], `${SITE_URL}${localizedPath(l, path)}`]),
    );
    return locales.map((l) => ({
      url: `${SITE_URL}${localizedPath(l, path)}`,
      alternates: { languages },
    }));
  });
}
