import { packages } from "@/config/site";
import { cn } from "@/lib/utils";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Packages() {
  return (
    <section className="section-spacing border-b border-cedar-line">
      <div className="section-shell">
        <SectionHeading
          label="Packages"
          title="Clear starting points without forcing the wrong scope."
          copy="Every quote depends on pages, products or menu items, design complexity, admin panel, domain, hosting, and extra features."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {packages.map((tier) => (
            <article
              key={tier.title}
              className={cn(
                "premium-card flex h-full flex-col p-5 sm:p-6",
                tier.featured && "border-cedar-gold/40 bg-cedar-surface2/90",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-cedar-cream">{tier.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cedar-muted">{tier.summary}</p>
                </div>
                {tier.featured ? (
                  <span className="rounded-full border border-cedar-gold/30 px-3 py-1 text-xs font-semibold text-cedar-gold">
                    Popular
                  </span>
                ) : null}
              </div>
              <ul className="mt-6 grid gap-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-cedar-cream/90">
                    <SiteIcon name="check" className="mt-1 size-4 shrink-0 text-cedar-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="focus-ring mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-cedar-line bg-cedar-ink/50 px-5 py-3 text-sm font-semibold text-cedar-cream transition hover:border-cedar-gold/40 hover:bg-cedar-forest/40"
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-cedar-muted">
          Final pricing depends on pages, products/menu items, design complexity, admin panel, domain, hosting, and extra features.
        </p>
      </div>
    </section>
  );
}
