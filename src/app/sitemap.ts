import type { MetadataRoute } from "next";
import {
  deodarBrewEvidence,
  dueFlowEvidence,
  orbitCaseStudy,
} from "@/config/site";
import { absoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const workRoutes = [
    deodarBrewEvidence.slug,
    dueFlowEvidence.slug,
    orbitCaseStudy.slug,
  ];

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/engagements"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...workRoutes.map((slug) => ({
      url: absoluteUrl(`/work/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
