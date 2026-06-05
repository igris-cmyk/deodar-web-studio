import Image from "next/image";
import { heroTrustPoints, siteConfig } from "@/config/site";
import { SiteIcon } from "./icon";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-cedar-line">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(47,93,70,0.38),transparent_34%),linear-gradient(180deg,#0F1613_0%,#111A16_56%,#0F1613_100%)]" />
      <div className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-10 py-12 pb-24 sm:py-16 md:min-h-[760px] lg:grid-cols-[0.94fr_1.06fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="section-label">{siteConfig.descriptor}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-cedar-cream sm:text-5xl lg:text-6xl">
            {siteConfig.heroHeadline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cedar-muted sm:text-xl">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cedar-gold px-6 py-3 text-sm font-semibold text-cedar-ink transition hover:bg-[#c89858]"
            >
              {siteConfig.ctas.primary}
              <SiteIcon name="arrow" className="size-4" />
            </a>
            <a
              href="#services"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-cedar-line bg-cedar-surface/80 px-6 py-3 text-sm font-semibold text-cedar-cream transition hover:border-cedar-gold/40"
            >
              {siteConfig.ctas.secondary}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {heroTrustPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-cedar-line bg-cedar-surface/60 px-3 py-2 text-xs font-medium text-cedar-muted"
              >
                <SiteIcon name="check" className="size-3.5 text-cedar-gold" />
                {point}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-sm leading-6 text-cedar-muted">
            Led by {siteConfig.founder}, Cedar Web Studio is built for business owners who want clear communication, practical scope, and a website that feels professional on mobile.
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border border-cedar-line bg-cedar-surface shadow-premium">
            <Image
              src={siteConfig.heroImage}
              alt="Tablet and phone showing abstract responsive website layouts on a warm studio desk"
              width={1600}
              height={1000}
              priority
              className="aspect-[16/11] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cedar-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <div className="grid gap-3 rounded-lg border border-cedar-line bg-cedar-ink/80 p-4 backdrop-blur-md sm:grid-cols-3">
                {[
                  ["Websites", "Clear business presence"],
                  ["Menus", "Easy browsing and orders"],
                  ["Stores", "Products shown cleanly"],
                ].map(([title, copy]) => (
                  <div key={title}>
                    <p className="text-sm font-semibold text-cedar-cream">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-cedar-muted">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-cedar-line bg-cedar-surface/75 p-4">
              <p className="text-sm font-semibold text-cedar-cream">Built for local decisions</p>
              <p className="mt-1 text-sm leading-6 text-cedar-muted">
                Services, products, location, and contact flow in one clean place.
              </p>
            </div>
            <div className="rounded-lg border border-cedar-line bg-cedar-surface/75 p-4">
              <p className="text-sm font-semibold text-cedar-cream">Simple launch support</p>
              <p className="mt-1 text-sm leading-6 text-cedar-muted">
                Domain, hosting, and handover explained without unnecessary confusion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
