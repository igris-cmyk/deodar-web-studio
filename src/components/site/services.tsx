import { services } from "@/config/site";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Services() {
  return (
    <section id="services" className="section-spacing border-b border-deodar-line">
      <div className="section-shell">
        <SectionHeading
          label="What We Build"
          title="Three website types, built around trust and enquiry."
          copy="Supporting features like WhatsApp buttons, contact forms, mobile responsiveness, maps, basic SEO-ready structure, and domain guidance are included where they fit the scope."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="premium-card p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-deodar-gold/25 bg-deodar-accent/40 text-deodar-gold">
                  <SiteIcon name={service.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-deodar-cream">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-deodar-muted">{service.for}</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-deodar-muted">{service.description}</p>
              <ul className="mt-5 grid gap-3">
                {service.includes.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm leading-6 text-deodar-cream/90">
                    <SiteIcon name="check" className="mt-1 size-4 shrink-0 text-deodar-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-md border border-deodar-line bg-deodar-ink/45 p-4">
                <p className="text-sm font-semibold text-deodar-cream">Contact outcome</p>
                <p className="mt-2 text-sm leading-6 text-deodar-muted">{service.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
