"use client";

import { FormEvent, useState } from "react";
import { budgetOptions, siteConfig } from "@/config/site";
import { buildQuoteMessage, createWhatsAppQuoteUrl } from "@/lib/utils";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

type FormState = {
  name: string;
  businessType: string;
  budgetRange: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  businessType: "",
  budgetRange: budgetOptions[0],
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const message = buildQuoteMessage({
      name: String(formData.get("name") || ""),
      businessType: String(formData.get("businessType") || ""),
      budgetRange: String(formData.get("budgetRange") || ""),
      message: String(formData.get("message") || ""),
    });

    const url = createWhatsAppQuoteUrl(message);

    if (!url) {
      setStatus("WhatsApp is not connected yet. Update src/config/site.ts with the Cedar Web Studio number before deployment.");
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("WhatsApp opened with your enquiry prepared. Review it, then send the message there.");
  }

  return (
    <section id="contact" className="section-spacing bg-cedar-surface/30">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <SectionHeading
            label="Get Quote"
            title="Start with a short WhatsApp-ready brief."
            copy="Share the essentials first. The form opens WhatsApp with your project details already written, so the first conversation starts clearly."
          />

          <div className="mt-8 grid gap-4">
            <div className="rounded-lg border border-cedar-line bg-cedar-ink/60 p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-cedar-forest/40 text-cedar-gold">
                  <SiteIcon name="message" className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-cedar-cream">WhatsApp-first quoting</p>
                  <p className="mt-1 text-sm leading-6 text-cedar-muted">No long enquiry process. Send a short brief and continue the discussion directly.</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-cedar-line bg-cedar-ink/60 p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-cedar-forest/40 text-cedar-gold">
                  <SiteIcon name="shield" className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-cedar-cream">Scope before build</p>
                  <p className="mt-1 text-sm leading-6 text-cedar-muted">Pages, content, budget, timeline, and launch needs are confirmed before work begins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          action="#contact"
          onSubmit={onSubmit}
          className="rounded-lg border border-cedar-line bg-cedar-ink/75 p-4 shadow-premium sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={(value) => updateField("name", value)}
              autoComplete="name"
              required
            />
            <Field
              label="Business type"
              name="businessType"
              value={form.businessType}
              onChange={(value) => updateField("businessType", value)}
              placeholder="Cafe, salon, gym, Instagram seller..."
              required
            />
            <SelectField
              label="Budget range"
              name="budgetRange"
              value={form.budgetRange}
              options={budgetOptions}
              onChange={(value) => updateField("budgetRange", value)}
            />
            <div className="rounded-md border border-cedar-line bg-cedar-surface px-4 py-3 text-sm leading-6 text-cedar-muted">
              <p className="font-medium text-cedar-cream">What can Cedar build?</p>
              <p className="mt-1">Websites, digital menus, online stores, and redesigns.</p>
            </div>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-cedar-cream">Message / what you need</span>
            <textarea
              value={form.message}
              name="message"
              onChange={(event) => updateField("message", event.target.value)}
              rows={4}
              required
              aria-required="true"
              className="focus-ring mt-2 w-full resize-y rounded-md border border-cedar-line bg-cedar-surface px-4 py-3 text-sm leading-6 text-cedar-cream placeholder:text-cedar-muted/70"
              placeholder="Example: I need a cafe menu website with prices, timings, Google Maps, and WhatsApp ordering."
            />
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-cedar-gold px-6 py-3 text-sm font-semibold text-cedar-ink transition hover:bg-[#c89858]"
            >
              {siteConfig.ctas.whatsapp}
              <SiteIcon name="message" className="size-4" />
            </button>
            <a
              href="#work"
              className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-cedar-line px-6 py-3 text-sm font-semibold text-cedar-cream transition hover:border-cedar-gold/40"
            >
              View Selected Work
            </a>
          </div>

          {status ? (
            <p className="mt-4 rounded-md border border-cedar-gold/25 bg-cedar-gold/10 px-4 py-3 text-sm leading-6 text-cedar-cream" role="status">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  name,
  onChange,
  autoComplete,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-cedar-cream">{label}</span>
      <input
        value={value}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        className="focus-ring mt-2 h-12 w-full rounded-md border border-cedar-line bg-cedar-surface px-4 text-sm text-cedar-cream placeholder:text-cedar-muted/70"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  name,
  options,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-cedar-cream">{label}</span>
      <select
        value={value}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring mt-2 h-12 w-full rounded-md border border-cedar-line bg-cedar-surface px-4 text-sm text-cedar-cream"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
