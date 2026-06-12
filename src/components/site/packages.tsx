import { packages } from "@/config/site";
import { cn } from "@/lib/utils";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Packages() {
  return (
    <section className="section-spacing border-b border-deodar-line">
      <div className="section-shell">
        <SectionHeading
          label="Packages"
          title="Starting prices that help you choose the right first step."
          copy="These are indicative project starting points, not monthly plans. The right scope depends on your pages, products or menu items, content readiness, and launch support."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {packages.map((tier) => (
            <article
              key={tier.title}
              className={cn(
                "premium-card flex h-full flex-col p-5 sm:p-6",
                tier.featured && "border-deodar-gold/40 bg-deodar-surface2/90",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-deodar-cream">{tier.title}</h3>
                  <p className="mt-3 text-3xl font-semibold tracking-normal text-deodar-gold">{tier.startingPrice}</p>
                </div>
                {tier.featured ? (
                  <span className="rounded-full border border-deodar-gold/30 px-3 py-1 text-xs font-semibold text-deodar-gold">
                    Most requested
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-base leading-7 text-deodar-cream/90">{tier.summary}</p>
              <div className="mt-5 grid gap-3 rounded-lg border border-deodar-line bg-deodar-ink/45 p-4">
                <p className="text-sm leading-6 text-deodar-muted">
                  <span className="font-semibold text-deodar-cream">Who it is for: </span>
                  {tier.bestFor}
                </p>
                <p className="text-sm leading-6 text-deodar-muted">
                  <span className="font-semibold text-deodar-cream">Expected use: </span>
                  {tier.useCase}
                </p>
              </div>
              <ul className="mt-6 grid gap-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-deodar-cream/90">
                    <SiteIcon name="check" className="mt-1 size-4 shrink-0 text-deodar-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="focus-ring mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-deodar-line bg-deodar-ink/50 px-5 py-3 text-sm font-semibold text-deodar-cream transition hover:border-deodar-gold/40 hover:bg-deodar-accent/40"
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-deodar-muted">
          Final pricing depends on pages, features, content readiness, and launch support needed. Domain, hosting, payment gateway, and third-party costs are separate when required.
        </p>
      </div>
    </section>
  );
}
