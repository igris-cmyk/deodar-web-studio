import { ActionLink } from "@/components/site/action-link";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata = {
  title: "Deodar Design System Preview",
  robots: {
    index: false,
    follow: false,
  },
};

const colors = [
  ["canvas", "#0A0D0B"],
  ["surface", "#101512"],
  ["elevated", "#151B17"],
  ["subtle", "#1B221D"],
  ["paper", "#E9E4DB"],
  ["paperSoft", "#DCD5CA"],
  ["text", "#F2EEE7"],
  ["textSoft", "#D0CBC2"],
  ["muted", "#9E9B94"],
  ["faint", "#747870"],
  ["green", "#708A76"],
  ["greenBright", "#91A796"],
  ["greenDeep", "#33473A"],
  ["greenInk", "#0C120E"],
  ["danger", "#C77970"],
] as const;

const typeRows = [
  ["type-display-xl", "Editorial display, reserved for rare high-emphasis moments."],
  ["type-display-lg", "Large editorial display with a quieter footprint."],
  ["type-title", "Sans title for product-level page statements."],
  ["type-section", "Section heading for structured editorial pacing."],
  ["type-subheading", "Subheading for grouped interface content."],
  ["type-body-lg", "Large body copy for measured explanation and context."],
  ["type-body", "Default body copy for readable interface text."],
  ["type-small", "Small supporting text for metadata and captions."],
  ["type-label", "Precise label"],
] as const;

const widths = [
  ["reading", "44rem", "Focused prose, project decisions, and founder notes."],
  ["content", "80rem", "Default composition width for most sections."],
  ["wide", "90rem", "Evidence-heavy layouts with imagery or comparison columns."],
] as const;

