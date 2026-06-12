export type IconKey =
  | "arrow"
  | "badge"
  | "briefcase"
  | "building"
  | "cart"
  | "check"
  | "clock"
  | "coffee"
  | "external"
  | "file"
  | "github"
  | "globe"
  | "layout"
  | "map"
  | "menu"
  | "message"
  | "phone"
  | "refresh"
  | "shield"
  | "shopping"
  | "spark"
  | "store"
  | "users"
  | "workflow";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  for: string;
  description: string;
  includes: string[];
  outcome: string;
  icon: IconKey;
};

export type PackageTier = {
  title: string;
  summary: string;
  startingPrice: string;
  bestFor: string;
  useCase: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  details: string;
  screenshot?: string;
  liveUrl?: string;
  repoUrl?: string;
  tech?: string[];
  priority?: "primary" | "secondary";
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type WhyPoint = {
  title: string;
  description: string;
  icon: IconKey;
};

const configuredEmail = process.env.NEXT_PUBLIC_DEODAR_EMAIL?.trim();

export const contactConfig = {
  studioName: "Deodar Web Studio",
  founderName: "Sahil Khursheed",
  locationLine: "Based in India. Building clean websites for local businesses.",
  // Replace with a working professional email before using email for public outreach.
  email: configuredEmail || "prammer711@gmail.com",
  hasConfiguredProfessionalEmail: Boolean(configuredEmail),
  recommendedEmail: "hello@deodarwebstudio.com",
  whatsAppNumber: "919541206212",
  githubUrl: "https://github.com/igris-cmyk",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/igris-cmyk" },
  ],
  serviceCategories: [
    "Business Websites",
    "Cafe & Menu Websites",
    "Product / Service Showcase Websites",
  ],
  budgetRanges: [
    "Starter one-page presence from ₹3,500",
    "₹5,000 - ₹15,000",
    "₹15,000 - ₹30,000",
    "₹30,000+",
    "Need guidance",
  ],
};

