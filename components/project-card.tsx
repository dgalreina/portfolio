"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// The card shows a few technologies; the detail page lists them all.
const MAX_TECH = 6;

type Props = {
  href: string;
  name: string;
  description: string;
  tech: string[];
  image?: string;
  video?: string;
  /** Vertical (phone) media: the card box gets the video's own 540:1092 ratio. */
  portrait?: boolean;
  demo?: string;
  repo?: string;
  badge?: string;
  labels: { demo: string; repo: string };
};

export function ProjectCard({
  href,
  name,
  description,
  tech,
  image,
  video,
  portrait,
  demo,
  repo,
  badge,
  labels,
}: Props) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  // Touch devices have no hover: play while the card is mostly in view instead.
  useEffect(() => {
    const el = mediaRef.current;
    if (!video || !el || !window.matchMedia("(hover: none)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.7 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [video]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (active) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [active]);

  const hasVideo = Boolean(video) && !failed;

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02] transition-shadow hover:shadow-xl"
      onPointerEnter={(e) => e.pointerType === "mouse" && setActive(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      {(image || badge) && (
        <div
          ref={mediaRef}
          className={`relative flex justify-center overflow-hidden ${image ? "bg-foreground/5" : ""} ${
            portrait ? "py-3" : "aspect-[16/10]"
          }`}
        >
          {/* Portrait media keeps the video's own ratio at a height that lets the whole section fit on screen. */}
          <div
            className={
              portrait
                ? "relative aspect-[540/1092] h-[clamp(220px,34vh,400px)] overflow-hidden rounded-lg"
                : "absolute inset-0"
            }
          >
            {image && (
              <Image
                src={image}
                alt={name}
                fill
                sizes={portrait ? "200px" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                className="object-cover"
              />
            )}
            {hasVideo && (
              <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
                onPlaying={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onError={() => setFailed(true)}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                  playing ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>
          {badge &&
            (image ? (
              <span className="absolute left-3 top-3 rounded-full bg-seal px-3 py-1 text-xs font-medium text-on-seal">
                {badge}
              </span>
            ) : (
              // Nothing to show yet: just the status, centered on the card background.
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full border border-seal/40 px-4 py-1.5 text-sm font-medium text-seal">
                  {badge}
                </span>
              </span>
            ))}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-serif text-xl font-semibold tracking-tight">
          {/* Stretched link: the whole card opens the detail page. */}
          <Link href={href} className="after:absolute after:inset-0">
            {name}
          </Link>
        </h3>
        <p className="text-sm leading-6 text-foreground/70">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {tech.slice(0, MAX_TECH).map((t) => (
            <li key={t} className="rounded-md bg-foreground/[0.07] px-2 py-1 font-mono text-xs">
              {t}
            </li>
          ))}
          {tech.length > MAX_TECH && (
            <li className="px-1 py-1 font-mono text-xs text-foreground/60">
              +{tech.length - MAX_TECH}
            </li>
          )}
        </ul>
        {(demo || repo) && (
          <div className="relative z-10 mt-auto flex flex-wrap gap-3 pt-3 text-sm font-medium">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-seal px-4 py-2 text-on-seal transition-colors hover:bg-seal-dark"
              >
                {labels.demo} ↗
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/20 px-4 py-2 transition-colors hover:bg-foreground/10"
              >
                {labels.repo} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
