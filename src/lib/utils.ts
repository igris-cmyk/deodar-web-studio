import { contactConfig } from "@/config/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isConfiguredWhatsAppNumber(number = contactConfig.whatsAppNumber) {
  const normalized = number.replace(/[^\d+]/g, "");
  return normalized.length >= 10 && !number.includes("WHATSAPP_NUMBER_HERE");
}

export function createWhatsAppQuoteUrl(message: string) {
  if (!isConfiguredWhatsAppNumber()) {
    return null;
  }

  const number = contactConfig.whatsAppNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteMessage(values: {
  name?: string;
  businessName?: string;
  businessType?: string;
  phone?: string;
  serviceNeeded?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
}) {
  return [
    "Hi Deodar Web Studio, I want to discuss a website for my business.",
    "",
    `Name: ${values.name || ""}`,
    `Business: ${values.businessName || ""}`,
    `Business type: ${values.businessType || ""}`,
    `Package / service: ${values.serviceNeeded || ""}`,
    `Budget: ${values.budgetRange || ""}`,
    `Timeline: ${values.timeline || ""}`,
    `WhatsApp number: ${values.phone || ""}`,
    `Message: ${values.message || ""}`,
  ].join("\n");
}

export type ProjectEnquiryMessageValues = {
  name?: string;
  preferredContact?: string;
  businessOrProduct?: string;
  projectContext?: string;
  firstRelease?: string;
  currentStage?: string;
  indicativeBudget?: string;
  preferredStartWindow?: string;
};

function provided(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : "Not provided";
}

export function buildProjectEnquiryMessage(values: ProjectEnquiryMessageValues) {
  return [
    "New Deodar project enquiry",
    "",
    `Name: ${provided(values.name)}`,
    `Preferred contact: ${provided(values.preferredContact)}`,
    `Business / organisation / product: ${provided(values.businessOrProduct)}`,
    "",
    "Project context:",
    provided(values.projectContext),
    "",
    "First-release outcome:",
    provided(values.firstRelease),
    "",
    `Current stage: ${provided(values.currentStage)}`,
    `Indicative budget: ${provided(values.indicativeBudget)}`,
    `Preferred start window: ${provided(values.preferredStartWindow)}`,
  ].join("\n");
}
