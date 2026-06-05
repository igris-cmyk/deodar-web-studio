import { trustPoints } from "@/config/site";
import { SiteIcon } from "./icon";

export function TrustBar() {
  return (
    <section aria-label="Core service strengths" className="border-b border-cedar-line bg-cedar-surface/30">
      <div className="section-shell grid grid-cols-2 gap-px py-4 sm:grid-cols-3 lg:grid-cols-6">
        {trustPoints.map((item) => (
          <div
            key={item.label}
            className="flex min-h-20 items-center gap-3 rounded-md border border-cedar-line bg-cedar-ink/40 px-3 py-4"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-cedar-forest/40 text-cedar-gold">
              <SiteIcon name={item.icon} className="size-4" />
            </span>
            <p className="text-sm font-medium leading-5 text-cedar-cream">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
