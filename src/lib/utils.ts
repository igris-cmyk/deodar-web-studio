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
  businessType?: string;
  budgetRange?: string;
  message?: string;
}) {
  return [
    "Hi Cedar Web Studio, I want to discuss a website, digital menu, or online store for my business.",
    "",
    `Name: ${values.name || ""}`,
    `Business Type: ${values.businessType || ""}`,
    `Budget Range: ${values.budgetRange || ""}`,
    `Message: ${values.message || ""}`,
  ].join("\n");
}
