import { businessTypes } from "@/config/site";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function WhoWeHelp() {
  return (
    <section className="section-spacing border-b border-cedar-line bg-cedar-surface/30">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            label="Who We Help"
            title="Built for businesses that need more than just a social media page."
            copy="Social media is useful, but a website gives your business a proper home online with your services, products, menu, location, contact details, and order flow in one clean place."
          />
          <a
            href="#contact"
            className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cedar-gold/40 bg-cedar-gold px-6 py-3 text-sm font-semibold text-cedar-ink transition hover:bg-[#c89858]"
          >
            Tell us about your business
            <SiteIcon name="arrow" className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {businessTypes.map((type) => (
            <div
              key={type}
              className="flex min-h-24 items-center rounded-lg border border-cedar-line bg-cedar-ink/60 p-4 text-sm font-medium leading-5 text-cedar-cream transition hover:border-cedar-gold/40"
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
