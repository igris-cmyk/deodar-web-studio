import { faqs } from "@/config/site";
import { SectionHeading } from "./section-heading";

export function FAQ() {
  return (
    <section id="faq" className="section-spacing border-b border-deodar-line">
      <div className="section-shell">
        <SectionHeading
          label="FAQ"
          title="Straight answers before you start."
          copy="Plain answers about domains, hosting, WhatsApp, updates, SEO-ready structure, timelines, and maintenance."
        />

        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-deodar-line bg-deodar-surface/75 p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-deodar-cream focus:outline-none group-open:text-deodar-gold">
                {faq.question}
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-deodar-line text-deodar-muted transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-deodar-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
