import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { profile } from "@/content/profile";
import { getDictionary, hasLocale, htmlLang, locales } from "@/lib/i18n";
import { languageAlternates, localizedPath, ogLocale, SITE_URL } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  const url = localizedPath(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url, languages: languageAlternates(locales) },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title: meta.title,
      description: meta.description,
      url,
      locale: ogLocale[lang],
      images: [{ url: "/profile.jpg", width: 700, height: 700, alt: profile.name }],
    },
    twitter: { card: "summary", title: meta.title, description: meta.description },
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={htmlLang[lang]}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header lang={lang} dict={getDictionary(lang)} />
        {children}
      </body>
    </html>
  );
}
