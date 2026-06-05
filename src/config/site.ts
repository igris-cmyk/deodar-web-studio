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
  includes: string[];
  cta: string;
  featured?: boolean;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  proof: string;
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

export const siteConfig = {
  name: "Cedar Web Studio",
  descriptor: "Websites • Digital Menus • Online Stores",
  tagline: "Professional websites for modern local businesses.",
  heroHeadline: "Websites that help local businesses look professional and get orders online.",
  description:
    "Cedar Web Studio builds clean, mobile-friendly websites, digital menus, and online stores for cafes, shops, service providers, and growing local brands.",
  promise:
    "We build clean, mobile-friendly websites that help businesses present their services, display menus or products, and make it easy for customers to contact or order through WhatsApp.",
  founder: "Sahil Khursheed",
  githubUrl: "https://github.com/igris-cmyk",
  whatsAppNumber: "919541206212",
  email: "prammer711@gmail.com",
  serviceArea: "India-based web studio serving clients remotely worldwide",
  heroImage: "/cedar-studio-workspace.png",
  ctas: {
    primary: "Get a Free Quote",
    nav: "Get Quote",
    secondary: "View Services",
    tertiary: "See Our Work",
    whatsapp: "Request Quote on WhatsApp",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/igris-cmyk" },
  ],
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
  "Mobile-first design",
  "WhatsApp ordering",
  "Domain guidance",
  "Clean business websites",
  "Practical launch support",
];

export const services: Service[] = [
  {
    title: "Business Websites",
    for: "For salons, gyms, clinics, cafes, service providers, and local businesses.",
    description:
      "Clean websites that explain what you offer, where you are, and how customers can contact you.",
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
      "Digital menus that make prices, categories, timings, location, and ordering easy to find.",
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
      "Product-led websites that help customers browse items and place orders through the right flow.",
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
      "A cleaner structure, stronger mobile experience, and better contact flow for existing websites.",
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
    summary: "For small businesses starting online.",
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
    summary: "For a stronger online presence.",
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
    title: "Online Store / Ordering Website",
    summary: "For cafes, shops, and product sellers.",
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
    proof:
      "Shows dashboard design, business workflows, admin interfaces, and full-stack product thinking.",
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
    proof:
      "Shows secure user flows, data management, dashboards, and production-ready application structure.",
    screenshot: "/screenshots/trademind.png",
    liveUrl: "https://trade-mind-alpha.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/TradeMind",
    tech: ["User flows", "Data workflows", "Dashboards"],
  },
  {
    name: "DueFlow",
    category: "Workflow Application",
    description:
      "A workflow-focused web application built around structured productivity and modern user experience.",
    proof: "Shows ability to design and build focused web applications with clean product structure.",
    screenshot: "/screenshots/dueflow.png",
    repoUrl: "https://github.com/igris-cmyk/DueFlow",
    tech: ["Product structure", "UX flows"],
  },
  {
    name: "RepForge",
    category: "Fitness Tracking App",
    description:
      "A clean fitness tracking web app with structured layouts, interactive flows, and responsive design.",
    proof: "Shows mobile-first UI implementation and interactive frontend development.",
    screenshot: "/screenshots/repforge.png",
    liveUrl: "https://repforge1.vercel.app/",
    tech: ["Responsive UI", "Interactive flows"],
  },
  {
    name: "F.R.I.D.A.Y.",
    category: "Engineering Exploration",
    description:
      "A personal AI assistant project exploring desktop automation, local-first architecture, memory, routing, and tool-based workflows.",
    proof: "Shows advanced engineering range beyond standard websites.",
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
      "We prepare the first layout or preview so you can see the direction before full build.",
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
      "We define the website scope clearly so there is less confusion later.",
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
    title: "No unnecessary complexity",
    description:
      "We build what the business actually needs first. Bigger features can be added later.",
    icon: "shield",
  },
] as const;

export const faqs: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on the website type, number of pages, menu/products, design level, admin panel, and extra features. After understanding the requirement, we share a clear quote.",
  },
  {
    question: "Do I need domain and hosting?",
    answer:
      "Yes. Domain and hosting are separate running costs. We can guide you through the setup so the domain stays under your ownership.",
  },
  {
    question: "Can customers order through WhatsApp?",
    answer:
      "Yes. We can add WhatsApp buttons or a structured WhatsApp order flow depending on the website package.",
  },
  {
    question: "Can I update my menu or products myself?",
    answer:
      "Yes, if the website includes an admin dashboard. For starter websites, updates can be handled manually or through a maintenance plan.",
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
      "Simple websites can be completed faster. Larger websites with cart, admin panel, or ordering systems take longer. Timeline is confirmed after the scope is finalized.",
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
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000+",
  "Not sure yet",
];
