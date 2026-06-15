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
  badge?: string;
  startingPrice: string;
  quoteNote?: string;
  outcome: string;
  bestFor: string;
  typicalStructure?: string[];
  includes: string[];
  excludes: string[];
  timeline: string;
  revisionLimit: string;
  scopeBoundary?: string;
  possibleScope?: string[];
  cta: string;
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
    "Custom Web Builds",
  ],
  budgetRanges: [
    "₹5,000 - ₹9,000",
    "₹9,000 - ₹12,000",
    "₹12,000 - ₹20,000",
    "₹20,000+",
    "Need a recommendation",
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
    { label: "Packages", href: "#packages" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socialLinks: contactConfig.socialLinks,
};

export const studioNavigation = {
  brand: {
    name: "Deodar",
    descriptor: "Web Studio",
  },
  items: [
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  cta: {
    label: "Discuss a project",
    href: "#contact",
  },
};

export const studioHero = {
  eyebrow: "Founder-led product and engineering studio",
  headline:
    "We design and build digital products that make businesses easier to run, trust and grow.",
  supportingText:
    "Deodar combines product direction, interface systems and full-stack engineering to take focused web products from first decision to production deployment.",
  founderLine:
    "Led by Sahil Khursheed, with direct involvement across product thinking, design, engineering and launch.",
  primaryCta: {
    label: "View selected work",
    href: "#work",
  },
  secondaryCta: {
    label: "Discuss a project",
    href: "#contact",
  },
};

export const studioCapabilityIndex = [
  {
    index: "01",
    title: "Product direction",
    description:
      "Clarifying the problem, product structure and decisions before implementation.",
  },
  {
    index: "02",
    title: "Interface systems",
    description:
      "Designing coherent flows, responsive UI and reusable interaction patterns.",
  },
  {
    index: "03",
    title: "Full-stack engineering",
    description:
      "Building the application, data model, authentication and operational workflows.",
  },
  {
    index: "04",
    title: "Production launch",
    description:
      "Verifying performance, accessibility, deployment and release readiness.",
  },
] as const;

export const orbitCaseStudy = {
  eyebrow: "Flagship product study",
  projectName: "Orbit",
  statusLabel: "Independent product concept",
  thesis: "A calmer operating system for service businesses.",
  introduction:
    "Orbit explores how leads, bookings, forms, staff, inventory, alerts and operational activity can work as one connected system instead of a collection of disconnected tools.",
  honestyStatement:
    "Orbit is an independent product concept and interface system - not a public client case study.",
  screenshot: {
    src: "/screenshots/orbit.png",
    alt: "Orbit operations platform interface showing connected service-business workflows and operational activity.",
    width: 1366,
    height: 768,
  },
  narrative: [
    {
      index: "01",
      eyebrow: "The operational problem",
      heading: "Fragmented tools create fragmented operations.",
      body:
        "Service businesses often manage enquiries, schedules, forms, supplies, staff updates and follow-ups across separate tools. Important context gets lost between systems, and owners are forced to reconstruct the state of the business manually.",
    },
    {
      index: "02",
      eyebrow: "The product decision",
      heading: "Design the workflow as one connected timeline.",
      body:
        "Orbit is structured around shared operational events rather than isolated feature silos. A booking, completed form, staff action, stock change or alert should update the same underlying picture of the business.",
    },
  ],
  workflow: [
    {
      step: "Capture",
      description:
        "Bring new leads, bookings and customer information into one operational flow.",
    },
    {
      step: "Coordinate",
      description:
        "Connect schedules, forms, staff responsibilities and service preparation.",
    },
    {
      step: "Deliver",
      description:
        "Give the team a clear view of the work, customer context and required actions.",
    },
    {
      step: "Update",
      description:
        "Reflect completed work, inventory changes, alerts and ongoing business activity.",
    },
  ],
  systemScopeLabel: "Product system explored",
  systemScope: [
    "Leads",
    "Bookings",
    "Forms",
    "Staff",
    "Inventory",
    "Alerts",
    "Activity",
    "Business health",
  ],
  role: {
    heading: "Deodar's role",
    body:
      "Product direction, workflow modelling, interface architecture and responsive frontend implementation.",
  },
  metadata: [
    { label: "Type", value: "Operations platform" },
    { label: "Status", value: "Independent product concept" },
    { label: "Audience", value: "Service businesses" },
    { label: "Focus", value: "Connected operational workflows" },
  ],
  links: {
    liveLabel: "View Orbit",
    sourceLabel: "View source",
    liveUrl: "https://orbit-sage-eta.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/orbit",
  },
} as const;

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
    title: "Starter Website",
    startingPrice: "Starting at ₹5,000",
    outcome: "A clean one-page website that explains the business clearly and makes contact easy.",
    bestFor:
      "Small shops, salons, independent professionals, home businesses, coaches, and service providers launching their first professional website.",
    includes: [
      "One professionally structured page",
      "Up to 6 core sections",
      "Mobile-first responsive design",
      "Hero, introduction, services or product summary",
      "WhatsApp enquiry CTA and click-to-call where appropriate",
      "Contact, location details, business hours, and social links",
      "Basic contact form",
      "Basic page title, meta description, and social sharing metadata",
      "Deployment on an appropriate free hosting platform",
      "Basic domain connection assistance if the client already owns a domain",
    ],
    typicalStructure: ["Hero", "About", "Services", "Gallery or highlights", "Location/hours", "Contact"],
    excludes: [
      "Custom domain cost",
      "Paid hosting",
      "Logo design or full brand identity",
      "Professional photography or advanced copywriting",
      "Admin dashboard, database, online payment, or e-commerce",
      "User accounts, advanced booking system, or monthly maintenance",
      "Unlimited revisions",
    ],
    timeline: "Typically 4-5 business days after all required content is received.",
    revisionLimit: "1 revision round.",
    cta: "Discuss Starter Website",
  },
  {
    title: "Business Website",
    badge: "Recommended",
    startingPrice: "Starting at ₹9,000",
    outcome: "A structured multi-page website that builds credibility and gives every important service its proper place.",
    bestFor:
      "Clinics, gyms, salons, coaches, consultants, local service teams, and service businesses that need more room to explain their work.",
    includes: [
      "Up to 5 core pages or equivalent structured scope",
      "Custom homepage, about page, service overview, and contact page",
      "Individual service sections or pages where agreed",
      "WhatsApp enquiry flow, contact form, and click-to-call option",
      "Google Maps/location integration and opening hours",
      "Gallery or portfolio section",
      "Team section if relevant",
      "Real testimonials if supplied by the client",
      "FAQ section",
      "Mobile-first responsive design",
      "Basic on-page SEO metadata and social sharing metadata",
      "Deployment and domain connection assistance",
    ],
    typicalStructure: ["Home", "About", "Services", "Gallery / Work", "Contact"],
    excludes: [
      "Domain fee or paid hosting",
      "Premium plugins/tools",
      "Full copywriting from zero or professional photography",
      "Database, admin dashboard, user authentication, or online payment",
      "E-commerce, advanced booking platform, or unlimited content entry",
      "Ongoing maintenance unless quoted",
    ],
    timeline: "Typically 7-10 business days after all required content is received.",
    revisionLimit: "2 revision rounds.",
    cta: "Discuss Business Website",
  },
  {
    title: "Menu & Showcase Website",
    startingPrice: "Starting at ₹12,000",
    outcome:
      "A mobile-friendly menu or catalog experience that helps customers browse, understand prices, and enquire or order through WhatsApp.",
    bestFor:
      "Cafes, restaurants, bakeries, cloud kitchens, boutiques, product sellers, and businesses with a structured menu or catalog.",
    includes: [
      "Custom homepage",
      "Structured menu, catalog, or service categories",
      "Item or service cards with pricing display",
      "Featured items and offer/promotional section",
      "Gallery, business location, opening hours, and social links",
      "WhatsApp enquiry or order-summary flow",
      "Optional cart-style WhatsApp summary where appropriate to the agreed scope",
      "Mobile-first design",
      "Basic SEO metadata and social sharing metadata",
      "Deployment and domain connection assistance",
    ],
    scopeBoundary:
      "The standard package is content-driven. It does not automatically include an admin dashboard. Menu or product updates after delivery are handled according to the agreed maintenance or edit arrangement.",
    excludes: [
      "Domain fee or paid hosting",
      "Admin dashboard or database-backed content management",
      "Stock management, customer accounts, or delivery tracking",
      "Online payment or full e-commerce checkout",
      "Third-party ordering platform fees",
      "Unlimited product/menu entry",
      "Ongoing maintenance unless quoted",
    ],
    timeline: "Typically 8-12 business days after all required content and item details are received.",
    revisionLimit: "2 revision rounds.",
    cta: "Discuss Menu Website",
  },
  {
    title: "Custom Web Build",
    startingPrice: "Starting at ₹20,000",
    quoteNote: "Final quote after scope review.",
    outcome: "A tailored web system designed around the actual operational requirements of the business.",
    bestFor:
      "Businesses that need editable systems, advanced workflows, dashboards, databases, integrations, or functionality beyond a standard website.",
    includes: [
      "Discovery-led scope and proposal",
      "Custom UI/UX and multi-page website where needed",
      "Technical planning for workflows, data, and integrations",
      "Deployment approach suited to the build",
      "Revision policy defined in the final proposal",
    ],
    possibleScope: [
      "Admin dashboard",
      "Editable menu or product management",
      "Database and authentication",
      "Role-based access",
      "Advanced forms, booking workflows, or dashboards",
      "CRM-style functionality",
      "API or payment integrations",
      "E-commerce, custom ordering, analytics, or business automations",
    ],
    scopeBoundary:
      "The package starts from ₹20,000. Final scope, cost, timeline, and revision policy are confirmed after discovery.",
    excludes: [
      "Any advanced feature not included in the final agreed proposal",
      "Third-party service, payment gateway, tool, domain, or hosting fees",
      "Unlimited changes outside the approved scope",
      "Ongoing maintenance unless quoted",
    ],
    timeline: "Scope-dependent.",
    revisionLimit: "Defined in the final proposal.",
    cta: "Request a Custom Quote",
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
    question: "Which package is right for me?",
    answer:
      "Choose Starter Website for a simple first professional website, Business Website for several pages and detailed services, Menu & Showcase Website for menus, catalogs, prices, or WhatsApp order flow, and Custom Web Build for admin panels, databases, payments, or integrations.",
  },
  {
    question: "Are these fixed prices?",
    answer:
      "No. These are starting prices. Final pricing depends on pages, content volume, features, integrations, and the final agreed scope.",
  },
  {
    question: "Are domain and hosting included?",
    answer:
      "Domain fees, paid hosting, premium tools, and third-party services are separate unless explicitly included in the proposal.",
  },
  {
    question: "Can I upgrade from Starter later?",
    answer:
      "Yes. A Starter Website can be expanded later, but major structural or functional additions will be quoted separately.",
  },
  {
    question: "Does the Menu & Showcase package include an admin dashboard?",
    answer:
      "Not by default. The standard package is content-driven. An editable admin dashboard is part of a custom scope.",
  },
  {
    question: "Are revisions unlimited?",
    answer:
      "No. Each package includes the stated revision allowance. Additional revisions are quoted separately.",
  },
  {
    question: "When does the delivery timeline begin?",
    answer:
      "After final scope approval and receipt of all required content.",
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
      "A Starter Website typically takes 4-5 business days after all required content is received. Timeline is confirmed after scope and content are clear.",
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
    question: "Do you provide maintenance?",
    answer:
      "Maintenance can be discussed after launch. It is not automatically included unless agreed in the project scope.",
  },
];

export const serviceOptions = [
  "Starter Website - from ₹5,000",
  "Business Website - from ₹9,000",
  "Menu & Showcase Website - from ₹12,000",
  "Custom Web Build - from ₹20,000",
  "Website Redesign",
  "Not sure - recommend a package",
];

export const budgetOptions = contactConfig.budgetRanges;

export const timelineOptions = [
  "4-5 business days after content is ready",
  "7-10 business days after content is ready",
  "8-12 business days after content is ready",
  "Flexible / not sure yet",
];
