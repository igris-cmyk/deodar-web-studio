import Image from "next/image";
import { projects } from "@/config/site";
import { cn } from "@/lib/utils";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Work() {
  return (
    <section id="work" className="section-spacing border-b border-cedar-line bg-cedar-surface/30">
      <div className="section-shell">
        <SectionHeading
          label="Selected Builds"
          title="Selected builds with enough room to inspect the craft."
          copy="We haven’t listed client work publicly yet — these selected builds show our design and engineering range across websites, dashboards, and responsive product interfaces."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className={cn(
                "premium-card overflow-hidden p-4 sm:p-5",
                project.priority === "primary" && "lg:col-span-2 lg:grid lg:grid-cols-[1.35fr_0.65fr] lg:gap-8 lg:p-6",
                project.priority === "secondary" && "opacity-90",
              )}
            >
              <div className="overflow-hidden rounded-lg border border-cedar-line bg-cedar-ink/60">
                {project.screenshot ? (
                  <div className={cn("relative bg-cedar-ink", project.priority === "primary" ? "aspect-[16/9]" : "aspect-[16/10]")}>
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} real project screenshot preview`}
                      fill
                      sizes={project.priority === "primary" ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cedar-ink/30 via-transparent to-transparent" />
                  </div>
                ) : (
                  <TechnicalPreview category={project.category} />
                )}
                <div className="flex flex-col items-start gap-2 border-t border-cedar-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <span className="rounded-full border border-cedar-gold/25 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-cedar-gold">
                    {project.category}
                  </span>
                  <span className="text-xs text-cedar-muted">Selected build</span>
                </div>
              </div>

              <div className={cn("mt-6", project.priority === "primary" && "lg:mt-0")}>
                <h3 className="text-2xl font-semibold text-cedar-cream">{project.name}</h3>
                <p className="mt-3 text-base leading-7 text-cedar-muted">{project.description}</p>
                <div className="mt-5 rounded-lg border border-cedar-line bg-cedar-ink/40 p-4">
                  <p className="text-sm leading-6 text-cedar-muted">{project.details}</p>
                </div>

                {project.tech?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-full border border-cedar-line px-3 py-1 text-xs text-cedar-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full bg-cedar-gold px-4 py-2 text-sm font-semibold text-cedar-ink"
                    >
                      View Live
                      <SiteIcon name="external" className="size-4" />
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full border border-cedar-line px-4 py-2 text-sm font-semibold text-cedar-cream"
                    >
                      GitHub
                      <SiteIcon name="github" className="size-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalPreview({ category }: { category: string }) {
  return (
    <div className="min-h-[260px] p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-cedar-gold/25 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-cedar-gold">
          {category}
        </span>
        <SiteIcon name="workflow" className="size-5 text-cedar-muted" />
      </div>
      <div className="mt-6 overflow-hidden rounded-md border border-cedar-line bg-[#0A0F0D]">
        <div className="flex h-9 items-center gap-1.5 border-b border-cedar-line px-3" aria-hidden="true">
          <span className="size-2 rounded-full bg-cedar-gold/80" />
          <span className="size-2 rounded-full bg-cedar-muted/40" />
          <span className="size-2 rounded-full bg-cedar-forest" />
        </div>
        <div className="space-y-3 p-4 font-mono text-xs leading-6 text-cedar-muted">
          <p><span className="text-cedar-gold">route</span> command - local workflow</p>
          <p><span className="text-cedar-gold">memory</span> context - user approved</p>
          <p><span className="text-cedar-gold">tools</span> desktop actions - guarded</p>
          <p className="text-cedar-cream">status: technical exploration</p>
        </div>
      </div>
    </div>
  );
}
