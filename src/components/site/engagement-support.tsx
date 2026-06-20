import { Container } from "@/components/site/container";
import { engagementFit, postLaunchPlans } from "@/config/site";

export function EngagementSupport() {
  return (
    <>
      <section className="studio-canvas border-t border-studio-line py-[var(--studio-section-space-compact)]">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end">
            <div>
              <p className="type-label text-studio-greenBright">{postLaunchPlans.eyebrow}</p>
              <h2 className="type-section mt-4 max-w-2xl text-studio-text">{postLaunchPlans.heading}</h2>
            </div>
            <p className="type-body-lg max-w-[var(--studio-reading-max)] text-studio-textSoft">
              {postLaunchPlans.introduction}
            </p>
          </div>

          <div className="mt-12 border-y border-studio-line">
            {postLaunchPlans.plans.map((plan, index) => (
              <article
                className="grid gap-6 border-t border-studio-line py-7 first:border-t-0 lg:grid-cols-[3rem_minmax(12rem,0.55fr)_minmax(0,1fr)_minmax(12rem,0.55fr)] lg:items-start"
                key={plan.name}
              >
                <p className="type-label text-studio-greenBright">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="type-subheading text-studio-text">{plan.name}</h3>
                  <p className="mt-3 text-sm font-semibold text-studio-textSoft">{plan.price}</p>
                  <p className="type-small mt-3 text-studio-muted">{plan.summary}</p>
                </div>
                <ul className="grid gap-2">
                  {plan.coverage.map((item) => (
                    <li className="type-small border-t border-studio-line pt-2 text-studio-textSoft first:border-t-0 first:pt-0" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="type-small border-l border-studio-line pl-4 text-studio-faint">{plan.boundary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="studio-paper py-[var(--studio-section-space-compact)]">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-end">
            <div>
              <p className="type-label text-studio-paperMuted">{engagementFit.eyebrow}</p>
              <h2 className="type-section mt-4 max-w-2xl text-studio-paperText">{engagementFit.heading}</h2>
            </div>
            <p className="type-body text-studio-paperMuted">
              Fit is reviewed through the objective, working relationship, readiness and responsibility required - not through industry labels alone.
            </p>
          </div>

          <div className="mt-10 grid gap-10 border-y border-studio-paperLine py-8 lg:grid-cols-2">
            <FitList title={engagementFit.strongFit.title} items={engagementFit.strongFit.items} />
            <FitList title={engagementFit.poorFit.title} items={engagementFit.poorFit.items} />
          </div>
        </Container>
      </section>
    </>
  );
}

function FitList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="type-subheading text-studio-paperText">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="border-t border-studio-paperLine pt-3 text-sm leading-6 text-studio-paperMuted" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
