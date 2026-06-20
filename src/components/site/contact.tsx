"use client";

import { FormEvent, useMemo, useState } from "react";
import { contactConfig, projectEnquiry } from "@/config/site";
import { buildProjectEnquiryMessage, createWhatsAppQuoteUrl } from "@/lib/utils";
import { ActionLink } from "./action-link";
import { Container } from "./container";
import { SiteIcon } from "./icon";

type FormState = {
  name: string;
  preferredContact: string;
  businessOrProduct: string;
  currentWebsite: string;
  projectContext: string;
  engagementType: string;
  primaryObjective: string;
  launchTimeframe: string;
  indicativeBudget: string;
  projectMessage: string;
};

type FieldName = keyof FormState;

const initialState: FormState = {
  name: "",
  preferredContact: "",
  businessOrProduct: "",
  currentWebsite: "",
  projectContext: "",
  engagementType: "",
  primaryObjective: "",
  launchTimeframe: "",
  indicativeBudget: "",
  projectMessage: "",
};

const requiredFields: Array<FieldName> = [
  "name",
  "preferredContact",
  "businessOrProduct",
  "projectContext",
  "engagementType",
  "primaryObjective",
  "launchTimeframe",
  "indicativeBudget",
];

const fieldLabels: Record<FieldName, string> = {
  name: "Name",
  preferredContact: "Email or WhatsApp number",
  businessOrProduct: "Business or organisation",
  currentWebsite: "Current website, if available",
  projectContext: "What are you trying to build or improve?",
  engagementType: "Engagement type",
  primaryObjective: "Primary business objective",
  launchTimeframe: "Desired launch timeframe",
  indicativeBudget: "Approximate investment range",
  projectMessage: "Project message",
};

