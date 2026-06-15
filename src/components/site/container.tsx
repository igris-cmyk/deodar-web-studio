import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: "reading" | "content" | "wide" | "full";
  as?: "div" | "section" | "main";
};

const sizeClass: Record<NonNullable<ContainerProps["size"]>, string> = {
  reading: "max-w-[var(--studio-reading-max)]",
  content: "max-w-[var(--studio-content-max)]",
  wide: "max-w-[var(--studio-wide-max)]",
  full: "max-w-none",
};

export function Container({ children, className, id, size = "content", as = "div" }: ContainerProps) {
  const Component = as;

  return (
    <Component className={cn("w-full px-[var(--studio-gutter)]", size !== "full" && "mx-auto", sizeClass[size], className)} id={id}>
      {children}
    </Component>
  );
}
