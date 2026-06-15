import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "text" | "inverse";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
};

const sizeClass: Record<NonNullable<ActionLinkProps["size"]>, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-[50px] px-5 text-base",
};

const variantClass: Record<NonNullable<ActionLinkProps["variant"]>, string> = {
  primary:
    "border border-studio-green bg-studio-green text-studio-greenInk hover:border-studio-greenBright hover:bg-studio-greenBright",
  secondary:
    "border border-studio-line bg-transparent text-studio-text hover:border-studio-lineStrong hover:text-studio-text",
  text:
    "border border-transparent bg-transparent px-0 text-studio-text underline decoration-studio-green/45 underline-offset-4 hover:decoration-studio-greenBright",
  inverse:
    "border border-studio-paperLine bg-transparent text-studio-paperText hover:border-studio-paperText hover:bg-studio-paperSoft",
};

function isExternalHref(href: string) {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function ActionLink({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  external,
  className,
  ariaLabel,
  disabled,
}: ActionLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-studioSm font-semibold leading-none transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-studio-greenBright",
    variant !== "text" && "motion-safe:hover:-translate-y-0.5",
    sizeClass[size],
    variantClass[variant],
    disabled && !href && "cursor-not-allowed opacity-45 hover:translate-y-0",
    className,
  );

  if (href) {
    const shouldOpenExternally = external ?? isExternalHref(href);

    if (shouldOpenExternally) {
      return (
        <a aria-label={ariaLabel} className={classes} href={href} rel="noreferrer noopener" target="_blank">
          {children}
        </a>
      );
    }

    return (
      <Link aria-label={ariaLabel} className={classes} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} className={classes} disabled={disabled} onClick={onClick} type="button">
      {children}
    </button>
  );
}
