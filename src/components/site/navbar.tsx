"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ActionLink } from "@/components/site/action-link";
import { Container } from "@/components/site/container";
import { studioNavigation } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const menuId = "site-navigation-menu";

  return (
    <header className="sticky top-0 z-50 border-b border-studio-line bg-studio-canvas/95">
      <Container as="div" size="wide">
        <nav className="flex min-h-[72px] items-center justify-between gap-5" aria-label="Main navigation">
          <a
            href="#home"
            className="group flex min-w-0 items-center gap-3 rounded-studioSm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-studioSm border border-studio-lineStrong text-sm font-semibold text-studio-greenBright transition group-hover:border-studio-greenBright">
            D
            </span>
            <span className="min-w-0 leading-none">
              <span className="block text-base font-semibold tracking-[-0.02em] text-studio-text">{studioNavigation.brand.name}</span>
              <span className="mt-1 block text-xs font-medium text-studio-muted">{studioNavigation.brand.descriptor}</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {studioNavigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-studioSm px-3 py-2 text-sm font-medium text-studio-muted transition hover:text-studio-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center lg:flex">
            <ActionLink href={studioNavigation.cta.href} size="sm" variant="secondary">
              {studioNavigation.cta.label}
            </ActionLink>
          </div>

          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-studioSm border border-studio-line bg-studio-surface text-studio-text transition hover:border-studio-lineStrong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright lg:hidden"
            aria-controls={menuId}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </Container>

      <div
        id={menuId}
        className={cn(
          "border-t border-studio-line bg-studio-canvas lg:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <Container size="wide" className="grid gap-2 py-4">
          {studioNavigation.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-studioSm border-b border-studio-line px-1 py-4 text-base font-medium text-studio-text transition hover:text-studio-greenBright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <ActionLink
            href={studioNavigation.cta.href}
            className="mt-3 w-fit"
            onClick={() => setIsOpen(false)}
            size="md"
            variant="primary"
          >
            {studioNavigation.cta.label}
          </ActionLink>
        </Container>
      </div>
    </header>
  );
}
