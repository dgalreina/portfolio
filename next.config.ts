import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/repo-name for GitHub Pages project sites.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: 'export',
  // Emit /es/index.html instead of /es.html so URLs with a trailing slash don't 404 on GitHub Pages.
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
