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
    `Phone / WhatsApp: ${values.phone || ""}`,
    `Service needed: ${values.serviceNeeded || ""}`,
    `Budget: ${values.budgetRange || ""}`,
    `Timeline: ${values.timeline || ""}`,
    `Message: ${values.message || ""}`,
  ].join("\n");
}
