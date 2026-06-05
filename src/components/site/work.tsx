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
          title="Real builds that show design, development, and product execution."
          copy="These are selected builds, not client case studies. They show our ability to design, build, and launch structured web applications, dashboards, and responsive user experiences."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className={cn(
                "premium-card p-5 sm:p-6",
                project.priority === "primary" && "lg:col-span-2 lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:gap-8",
                project.priority === "secondary" && "opacity-90",
              )}
            >
              <div className="overflow-hidden rounded-lg border border-cedar-line bg-cedar-ink/60">
                {project.screenshot ? (
                  <div className="relative aspect-video bg-cedar-ink">
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} ${project.name === "RepForge" ? "app" : "website"} preview`}
                      fill
                      sizes={project.priority === "primary" ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cedar-ink/30 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-cedar-gold/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cedar-gold">
                        {project.category}
                      </span>
                      <SiteIcon name="layout" className="size-5 text-cedar-muted" />
                    </div>
                    <div className="mt-8 grid gap-3">
                      <div className="h-3 w-2/3 rounded-full bg-cedar-cream/18" />
                      <div className="h-3 w-1/2 rounded-full bg-cedar-cream/12" />
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-md bg-cedar-forest/50" />
                        <div className="h-16 rounded-md bg-cedar-gold/20" />
                        <div className="h-16 rounded-md bg-cedar-cream/10" />
                      </div>
                      <div className="h-20 rounded-md border border-cedar-line bg-cedar-surface/80" />
                    </div>
                  </div>
                )}
                <div className="flex flex-col items-start gap-2 border-t border-cedar-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <span className="rounded-full border border-cedar-gold/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cedar-gold">
                    {project.category}
                  </span>
                  <span className="text-xs text-cedar-muted">Selected build</span>
                </div>
              </div>

              <div className={cn("mt-6", project.priority === "primary" && "lg:mt-0")}>
                <h3 className="text-2xl font-semibold text-cedar-cream">{project.name}</h3>
                <p className="mt-3 text-base leading-7 text-cedar-muted">{project.description}</p>
                <div className="mt-5 rounded-lg border border-cedar-line bg-cedar-ink/40 p-4">
                  <p className="text-sm font-semibold text-cedar-cream">What it proves</p>
                  <p className="mt-2 text-sm leading-6 text-cedar-muted">{project.proof}</p>
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
