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

export type ProjectEnquiryMessageValues = {
  name?: string;
  preferredContact?: string;
  businessOrProduct?: string;
  currentWebsite?: string;
  projectContext?: string;
  engagementType?: string;
  primaryObjective?: string;
  launchTimeframe?: string;
  indicativeBudget?: string;
  projectMessage?: string;
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
    `Business / organisation: ${provided(values.businessOrProduct)}`,
    `Current website: ${provided(values.currentWebsite)}`,
    "",
    `Engagement type: ${provided(values.engagementType)}`,
    `Primary objective: ${provided(values.primaryObjective)}`,
    `Desired launch timeframe: ${provided(values.launchTimeframe)}`,
    `Approximate investment: ${provided(values.indicativeBudget)}`,
    "",
    "What needs to be built or improved:",
    provided(values.projectContext),
    "",
    "Additional project context:",
    provided(values.projectMessage),
  ].join("\n");
}
