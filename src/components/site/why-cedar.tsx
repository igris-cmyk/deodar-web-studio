import { whyChoose } from "@/config/site";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function WhyCedar() {
  return (
    <section className="section-spacing border-b border-cedar-line bg-cedar-surface/30">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          label="Why Cedar"
          title="Small-team attention with a business-first build process."
          copy="The goal is a clean website that helps customers find the right information and contact your business without friction."
        />

        <div className="grid gap-4">
          {whyChoose.map((item) => (
            <article key={item.title} className="premium-card flex gap-4 p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-cedar-gold/25 bg-cedar-forest/40 text-cedar-gold">
                <SiteIcon name={item.icon} className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-cedar-cream">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cedar-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
