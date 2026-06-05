import { services } from "@/config/site";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Services() {
  return (
    <section id="services" className="section-spacing border-b border-cedar-line">
      <div className="section-shell">
        <SectionHeading
          label="Services"
          title="Practical websites for businesses that need customers to understand and act."
          copy="From simple business pages to ordering flows, we start with what your business actually needs and build from there."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="premium-card p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-cedar-gold/25 bg-cedar-forest/40 text-cedar-gold">
                  <SiteIcon name={service.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-cedar-cream">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cedar-muted">{service.for}</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-cedar-muted">{service.description}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm leading-6 text-cedar-cream/90">
                    <SiteIcon name="check" className="mt-1 size-4 shrink-0 text-cedar-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
