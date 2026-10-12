import type { MetadataRoute } from "next";

// Required for `output: "export"`: the manifest is generated at build time.
export const dynamic = "force-static";

// Same prefix as next.config.ts (GitHub Pages project site: /<repo>).
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// When the site is added to the home screen, iOS opens any URL outside the
// app's scope in an in-app browser (with its own close button and toolbars).
// Without a manifest the scope is inferred from the page that was saved
// (e.g. /es/), which left /en/ and /zh/ outside it. Declaring the scope as
// the whole site keeps every language inside the app.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Diego Galisteo Reina",
    short_name: "Diego Galisteo",
    description: "Diego Galisteo Reina, senior full-stack developer.",
    start_url: `${base}/`,
    scope: `${base}/`,
    display: "standalone",
    background_color: "#efe9de",
    theme_color: "#efe9de",
    icons: [
      { src: `${base}/icons/icon-192.png`, sizes: "192x192", type: "image/png", purpose: "any" },
      { src: `${base}/icons/icon-512.png`, sizes: "512x512", type: "image/png", purpose: "any" },
      // Content sits inside the central 80% so Android can crop it to any shape.
      { src: `${base}/icons/icon-maskable-512.png`, sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
