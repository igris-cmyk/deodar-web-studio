import { siteConfig } from "@/config/site";
import { SiteIcon } from "./icon";

export function Footer() {
  return (
    <footer className="border-t border-cedar-line bg-cedar-ink">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a href="#home" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <span className="flex size-10 items-center justify-center rounded-md border border-cedar-gold/30 bg-cedar-surface text-cedar-gold">
              <SiteIcon name="leaf" className="size-5" />
            </span>
            <span>
              <span className="block font-semibold text-cedar-cream">{siteConfig.name}</span>
              <span className="block text-xs text-cedar-muted">{siteConfig.descriptor}</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-6 text-cedar-muted">
            Websites, digital menus, and online stores for growing local businesses.
          </p>
          <a
            href="#contact"
            className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cedar-gold px-5 py-3 text-sm font-semibold text-cedar-ink"
          >
            Get Quote
            <SiteIcon name="arrow" className="size-4" />
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cedar-gold">Services</h2>
          <ul className="mt-4 grid gap-3 text-sm text-cedar-muted">
            {["Business Websites", "Digital Menus", "Product Websites", "Website Redesigns"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cedar-gold">Quick Links</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="focus-ring rounded-md text-cedar-muted transition hover:text-cedar-cream">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md text-cedar-muted transition hover:text-cedar-cream"
              >
                GitHub Profile
                <SiteIcon name="github" className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring rounded-md text-cedar-muted transition hover:text-cedar-cream"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cedar-line">
        <div className="section-shell flex flex-col gap-2 py-5 text-xs text-cedar-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
