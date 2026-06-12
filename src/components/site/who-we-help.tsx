import { businessTypes } from "@/config/site";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

export function WhoWeHelp() {
  return (
    <section id="who" className="section-spacing border-b border-deodar-line bg-deodar-surface/30">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            label="Who We Help"
            title="Built for local businesses that need a clearer first impression."
            copy="For businesses that need clear information, a professional first impression, and direct customer contact without sending people through scattered posts and repeated WhatsApp explanations."
          />
          <a
            href="#contact"
            className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-deodar-gold/40 bg-deodar-gold px-6 py-3 text-sm font-semibold text-deodar-ink transition hover:bg-[#c89858]"
          >
            Start a website enquiry
            <SiteIcon name="arrow" className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {businessTypes.map((type) => (
            <div
              key={type}
              className="flex min-h-24 items-center rounded-lg border border-deodar-line bg-deodar-ink/60 p-4 text-sm font-medium leading-5 text-deodar-cream transition hover:border-deodar-gold/40"
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
