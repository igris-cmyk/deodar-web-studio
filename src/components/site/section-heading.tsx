import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: ReactNode;
  title: ReactNode;
  copy?: ReactNode;
  align?: "left" | "center";
  variant?: "legacy" | "editorial" | "compact";
  eyebrow?: ReactNode;
  description?: ReactNode;
  index?: string;
  className?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  label,
  title,
  copy,
  align = "left",
  variant = "legacy",
  eyebrow,
  description,
  index,
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  const eyebrowContent = eyebrow ?? label;
  const descriptionContent = description ?? copy;

  if (variant === "legacy") {
    return (
      <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
        {eyebrowContent ? <p className="section-label">{eyebrowContent}</p> : null}
        <h2 className="section-title">{title}</h2>
        {descriptionContent ? <p className={cn("section-copy", descriptionClassName)}>{descriptionContent}</p> : null}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
        <div className={cn("flex gap-4", align === "center" ? "justify-center" : "justify-start")}>
          {index ? <span className="type-label mt-1 text-studio-faint">{index}</span> : null}
          <div>
            {eyebrowContent ? <p className="type-label text-studio-greenBright">{eyebrowContent}</p> : null}
            <h2 className="type-subheading mt-3 text-studio-text">{title}</h2>
          </div>
        </div>
        {descriptionContent ? (
          <p className={cn("type-small mt-4 max-w-[var(--studio-reading-max)] text-studio-muted", align === "center" && "mx-auto", descriptionClassName)}>
            {descriptionContent}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn(align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-5xl", className)}>
      <div className={cn("flex gap-5", align === "center" ? "justify-center" : "justify-start")}>
        {index ? <span className="type-label mt-2 text-studio-faint">{index}</span> : null}
        <div className="min-w-0">
          {eyebrowContent ? <p className="type-label text-studio-greenBright">{eyebrowContent}</p> : null}
          <h2 className="type-section mt-5 text-studio-text">{title}</h2>
        </div>
      </div>
      {descriptionContent ? (
        <p className={cn("type-body-lg mt-6 max-w-[var(--studio-reading-max)] text-studio-textSoft", align === "center" && "mx-auto", descriptionClassName)}>
          {descriptionContent}
        </p>
      ) : null}
    </div>
  );
}
