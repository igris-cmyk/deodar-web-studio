import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { contactConfig } from "@/config/site";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

const siteDescription =
  "Founder-led product direction, interface systems and full-stack engineering for focused digital products and business systems.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Deodar Web Studio — Product Direction and Full-Stack Engineering",
    template: "%s | Deodar Web Studio",
  },
  description: siteDescription,
  applicationName: contactConfig.studioName,
  authors: [{ name: contactConfig.founderName }],
  creator: contactConfig.founderName,
  publisher: contactConfig.studioName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Deodar Web Studio — Product Direction and Full-Stack Engineering",
    description: siteDescription,
    url: "/",
    siteName: contactConfig.studioName,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Deodar Web Studio founder-led product direction, interface systems and full-stack engineering.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deodar Web Studio — Product Direction and Full-Stack Engineering",
    description: siteDescription,
    images: [absoluteUrl("/opengraph-image")],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A0D0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${newsreader.variable} bg-deodar-ink font-sans text-deodar-cream antialiased`}>
        {children}
      </body>
    </html>
  );
}
