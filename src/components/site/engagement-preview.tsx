import { ActionLink } from "@/components/site/action-link";
import { Container } from "@/components/site/container";
import { engagementOptions } from "@/config/site";

export function EngagementPreview() {
  return (
    <section className="studio-paper py-[var(--studio-section-space-compact)]">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
          <div>
            <p className="type-label text-studio-paperMuted">Ways to work together</p>
            <h2 className="type-section mt-4 max-w-2xl text-studio-paperText">
              Start at the level of responsibility the business actually needs.
            </h2>
          </div>
          <div>
            <p className="type-body text-studio-paperMuted">
              From a constrained launch to an evolving custom product, each engagement has a visible boundary and a clear next decision.
            </p>
            <ActionLink className="mt-6" href="/engagements" variant="inverse">
              Review engagements and pricing
            </ActionLink>
          </div>
        </div>

        <ol className="mt-10 border-y border-studio-paperLine">
          {engagementOptions.map((option) => (
            <li
              className="grid gap-4 border-t border-studio-paperLine py-5 first:border-t-0 md:grid-cols-[3rem_minmax(10rem,0.7fr)_minmax(0,1fr)_minmax(9rem,0.38fr)] md:items-center"
              key={option.slug}
            >
              <span className="type-label text-studio-paperMuted">{option.index}</span>
              <h3 className="text-base font-semibold text-studio-paperText">{option.name}</h3>
              <p className="type-small text-studio-paperMuted">{option.bestFor}</p>
              <p className="text-sm font-semibold text-studio-paperText">
                <span className="mr-1 text-studio-paperMuted">{option.priceLabel}</span>
                {option.startingPrice}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
