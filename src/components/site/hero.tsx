import Image from "next/image";
import { contactConfig, heroTrustPoints, projects, siteConfig } from "@/config/site";
import { createWhatsAppQuoteUrl } from "@/lib/utils";
import { SiteIcon } from "./icon";

export function Hero() {
  const whatsappUrl =
    createWhatsAppQuoteUrl("Hi Cedar Web Studio, I want to discuss a website, digital menu, or online store for my business.") ||
    "#contact";
  const featuredProject = projects.find((project) => project.name === "DueFlow") || projects[0];
  const layeredProject = projects.find((project) => project.name === "Orbit") || projects[1];

  return (
    <section id="home" className="relative overflow-hidden border-b border-cedar-line">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(47,93,70,0.34)_0%,transparent_32%),linear-gradient(180deg,#111812_0%,#0F1613_56%,#121914_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[repeating-linear-gradient(90deg,rgba(244,239,230,0.05)_0,rgba(244,239,230,0.05)_1px,transparent_1px,transparent_72px)] opacity-35" />
      <div className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-10 py-12 pb-20 sm:py-16 md:min-h-[760px] lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="section-label">{siteConfig.descriptor}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-cedar-cream sm:text-5xl lg:text-6xl">
            {siteConfig.heroHeadline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cedar-muted sm:text-xl">
            {siteConfig.description}
          </p>
          <p className="mt-5 inline-flex max-w-2xl items-center gap-2 rounded-full border border-cedar-line bg-cedar-surface/70 px-4 py-2 text-sm font-medium leading-6 text-cedar-cream">
            <SiteIcon name="map" className="size-4 shrink-0 text-cedar-gold" />
            {contactConfig.locationLine}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target={whatsappUrl.startsWith("http") ? "_blank" : undefined}
              rel={whatsappUrl.startsWith("http") ? "noreferrer" : undefined}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cedar-gold px-6 py-3 text-sm font-semibold text-cedar-ink transition hover:bg-[#c89858]"
            >
              {siteConfig.ctas.primary}
              <SiteIcon name="message" className="size-4" />
            </a>
            <a
              href="#work"
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
            Led by {siteConfig.founder}. Direct communication, practical scope, and a website that feels professional on mobile.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-sm border border-cedar-gold/20 bg-cedar-gold/10 lg:block" />
          <div className="relative rounded-lg border border-cedar-line bg-cedar-surface/85 p-3 shadow-premium sm:p-4">
            <div className="overflow-hidden rounded-md border border-cedar-line bg-cedar-ink">
              <div className="flex h-10 items-center justify-between border-b border-cedar-line bg-cedar-surface/90 px-4">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-cedar-gold/80" />
                  <span className="size-2.5 rounded-full bg-cedar-muted/45" />
                  <span className="size-2.5 rounded-full bg-cedar-forest" />
                </div>
                <span className="text-xs font-medium text-cedar-muted">Selected build preview</span>
              </div>
              {featuredProject.screenshot ? (
                <Image
                  src={featuredProject.screenshot}
                  alt={`${featuredProject.name} website screenshot used as a real Cedar Web Studio work preview`}
                  width={1366}
                  height={768}
                  priority
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              ) : null}
            </div>
            {layeredProject.screenshot ? (
              <div className="absolute -bottom-9 right-4 hidden w-[46%] overflow-hidden rounded-md border border-cedar-line bg-cedar-ink shadow-lift sm:block">
                <Image
                  src={layeredProject.screenshot}
                  alt={`${layeredProject.name} real project screenshot layered over the hero preview`}
                  width={1366}
                  height={768}
                  priority
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
            ) : null}
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-3">
            {[
              ["Websites", "Services, menu, location, and contact details in one clean place."],
              ["Digital menus", "Categories, prices, hours, and WhatsApp order flow."],
              ["Online stores", "Products organized so customers can browse before messaging."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-lg border border-cedar-line bg-cedar-surface/75 p-4">
                <p className="text-sm font-semibold text-cedar-cream">{title}</p>
                <p className="mt-1 text-sm leading-6 text-cedar-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
