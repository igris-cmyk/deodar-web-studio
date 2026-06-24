import type { Metadata } from "next";
import { FAQ } from "@/components/site/faq";
import { EngagementSupport } from "@/components/site/engagement-support";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { Packages } from "@/components/site/packages";
import { ActionLink } from "@/components/site/action-link";
import { Container } from "@/components/site/container";
import { engagementOptions, engagementPage } from "@/config/site";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Engagements and Pricing",
  description:
    "Explore Deodar's website, commerce, operational-system and ongoing support engagements, with clear scope, fit and starting investment guidance.",
  alternates: {
    canonical: "/engagements",
  },
  openGraph: {
    title: "Engagements and Pricing | Deodar Web Studio",
    description:
      "Explore Deodar's website, commerce, operational-system and ongoing support engagements, with clear scope, fit and starting investment guidance.",
    url: "/engagements",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Deodar Web Studio builds founder-led websites, commerce experiences and operational systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engagements and Pricing | Deodar Web Studio",
    description:
      "Explore Deodar's website, commerce, operational-system and ongoing support engagements, with clear scope, fit and starting investment guidance.",
    images: [absoluteUrl("/opengraph-image")],
  },
};

export default function EngagementsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <EngagementIntroduction />
        <EngagementSummary />
        <Packages />
        <EngagementSupport />
        <FAQ />
        <ProjectBriefCta />
      </main>
      <Footer />
    </>
  );
}

function EngagementIntroduction() {
  return (
    <section id="home" className="studio-canvas pt-24 pb-[var(--studio-section-space-compact)]">
      <Container size="wide">
        <div className="max-w-5xl">
          <p className="type-label text-studio-greenBright">{engagementPage.eyebrow}</p>
          <h1 className="type-display-lg mt-6 max-w-5xl text-studio-text">{engagementPage.heading}</h1>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <p className="type-body-lg text-studio-textSoft">{engagementPage.introduction}</p>
            <div className="border-t border-studio-line pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              <p className="type-body text-studio-muted">{engagementPage.pricingStatement}</p>
              <p className="mt-4 text-sm font-semibold leading-6 text-studio-text">{engagementPage.directAccountability}</p>
              <p className="type-small mt-4 border-t border-studio-line pt-4 text-studio-muted">
                {engagementPage.internationalPricingNote}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function EngagementSummary() {
  return (
    <section className="studio-canvas border-t border-studio-line pb-[var(--studio-section-space-compact)]">
      <Container size="wide">
        <div className="grid gap-5 border-b border-studio-line py-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <h2 className="type-section text-studio-text">{engagementPage.indexHeading}</h2>
          <p className="type-body text-studio-muted">
            {engagementPage.indexIntroduction}
          </p>
        </div>
        <div className="border-t border-studio-line">
          {engagementOptions.map((option) => (
            <div className="grid gap-5 border-b border-studio-line py-6 lg:grid-cols-[1fr_1.15fr_0.55fr_0.45fr] lg:items-center" key={option.slug}>
              <div>
                <p className="type-label text-studio-faint">{option.index}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-studio-text">{option.name}</h3>
              </div>
              <p className="type-small max-w-xl text-studio-muted">{option.bestFor}</p>
              <p className="text-sm leading-6 text-studio-text">
                <span className="block type-label text-studio-faint">{option.priceLabel}</span>
                {option.startingPrice}
              </p>
              <a
                className="inline-flex min-h-10 w-fit items-center rounded-studioSm text-sm font-semibold text-studio-greenBright underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
                href={`#${option.slug}`}
              >
                View scope
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectBriefCta() {
  return (
    <section className="studio-canvas border-t border-studio-line py-[var(--studio-section-space-compact)]">
      <Container size="content">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="type-label text-studio-greenBright">{engagementPage.cta.eyebrow}</p>
            <h2 className="type-section mt-4 text-studio-text">{engagementPage.cta.heading}</h2>
          </div>
          <div>
            <p className="type-body text-studio-textSoft">{engagementPage.cta.copy}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink href={engagementPage.cta.primary.href}>{engagementPage.cta.primary.label}</ActionLink>
              <ActionLink href={engagementPage.cta.secondary.href} variant="secondary">
                {engagementPage.cta.secondary.label}
              </ActionLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
