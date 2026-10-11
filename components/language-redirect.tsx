"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { defaultLocale, type Locale } from "@/lib/i18n";

function detectLocale(): Locale {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const lang = tag.toLowerCase().split("-")[0];
    if (lang === "es" || lang === "en" || lang === "zh") return lang;
  }
  return defaultLocale;
}

export function LanguageRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${detectLocale()}`);
  }, [router]);

  return null;
}