export default function DesignSystemPreview() {
  return (
    <main className="studio-canvas min-h-screen">
      <section className="relative overflow-hidden border-b border-studio-line py-[var(--studio-section-space)]">
        <div className="studio-hairline-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container size="wide" className="relative">
          <p className="type-label text-studio-greenBright">Phase 1 Foundation</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h1 className="type-display-lg max-w-5xl text-studio-text">
                Quiet architectural editorialism for product engineering.
              </h1>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="type-body-lg text-studio-textSoft">
                A restrained preview for typography, spacing, surfaces, actions, and evidence patterns. This is not a homepage composition.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href="#actions">Review actions</ActionLink>
                <ActionLink href="#type" variant="secondary">Inspect type</ActionLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container as="section" size="wide" className="py-[var(--studio-section-space)]">
        <SectionHeading
          eyebrow="Colour"
          title="A quieter studio palette with one restrained accent."
          description="The new namespace sits beside the existing Deodar colours until later phases migrate public sections deliberately."
          variant="editorial"
          index="01"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-studioMd border border-studio-line sm:grid-cols-2 lg:grid-cols-5">
          {colors.map(([name, value]) => (
            <div key={name} className="min-h-36 bg-studio-surface p-4">
              <div className="h-16 rounded-studioSm border border-studio-lineStrong" style={{ backgroundColor: value }} />
              <p className="type-label mt-5 text-studio-text">{name}</p>
              <p className="type-small mt-2 text-studio-muted">{value}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" id="type" size="wide" className="border-t border-studio-line py-[var(--studio-section-space)]">
        <SectionHeading
          eyebrow="Typography"
          title="Editorial emphasis, sans-serif precision."
          description="Newsreader is reserved for selective display. Manrope handles the interface, labels, actions, and long-form reading."
          variant="editorial"
          index="02"
        />
        <div className="mt-12 space-y-8">
          {typeRows.map(([className, note]) => (
            <div key={className} className="border-t border-studio-line pt-6">
              <p className="type-label text-studio-faint">{className}</p>
              <p className={`${className} mt-3 text-studio-text`}>Interface architecture with editorial restraint.</p>
              <p className="type-small mt-3 max-w-[var(--studio-reading-max)] text-studio-muted">{note}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="studio-surface p-6">
            <p className="type-label text-studio-greenBright">Sans display</p>
            <p className="type-title mt-5">Measured product judgment.</p>
          </div>
          <div className="studio-surface p-6">
            <p className="type-label text-studio-greenBright">Editorial display</p>
            <p className="type-display-lg mt-5">Measured product judgment.</p>
          </div>
        </div>
      </Container>

      <Container as="section" size="wide" className="border-t border-studio-line py-[var(--studio-section-space)]">
        <SectionHeading
          eyebrow="Layout"
          title="Widths, rules, and whitespace before decoration."
          description="Containers provide reusable horizontal rhythm without requiring every idea to sit inside a card."
          variant="editorial"
          index="03"
        />
        <div className="mt-12 space-y-6">
          {widths.map(([name, value, description]) => (
            <div key={name}>
              <div className="studio-rule" />
              <div className="grid gap-3 py-5 md:grid-cols-[12rem_1fr_auto] md:items-center">
                <p className="type-label text-studio-greenBright">{name}</p>
                <p className="type-body text-studio-textSoft">{description}</p>
                <p className="type-mono text-sm text-studio-muted">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" id="actions" size="wide" className="border-t border-studio-line py-[var(--studio-section-space)]">
        <SectionHeading
          eyebrow="Actions"
          title="Clear interaction states without pill shapes or glow."
          description="The action primitive supports real links, external links, and buttons while preserving accessible focus states."
          variant="editorial"
          index="04"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="type-label text-studio-faint">Variants</p>
            <div className="flex flex-wrap gap-3">
              <ActionLink href="/design-system">Primary</ActionLink>
              <ActionLink href="/design-system" variant="secondary">Secondary</ActionLink>
              <ActionLink href="/design-system" variant="text">Text action</ActionLink>
            </div>
            <div className="studio-paper p-6">
              <p className="type-label text-studio-paperMuted">Inverse surface</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ActionLink href="/design-system" variant="inverse">Inverse action</ActionLink>
                <ActionLink disabled variant="inverse">Disabled button</ActionLink>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p className="type-label text-studio-faint">Sizes and focus</p>
            <div className="flex flex-wrap items-center gap-3">
              <ActionLink href="/design-system" size="sm" variant="secondary">Small</ActionLink>
              <ActionLink href="/design-system" size="md" variant="secondary">Medium</ActionLink>
              <ActionLink href="/design-system" size="lg" variant="secondary">Large</ActionLink>
            </div>
            <button className="rounded-studioSm border border-studio-line px-4 py-3 text-left type-small text-studio-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright" type="button">
              Keyboard focus target
            </button>
          </div>
        </div>
      </Container>

      <Container as="section" size="wide" className="border-t border-studio-line py-[var(--studio-section-space)]">
        <SectionHeading
          eyebrow="Headings"
          title="Legacy compatibility and new editorial rhythm."
          description="Existing homepage sections keep legacy behavior. Later phases can opt into editorial or compact variants one section at a time."
          variant="editorial"
          index="05"
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div>
            <SectionHeading label="Legacy" title="Current section heading." copy="This preserves the old prop names and default rendering path." />
          </div>
          <div>
            <SectionHeading eyebrow="Editorial" title="Evidence before ornament." description="A left-led hierarchy for selective product narratives." index="02" variant="editorial" />
          </div>
          <div>
            <SectionHeading eyebrow="Compact" title="A smaller heading system." description="Useful for dense but restrained interface regions." index="03" variant="compact" />
          </div>
        </div>
      </Container>

      <Container as="section" size="wide" className="border-t border-studio-line py-[var(--studio-section-space)]">
        <SectionHeading
          eyebrow="Surfaces"
          title="Surface contrast without heavy cards."
          description="Dark surfaces use thin borders. Paper is an inverse editorial surface, not a default container for every block."
          variant="editorial"
          index="06"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="border border-studio-line p-6">
            <p className="type-label text-studio-faint">Canvas</p>
            <p className="type-body mt-5 text-studio-textSoft">Default dark field for long sections and editorial pacing.</p>
          </div>
          <div className="studio-surface p-6">
            <p className="type-label text-studio-greenBright">Elevated</p>
            <p className="type-body mt-5 text-studio-textSoft">A quiet bordered surface for grouped interface evidence.</p>
          </div>
          <div className="studio-paper p-6">
            <p className="type-label text-studio-paperMuted">Paper</p>
            <p className="type-body mt-5 text-studio-paperMuted">An inverse editorial surface for contrast and careful emphasis.</p>
          </div>
        </div>
      </Container>

      <Container as="section" size="wide" className="border-t border-studio-line py-[var(--studio-section-space)]">
        <SectionHeading
          eyebrow="Stress tests"
          title="Long content must wrap without layout failure."
          description="These samples intentionally test oversized headings and long unbroken text."
          variant="editorial"
          index="07"
        />
        <div className="mt-12 space-y-8">
          <p className="type-title max-w-5xl text-studio-text">
            InterfaceArchitectureRequiresLongHeadingsToWrapWithoutForcingHorizontalScrolling
          </p>
          <p className="type-body max-w-[var(--studio-reading-max)] text-studio-muted">
            https://deodar.example/internal/review/product-system/interface-architecture/evidence-and-decisions/very-long-path-that-must-wrap-cleanly-without-overflow
          </p>
        </div>
      </Container>

      <Container as="section" size="wide" className="border-t border-studio-line py-[var(--studio-section-space)]">
        <SectionHeading
          eyebrow="Evidence composition"
          title="Metadata, rules, and decisions can carry structure."
          description="A compact composition for future case-study sections. It demonstrates hierarchy without fake proof, dashboards, metrics, or excessive cards."
          variant="editorial"
          index="08"
        />
        <div className="mt-12 border-y border-studio-line">
          {["Problem", "Decision", "Result"].map((label, index) => (
            <div key={label} className="grid gap-5 border-b border-studio-line py-7 last:border-b-0 md:grid-cols-[10rem_1fr]">
              <div>
                <p className="type-label text-studio-greenBright">{String(index + 1).padStart(2, "0")}</p>
                <p className="type-subheading mt-2 text-studio-text">{label}</p>
              </div>
              <p className="type-body-lg max-w-[var(--studio-reading-max)] text-studio-textSoft">
                Neutral evidence text can explain product constraints, implementation choices, and interface consequences with hierarchy rather than decoration.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
