import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActionLink } from "@/components/site/action-link";
import { Container } from "@/components/site/container";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import {
  deodarBrewEvidence,
  dueFlowEvidence,
  orbitCaseStudy,
} from "@/config/site";
import { absoluteUrl } from "@/lib/site-url";

const caseStudies = [
  {
    slug: deodarBrewEvidence.slug,
    name: deodarBrewEvidence.name,
    category: deodarBrewEvidence.category,
    status: deodarBrewEvidence.status,
    qualifier: deodarBrewEvidence.qualifier,
    thesis: deodarBrewEvidence.thesis,
    summary: deodarBrewEvidence.summary,
    screenshot: deodarBrewEvidence.screenshot,
    problem: deodarBrewEvidence.problem,
    decision: deodarBrewEvidence.decision,
    flowTitle: "Customer and operator flow",
    flow: deodarBrewEvidence.flow,
    areasTitle: "Verified implementation areas",
    areas: deodarBrewEvidence.implementationAreas,
    roleHeading: "Deodar's role",
    role: deodarBrewEvidence.responsibility,
    boundariesTitle: "Intentional v1 boundaries",
    boundaries: deodarBrewEvidence.limitations,
    links: deodarBrewEvidence.links,
    metadataDescription:
      "Deodar-Brew is an owned Deodar reference implementation for food-business websites, digital menus, persistent carts, WhatsApp ordering and protected content administration.",
  },
  {
    slug: dueFlowEvidence.slug,
    name: dueFlowEvidence.name,
    category: dueFlowEvidence.category,
    status: dueFlowEvidence.status,
    thesis: dueFlowEvidence.thesis,
    summary: dueFlowEvidence.summary,
    screenshot: dueFlowEvidence.screenshot,
    problem: dueFlowEvidence.problem,
    decision: dueFlowEvidence.decision,
    flowTitle: "Product evidence areas",
    flow: dueFlowEvidence.evidenceAreas.map((area) => ({
      step: area.label,
      description: area.description,
    })),
    areasTitle: "Workflow responsibilities",
    areas: [
      {
        label: "Product positioning",
        description:
          "Frames the product around pending balances, proof, promises and follow-up actions.",
      },
      {
        label: "Workflow architecture",
        description:
          "Connects clients, projects, ledgers, proof records and reminders into one operating layer.",
      },
      {
        label: "Interface system",
        description:
          "Keeps financial context readable through calm hierarchy and responsive product screens.",
      },
    ],
    roleHeading: "Deodar's role",
    role: dueFlowEvidence.responsibility,
    boundariesTitle: "Honest status",
    boundaries: [
      "Independent product preview",
      "No commercial adoption claim",
      "No automated payment-recovery claim",
    ],
    links: dueFlowEvidence.links,
    metadataDescription:
      "DueFlow is an independent product preview exploring pending balances, proof trails and user-approved follow-up workflows for service businesses.",
  },
  {
    slug: orbitCaseStudy.slug,
    name: orbitCaseStudy.projectName,
    category: "Operations platform concept",
    status: orbitCaseStudy.statusLabel,
    thesis: orbitCaseStudy.thesis,
    summary: orbitCaseStudy.introduction,
    screenshot: orbitCaseStudy.screenshot,
    problem: {
      heading: orbitCaseStudy.narrative[0].heading,
      body: orbitCaseStudy.narrative[0].body,
    },
    decision: {
      heading: orbitCaseStudy.narrative[1].heading,
      body: orbitCaseStudy.narrative[1].body,
    },
    flowTitle: "Core workflow",
    flow: orbitCaseStudy.workflow,
    areasTitle: orbitCaseStudy.systemScopeLabel,
    areas: orbitCaseStudy.systemScope.map((item) => ({
      label: item,
      description:
        "Part of the connected operational picture explored in the Orbit product concept.",
    })),
    roleHeading: orbitCaseStudy.role.heading,
    role: orbitCaseStudy.role.body,
    boundariesTitle: "Honest status",
    boundaries: [orbitCaseStudy.honestyStatement],
    links: orbitCaseStudy.links,
    metadataDescription:
      "Orbit is an independent product concept exploring connected service-business operations, workflow modelling and interface architecture.",
  },
] as const;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  const canonical = `/work/${caseStudy.slug}`;

  return {
    title: `${caseStudy.name} Case Study`,
    description: caseStudy.metadataDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${caseStudy.name} | Deodar Web Studio`,
      description: caseStudy.metadataDescription,
      url: canonical,
      images: [
        {
          url: absoluteUrl(caseStudy.screenshot.src),
          width: caseStudy.screenshot.width,
          height: caseStudy.screenshot.height,
          alt: caseStudy.screenshot.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.name} | Deodar Web Studio`,
      description: caseStudy.metadataDescription,
      images: [absoluteUrl(caseStudy.screenshot.src)],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <CaseHero caseStudy={caseStudy} />
        <CaseEvidence caseStudy={caseStudy} />
      </main>
      <Footer />
    </>
  );
}

