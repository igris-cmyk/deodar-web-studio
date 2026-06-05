import { siteConfig } from "@/config/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isConfiguredWhatsAppNumber(number = siteConfig.whatsAppNumber) {
  const normalized = number.replace(/[^\d+]/g, "");
  return normalized.length >= 10 && !number.includes("WHATSAPP_NUMBER_HERE");
}

export function createWhatsAppQuoteUrl(message: string) {
  if (!isConfiguredWhatsAppNumber()) {
    return null;
  }

  const number = siteConfig.whatsAppNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteMessage(values: {
  businessName?: string;
  businessType?: string;
  websiteNeeded?: string;
  budgetRange?: string;
  message?: string;
}) {
  return [
    "Hi Cedar Web Studio, I want to discuss a website for my business.",
    "",
    `Business Name: ${values.businessName || ""}`,
    `Business Type: ${values.businessType || ""}`,
    `Website Needed: ${values.websiteNeeded || ""}`,
    `Budget Range: ${values.budgetRange || ""}`,
    `Message: ${values.message || ""}`,
  ].join("\n");
}
