import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deodar Web Studio | Clean Websites for Local Businesses",
  description:
    "Deodar Web Studio builds clean, conversion-ready websites for local businesses that need trust and WhatsApp enquiries.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Deodar Web Studio | Clean Websites for Local Businesses",
    description:
      "Clean, conversion-ready websites for cafes, clinics, shops, gyms, coaches, and service businesses.",
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-deodar-ink font-sans text-deodar-cream antialiased`}>
        {children}
      </body>
    </html>
  );
}