function CaseHero({ caseStudy }: { caseStudy: NonNullable<ReturnType<typeof getCaseStudy>> }) {
  return (
    <section className="studio-canvas pt-20 pb-12 lg:pt-24 lg:pb-14">
      <Container size="wide">
        <Link
          className="type-label inline-flex rounded-studioSm text-studio-greenBright underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
          href="/#work"
        >
          Back to selected work
        </Link>
        <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <p className="type-label text-studio-faint">{caseStudy.category}</p>
            <h1 className="type-display-lg mt-4 max-w-5xl text-studio-text">
              {caseStudy.name}
            </h1>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              <p className="type-label text-studio-greenBright">
                {caseStudy.status}
              </p>
              {"qualifier" in caseStudy && caseStudy.qualifier ? (
                <p className="type-small text-studio-muted">{caseStudy.qualifier}</p>
              ) : null}
            </div>
          </div>
          <div>
            <p className="type-subheading max-w-xl text-studio-text">
              {caseStudy.thesis}
            </p>
            <p className="type-body-lg mt-4 max-w-[var(--studio-reading-max)] text-studio-textSoft">
              {caseStudy.summary}
            </p>
          </div>
        </div>

        <figure className="mt-8 border border-studio-line bg-studio-surface p-2 sm:p-3">
          <Image
            src={caseStudy.screenshot.src}
            alt={caseStudy.screenshot.alt}
            width={caseStudy.screenshot.width}
            height={caseStudy.screenshot.height}
            sizes="(min-width: 1024px) 88vw, 100vw"
            className="aspect-[16/9] w-full object-contain"
            priority
          />
        </figure>
      </Container>
    </section>
  );
}

function CaseEvidence({ caseStudy }: { caseStudy: NonNullable<ReturnType<typeof getCaseStudy>> }) {
  return (
    <section className="studio-canvas border-t border-studio-line py-[var(--studio-section-space-compact)]">
      <Container size="wide">
        <div className="grid gap-6 lg:grid-cols-2">
          <EvidenceBlock
            label="Problem"
            heading={caseStudy.problem.heading}
            body={caseStudy.problem.body}
          />
          <EvidenceBlock
            label="Product or system decision"
            heading={caseStudy.decision.heading}
            body={caseStudy.decision.body}
          />
        </div>

        <div className="mt-10 grid gap-8 border-t border-studio-line pt-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <p className="type-label text-studio-greenBright">
              {caseStudy.flowTitle}
            </p>
            <ol className="mt-5 border-y border-studio-line">
              {caseStudy.flow.map((item, index) => (
                <li
                  className="grid gap-3 border-t border-studio-line py-4 first:border-t-0 sm:grid-cols-[3.5rem_1fr]"
                  key={item.step}
                >
                  <span className="type-label text-studio-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="type-subheading text-studio-text">
                      {item.step}
                    </h2>
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
              {caseStudy.areasTitle}
            </p>
            <ul className="mt-5 border-y border-studio-line">
              {caseStudy.areas.map((area) => (
                <li
                  className="grid gap-3 border-t border-studio-line py-3.5 first:border-t-0 sm:grid-cols-[minmax(10rem,0.42fr)_1fr]"
                  key={area.label}
                >
                  <h2 className="text-sm font-semibold text-studio-text">
                    {area.label}
                  </h2>
                  <p className="type-small text-studio-muted">
                    {area.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-studio-line pt-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="type-subheading text-studio-text">
              {caseStudy.roleHeading}
            </h2>
            <p className="type-body-lg mt-4 max-w-[var(--studio-reading-max)] text-studio-textSoft">
              {caseStudy.role}
            </p>
          </div>

          <div>
            <p className="type-label text-studio-faint">
              {caseStudy.boundariesTitle}
            </p>
            <ul className="mt-4 grid gap-2">
              {caseStudy.boundaries.map((item) => (
                <li className="type-small text-studio-muted" key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 min-[390px]:flex-row min-[390px]:flex-wrap">
              <ActionLink href={caseStudy.links.liveUrl} external size="lg">
                {caseStudy.links.liveLabel}
              </ActionLink>
              <ActionLink
                href={caseStudy.links.repoUrl}
                external
                size="lg"
                variant="secondary"
              >
                {caseStudy.links.sourceLabel}
              </ActionLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function EvidenceBlock({
  label,
  heading,
  body,
}: {
  label: string;
  heading: string;
  body: string;
}) {
  return (
    <section className="border-t border-studio-line pt-5">
      <p className="type-label text-studio-faint">{label}</p>
      <h2 className="type-subheading mt-3 text-studio-text">{heading}</h2>
      <p className="type-body mt-3 max-w-[var(--studio-reading-max)] text-studio-textSoft">
        {body}
      </p>
    </section>
  );
}
