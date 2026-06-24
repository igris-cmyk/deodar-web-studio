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

export type FAQItem = {
  question: string;
  answer: string;
};

export type ContactMethod = "Email" | "WhatsApp" | "Either";

export type EngagementOption = {
  index: string;
  slug: string;
  name: string;
  priceLabel: string;
  startingPrice: string;
  bestFor: string;
  summary: string;
  coreScope: string[];
  typicalStructure?: string;
  importantBoundary?: string;
  systemAreas?: string[];
  timeline: string;
  revisions: string;
  exclusions: string[];
  cta: string;
  qualification?: string;
};

const configuredEmail = process.env.NEXT_PUBLIC_DEODAR_EMAIL?.trim();
const studioWhatsAppNumber = "919541206212";
const recommendedStudioEmail = "hello@deodarwebstudio.com";

export const contactConfig = {
  studioName: "Deodar Web Studio",
  founderName: "Sahil Khursheed",
  locationLine:
    "Based in India, working remotely with businesses and product teams across India and internationally.",
  email: configuredEmail || "",
  hasConfiguredProfessionalEmail: Boolean(configuredEmail),
  recommendedEmail: recommendedStudioEmail,
  whatsAppNumber: studioWhatsAppNumber,
  githubUrl: "https://github.com/igris-cmyk",
  linkedinUrl: "https://www.linkedin.com/in/sahil-khursheed-419666413",
  channels: {
    whatsapp: {
      label: "WhatsApp",
      number: studioWhatsAppNumber,
    },
    email: {
      label: "Email",
      address: configuredEmail || "",
      isConfigured: Boolean(configuredEmail),
      recommendedAddress: recommendedStudioEmail,
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sahil-khursheed-419666413",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/igris-cmyk",
    },
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/igris-cmyk" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sahil-khursheed-419666413" },
  ],
};

export const siteConfig = {
  name: contactConfig.studioName,
};