export const siteConfig = {
  name: contactConfig.studioName,
  descriptor: "Clean Websites • Local Business • WhatsApp Enquiries",
  tagline: "Clean websites for businesses that want to be trusted.",
  heroHeadline: "Your business deserves a website that looks as serious as the work you do.",
  description:
    "Deodar Web Studio builds clean, mobile-friendly websites for cafes, clinics, shops, gyms, coaches, and service businesses - designed to build trust and turn visitors into real enquiries.",
  promise:
    "We help your business look clear, professional, and easy to contact online.",
  founder: contactConfig.founderName,
  serviceArea: contactConfig.locationLine,
  ctas: {
    primary: "Start a website enquiry",
    nav: "Start enquiry",
    secondary: "View selected builds",
    tertiary: "See selected builds",
    whatsapp: "Send enquiry on WhatsApp",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Who", href: "#who" },
    { label: "Services", href: "#services" },
    { label: "Builds", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socialLinks: contactConfig.socialLinks,
};

export const heroTrustPoints = [
  "WhatsApp-first enquiry flow",
  "Built for local businesses",
  "Direct communication with Sahil",
  "Clean mobile-first structure",
];

export const trustPoints = [
  { label: "Clear services", icon: "file" },
  { label: "WhatsApp CTA", icon: "message" },
  { label: "Mobile responsive", icon: "phone" },
  { label: "Location & timings", icon: "map" },
  { label: "Basic SEO-ready structure", icon: "globe" },
  { label: "Domain guidance", icon: "shield" },
] as const;

export const businessTypes = [
  "Cafes",
  "Restaurants",
  "Clinics",
  "Gyms",
  "Salons",
  "Shops",
  "Coaches",
  "Service Providers",
];

export const services: Service[] = [
  {
    title: "Business Websites",
    for: "For clinics, gyms, salons, shops, coaches, consultants, and service providers.",
    description:
      "A clean website where customers can understand your services, see your location and timings, view photos, and contact you directly.",
    icon: "building",
    includes: [
      "Service sections and business details",
      "Photos, timings, location, and map",
      "Contact form and WhatsApp CTA",
      "Mobile responsive layout",
    ],
    outcome:
      "Customers get the information they need before messaging, calling, or visiting.",
  },
  {
    title: "Cafe & Menu Websites",
    for: "For cafes, restaurants, bakeries, cloud kitchens, and food businesses.",
    description:
      "Digital menu, food categories, item pricing, photos, opening hours, location, and WhatsApp ordering or enquiry flow.",
    icon: "coffee",
    includes: [
      "Menu categories and item pricing",
      "Food photos and opening hours",
      "Location and ordering information",
      "WhatsApp order or enquiry flow",
    ],
    outcome:
      "Customers can check the menu and start an order without asking for basic details again.",
  },
  {
    title: "Product / Service Showcase Websites",
    for: "For small sellers and businesses that need to display products, services, prices, photos, and enquiry options.",
    description:
      "A simple mobile-first showcase that makes your offer easy to browse and easy to enquire about.",
    icon: "store",
    includes: [
      "Product or service cards",
      "Prices, photos, and key details",
      "WhatsApp enquiry buttons",
      "Basic SEO-ready structure",
    ],
    outcome:
      "Customers can browse first, then message with clearer intent.",
  },
];

export const whyItMatters: WhyPoint[] = [
  {
    title: "Customers check first",
    description:
      "People often look online before they call, visit, book, or place an order. Unclear information creates doubt before the first conversation.",
    icon: "users",
  },
  {
    title: "Instagram alone is not enough",
    description:
      "Posts move, highlights get messy, and important details are easy to miss. A website gives your business one reliable public front.",
    icon: "layout",
  },
  {
    title: "WhatsApp works better with context",
    description:
      "When services, menu, prices, timings, and location are clear, enquiries are easier to answer and less repetitive.",
    icon: "message",
  },
];

export const packages: PackageTier[] = [
  {
    title: "Starter One-Page Presence",
    summary: "A focused one-page website for selected early clients.",
    startingPrice: "From ₹3,500",
    bestFor: "For small businesses that need a serious first website without heavy features.",
    useCase:
      "Best when you need 5-6 clear sections, mobile responsiveness, WhatsApp CTA, basic location/contact details, and deployment on free hosting.",
    cta: "Discuss starter scope",
    includes: [
      "One-page website",
      "5-6 sections",
      "Mobile responsive design",
      "WhatsApp CTA",
      "Basic contact and location details",
      "1 revision round",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Orbit",
    category: "Operations dashboard concept",
    description:
      "An operations dashboard concept for service businesses, covering leads, bookings, forms, inventory, staff, alerts, activity, and business health.",
    details:
      "Useful for showing structured business workflows, dashboard clarity, and interface systems.",
    screenshot: "/screenshots/orbit.png",
    liveUrl: "https://orbit-sage-eta.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/orbit",
    tech: ["Service operations", "Dashboard UI", "Workflow design"],
    priority: "primary",
  },
  {
    name: "DueFlow",
    category: "Workflow web app",
    description:
      "A clean productivity and workflow web app for organizing work, follow-ups, and day-to-day business tasks.",
    details:
      "Shows calm product positioning, readable interface design, and practical workflow structure.",
    screenshot: "/screenshots/dueflow.png",
    liveUrl: "https://due-flow-peach.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/DueFlow",
    tech: ["Workflow UX", "Product structure", "Responsive interface"],
  },
  {
    name: "RepForge",
    category: "Fitness interface",
    description:
      "A fitness tracking interface for a gym or workout use case, with structured layouts and responsive app-like screens.",
    details:
      "Relevant for gyms and coaches who need a focused, mobile-friendly digital product or program interface.",
    screenshot: "/screenshots/repforge.png",
    liveUrl: "https://repforge1.vercel.app/",
    tech: ["Fitness use case", "Responsive UI", "Interaction design"],
  },
  {
    name: "TradeMind",
    category: "Full-stack product demo",
    description:
      "A SaaS-style trading journal demonstrating authentication, database-backed workflows, dashboards, and production deployment.",
    details:
      "Included carefully as a technical range demo, not as a local business case study.",
    screenshot: "/screenshots/trademind.png",
    liveUrl: "https://trade-mind-alpha.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/TradeMind",
    tech: ["Authentication", "Database workflows", "Dashboards"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Share your business details",
    description:
      "Tell us what you do, who you serve, what information customers ask for, and what you want the website to achieve.",
  },
  {
    title: "Confirm scope and timeline",
    description:
      "We agree on pages, sections, content needed, budget range, timeline, and what is not included.",
  },
  {
    title: "Design and build",
    description:
      "The site is structured for clarity first, then designed and built as a clean mobile-friendly web presence.",
  },
  {
    title: "Review and revise",
    description:
      "You review the website, share corrections, and we handle the agreed revision round before launch.",
  },
  {
    title: "Deploy and hand over",
    description:
      "We help with deployment, explain the setup, and hand over the live website and important account details.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Do I need a domain?",
    answer:
      "A domain is recommended if you want a professional website address. We can guide you, but the domain should stay under your ownership.",
  },
  {
    question: "Is hosting monthly?",
    answer:
      "Hosting can be free for simple static websites, or paid if the project needs more features. Domain and paid hosting costs are separate unless included in your quote.",
  },
  {
    question: "Can you connect WhatsApp?",
    answer:
      "Yes. WhatsApp buttons and pre-filled enquiry messages can be added so customers can contact you directly from the website.",
  },
  {
    question: "Can I update my menu or services later?",
    answer:
      "Yes. Simple updates can be handled after launch. If you need to update content yourself often, we can discuss an admin/dashboard scope separately.",
  },
  {
    question: "How long does a starter website take?",
    answer:
      "A starter one-page website can usually take 3-4 days after the required content is received. Timeline is confirmed after scope and content are clear.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Business name, services or menu details, photos if available, location, timings, contact number, logo if you have one, and any examples you like.",
  },
  {
    question: "Is SEO included?",
    answer:
      "Basic SEO-ready structure can be included, such as readable headings, page title, meta description, and clean structure. Google rankings are not guaranteed.",
  },
  {
    question: "Can you redesign my old website?",
    answer:
      "Yes. We can simplify the structure, improve mobile layout, clarify services, and make the contact flow easier.",
  },
  {
    question: "Is domain or hosting included?",
    answer:
      "Not by default. Domain, paid hosting, payment gateways, and third-party costs are separate unless your quote specifically includes them.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Maintenance can be discussed after launch. It is not automatically included unless agreed in the project scope.",
  },
];

export const serviceOptions = [
  "Business Website",
  "Cafe & Menu Website",
  "Product / Service Showcase",
  "Website Redesign",
  "Not sure yet",
];

export const budgetOptions = contactConfig.budgetRanges;

export const timelineOptions = [
  "3-4 days after content is ready",
  "Within 1 week",
  "Within 2-3 weeks",
  "Flexible / not sure yet",
];
