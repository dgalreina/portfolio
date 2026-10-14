import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.name} · Senior full-stack developer`,
  description: `${profile.name}, senior full-stack developer. Projects, résumé and contact.`,
  alternates: { canonical: "/en/" },
};

// Separate root layout for "/" (language detection). The localized routes live
// under app/[lang] and have their own <html lang>.
export default function RootRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
