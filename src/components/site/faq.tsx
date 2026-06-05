import { faqs } from "@/config/site";
import { SectionHeading } from "./section-heading";

export function FAQ() {
  return (
    <section id="faq" className="section-spacing border-b border-cedar-line">
      <div className="section-shell">
        <SectionHeading
          label="FAQ"
          title="Straight answers before you request a quote."
          copy="These are the questions most business owners ask before starting a website, menu, or online store project."
        />

        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-cedar-line bg-cedar-surface/75 p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-cedar-cream focus:outline-none group-open:text-cedar-gold">
                {faq.question}
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-cedar-line text-cedar-muted transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-cedar-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
