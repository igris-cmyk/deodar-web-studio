"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SiteIcon } from "./icon";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cedar-line bg-cedar-ink/90 backdrop-blur-xl">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4" aria-label="Main navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex size-10 items-center justify-center rounded-md border border-cedar-gold/30 bg-cedar-surface text-cedar-gold">
            <SiteIcon name="leaf" className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-cedar-cream sm:text-base">{siteConfig.name}</span>
            <span className="block text-[11px] text-cedar-muted sm:text-xs">{siteConfig.descriptor}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-cedar-muted transition hover:text-cedar-cream"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="focus-ring rounded-full border border-cedar-gold/40 bg-cedar-gold px-5 py-2.5 text-sm font-semibold text-cedar-ink transition hover:bg-[#c89858]"
          >
            {siteConfig.ctas.nav}
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center rounded-md border border-cedar-line bg-cedar-surface text-cedar-cream lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-cedar-line bg-cedar-ink px-4 py-4 lg:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-cedar-muted transition hover:bg-cedar-surface hover:text-cedar-cream"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="focus-ring mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-cedar-gold px-5 py-3 text-sm font-semibold text-cedar-ink"
            onClick={() => setIsOpen(false)}
          >
            {siteConfig.ctas.nav}
          </a>
        </div>
      </div>
    </header>
  );
}
