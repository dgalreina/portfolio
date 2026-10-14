"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

// True when the site runs as an installed app (home-screen icon), i.e. without browser UI.
function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

// In a normal browser this is a plain download link. In an installed app there is no
// back button and `download` is ignored, so opening a PDF would trap the visitor on
// it. There it opens the system share sheet instead (Save to Files, Mail, ...).
export function DownloadLink({
  href,
  filename,
  className,
  children,
}: {
  href: string;
  filename: string;
  className?: string;
  children: ReactNode;
}) {
  // Fetched ahead of time: share() must run right inside the tap, not after a network wait.
  const file = useRef<File | null>(null);

  useEffect(() => {
    if (!isStandalone()) return;
    let cancelled = false;
    fetch(href)
      .then((response) => (response.ok ? response.blob() : Promise.reject(new Error(String(response.status)))))
      .then((blob) => {
        if (!cancelled) file.current = new File([blob], filename, { type: "application/pdf" });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [href, filename]);

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isStandalone()) return; // regular browser: let the `download` link do its job
    event.preventDefault();
    const pdf = file.current;
    if (pdf && navigator.canShare?.({ files: [pdf] })) {
      try {
        await navigator.share({ files: [pdf], title: filename });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return; // closed the sheet
      }
    }
    // No file sharing available: open it outside the app window, so the app stays where it is.
    window.open(href, "_blank", "noopener");
  }

  return (
    <a href={href} download={filename} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
