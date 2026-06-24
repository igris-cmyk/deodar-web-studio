import { engagementOptions, engagementPage } from "@/config/site";
import { ActionLink } from "./action-link";
import { Container } from "./container";

export function Packages() {
  return (
    <section id="engagement-options" className="studio-paper py-[var(--studio-section-space)]">
      <Container size="wide">
        <div className="grid gap-6 border-b border-studio-paperLine pb-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="type-label text-studio-paperMuted">Engagement options</p>
            <h2 className="type-section mt-4 text-studio-paperText">Defined starting scopes. Visible boundaries.</h2>
          </div>
          <p className="type-body text-studio-paperMuted">{engagementPage.sharedPricingStatement}</p>
        </div>

        <div className="mt-4">
          {engagementOptions.map((option) => (
            <details
              className="group scroll-mt-28 border-b border-studio-paperLine"
              id={option.slug}
              key={option.slug}
            >
              <summary className="grid cursor-pointer list-none gap-5 rounded-studioSm py-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenDeep lg:grid-cols-[3rem_minmax(13rem,0.7fr)_minmax(0,1fr)_minmax(12rem,0.48fr)_2rem] lg:items-center">
                <span className="type-label text-studio-paperMuted">{option.index}</span>
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-studio-paperText">{option.name}</h3>
                <p className="type-small text-studio-paperMuted">{option.bestFor}</p>
                <p className="text-sm font-semibold text-studio-paperText">
                  <span className="mr-1 text-studio-paperMuted">{option.priceLabel}</span>
                  {option.startingPrice}
                </p>
                <span aria-hidden="true" className="text-xl text-studio-paperMuted transition group-open:rotate-45">+</span>
              </summary>

              <div className="border-t border-studio-paperLine py-9">
                <div>
                  {option.qualification ? (
                    <p className="type-small mb-5 max-w-2xl text-studio-paperMuted">
                      {option.qualification}
                    </p>
                  ) : null}
                  <p className="type-body-lg max-w-3xl text-studio-paperText">{option.summary}</p>

                  <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <ScopeList title="Core scope" items={option.coreScope} />
                    <div className="space-y-6">
                      {option.typicalStructure ? (
                        <TextBlock title="Typical structure" body={option.typicalStructure} />
                      ) : null}
                      {option.systemAreas?.length ? (
                        <ScopeList title="Possible system areas" items={option.systemAreas} compact />
                      ) : null}
                      {option.importantBoundary ? (
                        <TextBlock title="Important boundary" body={option.importantBoundary} strong />
                      ) : null}
                      <div className="grid gap-4 border-t border-studio-paperLine pt-5 sm:grid-cols-2">
                        <TextBlock title="Timeline" body={option.timeline} />
                        <TextBlock title="Revisions" body={option.revisions} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-studio-paperLine pt-6">
                    <ScopeList title="Common exclusions" items={option.exclusions} muted />
                  </div>

                  <ActionLink href="/#contact" variant="inverse" className="mt-8">
                    {option.cta}
                  </ActionLink>
                </div>
              </div>
            </details>
          ))}
        </div>

        <SharedPrinciples />
      </Container>
    </section>
  );
}

function ScopeList({ title, items, compact, muted }: { title: string; items: readonly string[]; compact?: boolean; muted?: boolean }) {
  return (
    <div>
      <h4 className="type-label text-studio-paperText">{title}</h4>
      <ul className={compact ? "mt-4 grid gap-2" : "mt-4 grid gap-3"}>
        {items.map((item) => (
          <li className={muted ? "text-sm leading-6 text-studio-paperMuted" : "text-sm leading-6 text-studio-paperText"} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TextBlock({ title, body, strong }: { title: string; body: string; strong?: boolean }) {
  return (
    <div>
      <h4 className="type-label text-studio-paperMuted">{title}</h4>
      <p className={strong ? "mt-3 text-sm font-semibold leading-6 text-studio-paperText" : "mt-3 text-sm leading-6 text-studio-paperMuted"}>{body}</p>
    </div>
  );
}

function SharedPrinciples() {
  return (
    <div className="mt-12 grid gap-10 border-t border-studio-paperLine pt-10 lg:grid-cols-[1fr_1fr]">
      <section aria-labelledby="scope-change-heading">
        <h3 className="type-subheading text-studio-paperText" id="scope-change-heading">
          {engagementPage.scopePrinciples.heading}
        </h3>
        <p className="type-body mt-4 text-studio-paperMuted">{engagementPage.scopePrinciples.body}</p>
        <ul className="mt-6 grid gap-3">
          {engagementPage.scopePrinciples.items.map((item) => (
            <li className="border-t border-studio-paperLine pt-3 text-sm font-semibold leading-6 text-studio-paperText" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="ownership-heading">
        <h3 className="type-subheading text-studio-paperText" id="ownership-heading">
          {engagementPage.ownershipPrinciples.heading}
        </h3>
        <ul className="mt-5 grid gap-3">
          {engagementPage.ownershipPrinciples.items.map((item) => (
            <li className="border-t border-studio-paperLine pt-3 text-sm leading-6 text-studio-paperMuted" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
