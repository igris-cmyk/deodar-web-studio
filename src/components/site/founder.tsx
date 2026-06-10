import { contactConfig, siteConfig } from "@/config/site";
import { SiteIcon } from "./icon";

export function Founder() {
  return (
    <section className="border-b border-cedar-line bg-cedar-surface/25">
      <div className="section-shell py-10">
        <div className="grid gap-6 rounded-lg border border-cedar-line bg-cedar-ink/70 p-5 shadow-[inset_0_1px_0_rgba(244,239,230,0.05)] sm:p-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex items-center gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-lg border border-cedar-gold/35 bg-cedar-forest/45 text-xl font-semibold text-cedar-gold">
              SK
            </div>
            <div>
              <p className="section-label">Founder-led</p>
              <h2 className="mt-2 text-2xl font-semibold text-cedar-cream">{contactConfig.founderName}</h2>
            </div>
          </div>

          <p className="max-w-3xl text-base leading-7 text-cedar-muted">
            Cedar Web Studio is a small, direct web studio for business owners who want a clear website without agency confusion.
            You talk directly to the person building your site, from first discussion to launch handover.
          </p>

          <a
            href="#contact"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cedar-line px-5 py-3 text-sm font-semibold text-cedar-cream transition hover:border-cedar-gold/40 hover:bg-cedar-surface"
          >
            Start with Sahil
            <SiteIcon name="arrow" className="size-4" />
          </a>

          <p className="border-t border-cedar-line pt-4 text-sm leading-6 text-cedar-muted lg:col-span-3">
            {contactConfig.locationLine} {siteConfig.promise}
          </p>
        </div>
      </div>
    </section>
  );
}