export const studioNavigation = {
  brand: {
    name: "Deodar",
    descriptor: "Web Studio",
  },
  items: [
    { label: "Work", href: "/#work" },
    { label: "Capabilities", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Engagements", href: "/engagements" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],
  cta: {
    label: "Discuss a project",
    href: "/#contact",
  },
};

export const studioHero = {
  eyebrow: "Founder-led product and engineering studio",
  headline:
    "Websites and business systems built to generate enquiries, enable transactions and simplify operations.",
  supportingText:
    "Deodar is a founder-led design and engineering studio building high-quality websites, commerce experiences and custom operational tools - from strategy and architecture to launch and continued improvement.",
  founderLine:
    "Led by Sahil Khursheed, with direct involvement across product thinking, design, engineering and launch.",
  primaryCta: {
    label: "Discuss your project",
    href: "#contact",
  },
  secondaryCta: {
    label: "View selected work",
    href: "#work",
  },
};

export const studioCapabilityIndex = [
  {
    index: "01",
    title: "Websites and conversion",
    description:
      "Credible customer journeys designed around qualified enquiries.",
  },
  {
    index: "02",
    title: "Commerce and transactions",
    description:
      "Structured ways for customers to browse, book, order or buy.",
  },
  {
    index: "03",
    title: "Operational systems",
    description:
      "Internal tools, dashboards and workflows connected to real business data.",
  },
] as const;

export const orbitCaseStudy = {
  slug: "orbit",
  eyebrow: "Advanced product-system concept",
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

export const studioFounder = {
  eyebrow: "Founder-led delivery",
  heading: "Founder-led from discovery to deployment.",
  intro:
    "Deodar is led by Sahil Khursheed, a full-stack product engineer working across product strategy, interface design, application architecture, databases, authentication, operational workflows and deployment.",
  accountability:
    "Every qualified engagement receives founder-led technical ownership. Coordination can support communication, but product scope, architecture, review and release decisions remain directly connected to Sahil.",
  principles: [
    {
      index: "01",
      title: "Direct accountability",
      statement:
        "You have access to the technical decision-maker when product, scope and implementation decisions matter.",
      explanation:
        "Requirements, tradeoffs, interface decisions and technical constraints are reviewed with the person responsible for shaping and building the system.",
    },
    {
      index: "02",
      title: "Decisions before output",
      statement:
        "The work begins by making the product clearer, not by producing screens immediately.",
      explanation:
        "Scope, workflow, system boundaries and release priorities are made explicit before implementation expands.",
    },
    {
      index: "03",
      title: "Working evidence",
      statement:
        "Progress is judged through functioning paths and verification, not presentation theatre.",
      explanation:
        "The work is reviewed through decisions, working behavior and honest records of any unresolved limitations.",
    },
  ],
  links: [
    { label: "View GitHub", href: contactConfig.githubUrl },
    { label: "Connect on LinkedIn", href: contactConfig.linkedinUrl },
  ],
} as const;

export const projectEnquiry = {
  eyebrow: "Discuss your project",
  heading: "Bring the business problem, not a predetermined feature list.",
  introduction:
    "Share the objective, current bottleneck and approximate scope. Deodar will review the requirement and recommend the appropriate engagement.",
  directStatement:
    "Qualified project conversations are technically led by Sahil, with direct involvement in scope, architecture, review and release.",
  usefulContext: [
    "The business objective and current bottleneck",
    "Who the system needs to serve",
    "What a useful first release must enable",
    "Relevant timing, content and investment constraints",
  ],
  privacyNote:
    "The details you provide are used only to review and respond to your enquiry.",
  directWhatsAppMessage:
    "Hi Sahil, I want to discuss a Deodar project.",
  copyFallbackNote:
    "If WhatsApp is not the right channel, copy the same structured brief and send it through your preferred communication route.",
  contactMethodOptions: ["Email", "WhatsApp", "Either"] as readonly ContactMethod[],
  engagementOptions: [
    "Focused Launch",
    "Growth Website",
    "Commerce or Operational System",
    "Custom Product Engineering",
    "Ongoing Support",
    "Not sure yet",
  ],
  objectiveOptions: [
    "Generate qualified enquiries",
    "Enable ordering, booking or payment",
    "Improve credibility and customer understanding",
    "Simplify an internal workflow",
    "Launch or improve a digital product",
    "Need help defining the objective",
  ],
  budgetOptions: [
    "₹5,000–₹15,000",
    "₹15,000–₹35,000",
    "₹35,000–₹75,000",
    "₹75,000–₹1,50,000",
    "₹1,50,000+",
    "Need guidance",
  ],
  startWindowOptions: [
    "As soon as scope is clear",
    "Within one month",
    "Within two to three months",
    "Planning for later",
    "Not sure yet",
  ],
} as const;

export const idealClients = {
  eyebrow: "Who Deodar works best with",
  heading: "Commercial problems with a clear owner and a reason to solve them well.",
  introduction:
    "The strongest engagements combine a meaningful business objective, timely decisions and a willingness to build a durable foundation rather than a disposable template.",
  profiles: [
    {
      index: "01",
      title: "Hospitality and local commerce",
      description:
        "Cafes, restaurants, hotels, retailers and product businesses that need clearer menus, catalogues, orders, bookings or commerce journeys.",
    },
    {
      index: "02",
      title: "High-value service businesses",
      description:
        "Clinics, consultants, education businesses, property firms and professional services that need credibility and better-qualified enquiries.",
    },
    {
      index: "03",
      title: "Founders and operating teams",
      description:
        "Businesses that need dashboards, administrative systems, workflow tools or custom products beyond a normal marketing website.",
    },
  ],
} as const;

export const supportingWorkChapter = {
  eyebrow: "Selected product systems",
  heading: "Three systems. Three levels of product responsibility.",
  introduction:
    "The work moves from a complete customer-and-operator business system, through a focused financial workflow product, to a broader operational product concept.",
} as const;

export const dueFlowEvidence = {
  slug: "dueflow",
  name: "DueFlow",
  category: "Cashflow workflow product",
  status: "Independent product preview",
  thesis: "A clearer operating layer for money already earned.",
  summary:
    "DueFlow explores how contractors, freelancers, agencies and service businesses can keep pending balances, client promises, project proof and follow-up actions connected in one cashflow workflow.",
  screenshot: {
    src: "/screenshots/dueflow.png",
    alt: "DueFlow cashflow workflow product interface showing pending balances, proof and follow-up context.",
    width: 1366,
    height: 768,
  },
  problem: {
    heading: "Completed work does not always mean completed payment.",
    body:
      "Payment context is often split between invoices, WhatsApp conversations, work photos, verbal promises and memory. DueFlow brings those records together so every pending balance has a client, project, proof trail and next action.",
  },
  decision: {
    heading: "Turn pending money into an action queue.",
    body:
      "Instead of beginning with generic analytics, the product centres the day around overdue balances, missed promises, missing proof and follow-ups that need attention.",
  },
  evidenceAreas: [
    {
      label: "Cash Desk",
      description:
        "Opens the day around pending payments, promises, proof gaps and follow-ups.",
    },
    {
      label: "Project and client ledgers",
      description:
        "Keeps balances, partial payments, clients and project context tied together.",
    },
    {
      label: "Proof Vault",
      description:
        "Organizes invoices, work photos, approvals and WhatsApp screenshots against the right project.",
    },
    {
      label: "User-approved follow-up suggestions",
      description:
        "Drafts respectful reminders from recorded facts without messaging clients automatically.",
    },
  ],
  responsibility:
    "Product positioning, workflow architecture, interface system and responsive product experience.",
  links: {
    liveLabel: "View DueFlow",
    sourceLabel: "View source",
    liveUrl: "https://due-flow-peach.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/DueFlow",
  },
} as const;

export const deodarBrewEvidence = {
  slug: "deodar-brew",
  name: "Deodar-Brew",
  category: "Food-business website and ordering system",
  status: "Studio-built full-stack business system",
  qualifier: "Owned reference implementation",
  thesis:
    "A customer-facing ordering experience connected to an editable business system.",
  summary:
    "An owned reference implementation showing how a food business can present its menu, promote offers and receive structured WhatsApp orders through a polished customer experience and protected administrative system.",
  screenshot: {
    src: "/screenshots/deodar-brew.png",
    alt: "Deodar-Brew food-business ordering website showing a digital menu, cart summary and WhatsApp checkout experience.",
    width: 1366,
    height: 768,
  },
  problem: {
    heading: "Customers should not need a conversation to understand the menu.",
    body:
      "Food businesses repeatedly answer the same questions about items, prices, availability, offers, hours and ordering. A clear mobile experience can provide that context before the customer contacts the business.",
  },
  decision: {
    heading: "Connect the public menu to an editable operating layer.",
    body:
      "The customer-facing menu, offers and ordering flow are structured around managed business data, while protected administration keeps menu items, categories, gallery content and cafe information editable.",
  },
  flow: [
    {
      step: "Browse menu",
      description:
        "Customers explore categories, item details, pricing, availability and current offers through a responsive menu.",
    },
    {
      step: "Build order",
      description:
        "Items, quantities and an optional customer note are collected into a persistent cart.",
    },
    {
      step: "Send through WhatsApp",
      description:
        "The cart is converted into a structured order message that the business can confirm directly.",
    },
    {
      step: "Manage content",
      description:
        "Protected administration keeps menu items, categories, offers, gallery content and cafe information editable.",
    },
  ],
  implementationAreas: [
    {
      label: "Digital menu",
      description:
        "Categories, item details, pricing, descriptions and availability are presented in a responsive menu.",
    },
    {
      label: "Persistent cart",
      description:
        "Items, quantities and customer notes remain available through the order flow.",
    },
    {
      label: "WhatsApp order generation",
      description:
        "The cart becomes a structured message for direct business confirmation.",
    },
    {
      label: "Protected content administration",
      description:
        "Admin workflows manage menu items, categories, offers, gallery content and cafe settings.",
    },
    {
      label: "Prisma-backed business data",
      description:
        "Menu and business content are modelled as editable database records.",
    },
  ],
  responsibility:
    "Product definition, UX architecture, full-stack implementation, database modelling, protected administration workflows and deployment preparation.",
  limitations: [
    "No customer accounts",
    "No payment gateway",
    "No delivery tracking",
    "No internal order dashboard claim",
  ],
  links: {
    liveLabel: "View Deodar-Brew",
    sourceLabel: "View source",
    liveUrl: "https://deodar-brew.vercel.app/",
    repoUrl: "https://github.com/igris-cmyk/Deodar-Brew",
  },
} as const;

export const studioCapabilities = {
  eyebrow: "Capabilities",
  heading: "Three ways digital systems create practical business value.",
  introduction:
    "Deodar connects strategy, information architecture, interface design and engineering so the public experience and the system behind it support the same commercial objective.",
  qualifier:
    "Each engagement uses only the capabilities required by the agreed objective and release scope.",
  groups: [
    {
      index: "01",
      title: "Websites and conversion systems",
      thesis:
        "Build credibility, clarify the offer and create a stronger path to enquiry.",
      responsibility:
        "Structure the message, page hierarchy, trust signals, lead capture and measurement around how the right customer evaluates and contacts the business.",
      outputs: [
        "Marketing and service websites",
        "Landing pages and lead capture",
        "Analytics and search foundations",
      ],
      appropriateProblem:
        "For businesses that need a credible presence and better-qualified enquiries.",
    },
    {
      index: "02",
      title: "Commerce and customer transactions",
      thesis:
        "Give customers a structured way to browse, order, book, buy or enquire.",
      responsibility:
        "Design and implement catalogues, menus, transaction flows, payments and customer communication with clear operating boundaries.",
      outputs: [
        "Product catalogues and menus",
        "Ordering, booking and payment flows",
        "Customer communication paths",
      ],
      appropriateProblem:
        "For businesses whose customers need to complete a meaningful action online.",
    },
    {
      index: "03",
      title: "Operational products and internal tools",
      thesis:
        "Replace fragmented operational work with a focused, maintainable system.",
      responsibility:
        "Model workflows, data, authentication, permissions, administrative tools and integrations as one product rather than disconnected screens.",
      outputs: [
        "Dashboards and administrative systems",
        "Authentication, roles and permissions",
        "Workflow automation and custom products",
      ],
      appropriateProblem:
        "For teams that need working software beyond a public-facing website.",
    },
  ],
} as const;

export const studioDeliveryModel = {
  eyebrow: "How the work moves",
  heading: "A disciplined path from business problem to supported release.",
  introduction:
    "The process keeps commercial intent, scope, design, engineering and release decisions connected without turning the engagement into ceremony.",
  founderStatement:
    "Sahil remains directly involved from diagnosis and architecture through implementation, launch and agreed post-launch support.",
  stages: [
    {
      index: "01",
      title: "Diagnose",
      decision: "Understand the business, customer and current bottleneck.",
      work:
        "Review the objective, users, existing experience, operational constraints and the outcome that matters.",
      gate:
        "Proceed when the problem and responsible decision-makers are clear.",
    },
    {
      index: "02",
      title: "Define",
      decision: "Agree scope, architecture, responsibilities and success criteria.",
      work:
        "Set the release boundary, assumptions, content responsibilities, technical constraints and verification criteria.",
      gate:
        "Proceed when the proposal and responsibilities are explicit.",
    },
    {
      index: "03",
      title: "Design",
      decision: "Structure the information, user flow and visual direction.",
      work:
        "Resolve the critical journey, hierarchy, interaction states and reusable interface system before full implementation expands.",
      gate:
        "Proceed when the approved direction can be implemented without hidden assumptions.",
    },
    {
      index: "04",
      title: "Build",
      decision: "Implement the approved system using appropriate production technology.",
      work:
        "Develop the interface, application logic, data model, integrations and operational paths in controlled increments.",
      gate:
        "Proceed when the agreed paths work together as a system.",
    },
    {
      index: "05",
      title: "Verify",
      decision: "Confirm functionality and release readiness.",
      work:
        "Test responsive behavior, accessibility, performance, failure states, forms, data flows and deployment assumptions.",
      gate:
        "Proceed when critical issues are resolved and remaining limitations are recorded.",
    },
    {
      index: "06",
      title: "Launch and support",
      decision: "Deploy, hand over and define what happens next.",
      work:
        "Connect production services, verify the live release, document ownership and continue improving where support is agreed.",
      gate:
        "Complete when the release is operating and post-launch responsibilities are understood.",
    },
  ],
} as const;

export const engagementPage = {
  eyebrow: "Engagements and pricing",
  heading: "Choose the right level of commercial and technical responsibility.",
  introduction:
    "Deodar offers a constrained launch option, a strategic growth website, functional commerce and operational systems, and scope-based custom product engineering.",
  pricingStatement:
    "Starting prices describe the minimum responsible scope for that engagement. Final investment depends on content, workflows, data, integrations, security, delivery constraints and the responsibilities included in the release.",
  directAccountability:
    "Scope, architecture and delivery responsibility are reviewed directly with Sahil before work begins.",
  sharedPricingStatement:
    "Final pricing is confirmed after objectives, pages, content, workflows, integrations, responsibilities and release boundaries are agreed.",
  internationalPricingNote:
    "Prices shown are Indian starting investments in INR. International engagements may be proposed in an agreed currency based on scope, responsibilities and payment arrangements.",
  indexHeading: "Engagement index",
  indexIntroduction:
    "Use this as a fast way to find the right starting point. The detailed scope lives in the sections below.",
  scopePrinciples: {
    heading: "Scope changes are decisions, not invisible extras.",
    body:
      "The approved scope records what will be designed, built and verified. New pages, workflows, integrations or responsibilities introduced afterward are reviewed separately before implementation continues.",
    items: [
      "Included work is written down.",
      "Assumptions are clarified before implementation.",
      "Additional scope is quoted before it is added.",
    ],
  },
  ownershipPrinciples: {
    heading: "Content, accounts and ownership",
    items: [
      "The client owns their domain.",
      "Paid third-party services are separate unless quoted.",
      "Business information and usable assets are supplied by the client unless content production is included.",
      "Credentials and important accounts should remain under client ownership.",
      "Maintenance is separate unless agreed.",
    ],
  },
  cta: {
    eyebrow: "Start with context",
    heading: "Bring the business problem, not a predetermined feature list.",
    copy:
      "Share what you are trying to improve, where the current process is failing and what outcome matters. Deodar will recommend the appropriate engagement.",
    primary: { label: "Discuss your project", href: "/#contact" },
    secondary: { label: "View selected work", href: "/#work" },
  },
} as const;

export const engagementOptions: EngagementOption[] = [
  {
    index: "01",
    slug: "focused-launch",
    name: "Focused Launch",
    priceLabel: "From",
    startingPrice: "₹5,000",
    bestFor:
      "New or small businesses that need a professional digital foundation with one clear conversion path.",
    summary:
      "A constrained, conversion-focused one-page presence built from complete client-provided content and a tightly controlled direction.",
    coreScope: [
      "One conversion-focused page",
      "Responsive implementation",
      "Clear contact or WhatsApp action",
      "Basic contact or enquiry form",
      "Basic SEO and social metadata",
      "Client-provided final content and images",
      "Fixed or tightly controlled design direction",
    ],
    typicalStructure:
      "Offer / Context / Trust / Action / Contact",
    timeline:
      "Approximately five business days after complete content is received and scope is approved.",
    revisions: "1 agreed revision round",
    exclusions: [
      "Custom dashboard, CMS or backend",
      "Authentication or user accounts",
      "E-commerce, payments or booking engine",
      "Advanced animations",
      "Multiple page templates",
      "Content creation",
      "Unlimited revisions",
      "Ongoing maintenance",
    ],
    cta: "Discuss a Focused Launch",
  },
  {
    index: "02",
    slug: "growth-website",
    name: "Growth Website",
    priceLabel: "From",
    startingPrice: "₹20,000",
    bestFor:
      "Service businesses that need a complete, credible and conversion-focused web presence.",
    summary:
      "A strategically structured website that clarifies the offer, builds trust and creates stronger paths to qualified enquiry.",
    coreScope: [
      "Strategic page and conversion structure",
      "Custom visual direction",
      "Five to seven core pages or equivalent templates",
      "Lead capture and WhatsApp or enquiry integration",
      "Trust and credibility content architecture",
      "Analytics and search metadata",
      "Performance optimisation",
      "Basic content structuring support",
    ],
    timeline:
      "Approximately two to three weeks, subject to scope, content readiness and client responsiveness.",
    revisions: "2 agreed revision rounds",
    exclusions: [
      "Full e-commerce",
      "Large-scale CMS architecture",
      "Complex dashboards or multi-role applications",
      "Advanced workflow automation",
      "Unlimited content production or revisions",
    ],
    cta: "Discuss a Growth Website",
  },
  {
    index: "03",
    slug: "commerce-operational-system",
    name: "Commerce or Operational System",
    priceLabel: "From",
    startingPrice: "₹50,000",
    qualification: "Scope-based. Listed areas are not all included in the starting price.",
    bestFor:
      "Businesses that require structured functionality beyond a marketing website.",
    summary:
      "A database-backed customer or operational system shaped around the workflows, roles and integrations the business actually needs.",
    coreScope: [
      "Workflow and technical discovery",
      "Custom interface and application architecture",
      "Database-backed functionality",
      "Relevant administrative workflows",
      "Authentication and permissions where required",
      "Included integrations",
      "Deployment, training and documentation appropriate to scope",
    ],
    systemAreas: [
      "Catalogues, menus and inventory",
      "Ordering, booking and notifications",
      "Administrative tools and lead workflows",
      "Authentication, roles and permissions",
      "Payments and third-party integrations",
    ],
    importantBoundary:
      "The proposal depends on workflow count, user roles, data complexity, integrations, administration, payment and security requirements, content readiness and timeline.",
    timeline: "Confirmed after workflow and technical review.",
    revisions: "Defined in the approved proposal",
    exclusions: [
      "Any workflow, integration, content volume, paid service or operational responsibility not included in the approved scope.",
    ],
    cta: "Discuss a Commerce or Operational System",
  },
  {
    index: "04",
    slug: "custom-product-engineering",
    name: "Custom Product Engineering",
    priceLabel: "Investment",
    startingPrice: "Scope-based engagement",
    bestFor:
      "Founders and teams building SaaS products, internal platforms, multi-role applications or bespoke business software.",
    summary:
      "A phased product engagement connecting discovery, requirements, architecture, UX, full-stack implementation, verification and continued development.",
    coreScope: [
      "Product discovery and requirements definition",
      "Application and data architecture",
      "UX and interface system",
      "Full-stack implementation",
      "Verification and deployment",
      "Continued development where agreed",
    ],
    systemAreas: [
      "SaaS and data-driven products",
      "Internal platforms and dashboards",
      "Workflow and multi-role systems",
      "Bespoke integrations",
    ],
    importantBoundary:
      "Genuinely custom products are not assigned a fictional fixed package price. The first proposal defines the phase, capacity, responsibilities and decision points.",
    timeline: "Scope-dependent.",
    revisions: "Defined in the approved proposal",
    exclusions: [
      "Any workflow, integration, third-party service, paid tool or operational responsibility not included in the approved scope is excluded.",
    ],
    cta: "Discuss Custom Product Engineering",
  },
];

export const postLaunchPlans = {
  eyebrow: "After launch",
  heading: "Keep the system healthy, useful and commercially relevant.",
  introduction:
    "Launch is a handover point, not always the end of the engagement. Ongoing support is scoped around maintenance, improvement or reserved product capacity.",
  plans: [
    {
      name: "Website Care",
      price: "From ₹2,000/month",
      summary: "Technical care for an existing Deodar website.",
      coverage: [
        "Availability and form checks",
        "Dependency, security and performance review",
        "Small content updates",
        "Monthly site-health summary",
      ],
      boundary: "Major development and redesign work are quoted separately.",
    },
    {
      name: "Growth Support",
      price: "From ₹6,000/month",
      summary: "Measured improvements to content, campaigns and conversion paths.",
      coverage: [
        "Website Care coverage",
        "Analytics and conversion review",
        "Campaign, offer and search improvements",
        "Controlled monthly development allocation",
      ],
      boundary: "Rankings, revenue and sales outcomes are not guaranteed.",
    },
    {
      name: "Product Partnership",
      price: "Custom monthly engagement",
      summary: "Reserved product and engineering capacity for an evolving system.",
      coverage: [
        "Roadmap and priority planning",
        "Ongoing functionality and automation",
        "Platform optimisation",
        "Priority technical support",
      ],
      boundary: "Capacity and response expectations are defined in the agreement; development is not unlimited.",
    },
  ],
} as const;

export const engagementFit = {
  eyebrow: "Working fit",
  heading: "Clear expectations protect the quality of the work.",
  strongFit: {
    title: "A strong fit",
    items: [
      "The project has a clear business objective.",
      "Quality, reliability and timely decisions matter.",
      "Required content, access and feedback can be provided.",
      "Scope and professional execution are valued.",
      "The investment level is realistic for the responsibility involved.",
      "The goal is a durable technical foundation rather than a disposable template.",
    ],
  },
  poorFit: {
    title: "May not be the right fit",
    items: [
      "The priority is unlimited work for the lowest possible price.",
      "Work must begin without a deposit or written scope.",
      "Unlimited revisions or guaranteed rankings, revenue or sales are expected.",
      "The deadline is incompatible with the required scope.",
      "Required decisions, approvals or content cannot be provided.",
    ],
  },
} as const;

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

export const engagementFaqs: FAQItem[] = [
  {
    question: "What does 'from' mean in the listed investment?",
    answer:
      "It is the starting investment for the minimum responsible version of that engagement. Final pricing is confirmed after objectives, content, workflows, integrations and responsibilities are defined.",
  },
  {
    question: "What information is needed before work begins?",
    answer:
      "Deodar needs the business context, objective, key users, required workflows, available content, decision-makers and known constraints. The final proposal records anything else required before delivery starts.",
  },
  {
    question: "How are payments structured?",
    answer:
      "Payment stages depend on engagement size and are defined in the proposal and agreement. Work does not begin without an approved scope and the agreed initial payment.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. Deodar works remotely with businesses and product teams across India and internationally using scheduled calls, written scope, asynchronous updates and agreed review points.",
  },
  {
    question: "How are international projects priced?",
    answer:
      "The website shows Indian starting investments in INR. International projects may be proposed in an agreed currency based on scope, responsibilities and payment arrangements.",
  },
  {
    question: "How do remote engagements work?",
    answer:
      "Remote work usually moves through discovery, a written proposal and scope, an agreed communication channel, milestone reviews, staged payments where applicable, and remote handover and support.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Focused Launch includes one grouped revision round and Growth Website includes two. Product and system engagements define review stages in the approved proposal. New direction or scope is handled separately.",
  },
  {
    question: "Who provides content and images?",
    answer:
      "Clients provide accurate business information and usable final assets unless content or production support is included. Deodar can structure supplied content and identify gaps before implementation.",
  },
  {
    question: "Can Deodar work with an existing website or product?",
    answer:
      "Yes. Existing systems can be reviewed for commercial, structural, interface or technical improvement. The approach depends on the current implementation and intended outcome.",
  },
  {
    question: "Does Deodar provide hosting?",
    answer:
      "Deodar can recommend, configure and connect suitable hosting. Domain, hosting, premium tools and third-party service fees remain separate unless explicitly included.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The live release is verified and ownership is documented. Website Care, Growth Support or a Product Partnership can be agreed when ongoing maintenance or improvement is required.",
  },
  {
    question: "Can Deodar guarantee rankings, revenue or sales?",
    answer:
      "No. Deodar can improve the structure, technical foundations, measurement and customer journey, but commercial and search outcomes depend on factors outside the website and are not guaranteed.",
  },
  {
    question: "What counts as additional scope?",
    answer:
      "New pages, workflows, user roles, integrations, content volume, major direction changes or responsibilities outside the approved proposal are additional scope and are reviewed before implementation.",
  },
  {
    question: "Can a larger project begin with a smaller phase?",
    answer:
      "Yes. A project can begin with discovery, architecture or a constrained first release when that creates useful evidence. The phase boundary and next decision are defined in the proposal.",
  },
];
