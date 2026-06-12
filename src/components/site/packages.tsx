import { packages } from "@/config/site";
import { cn } from "@/lib/utils";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Packages() {
  return (
    <section id="packages" className="section-spacing border-b border-deodar-line">
      <div className="section-shell">
        <SectionHeading
          label="Packages"
          title="Clear packages for different business needs."
          copy="Every project starts with the package closest to your requirements. Final pricing is confirmed after reviewing your content, pages, features, and integrations."
        />

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
          {packages.map((tier) => (
            <article
              key={tier.title}
              className={cn(
                "premium-card flex flex-col p-5 sm:p-6",
                tier.badge && "border-deodar-gold/45 bg-deodar-surface2/90",
              )}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="section-label">Package</p>
                  <h3 className="mt-2 text-2xl font-semibold text-deodar-cream">{tier.title}</h3>
                </div>
                {tier.badge ? (
                  <span className="w-fit rounded-full border border-deodar-gold/30 bg-deodar-gold/10 px-3 py-1 text-xs font-semibold text-deodar-gold">
                    {tier.badge}
                  </span>
                ) : null}
              </div>

              <div className="mt-5">
                <p className="text-3xl font-semibold tracking-normal text-deodar-gold">{tier.startingPrice}</p>
                {tier.quoteNote ? <p className="mt-2 text-sm text-deodar-muted">{tier.quoteNote}</p> : null}
              </div>

              <p className="mt-4 text-base leading-7 text-deodar-cream/90">{tier.outcome}</p>

              <div className="mt-5 rounded-lg border border-deodar-line bg-deodar-ink/45 p-4">
                <p className="text-sm leading-6 text-deodar-muted">
                  <span className="font-semibold text-deodar-cream">Best for: </span>
                  {tier.bestFor}
                </p>
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-2">
                <FeatureList title="Includes" items={tier.includes} />
                <FeatureList title="Excludes" items={tier.excludes} muted />
              </div>

              {tier.typicalStructure?.length ? (
                <div className="mt-5 rounded-lg border border-deodar-line bg-deodar-ink/35 p-4">
                  <p className="text-sm font-semibold text-deodar-cream">Typical structure</p>
                  <p className="mt-2 text-sm leading-6 text-deodar-muted">{tier.typicalStructure.join(" / ")}</p>
                </div>
              ) : null}

              {tier.possibleScope?.length ? (
                <div className="mt-5 rounded-lg border border-deodar-line bg-deodar-ink/35 p-4">
                  <p className="text-sm font-semibold text-deodar-cream">Possible custom scope</p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {tier.possibleScope.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-deodar-muted">
                        <SiteIcon name="spark" className="mt-1 size-4 shrink-0 text-deodar-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {tier.scopeBoundary ? (
                <p className="mt-5 rounded-lg border border-deodar-gold/20 bg-deodar-gold/10 p-4 text-sm leading-6 text-deodar-cream/90">
                  {tier.scopeBoundary}
                </p>
              ) : null}

              <div className="mt-5 grid gap-3 rounded-lg border border-deodar-line bg-deodar-ink/45 p-4 sm:grid-cols-2">
                <p className="text-sm leading-6 text-deodar-muted">
                  <span className="block font-semibold text-deodar-cream">Timeline</span>
                  {tier.timeline}
                </p>
                <p className="text-sm leading-6 text-deodar-muted">
                  <span className="block font-semibold text-deodar-cream">Revisions</span>
                  {tier.revisionLimit}
                </p>
              </div>

              <a
                href="#contact"
                className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-deodar-line bg-deodar-ink/50 px-5 py-3 text-sm font-semibold text-deodar-cream transition hover:border-deodar-gold/40 hover:bg-deodar-accent/40"
              >
                {tier.cta}
                <SiteIcon name="arrow" className="size-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-lg border border-deodar-line bg-deodar-surface/80 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-xl font-semibold text-deodar-cream">Not sure which package fits?</h3>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-deodar-muted md:grid-cols-2">
              <li>Need your first simple professional website? Choose <strong className="font-semibold text-deodar-cream">Starter Website</strong>.</li>
              <li>Need several pages and detailed services? Choose <strong className="font-semibold text-deodar-cream">Business Website</strong>.</li>
              <li>Need a menu, catalog, pricing, or WhatsApp order flow? Choose <strong className="font-semibold text-deodar-cream">Menu & Showcase Website</strong>.</li>
              <li>Need an admin panel, database, payments, or integrations? Choose <strong className="font-semibold text-deodar-cream">Custom Web Build</strong>.</li>
            </ul>
          </div>
          <a
            href="#contact"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-deodar-gold px-5 py-3 text-sm font-semibold text-deodar-ink"
          >
            Help me choose
          </a>
        </div>

        <p className="mt-6 max-w-4xl text-sm leading-6 text-deodar-muted">
          All prices are starting prices. Domain fees, paid hosting, premium tools, third-party services, and features outside the listed scope are quoted separately.
        </p>
      </div>
    </section>
  );
}

function FeatureList({ title, items, muted }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-deodar-cream">{title}</h4>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className={cn("flex gap-2 text-sm leading-6", muted ? "text-deodar-muted" : "text-deodar-cream/90")}>
            <SiteIcon name={muted ? "shield" : "check"} className="mt-1 size-4 shrink-0 text-deodar-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
