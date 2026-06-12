import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  Clock3,
  Coffee,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  LayoutTemplate,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/config/site";

const icons: Record<IconKey, LucideIcon> = {
  arrow: ArrowRight,
  badge: BadgeCheck,
  briefcase: BriefcaseBusiness,
  building: Building2,
  cart: ShoppingCart,
  check: Check,
  clock: Clock3,
  coffee: Coffee,
  external: ExternalLink,
  file: FileText,
  github: Github,
  globe: Globe2,
  layout: LayoutTemplate,
  map: MapPin,
  menu: Menu,
  message: MessageCircle,
  phone: Phone,
  refresh: RefreshCw,
  shield: ShieldCheck,
  shopping: ShoppingBag,
  spark: Sparkles,
  store: Store,
  users: Users,
  workflow: Workflow,
};

type SiteIconProps = {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
};

export function SiteIcon({ name, className, strokeWidth = 1.8 }: SiteIconProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
