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
  title: "Cedar Web Studio | Websites, Digital Menus & Online Stores",
  description:
    "Cedar Web Studio builds clean, mobile-friendly websites, digital menus, product showcases, and online stores for local businesses.",
  openGraph: {
    title: "Cedar Web Studio | Websites, Digital Menus & Online Stores",
    description:
      "Cedar Web Studio builds clean, mobile-friendly websites, digital menus, product showcases, and online stores for local businesses.",
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
      <body className={`${inter.variable} bg-cedar-ink font-sans text-cedar-cream antialiased`}>
        {children}
      </body>
    </html>
  );
}
