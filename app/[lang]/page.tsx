import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { withBase } from "@/lib/assets";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <main className="flex-1">
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-10 px-6 py-20 text-center md:flex-row md:text-left">
        <Image
          src={withBase("/profile.jpg")}
          alt={profile.name}
          width={700}
          height={700}
          priority
          className="size-44 shrink-0 rounded-full object-cover ring-4 ring-seal shadow-xl sm:size-56 md:size-64"
        />
        <div className="flex flex-col items-center gap-6 md:items-start">
          <p className="text-base font-medium text-seal">{dict.hero.role}</p>
          <h1 className="font-serif text-[clamp(1.5rem,7.4vw,2.25rem)] font-bold tracking-tight max-sm:whitespace-nowrap sm:text-5xl md:text-6xl">{profile.name}</h1>
          <p className="max-w-2xl text-xl leading-8 text-foreground/70">{dict.hero.tagline}</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 text-sm font-medium md:justify-start">
            <a href="#projects" className="rounded-full bg-seal px-5 py-3 text-on-seal transition-colors hover:bg-seal-dark">
              {dict.hero.seeProjects}
            </a>
            <a href="#contact" className="rounded-full border border-foreground/20 px-5 py-3 transition-colors hover:bg-foreground/10">
              {dict.hero.contactMe}
            </a>
          </div>
        </div>
      </section>

      <Section id="projects" title={dict.projects.title} subtitle={dict.projects.subtitle}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const text = dict.projects.items[p.slug];
            return (
              <ProjectCard
                key={p.slug}
                href={`/${lang}/projects/${p.slug}`}
                name={text.name}
                description={text.description}
                tech={p.tech}
                image={p.image && withBase(p.image)}
                video={p.video && withBase(p.video)}
                portrait={p.portrait}
                demo={p.demo}
                repo={p.repo}
                badge={p.status === "in-progress" ? dict.projects.inProgress : undefined}
                labels={dict.projects}
              />
            );
          })}
        </div>
      </Section>

      <Section id="cv" title={dict.cv.title} subtitle={dict.cv.subtitle}>
        <a
          href={withBase(profile.cv[lang])}
          download={`Diego-Galisteo-Reina-CV-${lang}.pdf`}
          className="mb-10 inline-block rounded-full bg-seal px-5 py-3 text-sm font-medium text-on-seal transition-colors hover:bg-seal-dark"
        >
          ↓ {dict.cv.download}
        </a>

        <p className="mb-12 max-w-3xl leading-7 text-foreground/80">{dict.cv.summary}</p>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <Timeline title={dict.cv.experience} items={dict.cv.experienceItems} />
          </div>
          <div className="space-y-12">
            <Timeline title={dict.cv.education} items={dict.cv.educationItems} />
            <div>
              <h3 className="mb-4 font-serif text-lg font-semibold">{dict.cv.languages}</h3>
              <ul className="space-y-2 text-sm">
                {dict.cv.languageItems.map((l) => (
                  <li key={l.name}>
                    <span className="font-medium">{l.name}</span>
                    <span className="text-foreground/60"> · {l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <h3 className="mb-4 mt-12 font-serif text-lg font-semibold">{dict.cv.skills}</h3>
        <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-[max-content_1fr]">
          {profile.skillGroups.map((g) => (
            <div key={g.key} className="contents">
              <dt className="text-sm font-medium text-foreground/60">{dict.cv.skillLabels[g.key]}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className={chip}>
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="contact" title={dict.contact.title} subtitle={dict.contact.text}>
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-seal px-5 py-3 text-on-seal transition-colors hover:bg-seal-dark"
          >
            ✉ {dict.contact.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/20 px-5 py-3 transition-colors hover:bg-foreground/10"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/20 px-5 py-3 transition-colors hover:bg-foreground/10"
          >
            LinkedIn ↗
          </a>
        </div>
      </Section>

      <footer className="border-t border-foreground/10 py-8 text-center text-sm text-foreground/50">
        {profile.name} · {dict.footer}
      </footer>
    </main>
  );
}

const chip = "rounded-md bg-foreground/[0.07] px-2 py-1 font-mono text-xs";

type TimelineItem = {
  title: string;
  place: string;
  period: string;
  description: string;
  tech: string[];
};

function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="mb-4 font-serif text-lg font-semibold">{title}</h3>
      <ol className="space-y-8 border-l-2 border-seal/40 pl-6">
        {items.map((item) => (
          <li key={`${item.title}-${item.place}`}>
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-foreground/60">
              {[item.place, item.period].filter(Boolean).join(" · ")}
            </p>
            {item.description && (
              <p className="mt-2 text-sm leading-6 text-foreground/70">{item.description}</p>
            )}
            {item.tech.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <li key={t} className={chip}>
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
