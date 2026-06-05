import { processSteps } from "@/config/site";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section id="process" className="section-spacing border-b border-cedar-line">
      <div className="section-shell">
        <SectionHeading
          label="Process"
          title="A clear workflow from first discussion to launch."
          copy="A good project is easier when the scope, decisions, and launch steps are visible from the start."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article key={step.title} className="premium-card p-5">
              <span className="flex size-10 items-center justify-center rounded-md border border-cedar-gold/30 bg-cedar-forest/40 text-sm font-semibold text-cedar-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-6 text-cedar-cream">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-cedar-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
