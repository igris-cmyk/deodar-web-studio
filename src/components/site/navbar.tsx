"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-deodar-line bg-deodar-ink/90 backdrop-blur-xl">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4" aria-label="Main navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex size-10 items-center justify-center rounded-md border border-deodar-gold/30 bg-deodar-surface text-sm font-semibold text-deodar-gold">
            D
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-deodar-cream sm:text-base">{siteConfig.name}</span>
            <span className="block text-[11px] text-deodar-muted sm:text-xs">{siteConfig.descriptor}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring inline-flex min-h-10 items-center rounded-md px-3 py-2 text-sm font-medium text-deodar-muted transition hover:text-deodar-cream"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="focus-ring rounded-full border border-deodar-gold/40 bg-deodar-gold px-5 py-2.5 text-sm font-semibold text-deodar-ink transition hover:bg-[#c89858]"
          >
            {siteConfig.ctas.nav}
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-deodar-line bg-deodar-surface text-deodar-cream lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-deodar-line bg-deodar-ink px-4 py-4 lg:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-deodar-muted transition hover:bg-deodar-surface hover:text-deodar-cream"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="focus-ring mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-deodar-gold px-5 py-3 text-sm font-semibold text-deodar-ink"
            onClick={() => setIsOpen(false)}
          >
            {siteConfig.ctas.nav}
          </a>
        </div>
      </div>
    </header>
  );
}
