import Image from "next/image";
import { ActionLink } from "@/components/site/action-link";
import { Container } from "@/components/site/container";
import { orbitCaseStudy } from "@/config/site";

export function Work() {
  return (
    <section id="work" className="border-b border-studio-line bg-studio-canvas py-[var(--studio-section-space)]">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-end">
          <div>
            <p className="type-label text-studio-greenBright">{orbitCaseStudy.eyebrow}</p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:block">
              <div>
                <p className="type-label text-studio-faint">{orbitCaseStudy.statusLabel}</p>
                <h2 className="type-display-lg mt-3 text-studio-text">{orbitCaseStudy.projectName}</h2>
              </div>
              <p className="type-subheading max-w-lg text-studio-text lg:mt-8">{orbitCaseStudy.thesis}</p>
            </div>
          </div>
          <div>
            <p className="type-body-lg max-w-[var(--studio-reading-max)] text-studio-textSoft">
              {orbitCaseStudy.introduction}
            </p>
            <p className="type-small mt-5 max-w-[var(--studio-reading-max)] border-l border-studio-line pl-4 text-studio-muted">
              {orbitCaseStudy.honestyStatement}
            </p>
          </div>
        </div>

        <figure className="mt-14 border border-studio-line bg-studio-surface p-2 sm:p-3">
          <Image
            src={orbitCaseStudy.screenshot.src}
            alt={orbitCaseStudy.screenshot.alt}
            width={orbitCaseStudy.screenshot.width}
            height={orbitCaseStudy.screenshot.height}
            sizes="(min-width: 1024px) 88vw, 100vw"
            className="aspect-[16/9] w-full object-contain"
            priority
          />
        </figure>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="space-y-10">
            {orbitCaseStudy.narrative.map((item) => (
              <article key={item.index} className="border-t border-studio-line pt-6">
                <div className="grid gap-4 sm:grid-cols-[4rem_1fr]">
                  <div>
                    <p className="type-label text-studio-greenBright">{item.index}</p>
                    <p className="type-label mt-2 text-studio-faint">{item.eyebrow}</p>
                  </div>
                  <div>
                    <h3 className="type-section text-studio-text">{item.heading}</h3>
                    <p className="type-body mt-5 max-w-[var(--studio-reading-max)] text-studio-textSoft">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div>
            <div className="border-y border-studio-line py-6">
              <p className="type-label text-studio-greenBright">Core workflow</p>
              <ol className="mt-6">
                {orbitCaseStudy.workflow.map((step, index) => (
                  <li key={step.step} className="grid gap-4 border-t border-studio-line py-5 first:border-t-0 sm:grid-cols-[4rem_1fr]">
                    <span className="type-label text-studio-faint">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="type-subheading text-studio-text">{step.step}</h3>
                      <p className="type-small mt-2 max-w-md text-studio-muted">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10">
              <p className="type-label text-studio-greenBright">{orbitCaseStudy.systemScopeLabel}</p>
              <ul className="mt-5 grid grid-cols-2 border-y border-studio-line sm:grid-cols-4">
                {orbitCaseStudy.systemScope.map((item) => (
                  <li key={item} className="border-b border-studio-line px-3 py-4 text-sm font-medium text-studio-textSoft sm:border-r sm:last:border-r-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-studio-line pt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <h3 className="type-section text-studio-text">{orbitCaseStudy.role.heading}</h3>
            <p className="type-body-lg mt-5 max-w-[var(--studio-reading-max)] text-studio-textSoft">{orbitCaseStudy.role.body}</p>
          </div>

          <div className="space-y-8">
            <dl className="grid border-y border-studio-line sm:grid-cols-2">
              {orbitCaseStudy.metadata.map((item) => (
                <div key={item.label} className="border-b border-studio-line py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                  <dt className="type-label text-studio-faint">{item.label}</dt>
                  <dd className="type-body mt-2 text-studio-text">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-3 min-[390px]:flex-row">
              {orbitCaseStudy.links.liveUrl ? (
                <ActionLink href={orbitCaseStudy.links.liveUrl} external size="lg" variant="primary">
                  {orbitCaseStudy.links.liveLabel}
                </ActionLink>
              ) : null}
              {orbitCaseStudy.links.repoUrl ? (
                <ActionLink href={orbitCaseStudy.links.repoUrl} external size="lg" variant="secondary">
                  {orbitCaseStudy.links.sourceLabel}
                </ActionLink>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
