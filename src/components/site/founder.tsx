import { studioFounder } from "@/config/site";
import { ActionLink } from "./action-link";
import { Container } from "./container";
import { SiteIcon } from "./icon";

export function Founder() {
  return (
    <section id="founder" className="studio-canvas border-t border-studio-line py-[var(--studio-section-space-compact)]">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="type-label text-studio-greenBright">{studioFounder.eyebrow}</p>
            <h2 className="type-section mt-4 text-studio-text">{studioFounder.heading}</h2>
            <p className="type-body-lg mt-5 text-studio-textSoft">{studioFounder.intro}</p>
            <p className="type-body mt-4 max-w-[var(--studio-reading-max)] text-studio-muted">{studioFounder.accountability}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {studioFounder.links.map((link) => (
                <ActionLink key={link.href} href={link.href} variant="secondary" external>
                  {link.label}
                  <SiteIcon name={link.label.includes("GitHub") ? "github" : "external"} className="size-4" />
                </ActionLink>
              ))}
            </div>
          </div>

          <div className="border-t border-studio-line lg:border-t-0">
            <ol className="grid gap-0">
              {studioFounder.principles.map((principle) => (
                <li key={principle.index} className="grid gap-3 border-b border-studio-line py-5 first:pt-0 lg:grid-cols-[4.5rem_1fr]">
                  <span className="type-label text-studio-faint">{principle.index}</span>
                  <div>
                    <h3 className="type-subheading text-studio-text">{principle.title}</h3>
                    <p className="mt-2 text-base font-semibold leading-7 text-studio-textSoft">{principle.statement}</p>
                    <p className="type-small mt-2 text-studio-muted">{principle.explanation}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
