import { contactConfig, siteConfig, studioNavigation } from "@/config/site";
import { createWhatsAppQuoteUrl } from "@/lib/utils";
import { ActionLink } from "./action-link";
import { Container } from "./container";
import { SiteIcon } from "./icon";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = createWhatsAppQuoteUrl("Hi Sahil, I want to discuss a Deodar project.");

  return (
    <footer className="studio-canvas border-t border-studio-line">
      <Container size="wide" className="py-10 sm:py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="max-w-2xl">
            <a href="#home" className="inline-flex rounded-studioSm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright">
              <span>
                <span className="block text-lg font-semibold tracking-[-0.03em] text-studio-text">{studioNavigation.brand.name}</span>
                <span className="mt-1 block text-sm text-studio-muted">{studioNavigation.brand.descriptor}</span>
              </span>
            </a>
            <p className="type-body mt-6 max-w-xl text-studio-textSoft">
              Founder-led product direction, interface systems and full-stack engineering for focused digital products and business systems.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-[0.75fr_0.75fr_1fr]">
            <nav aria-label="Footer navigation">
              <h2 className="type-label text-studio-greenBright">Navigate</h2>
              <ul className="mt-4 grid gap-2">
                {studioNavigation.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-9 items-center rounded-studioSm text-sm font-medium text-studio-muted transition hover:text-studio-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer resources">
              <h2 className="type-label text-studio-greenBright">Resources</h2>
              <ul className="mt-4 grid gap-2">
                <li>
                  <a
                    href="/engagements"
                    className="inline-flex min-h-9 items-center rounded-studioSm text-sm font-medium text-studio-muted transition hover:text-studio-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
                  >
                    Engagements
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="type-label text-studio-greenBright">Contact</h2>
              <div className="mt-4 flex flex-col items-start gap-3">
                {whatsappUrl ? (
                  <ActionLink href={whatsappUrl} variant="text" external>
                    WhatsApp
                    <SiteIcon name="message" className="size-4" />
                  </ActionLink>
                ) : null}
                {contactConfig.hasConfiguredProfessionalEmail ? (
                  <ActionLink href={`mailto:${contactConfig.email}`} variant="text" external>
                    Email
                  </ActionLink>
                ) : null}
                {contactConfig.socialLinks.map((link) => (
                  <ActionLink key={link.href} href={link.href} variant="text" external>
                    {link.label}
                    <SiteIcon name={link.label === "GitHub" ? "github" : "external"} className="size-4" />
                  </ActionLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-studio-line pt-5 text-xs leading-5 text-studio-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}</p>
          <p>{contactConfig.locationLine}</p>
        </div>
      </Container>
    </footer>
  );
}