type FormErrors = Partial<Record<FieldName, string>>;

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  const directWhatsAppUrl = useMemo(
    () => createWhatsAppQuoteUrl(projectEnquiry.directWhatsAppMessage),
    [],
  );

  function updateField<K extends FieldName>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) {
        return current;
      }

      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    for (const field of requiredFields) {
      if (!form[field].trim()) {
        nextErrors[field] = `${fieldLabels[field]} is required.`;
      }
    }

    return nextErrors;
  }

  function focusFirstInvalid(formElement: HTMLFormElement, nextErrors: FormErrors) {
    const firstInvalidField = requiredFields.find((field) => nextErrors[field]);
    if (!firstInvalidField) {
      return;
    }

    const element = formElement.elements.namedItem(firstInvalidField);
    if (element instanceof HTMLElement) {
      element.focus();
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstInvalid(event.currentTarget, nextErrors);
      setStatus("Please complete the required fields before opening WhatsApp.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const message = buildProjectEnquiryMessage({
      name: String(formData.get("name") || ""),
      preferredContact: String(formData.get("preferredContact") || ""),
      businessOrProduct: String(formData.get("businessOrProduct") || ""),
      currentWebsite: String(formData.get("currentWebsite") || ""),
      projectContext: String(formData.get("projectContext") || ""),
      engagementType: String(formData.get("engagementType") || ""),
      primaryObjective: String(formData.get("primaryObjective") || ""),
      launchTimeframe: String(formData.get("launchTimeframe") || ""),
      indicativeBudget: String(formData.get("indicativeBudget") || ""),
      projectMessage: String(formData.get("projectMessage") || ""),
    });

    const url = createWhatsAppQuoteUrl(message);

    if (!url) {
      setStatus("WhatsApp is not connected yet. Update the configured Deodar Web Studio number before deployment.");
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("WhatsApp opened with your project brief prepared. Review it, then send the message there.");
  }

  return (
    <section id="contact" className="studio-canvas border-t border-studio-line py-[var(--studio-section-space)]">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-[var(--studio-reading-max)]">
            <p className="type-label text-studio-greenBright">{projectEnquiry.eyebrow}</p>
            <h2 className="type-section mt-5 text-studio-text">{projectEnquiry.heading}</h2>
            <p className="type-body-lg mt-6 text-studio-textSoft">{projectEnquiry.introduction}</p>
            <p className="mt-6 border-l border-studio-green pl-5 text-base font-semibold leading-7 text-studio-text">
              {projectEnquiry.directStatement}
            </p>

            <div className="mt-10 border-t border-studio-line pt-6">
              <h3 className="type-subheading text-studio-text">Useful context</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-studio-muted">
                {projectEnquiry.usefulContext.map((item) => (
                  <li key={item} className="grid grid-cols-[1.25rem_1fr] gap-3">
                    <SiteIcon name="check" className="mt-1 size-4 text-studio-greenBright" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {directWhatsAppUrl ? (
                <ActionLink href={directWhatsAppUrl} variant="secondary" external>
                  Open WhatsApp directly
                  <SiteIcon name="message" className="size-4" />
                </ActionLink>
              ) : null}
              {contactConfig.hasConfiguredProfessionalEmail ? (
                <ActionLink href={`mailto:${contactConfig.email}`} variant="text" external>
                  Send an email instead
                </ActionLink>
              ) : null}
              <ActionLink href="/engagements" variant="text">
                Review engagement options
              </ActionLink>
            </div>
          </div>

          <form
            action="#contact"
            noValidate
            onSubmit={onSubmit}
            className="border-t border-studio-line pt-6 lg:border-t-0 lg:pt-0"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                error={errors.name}
                label={fieldLabels.name}
                name="name"
                onChange={(value) => updateField("name", value)}
                required
                value={form.name}
                autoComplete="name"
              />
              <TextField
                error={errors.preferredContact}
                helper="Used only to reply to this enquiry."
                label={fieldLabels.preferredContact}
                name="preferredContact"
                onChange={(value) => updateField("preferredContact", value)}
                required
                value={form.preferredContact}
                autoComplete="email tel"
              />
              <TextField
                error={errors.businessOrProduct}
                label={fieldLabels.businessOrProduct}
                name="businessOrProduct"
                onChange={(value) => updateField("businessOrProduct", value)}
                required
                value={form.businessOrProduct}
                autoComplete="organization"
              />
              <TextField
                error={errors.currentWebsite}
                label={fieldLabels.currentWebsite}
                name="currentWebsite"
                onChange={(value) => updateField("currentWebsite", value)}
                value={form.currentWebsite}
                autoComplete="url"
              />
              <TextareaField
                error={errors.projectContext}
                helper="Describe the current situation, who it affects and what is not working well enough."
                label={fieldLabels.projectContext}
                name="projectContext"
                onChange={(value) => updateField("projectContext", value)}
                required
                value={form.projectContext}
              />
              <SelectField
                error={errors.engagementType}
                label={fieldLabels.engagementType}
                name="engagementType"
                onChange={(value) => updateField("engagementType", value)}
                options={projectEnquiry.engagementOptions}
                required
                value={form.engagementType}
              />
              <SelectField
                error={errors.primaryObjective}
                label={fieldLabels.primaryObjective}
                name="primaryObjective"
                onChange={(value) => updateField("primaryObjective", value)}
                options={projectEnquiry.objectiveOptions}
                required
                value={form.primaryObjective}
              />
              <SelectField
                error={errors.launchTimeframe}
                label={fieldLabels.launchTimeframe}
                name="launchTimeframe"
                onChange={(value) => updateField("launchTimeframe", value)}
                options={projectEnquiry.startWindowOptions}
                required
                value={form.launchTimeframe}
              />
              <SelectField
                error={errors.indicativeBudget}
                label={fieldLabels.indicativeBudget}
                name="indicativeBudget"
                onChange={(value) => updateField("indicativeBudget", value)}
                options={projectEnquiry.budgetOptions}
                required
                value={form.indicativeBudget}
              />
              <TextareaField
                error={errors.projectMessage}
                helper="Add useful constraints, links or context that would help frame the first conversation."
                label={fieldLabels.projectMessage}
                name="projectMessage"
                onChange={(value) => updateField("projectMessage", value)}
                value={form.projectMessage}
              />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex min-h-[50px] flex-1 items-center justify-center gap-2 rounded-studioSm border border-studio-green bg-studio-green px-5 py-3 text-sm font-semibold leading-none text-studio-greenInk transition duration-200 hover:border-studio-greenBright hover:bg-studio-greenBright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright motion-safe:hover:-translate-y-0.5"
              >
                Send project brief through WhatsApp
                <SiteIcon name="message" className="size-4" />
              </button>
              <ActionLink href="#work" variant="secondary" size="lg" className="flex-1">
                Review selected work
              </ActionLink>
            </div>

            <p className="type-small mt-5 text-studio-muted">{projectEnquiry.privacyNote}</p>

            {status ? (
              <p className="mt-4 border border-studio-line bg-studio-surface px-4 py-3 text-sm leading-6 text-studio-text" role="status">
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}

type ControlProps = {
  label: string;
  name: FieldName;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helper?: string;
  required?: boolean;
  className?: string;
};

function describedBy(name: FieldName, helper?: string, error?: string) {
  return [helper ? `${name}-helper` : null, error ? `${name}-error` : null].filter(Boolean).join(" ") || undefined;
}

function TextField({
  label,
  name,
  value,
  onChange,
  error,
  helper,
  required,
  autoComplete,
  className,
}: ControlProps & {
  autoComplete?: string;
}) {
  return (
    <label className={className}>
      <span className="text-sm font-semibold text-studio-text">
        {label}
        {required ? <span className="text-studio-greenBright"> *</span> : null}
      </span>
      <input
        aria-describedby={describedBy(name, helper, error)}
        aria-invalid={Boolean(error)}
        aria-required={required}
        autoComplete={autoComplete}
        className="mt-2 h-12 w-full rounded-studioSm border border-studio-line bg-studio-surface px-4 text-sm text-studio-text placeholder:text-studio-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
        name={name}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        value={value}
      />
      <HelperText error={error} helper={helper} name={name} />
    </label>
  );
}

function TextareaField({ label, name, value, onChange, error, helper, required }: ControlProps) {
  return (
    <label className="sm:col-span-2">
      <span className="text-sm font-semibold text-studio-text">
        {label}
        {required ? <span className="text-studio-greenBright"> *</span> : null}
      </span>
      <textarea
        aria-describedby={describedBy(name, helper, error)}
        aria-invalid={Boolean(error)}
        aria-required={required}
        className="mt-2 min-h-32 w-full resize-y rounded-studioSm border border-studio-line bg-studio-surface px-4 py-3 text-sm leading-6 text-studio-text placeholder:text-studio-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
        name={name}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        value={value}
      />
      <HelperText error={error} helper={helper} name={name} />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required,
  className,
  placeholder = "Select one",
}: ControlProps & {
  options: readonly string[];
  placeholder?: string;
}) {
  return (
    <label className={className}>
      <span className="text-sm font-semibold text-studio-text">
        {label}
        {required ? <span className="text-studio-greenBright"> *</span> : null}
      </span>
      <select
        aria-describedby={describedBy(name, undefined, error)}
        aria-invalid={Boolean(error)}
        aria-required={required}
        className="mt-2 h-12 w-full rounded-studioSm border border-studio-line bg-studio-surface px-4 text-sm text-studio-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
        name={name}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        value={value}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <HelperText error={error} name={name} />
    </label>
  );
}

function HelperText({ name, helper, error }: { name: FieldName; helper?: string; error?: string }) {
  if (!helper && !error) {
    return null;
  }

  return (
    <span className="mt-2 block text-xs leading-5 text-studio-muted">
      {helper ? <span id={`${name}-helper`}>{helper}</span> : null}
      {error ? (
        <span className="block text-studio-danger" id={`${name}-error`}>
          {error}
        </span>
      ) : null}
    </span>
  );
}
