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
  | "leaf"
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
  features: string[];
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

const configuredEmail = process.env.NEXT_PUBLIC_CEDAR_EMAIL?.trim();

export const contactConfig = {
  studioName: "Cedar Web Studio",
  founderName: "Sahil Khursheed",
  locationLine: "Based in India. Building websites for local businesses across the country.",
  // Replace with a working professional email before public outreach.
  email: configuredEmail || "prammer711@gmail.com",
  hasConfiguredProfessionalEmail: Boolean(configuredEmail),
  recommendedEmail: "hello@cedarwebstudio.com",
  whatsAppNumber: "919541206212",
  githubUrl: "https://github.com/igris-cmyk",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/igris-cmyk" },
  ],
  serviceCategories: ["Websites", "Digital menus", "Online stores"],
  budgetRanges: ["₹5,000 – ₹15,000", "₹15,000 – ₹30,000", "₹30,000+"],
};

export const siteConfig = {
  name: contactConfig.studioName,
  descriptor: "Websites • Digital Menus • Online Stores",
  tagline: "Websites, digital menus, and online stores for local businesses.",
  heroHeadline: "Websites, digital menus, and online stores for local businesses.",
  description:
    "Cedar Web Studio helps cafes, salons, gyms, Instagram sellers, and home businesses look professional online, explain their offer clearly, and turn interested visitors into WhatsApp enquiries or orders.",
  promise:
    "A clean site gives people confidence before they message you. Your Instagram may get attention; your website helps turn that attention into enquiries.",
  founder: contactConfig.founderName,
  githubUrl: contactConfig.githubUrl,
  whatsAppNumber: contactConfig.whatsAppNumber,
  email: contactConfig.email,
  serviceArea: contactConfig.locationLine,
  ctas: {
    primary: "Get a quote on WhatsApp",
    nav: "Get quote",
    secondary: "View selected builds",
    tertiary: "See Our Work",
    whatsapp: "Send enquiry on WhatsApp",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socialLinks: contactConfig.socialLinks,
};

export const trustPoints = [
  { label: "Mobile-Friendly", icon: "phone" },
  { label: "WhatsApp Ordering", icon: "message" },
  { label: "Digital Menus", icon: "menu" },
  { label: "Product Showcases", icon: "shopping" },
  { label: "Domain & Hosting Guidance", icon: "globe" },
  { label: "Clean UI", icon: "layout" },
] as const;

export const heroTrustPoints = [
  "Direct founder communication",
  "WhatsApp-first enquiries",
  "Domain guidance",
  "Clear starting prices",
];

export const services: Service[] = [
  {
    title: "Business Websites",
    for: "For salons, gyms, clinics, cafes, service providers, and local businesses.",
    description:
      "When a customer checks you after closing time, your website should still explain your services, location, timings, and how to enquire.",
    icon: "building",
    features: [
      "Home, about, and services sections",
      "Gallery and business details",
      "Contact section with WhatsApp button",
      "Google Maps and mobile responsive layout",
    ],
  },
  {
    title: "Cafe & Restaurant Menus",
    for: "For cafes, restaurants, food businesses, and cloud kitchens.",
    description:
      "Digital menus that make categories, prices, timings, location, and WhatsApp ordering easy to find from a QR code or Instagram bio.",
    icon: "coffee",
    features: [
      "Digital menu with categories",
      "Prices, opening hours, and location",
      "WhatsApp order button",
      "QR menu upgrade option",
    ],
  },
  {
    title: "E-commerce & Product Websites",
    for: "For boutiques, shops, product sellers, and Instagram sellers.",
    description:
      "Product-led websites that help customers browse properly before they message, order, or check out.",
    icon: "cart",
    features: [
      "Product catalog and detail pages",
      "Cart or checkout when needed",
      "WhatsApp order flow",
      "Admin dashboard as an optional upgrade",
    ],
  },
  {
    title: "Website Redesigns",
    for: "For businesses with outdated websites.",
    description:
      "A cleaner structure, stronger mobile experience, and better enquiry flow for websites that feel old or confusing.",
    icon: "refresh",
    features: [
      "Better mobile layout",
      "Cleaner design and content structure",
      "Improved contact or order flow",
      "Performance cleanup where practical",
    ],
  },
];

export const businessTypes = [
  "Cafes & restaurants",
  "Clothing stores",
  "Boutiques",
  "Salons",
  "Gyms",
  "Clinics",
  "Local shops",
  "Instagram sellers",
  "Home businesses",
  "Service providers",
];

export const packages: PackageTier[] = [
  {
    title: "Starter Website",
    summary: "A focused one-page site for getting the essentials online.",
    startingPrice: "From ₹5,000",
    bestFor: "For new cafes, salons, home businesses, and service providers.",
    useCase: "Best when you need a clean link for Instagram bio, Google profile, or WhatsApp sharing.",
    cta: "Request Starter Quote",
    includes: [
      "One-page website",
      "Business details",
      "Services, menu, or products",
      "WhatsApp button",
      "Location",
      "Mobile-friendly layout",
    ],
  },
  {
    title: "Business Website",
    summary: "A stronger website for businesses with more to explain.",
    startingPrice: "From ₹15,000",
    bestFor: "For businesses with services, galleries, menus, locations, and trust details.",
    useCase: "Best when customers need to understand your offer before they contact you.",
    cta: "Request Business Quote",
    featured: true,
    includes: [
      "Multi-section or multi-page layout",
      "Service or product presentation",
      "Gallery",
      "Contact form",
      "Google Maps",
      "SEO basics",
    ],
  },
  {
    title: "Online Store",
    summary: "A product or ordering flow for sellers who need more than DMs.",
    startingPrice: "From ₹30,000",
    bestFor: "For Instagram sellers, boutiques, cafes, and product-led businesses.",
    useCase: "Best when customers need to browse items, categories, or menu options before ordering.",
    cta: "Request Store Quote",
    includes: [
      "Menu or product listing",
      "Categories",
      "Cart or checkout if needed",
      "WhatsApp order flow",
      "Admin dashboard if needed",
      "Order management if needed",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Orbit",
    category: "Operations Platform",
    description:
      "A unified operations platform for service businesses, covering leads, bookings, forms, inventory, staff, alerts, activity, automations, and business health.",
    details:
      "The build shows how Cedar can organize complex business workflows into a polished, usable interface.",
    screenshot: "/screenshots/orbit.png",
    liveUrl: "https://orbit-sage-eta.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/orbit",
    tech: ["Dashboards", "Workflows", "Admin UI"],
    priority: "primary",
  },
  {
    name: "TradeMind",
    category: "Journal Platform",
    description:
      "A trading journal platform with authentication, onboarding, database-backed workflows, trade tracking, and production deployment.",
    details:
      "The build combines onboarding, dashboard screens, and structured data flows in a production-deployed app.",
    screenshot: "/screenshots/trademind.png",
    liveUrl: "https://trade-mind-alpha.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/TradeMind",
    tech: ["User flows", "Data workflows", "Dashboards"],
  },
  {
    name: "DueFlow",
    category: "Workflow Application",
    description:
      "A focused productivity web app for organizing work, money follow-ups, and day-to-day business tasks in a cleaner interface.",
    details: "The build shows product positioning, calm interface design, and a practical workflow dashboard.",
    screenshot: "/screenshots/dueflow.png",
    liveUrl: "https://due-flow-peach.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/DueFlow",
    tech: ["Product structure", "UX flows"],
  },
  {
    name: "RepForge",
    category: "Fitness Tracking App",
    description:
      "A clean fitness tracking web app with structured layouts, interactive flows, and responsive design.",
    details:
      "The build shows responsive UI craft, interaction design, and a focused app-like experience.",
    screenshot: "/screenshots/repforge.png",
    liveUrl: "https://repforge1.vercel.app/",
    tech: ["Responsive UI", "Interactive flows"],
  },
  {
    name: "F.R.I.D.A.Y.",
    category: "Engineering Exploration",
    description:
      "A local-first desktop AI assistant experiment exploring command routing, memory, and OS-level workflows.",
    details:
      "There is no public screenshot here, so it is presented as a technical capability note rather than an invented app preview.",
    repoUrl: "https://github.com/igris-cmyk/F.R.I.D.A.Y",
    tech: ["Architecture", "Tool workflows"],
    priority: "secondary",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Requirement Discussion",
    description:
      "We understand your business, website goal, content, products, budget, and timeline.",
  },
  {
    title: "Scope & Quote",
    description:
      "We define what will be built, what is included, timeline, and cost.",
  },
  {
    title: "Design Preview",
    description:
      "You see a homepage direction, layout structure, color and typography direction, and key sections before the full build moves ahead.",
  },
  {
    title: "Development & Testing",
    description:
      "We build the website, make it mobile-friendly, test links, forms, menus, order flows, and deployment setup.",
  },
  {
    title: "Launch & Handover",
    description:
      "We connect the domain or hosting, launch the site, and guide you through the final handover.",
  },
];

export const whyChoose = [
  {
    title: "Clear scope before starting",
    description:
      "Pages, features, budget, content needs, and launch support are agreed before the build starts.",
    icon: "file",
  },
  {
    title: "Mobile-first design",
    description:
      "Most customers browse from phones, so the website is designed to look good on mobile first.",
    icon: "phone",
  },
  {
    title: "Practical business features",
    description:
      "WhatsApp buttons, digital menus, product listings, contact forms, maps, and ordering flows.",
    icon: "check",
  },
  {
    title: "Domain & hosting guidance",
    description:
      "We help clients understand domain, hosting, and launch setup without unnecessary confusion.",
    icon: "globe",
  },
  {
    title: "Built for what comes first",
    description:
      "Small businesses often need a clear first launch. Bigger features can be added later when they are actually useful.",
    icon: "shield",
  },
] as const;

export const faqs: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Starter websites begin from ₹5,000, business websites from ₹15,000, and online stores from ₹30,000. Final pricing depends on pages, content readiness, products or menu items, admin needs, and launch support.",
  },
  {
    question: "Do I need domain and hosting?",
    answer:
      "Yes. Domain and hosting are separate running costs. Cedar can guide the setup and handover so the domain stays under your ownership.",
  },
  {
    question: "Can customers order through WhatsApp?",
    answer:
      "Yes. Most local businesses prefer a WhatsApp-first flow, so we can add simple enquiry buttons or a more structured order message depending on the package.",
  },
  {
    question: "Can I update my menu or products myself?",
    answer:
      "Yes, if the project includes an admin dashboard. For starter websites, updates can be handled manually after launch or discussed as maintenance.",
  },
  {
    question: "Do you build cafe menu websites?",
    answer:
      "Yes. We build digital menu websites for cafes and restaurants with menu categories, prices, contact details, location, opening hours, and WhatsApp ordering.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We build product showcase websites, WhatsApp-first ordering websites, and full e-commerce systems depending on the business requirement.",
  },
  {
    question: "Do you provide online payment integration?",
    answer:
      "Payment gateway integration can be added if required. Gateway setup, verification, transaction charges, and third-party costs are separate.",
  },
  {
    question: "How long does it take?",
    answer:
      "Simple websites can move quickly when content is ready. Larger websites with cart, admin panel, or ordering systems take longer. Timeline is confirmed after scope and content are clear.",
  },
];

export const websiteOptions = [
  "Business Website",
  "Cafe/Menu Website",
  "Product Showcase",
  "E-commerce Website",
  "Website Redesign",
  "Landing Page",
  "Not sure yet",
];

export const budgetOptions = [
  ...contactConfig.budgetRanges,
  "Need guidance",
];
