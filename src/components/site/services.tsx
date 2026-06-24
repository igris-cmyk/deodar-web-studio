import { Container } from "@/components/site/container";
import { ActionLink } from "@/components/site/action-link";
import { studioCapabilities } from "@/config/site";

export function Services() {
  return (
    <section id="services" className="studio-paper rounded-none border-x-0 py-[var(--studio-section-space)]">
      <Container size="wide">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
          <p className="type-label text-studio-paperMuted">{studioCapabilities.eyebrow}</p>
          <div>
            <h2 className="type-section max-w-3xl text-studio-paperText">{studioCapabilities.heading}</h2>
            <p className="type-body-lg mt-4 max-w-[var(--studio-reading-max)] text-studio-paperMuted">
              {studioCapabilities.introduction}
            </p>
          </div>
        </div>

        <div className="mt-10 border-y border-studio-paperLine">
          {studioCapabilities.groups.map((capability) => (
            <article key={capability.index} className="grid gap-6 border-t border-studio-paperLine py-6 first:border-t-0 lg:grid-cols-[minmax(9rem,0.34fr)_minmax(0,0.66fr)] lg:gap-8 lg:py-8">
              <div>
                <p className="type-label text-studio-paperMuted">{capability.index}</p>
                <h3 className="type-subheading mt-3 max-w-sm text-studio-paperText">{capability.title}</h3>
              </div>

              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(14rem,0.55fr)]">
                <div>
                  <p className="type-subheading text-studio-paperText">{capability.thesis}</p>
                  <p className="type-body mt-4 max-w-[var(--studio-reading-max)] text-studio-paperMuted">
                    {capability.responsibility}
                  </p>
                  <p className="type-small mt-4 max-w-[var(--studio-reading-max)] border-l border-studio-paperLine pl-4 text-studio-paperMuted">
                    {capability.appropriateProblem}
                  </p>
                </div>

                <div>
                  <p className="type-label text-studio-paperMuted">Typical outputs</p>
                  <ul className="mt-3 grid gap-2">
                    {capability.outputs.map((output) => (
                      <li key={output} className="border-t border-studio-paperLine pt-3 text-sm font-semibold leading-6 text-studio-paperText first:border-t-0 first:pt-0">
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-small max-w-[var(--studio-reading-max)] text-studio-paperMuted">
            {studioCapabilities.qualifier}
          </p>
          <ActionLink href="/engagements" variant="inverse">
            Review engagement options
          </ActionLink>
        </div>
      </Container>
    </section>
  );
}
