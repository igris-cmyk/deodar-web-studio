import { ActionLink } from "@/components/site/action-link";
import { Container } from "@/components/site/container";
import { studioCapabilityIndex, studioHero } from "@/config/site";

export function Hero() {
  return (
    <section id="home" className="border-b border-studio-line bg-studio-canvas">
      <Container
        size="wide"
        className="grid gap-9 py-[clamp(4rem,7vw,6.5rem)] lg:grid-cols-[minmax(0,1.55fr)_minmax(19rem,0.75fr)] lg:items-center lg:gap-12"
      >
        <div className="max-w-6xl">
          <p className="type-label text-studio-greenBright">{studioHero.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-[clamp(3.05rem,6.4vw,6rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-studio-text">
            Websites and{" "}
            <span className="font-editorial font-normal italic tracking-[-0.065em] text-studio-text">business systems</span>{" "}
            built to generate enquiries, enable transactions and simplify operations.
          </h1>

          <div className="mt-6 grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(16rem,0.42fr)] lg:items-end">
            <p className="type-body-lg max-w-[var(--studio-reading-max)] text-studio-textSoft">
              {studioHero.supportingText}
            </p>
            <p className="type-small border-l border-studio-line pl-4 text-studio-muted">
              {studioHero.founderLine}
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 min-[390px]:flex-row min-[390px]:items-center">
            <ActionLink href={studioHero.primaryCta.href} className="w-full text-sm min-[390px]:!w-auto min-[390px]:whitespace-nowrap min-[390px]:px-3 sm:px-5 sm:text-base" size="lg" variant="primary">
              {studioHero.primaryCta.label}
            </ActionLink>
            <ActionLink href={studioHero.secondaryCta.href} className="w-full text-sm min-[390px]:!w-auto min-[390px]:whitespace-nowrap min-[390px]:px-3 sm:px-5 sm:text-base" size="lg" variant="secondary">
              {studioHero.secondaryCta.label}
            </ActionLink>
          </div>
        </div>

        <aside className="border-y border-studio-line py-1 lg:border-y-0 lg:border-l lg:py-0 lg:pl-7" aria-label="Capability index">
          <p className="type-label py-4 text-studio-faint">Capability index</p>
          <ol>
            {studioCapabilityIndex.map((item) => (
              <li key={item.index} className="grid gap-3 border-t border-studio-line py-4 sm:grid-cols-[3rem_1fr] lg:grid-cols-1 xl:grid-cols-[3rem_1fr]">
                <span className="type-label text-studio-greenBright">{item.index}</span>
                <div>
                  <h2 className="type-subheading text-studio-text">{item.title}</h2>
                  <p className="type-small mt-2 max-w-sm text-studio-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </Container>
    </section>
  );
}
