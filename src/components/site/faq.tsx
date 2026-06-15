import { engagementFaqs } from "@/config/site";
import { Container } from "./container";

export function FAQ() {
  return (
    <section id="engagement-faq" className="studio-canvas border-t border-studio-line py-[var(--studio-section-space-compact)]">
      <Container size="content">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="type-label text-studio-greenBright">Engagement FAQ</p>
            <h2 className="type-section mt-4 text-studio-text">Scope, pricing and ownership in plain terms.</h2>
          </div>

          <div className="grid gap-0 border-t border-studio-line">
            {engagementFaqs.map((faq) => (
              <details className="group border-b border-studio-line py-5" key={faq.question}>
                <summary className="cursor-pointer list-none rounded-studioSm text-base font-semibold leading-7 text-studio-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright">
                  {faq.question}
                </summary>
                <p className="type-small mt-4 max-w-3xl text-studio-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
