export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 sm:scroll-mt-16 px-6 py-14">
      <h2 className="flex items-center gap-3 font-serif text-3xl font-bold tracking-tight">
        <span aria-hidden className="h-8 w-2 rounded-[1px] bg-seal" />
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-foreground/70">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
