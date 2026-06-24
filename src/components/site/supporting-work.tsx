import Image from "next/image";
import { ActionLink } from "@/components/site/action-link";
import {
  deodarBrewEvidence,
  dueFlowEvidence,
  orbitCaseStudy,
} from "@/config/site";

type ProjectActionsProps = {
  caseStudyHref: string;
  caseStudyLabel: string;
  liveLabel: string;
  liveUrl: string;
  sourceLabel: string;
  sourceUrl: string;
};

export function SupportingWork() {
  return (
    <div className="mt-10">
      <DeodarBrewFeatured />

      <div className="mt-12 border-y border-studio-line">
        <SupportingProject
          index="02"
          label={dueFlowEvidence.category}
          name={dueFlowEvidence.name}
          status={dueFlowEvidence.status}
          thesis={dueFlowEvidence.thesis}
          problem={dueFlowEvidence.problem.heading}
          solution={dueFlowEvidence.decision.heading}
          responsibility={dueFlowEvidence.responsibility}
          image={dueFlowEvidence.screenshot}
          actions={{
            caseStudyHref: `/work/${dueFlowEvidence.slug}`,
            caseStudyLabel: "Read DueFlow case study",
            liveLabel: dueFlowEvidence.links.liveLabel,
            liveUrl: dueFlowEvidence.links.liveUrl,
            sourceLabel: dueFlowEvidence.links.sourceLabel,
            sourceUrl: dueFlowEvidence.links.repoUrl,
          }}
        />
        <SupportingProject
          index="03"
          label={orbitCaseStudy.eyebrow}
          name={orbitCaseStudy.projectName}
          status={orbitCaseStudy.statusLabel}
          thesis={orbitCaseStudy.thesis}
          problem={orbitCaseStudy.narrative[0].heading}
          solution={orbitCaseStudy.narrative[1].heading}
          responsibility={orbitCaseStudy.role.body}
          image={orbitCaseStudy.screenshot}
          actions={{
            caseStudyHref: `/work/${orbitCaseStudy.slug}`,
            caseStudyLabel: "Read Orbit case study",
            liveLabel: orbitCaseStudy.links.liveLabel,
            liveUrl: orbitCaseStudy.links.liveUrl,
            sourceLabel: orbitCaseStudy.links.sourceLabel,
            sourceUrl: orbitCaseStudy.links.repoUrl,
          }}
        />
      </div>
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

function DeodarBrewFeatured() {
  return (
    <article className="border-t border-studio-line pt-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
        <div>
          <ProjectMarker index="01" label={deodarBrewEvidence.category} />
          <h3 className="type-display-lg mt-4 max-w-4xl text-studio-text">
            {deodarBrewEvidence.name}
          </h3>
          <div className="mt-4 space-y-1.5">
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
          <p className="type-body-lg mt-4 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            {deodarBrewEvidence.summary}
          </p>
        </div>
      </div>

      <figure className="mt-8 border border-studio-paperLine bg-studio-paper p-2 sm:p-3">
        <Image
          src={deodarBrewEvidence.screenshot.src}
          alt={deodarBrewEvidence.screenshot.alt}
          width={deodarBrewEvidence.screenshot.width}
          height={deodarBrewEvidence.screenshot.height}
          sizes="(min-width: 1024px) 82vw, 100vw"
          className="aspect-[16/9] w-full object-contain"
          priority
        />
      </figure>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <EvidenceSummary
          label="Business problem"
          heading={deodarBrewEvidence.problem.heading}
          body={deodarBrewEvidence.problem.body}
        />
        <EvidenceSummary
          label="System decision"
          heading={deodarBrewEvidence.decision.heading}
          body={deodarBrewEvidence.decision.body}
        />
      </div>

      <div className="mt-8 grid gap-6 border-t border-studio-line pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="type-label text-studio-faint">Relevant responsibility</p>
          <p className="type-body mt-3 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            {deodarBrewEvidence.responsibility}
          </p>
        </div>
        <ProjectActions
          caseStudyHref={`/work/${deodarBrewEvidence.slug}`}
          caseStudyLabel="Read Deodar-Brew case study"
          liveLabel={deodarBrewEvidence.links.liveLabel}
          liveUrl={deodarBrewEvidence.links.liveUrl}
          sourceLabel={deodarBrewEvidence.links.sourceLabel}
          sourceUrl={deodarBrewEvidence.links.repoUrl}
        />
      </div>
    </article>
  );
}

function SupportingProject({
  index,
  label,
  name,
  status,
  thesis,
  problem,
  solution,
  responsibility,
  image,
  actions,
}: {
  index: string;
  label: string;
  name: string;
  status: string;
  thesis: string;
  problem: string;
  solution: string;
  responsibility: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  actions: ProjectActionsProps;
}) {
  return (
    <article className="grid gap-6 border-t border-studio-line py-8 first:border-t-0 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.78fr)_minmax(0,1fr)] lg:items-start">
      <div>
        <ProjectMarker index={index} label={label} />
        <h3 className="type-title mt-3 text-studio-text">{name}</h3>
        <p className="type-label mt-4 text-studio-greenBright">{status}</p>
        <p className="type-subheading mt-4 max-w-lg text-studio-text">
          {thesis}
        </p>
      </div>

      <figure className="border border-studio-line bg-studio-surface p-2">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="aspect-[16/9] w-full object-contain"
        />
      </figure>

      <div className="grid gap-5">
        <EvidenceSummary label="Problem" heading={problem} />
        <EvidenceSummary label="Solution direction" heading={solution} />
        <div className="border-t border-studio-line pt-4">
          <p className="type-label text-studio-faint">Relevant responsibility</p>
          <p className="type-small mt-2 text-studio-muted">{responsibility}</p>
        </div>
        <ProjectActions {...actions} compact />
      </div>
    </article>
  );
}

function EvidenceSummary({
  label,
  heading,
  body,
}: {
  label: string;
  heading: string;
  body?: string;
}) {
  return (
    <section className="border-t border-studio-line pt-4">
      <p className="type-label text-studio-faint">{label}</p>
      <h4 className="type-subheading mt-2 text-studio-text">{heading}</h4>
      {body ? (
        <p className="type-small mt-2 max-w-[var(--studio-reading-max)] text-studio-muted">
          {body}
        </p>
      ) : null}
    </section>
  );
}

function ProjectActions({
  caseStudyHref,
  caseStudyLabel,
  liveLabel,
  liveUrl,
  sourceLabel,
  sourceUrl,
  compact,
}: ProjectActionsProps & { compact?: boolean }) {
  return (
    <div className={compact ? "flex flex-col gap-3 min-[390px]:flex-row min-[390px]:flex-wrap" : "flex flex-col gap-3 min-[390px]:flex-row min-[390px]:flex-wrap lg:justify-end"}>
      <ActionLink href={caseStudyHref} size={compact ? "md" : "lg"} variant="primary">
        {caseStudyLabel}
      </ActionLink>
      <ActionLink href={liveUrl} external size={compact ? "md" : "lg"} variant="secondary">
        {liveLabel}
      </ActionLink>
      <ActionLink
        href={sourceUrl}
        external
        size={compact ? "md" : "lg"}
        variant="text"
        ariaLabel={`${sourceLabel} for ${caseStudyLabel.replace("Read ", "").replace(" case study", "")}`}
      >
        {sourceLabel}
      </ActionLink>
    </div>
  );
}
