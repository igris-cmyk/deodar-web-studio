import Image from "next/image";
import { ActionLink } from "@/components/site/action-link";
import {
  deodarBrewEvidence,
  dueFlowEvidence,
  supportingWorkChapter,
} from "@/config/site";

export function SupportingWork() {
  return (
    <div className="mt-[var(--studio-section-space)] border-t border-studio-line pt-[var(--studio-section-space-compact)]">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
        <p className="type-label text-studio-greenBright">
          {supportingWorkChapter.eyebrow}
        </p>
        <div>
          <h2 className="type-section max-w-3xl text-studio-text">
            {supportingWorkChapter.heading}
          </h2>
          <p className="type-body-lg mt-5 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            {supportingWorkChapter.introduction}
          </p>
        </div>
      </div>

      <DueFlowStudy />
      <DeodarBrewStudy />
    </div>
  );
}

function DueFlowStudy() {
  return (
    <article className="mt-16 border-t border-studio-line pt-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
        <div>
          <p className="type-label text-studio-faint">
            {dueFlowEvidence.category}
          </p>
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

function DeodarBrewStudy() {
  return (
    <article className="mt-[var(--studio-section-space-compact)] border-t border-studio-line pt-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.16fr)_minmax(0,0.84fr)] lg:items-start">
        <figure className="order-2 border border-studio-paperLine bg-studio-paper p-2 lg:order-1">
          <Image
            src={deodarBrewEvidence.screenshot.src}
            alt={deodarBrewEvidence.screenshot.alt}
            width={deodarBrewEvidence.screenshot.width}
            height={deodarBrewEvidence.screenshot.height}
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="aspect-[16/9] w-full object-contain"
            unoptimized
          />
        </figure>

        <div className="order-1 lg:order-2">
          <p className="type-label text-studio-faint">
            {deodarBrewEvidence.category}
          </p>
          <h3 className="type-title mt-4 text-studio-text">
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
          <p className="type-subheading mt-6 max-w-lg text-studio-text">
            {deodarBrewEvidence.thesis}
          </p>
          <p className="type-body mt-5 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            {deodarBrewEvidence.summary}
          </p>
        </div>
      </div>

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
