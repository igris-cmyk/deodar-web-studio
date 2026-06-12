import { whyItMatters } from "@/config/site";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function WhyItMatters() {
  return (
    <section className="section-spacing border-b border-deodar-line bg-deodar-surface/30">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          label="Why It Matters"
          title="A clear website makes your business easier to trust."
          copy="Customers often check your business online before they call, visit, book, or place an order. If your services, menu, location, timings, or contact details are unclear, trust drops before the first conversation."
        />

        <div className="grid gap-4">
          {whyItMatters.map((item) => (
            <article key={item.title} className="premium-card flex gap-4 p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-deodar-gold/25 bg-deodar-accent/35 text-deodar-gold">
                <SiteIcon name={item.icon} className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-deodar-cream">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-deodar-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
