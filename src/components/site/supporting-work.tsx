import Image from "next/image";
import { ActionLink } from "@/components/site/action-link";
import {
  deodarBrewEvidence,
  dueFlowEvidence,
  orbitCaseStudy,
} from "@/config/site";

export function SupportingWork() {
  return (
    <div className="mt-14">
      <DeodarBrewStudy />
      <DueFlowStudy />
      <OrbitStudy />
    </div>
  );
}

function ProjectMarker({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="type-label text-studio-greenBright">{index}</p>
      <p className="type-label text-studio-faint">{label}</p>
    </div>
  );
}

function DeodarBrewStudy() {
  return (
    <article className="border-t border-studio-line pt-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-end">
        <div>
          <ProjectMarker index="01" label={deodarBrewEvidence.category} />
          <h3 className="type-display-lg mt-5 max-w-4xl text-studio-text">
            {deodarBrewEvidence.name}
          </h3>
          <div className="mt-5 space-y-2">
            <p className="type-label text-studio-greenBright">
              {deodarBrewEvidence.status}
            </p>
            <p className="type-small text-studio-muted">
              {deodarBrewEvidence.qualifier}
            </p>
          </div>
        </div>
        <div>
          <p className="type-subheading max-w-lg text-studio-text">
            {deodarBrewEvidence.thesis}
          </p>
          <p className="type-body-lg mt-5 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            {deodarBrewEvidence.summary}
          </p>
        </div>
      </div>

      <figure className="mt-12 border border-studio-paperLine bg-studio-paper p-2 sm:p-3">
        <Image
          src={deodarBrewEvidence.screenshot.src}
          alt={deodarBrewEvidence.screenshot.alt}
          width={deodarBrewEvidence.screenshot.width}
          height={deodarBrewEvidence.screenshot.height}
          sizes="(min-width: 1024px) 88vw, 100vw"
          className="aspect-[16/9] w-full object-contain"
          priority
        />
      </figure>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <EvidenceStatement
          index="01"
          label="Business problem"
          heading={deodarBrewEvidence.problem.heading}
          body={deodarBrewEvidence.problem.body}
        />
        <EvidenceStatement
          index="02"
          label="System decision"
          heading={deodarBrewEvidence.decision.heading}
          body={deodarBrewEvidence.decision.body}
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
        <div>
          <p className="type-label text-studio-greenBright">
            Customer and operator flow
          </p>
          <ol className="mt-6 border-y border-studio-line">
            {deodarBrewEvidence.flow.map((item, index) => (
              <li
                key={item.step}
                className="grid gap-4 border-t border-studio-line py-5 first:border-t-0 sm:grid-cols-[3rem_1fr]"
              >
                <span className="type-label text-studio-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="type-subheading text-studio-text">
                    {item.step}
                  </h4>
                  <p className="type-small mt-2 max-w-xl text-studio-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="type-label text-studio-greenBright">
            Implementation areas
          </p>
          <ul className="mt-6 border-y border-studio-line">
            {deodarBrewEvidence.implementationAreas.map((area) => (
              <li
                key={area.label}
                className="grid gap-3 border-t border-studio-line py-4 first:border-t-0 sm:grid-cols-[minmax(10rem,0.42fr)_1fr]"
              >
                <h4 className="text-sm font-semibold text-studio-text">
                  {area.label}
                </h4>
                <p className="type-small text-studio-muted">
                  {area.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 grid gap-10 border-t border-studio-line pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="type-label text-studio-faint">Deodar&apos;s role</p>
          <p className="type-body-lg mt-4 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            {deodarBrewEvidence.responsibility}
          </p>
        </div>

        <div>
          <p className="type-label text-studio-faint">
            Intentional v1 boundaries
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {deodarBrewEvidence.limitations.map((item) => (
              <li key={item} className="type-small text-studio-muted">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row">
            <ActionLink
              href={deodarBrewEvidence.links.liveUrl}
              external
              size="lg"
              variant="primary"
            >
              {deodarBrewEvidence.links.liveLabel}
            </ActionLink>
            <ActionLink
              href={deodarBrewEvidence.links.repoUrl}
              external
              size="lg"
              variant="secondary"
              ariaLabel="View Deodar-Brew source"
            >
              {deodarBrewEvidence.links.sourceLabel}
            </ActionLink>
          </div>
        </div>
      </div>
    </article>
  );
}

function DueFlowStudy() {
  return (
    <article className="mt-[var(--studio-section-space)] border-t border-studio-line pt-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
        <div>
          <ProjectMarker index="02" label={dueFlowEvidence.category} />
          <h3 className="type-title mt-4 text-studio-text">
            {dueFlowEvidence.name}
          </h3>
          <p className="type-label mt-5 text-studio-greenBright">
            {dueFlowEvidence.status}
          </p>
          <p className="type-subheading mt-6 max-w-lg text-studio-text">
            {dueFlowEvidence.thesis}
          </p>
          <p className="type-body mt-5 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            {dueFlowEvidence.summary}
          </p>
        </div>

        <figure className="border border-studio-line bg-studio-surface p-2">
          <Image
            src={dueFlowEvidence.screenshot.src}
            alt={dueFlowEvidence.screenshot.alt}
            width={dueFlowEvidence.screenshot.width}
            height={dueFlowEvidence.screenshot.height}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="aspect-[16/9] w-full object-contain"
          />
        </figure>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <EvidenceStatement
          index="01"
          label="Product problem"
          heading={dueFlowEvidence.problem.heading}
          body={dueFlowEvidence.problem.body}
        />
        <EvidenceStatement
          index="02"
          label="Product decision"
          heading={dueFlowEvidence.decision.heading}
          body={dueFlowEvidence.decision.body}
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <p className="type-label text-studio-greenBright">Evidence areas</p>
          <ul className="mt-5 border-y border-studio-line">
            {dueFlowEvidence.evidenceAreas.map((area, index) => (
              <li
                key={area.label}
                className="grid gap-4 border-t border-studio-line py-5 first:border-t-0 sm:grid-cols-[3rem_1fr]"
              >
                <span className="type-label text-studio-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="type-subheading text-studio-text">
                    {area.label}
                  </h4>
                  <p className="type-small mt-2 max-w-xl text-studio-muted">
                    {area.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-studio-line lg:pl-8">
          <p className="type-label text-studio-faint">Deodar&apos;s role</p>
          <p className="type-body-lg mt-4 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            {dueFlowEvidence.responsibility}
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row">
            <ActionLink
              href={dueFlowEvidence.links.liveUrl}
              external
              size="lg"
              variant="secondary"
            >
              {dueFlowEvidence.links.liveLabel}
            </ActionLink>
            <ActionLink
              href={dueFlowEvidence.links.repoUrl}
              external
              size="lg"
              variant="text"
              ariaLabel="View DueFlow source"
            >
              {dueFlowEvidence.links.sourceLabel}
            </ActionLink>
          </div>
        </div>
      </div>
    </article>
  );
}

function OrbitStudy() {
  return (
    <article className="mt-[var(--studio-section-space)] border-t border-studio-line pt-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
        <div>
          <ProjectMarker index="03" label={orbitCaseStudy.eyebrow} />
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:block">
            <div>
              <p className="type-label text-studio-faint">
                {orbitCaseStudy.statusLabel}
              </p>
              <h3 className="type-title mt-3 text-studio-text">
                {orbitCaseStudy.projectName}
              </h3>
            </div>
            <p className="type-subheading max-w-lg text-studio-text lg:mt-8">
              {orbitCaseStudy.thesis}
            </p>
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

      <figure className="mt-12 border border-studio-line bg-studio-surface p-2">
        <Image
          src={orbitCaseStudy.screenshot.src}
          alt={orbitCaseStudy.screenshot.alt}
          width={orbitCaseStudy.screenshot.width}
          height={orbitCaseStudy.screenshot.height}
          sizes="(min-width: 1024px) 72vw, 100vw"
          className="aspect-[16/9] w-full object-contain"
        />
      </figure>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
        <div className="space-y-10">
          {orbitCaseStudy.narrative.map((item) => (
            <EvidenceStatement
              key={item.index}
              index={item.index}
              label={item.eyebrow}
              heading={item.heading}
              body={item.body}
            />
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
                    <h4 className="type-subheading text-studio-text">{step.step}</h4>
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

      <div className="mt-14 grid gap-10 border-t border-studio-line pt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <h4 className="type-subheading text-studio-text">
            {orbitCaseStudy.role.heading}
          </h4>
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
              <ActionLink href={orbitCaseStudy.links.liveUrl} external size="lg" variant="secondary">
                {orbitCaseStudy.links.liveLabel}
              </ActionLink>
            ) : null}
            {orbitCaseStudy.links.repoUrl ? (
              <ActionLink href={orbitCaseStudy.links.repoUrl} external size="lg" variant="text" ariaLabel="View Orbit source">
                {orbitCaseStudy.links.sourceLabel}
              </ActionLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function EvidenceStatement({
  index,
  label,
  heading,
  body,
}: {
  index: string;
  label: string;
  heading: string;
  body: string;
}) {
  return (
    <section className="border-t border-studio-line pt-6">
      <div className="grid gap-4 sm:grid-cols-[7rem_1fr]">
        <div>
          <p className="type-label text-studio-greenBright">{index}</p>
          <p className="type-label mt-2 text-studio-faint">{label}</p>
        </div>
        <div>
          <h4 className="type-subheading text-studio-text">{heading}</h4>
          <p className="type-body mt-4 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
