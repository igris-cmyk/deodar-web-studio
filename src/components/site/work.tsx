import Image from "next/image";
import { projects } from "@/config/site";
import { cn } from "@/lib/utils";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Work() {
  return (
    <section id="work" className="section-spacing border-b border-deodar-line bg-deodar-surface/30">
      <div className="section-shell">
        <SectionHeading
          label="Selected Builds"
          title="Working Demos & Selected Builds"
          copy="These are selected builds and production-style demos, not public client case studies. They show interface quality, structure, and engineering range without pretending to be client proof."
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
              <div className="overflow-hidden rounded-lg border border-deodar-line bg-deodar-ink/60">
                {project.screenshot ? (
                  <div className={cn("relative bg-deodar-ink", project.priority === "primary" ? "aspect-[16/9]" : "aspect-[16/10]")}>
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} real project screenshot preview`}
                      fill
                      sizes={project.priority === "primary" ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deodar-ink/30 via-transparent to-transparent" />
                  </div>
                ) : (
                  <TechnicalPreview category={project.category} />
                )}
                <div className="flex flex-col items-start gap-2 border-t border-deodar-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <span className="rounded-full border border-deodar-gold/25 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-deodar-gold">
                    {project.category}
                  </span>
                  <span className="text-xs text-deodar-muted">Selected build</span>
                </div>
              </div>

              <div className={cn("mt-6", project.priority === "primary" && "lg:mt-0")}>
                <h3 className="text-2xl font-semibold text-deodar-cream">{project.name}</h3>
                <p className="mt-3 text-base leading-7 text-deodar-muted">{project.description}</p>
                <div className="mt-5 rounded-lg border border-deodar-line bg-deodar-ink/40 p-4">
                  <p className="text-sm leading-6 text-deodar-muted">{project.details}</p>
                </div>

                {project.tech?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-full border border-deodar-line px-3 py-1 text-xs text-deodar-muted">
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
                      className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full bg-deodar-gold px-4 py-2 text-sm font-semibold text-deodar-ink"
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
                      className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full border border-deodar-line px-4 py-2 text-sm font-semibold text-deodar-cream"
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
        <span className="rounded-full border border-deodar-gold/25 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-deodar-gold">
          {category}
        </span>
        <SiteIcon name="workflow" className="size-5 text-deodar-muted" />
      </div>
      <div className="mt-6 overflow-hidden rounded-md border border-deodar-line bg-[#0A0F0D]">
        <div className="flex h-9 items-center gap-1.5 border-b border-deodar-line px-3" aria-hidden="true">
          <span className="size-2 rounded-full bg-deodar-gold/80" />
          <span className="size-2 rounded-full bg-deodar-muted/40" />
          <span className="size-2 rounded-full bg-deodar-accent" />
        </div>
        <div className="space-y-3 p-4 font-mono text-xs leading-6 text-deodar-muted">
          <p><span className="text-deodar-gold">route</span> command - local workflow</p>
          <p><span className="text-deodar-gold">memory</span> context - user approved</p>
          <p><span className="text-deodar-gold">tools</span> desktop actions - guarded</p>
          <p className="text-deodar-cream">status: technical exploration</p>
        </div>
      </div>
    </div>
  );
}
