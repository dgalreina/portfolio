import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { withBase } from "@/lib/assets";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import { languageAlternates, localizedPath, ogLocale, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!hasLocale(lang) || !project) return {};
  const text = getDictionary(lang).projects.items[project.slug];
  const path = `/projects/${project.slug}/`;
  const url = localizedPath(lang, path);
  const title = `${text.name} · ${profile.name}`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: text.description,
    alternates: { canonical: url, languages: languageAlternates(locales, path) },
    openGraph: {
      type: "article",
      siteName: profile.name,
      title,
      description: text.description,
      url,
      locale: ogLocale[lang],
      images: [{ url: project.image ?? "/profile.jpg" }],
    },
    twitter: { card: "summary_large_image", title, description: text.description },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!hasLocale(lang) || !project) notFound();

  const dict = getDictionary(lang);
  const text = dict.projects.items[project.slug];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
      <Link
        href={`/${lang}#projects`}
        className="text-sm text-foreground/70 transition-colors hover:text-foreground"
      >
        ← {dict.projects.back}
      </Link>

      <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-start">
        <div className={project.portrait
            ? "w-full shrink-0 md:w-[calc(min(80vh,900px)*720/1458)]"
            : "md:w-1/2 md:shrink-0"}>
          {project.fullVideo ? (
            // Full recording with its own audio: controls on, not muted.
            <video
              controls
              playsInline
              preload="metadata"
              poster={project.poster && withBase(project.poster)}
              aria-label={text.name}
              className={`rounded-xl bg-black object-contain shadow-xl ${
                project.portrait
                  ? "mx-auto aspect-[720/1458] w-[min(100%,calc(min(80vh,900px)*720/1458))]"
                  : "aspect-video w-full"
              }`}
            >
              <source src={withBase(project.fullVideo)} type="video/mp4" />
            </video>
          ) : project.gallery ? (
            <ul className="space-y-4">
              {project.gallery.map((img, i) => (
                <li key={img.src}>
                  {/* Opens the full-size file: the screenshots contain small text. */}
                  <a href={withBase(img.src)} target="_blank" rel="noopener noreferrer">
                    <figure>
                      <Image
                        src={withBase(img.src)}
                        alt={text.gallery[i] ?? text.name}
                        width={img.width}
                        height={img.height}
                        priority={i === 0}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="h-auto w-full rounded-xl shadow-xl"
                      />
                      {text.gallery[i] && (
                        <figcaption className="mt-2 text-sm text-foreground/60">
                          {text.gallery[i]}
                        </figcaption>
                      )}
                    </figure>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div
              className={`relative overflow-hidden rounded-xl ${
                project.image ? "bg-foreground/5 shadow-xl" : "border border-foreground/10"
              } ${
                project.portrait ? "mx-auto aspect-[720/1458] w-[min(100%,calc(min(80vh,900px)*720/1458))]" : "aspect-[16/10] w-full"
              }`}
            >
              {project.image ? (
                <Image
                  src={withBase(project.image)}
                  alt={text.name}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full border border-seal/40 px-4 py-1.5 text-sm font-medium text-seal">
                    {dict.projects.inProgress}
                  </span>
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-6 md:sticky md:top-20">
          <div>
            {project.status === "in-progress" && project.image && (
              <span className="mb-3 inline-block rounded-full bg-seal px-3 py-1 text-xs font-medium text-on-seal">
                {dict.projects.inProgress}
              </span>
            )}
            <h1 className="font-serif text-4xl font-bold tracking-tight">{text.name}</h1>
            {text.tagline && (
              <p className="mt-2 font-serif text-xl text-seal">{text.tagline}</p>
            )}
          </div>

          <div className="space-y-4 leading-7 text-foreground/80">
            {text.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {text.sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 font-serif text-lg font-semibold">{section.title}</h2>
              <ul className="space-y-2 border-l-2 border-seal/40 pl-5 text-sm leading-6 text-foreground/80">
                {section.items.map((item) => {
                  // "Lead — description": the lead is shown in bold.
                  const [lead, ...rest] = item.split(" — ");
                  return (
                    <li key={item}>
                      {rest.length > 0 ? (
                        <>
                          <strong className="font-semibold text-foreground">{lead}</strong>
                          {" — "}
                          {rest.join(" — ")}
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-3 font-serif text-lg font-semibold">{dict.projects.technologies}</h2>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="rounded-md bg-foreground/[0.07] px-2 py-1 font-mono text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {project.demo && project.demoAccount && (
            <div className="rounded-xl border border-seal/30 bg-seal/5 p-5">
              <p className="text-sm font-medium">{dict.projects.demoAccount.title}</p>
              <dl className="mt-3 grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 text-sm">
                <dt className="text-foreground/60">{dict.projects.demoAccount.email}</dt>
                <dd className="font-mono select-all">{project.demoAccount.email}</dd>
                <dt className="text-foreground/60">{dict.projects.demoAccount.password}</dt>
                <dd className="font-mono select-all">{project.demoAccount.password}</dd>
              </dl>
            </div>
          )}

          {(project.demo || project.repo) && (
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-seal px-5 py-3 text-on-seal transition-colors hover:bg-seal-dark"
                >
                  {dict.projects.demo} ↗
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-foreground/20 px-5 py-3 transition-colors hover:bg-foreground/10"
                >
                  {dict.projects.repo} ↗
                </a>
              )}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
