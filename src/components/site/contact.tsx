"use client";

import { FormEvent, useState } from "react";
import { budgetOptions, serviceOptions, siteConfig, timelineOptions } from "@/config/site";
import { buildQuoteMessage, createWhatsAppQuoteUrl } from "@/lib/utils";
import { SiteIcon } from "./icon";
import { SectionHeading } from "./section-heading";

type FormState = {
  name: string;
  businessName: string;
  businessType: string;
  phone: string;
  serviceNeeded: string;
  budgetRange: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  businessName: "",
  businessType: "",
  phone: "",
  serviceNeeded: serviceOptions[0],
  budgetRange: budgetOptions[0],
  timeline: timelineOptions[0],
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
      businessName: String(formData.get("businessName") || ""),
      businessType: String(formData.get("businessType") || ""),
      phone: String(formData.get("phone") || ""),
      serviceNeeded: String(formData.get("serviceNeeded") || ""),
      budgetRange: String(formData.get("budgetRange") || ""),
      timeline: String(formData.get("timeline") || ""),
      message: String(formData.get("message") || ""),
    });

    const url = createWhatsAppQuoteUrl(message);

    if (!url) {
      setStatus("WhatsApp is not connected yet. Update src/config/site.ts with the Deodar Web Studio number before deployment.");
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("WhatsApp opened with your enquiry prepared. Review it, then send the message there.");
  }

  return (
    <section id="contact" className="section-spacing bg-deodar-surface/30">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <SectionHeading
            label="Website Enquiry"
            title="Start with a clear WhatsApp brief."
            copy="Share the business details once. The form opens WhatsApp with a clean enquiry message, so the discussion can start with context."
          />

          <div className="mt-8 grid gap-4">
            <div className="rounded-lg border border-deodar-line bg-deodar-ink/60 p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-deodar-accent/35 text-deodar-gold">
                  <SiteIcon name="message" className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-deodar-cream">WhatsApp-first contact</p>
                  <p className="mt-1 text-sm leading-6 text-deodar-muted">
                    No vague contact form black hole. Your enquiry opens directly in WhatsApp.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-deodar-line bg-deodar-ink/60 p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-deodar-accent/35 text-deodar-gold">
                  <SiteIcon name="shield" className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-deodar-cream">Scope before build</p>
                  <p className="mt-1 text-sm leading-6 text-deodar-muted">
                    Pages, content, timeline, budget, and launch needs are clarified before work begins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          action="#contact"
          onSubmit={onSubmit}
          className="rounded-lg border border-deodar-line bg-deodar-ink/75 p-4 shadow-premium sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={(value) => updateField("name", value)} autoComplete="name" required />
            <Field
              label="Business name"
              name="businessName"
              value={form.businessName}
              onChange={(value) => updateField("businessName", value)}
              autoComplete="organization"
              required
            />
            <Field
              label="Business type"
              name="businessType"
              value={form.businessType}
              onChange={(value) => updateField("businessType", value)}
              placeholder="Cafe, clinic, gym, salon..."
              required
            />
            <Field
              label="Phone / WhatsApp number"
              name="phone"
              value={form.phone}
              onChange={(value) => updateField("phone", value)}
              autoComplete="tel"
              required
            />
            <SelectField
              label="Package / service"
              name="serviceNeeded"
              value={form.serviceNeeded}
              options={serviceOptions}
              onChange={(value) => updateField("serviceNeeded", value)}
            />
            <SelectField
              label="Budget range"
              name="budgetRange"
              value={form.budgetRange}
              options={budgetOptions}
              onChange={(value) => updateField("budgetRange", value)}
            />
            <SelectField
              label="Timeline"
              name="timeline"
              value={form.timeline}
              options={timelineOptions}
              onChange={(value) => updateField("timeline", value)}
            />
            <div className="rounded-md border border-deodar-line bg-deodar-surface px-4 py-3 text-sm leading-6 text-deodar-muted">
              <p className="font-medium text-deodar-cream">Built for clarity</p>
              <p className="mt-1">Services, menu, location, photos, timings, and direct contact.</p>
            </div>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-deodar-cream">Message</span>
            <textarea
              value={form.message}
              name="message"
              onChange={(event) => updateField("message", event.target.value)}
              rows={4}
              required
              aria-required="true"
              className="focus-ring mt-2 w-full resize-y rounded-md border border-deodar-line bg-deodar-surface px-4 py-3 text-sm leading-6 text-deodar-cream placeholder:text-deodar-muted/70"
              placeholder="Example: I need a clean website for my clinic with services, timings, photos, Google Maps, and WhatsApp enquiry."
            />
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-deodar-gold px-6 py-3 text-sm font-semibold text-deodar-ink transition hover:bg-[#c79a5f]"
            >
              {siteConfig.ctas.whatsapp}
              <SiteIcon name="message" className="size-4" />
            </button>
            <a
              href="#work"
              className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-deodar-line px-6 py-3 text-sm font-semibold text-deodar-cream transition hover:border-deodar-gold/40"
            >
              View selected builds
            </a>
          </div>

          {status ? (
            <p className="mt-4 rounded-md border border-deodar-gold/25 bg-deodar-gold/10 px-4 py-3 text-sm leading-6 text-deodar-cream" role="status">
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
  name,
  value,
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
      <span className="text-sm font-medium text-deodar-cream">{label}</span>
      <input
        value={value}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        className="focus-ring mt-2 h-12 w-full rounded-md border border-deodar-line bg-deodar-surface px-4 text-sm text-deodar-cream placeholder:text-deodar-muted/70"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
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
      <span className="text-sm font-medium text-deodar-cream">{label}</span>
      <select
        value={value}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring mt-2 h-12 w-full rounded-md border border-deodar-line bg-deodar-surface px-4 text-sm text-deodar-cream"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
