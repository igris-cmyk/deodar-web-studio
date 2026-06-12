import { contactConfig, siteConfig } from "@/config/site";
import { SiteIcon } from "./icon";

export function Footer() {
  return (
    <footer className="border-t border-deodar-line bg-deodar-ink">
      <div className="section-shell py-10 sm:py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="focus-ring inline-flex items-center gap-3 rounded-md">
              <span className="flex size-10 items-center justify-center rounded-md border border-deodar-gold/30 bg-deodar-surface text-sm font-semibold text-deodar-gold">
                D
              </span>
              <span>
                <span className="block font-semibold text-deodar-cream">{siteConfig.name}</span>
                <span className="block text-xs text-deodar-muted">{siteConfig.descriptor}</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-deodar-muted">
              Clean, conversion-ready websites for local businesses that need trust and WhatsApp enquiries.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-deodar-muted">{contactConfig.locationLine}</p>
            <a
              href="#contact"
              className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-deodar-gold px-5 py-3 text-sm font-semibold text-deodar-ink"
            >
              Start enquiry
              <SiteIcon name="arrow" className="size-4" />
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-normal text-deodar-gold">Services</h2>
            <ul className="mt-4 grid gap-2 text-sm text-deodar-muted">
              {contactConfig.serviceCategories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-normal text-deodar-gold">Quick Links</h2>
            <ul className="mt-4 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-ring inline-flex min-h-10 min-w-10 items-center rounded-md py-2 text-deodar-muted transition hover:text-deodar-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contactConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md py-2 text-deodar-muted transition hover:text-deodar-cream"
                >
                  GitHub Profile
                  <SiteIcon name="github" className="size-4" />
                </a>
              </li>
              {contactConfig.hasConfiguredProfessionalEmail ? (
                <li>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="focus-ring inline-flex min-h-10 items-center rounded-md py-2 text-deodar-muted transition hover:text-deodar-cream"
                  >
                    {contactConfig.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-deodar-line pt-5 text-xs text-deodar-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
