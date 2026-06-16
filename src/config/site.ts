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

export type EngagementOption = {
  index: string;
  slug: string;
  name: string;
  sourceName: string;
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

export const contactConfig = {
  studioName: "Deodar Web Studio",
  founderName: "Sahil Khursheed",
  locationLine: "Based in India. Working directly with clients and product teams.",
  email: configuredEmail || "",
  hasConfiguredProfessionalEmail: Boolean(configuredEmail),
  recommendedEmail: "hello@deodarwebstudio.com",
  whatsAppNumber: "919541206212",
  githubUrl: "https://github.com/igris-cmyk",
  linkedinUrl: "https://www.linkedin.com/in/sahil-khursheed-419666413",
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

export const studioFounder = {
  eyebrow: "Founder-led by design",
  heading:
    "One person accountable from product decision to production release.",
  intro:
    "Deodar is led by Sahil Khursheed, a full-stack product builder working across product structure, interface systems, application architecture and deployment.",
  accountability:
    "The person shaping the workflow is also involved in designing, building and verifying the system—reducing handoffs and keeping product decisions connected to implementation.",
  principles: [
    {
      index: "01",
      title: "Direct accountability",
      statement:
        "You work directly with the person responsible for the product and its implementation.",
      explanation:
        "Requirements, tradeoffs, interface decisions and technical constraints are discussed without a sales or account-management layer in between.",
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
  eyebrow: "Start a project conversation",
  heading: "Bring the problem—not a finished specification.",
  introduction:
    "A useful first message explains the business context, the workflow or product problem, what must improve and what the first release needs to make possible.",
  directStatement:
    "Your enquiry goes directly to Sahil. There is no sales handoff.",
  usefulContext: [
    "The business or product context",
    "The workflow or problem that needs to improve",
    "What the first useful release must do",
    "Relevant constraints, timing and budget range",
  ],
  privacyNote:
    "The details you provide are used only to review and respond to your enquiry.",
  directWhatsAppMessage:
    "Hi Sahil, I want to discuss a Deodar project.",
  stageOptions: [
    "Early idea",
    "Requirements are forming",
    "Existing product needs improvement",
    "Existing system needs rebuilding",
    "Not sure yet",
  ],
  budgetOptions: [
    "₹5,000–₹10,000",
    "₹10,000–₹20,000",
    "₹20,000–₹40,000",
    "₹40,000+",
    "Need help defining scope",
  ],
  startWindowOptions: [
    "As soon as scope is clear",
    "Within one month",
    "Within two to three months",
    "Planning for later",
    "Not sure yet",
  ],
} as const;

export const supportingWorkChapter = {
  eyebrow: "Supporting product evidence",
  heading: "Different systems. The same product discipline.",
  introduction:
    "These builds extend the studio's range - from a focused financial workflow product to a complete customer-facing and administrative business system.",
} as const;

export const dueFlowEvidence = {
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
  name: "Deodar-Brew",
  category: "Food-business website and ordering system",
  status: "Studio-built full-stack business system",
  qualifier: "Owned demonstration product",
  thesis:
    "A customer-facing ordering experience connected to an editable business system.",
  summary:
    "Deodar-Brew combines a public food-business website, structured digital menu, persistent cart, WhatsApp ordering and protected content management so customers can browse and order while the operator retains control of menu and business information.",
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
  heading: "From unclear requirements to a working product system.",
  introduction:
    "Deodar works across product structure, interface architecture and full-stack delivery - keeping the decisions, design and implementation connected instead of handing them between disconnected specialists.",
  qualifier:
    "Capabilities are applied according to the product's actual scope; not every engagement requires every layer.",
  groups: [
    {
      index: "01",
      title: "Product and Workflow Architecture",
      thesis:
        "Define what the system must do before deciding how it should look.",
      responsibility:
        "Clarify users, operational constraints, core workflows, information structure, product boundaries and the decisions required for an implementable first release.",
      outputs: [
        "Problem and scope framing",
        "Workflow and state mapping",
        "Information architecture",
        "Release boundary and decision record",
      ],
      appropriateProblem:
        "Useful when a project has many ideas or operational requirements but no coherent product structure.",
    },
    {
      index: "02",
      title: "Interface Systems and Frontend Engineering",
      thesis:
        "Turn product structure into an interface that remains coherent across screens and states.",
      responsibility:
        "Design responsive flows, interaction patterns, visual hierarchy and reusable frontend systems that make complex functionality understandable and maintainable.",
      outputs: [
        "Responsive product flows",
        "Interface and component systems",
        "Accessible interaction states",
        "Production frontend implementation",
      ],
      appropriateProblem:
        "Useful when an interface must feel clear, credible and consistent while supporting real application behavior.",
    },
    {
      index: "03",
      title: "Full-Stack Systems and Production Delivery",
      thesis:
        "Connect the visible product to the data, permissions and operational logic behind it.",
      responsibility:
        "Implement the application layer, data model, authentication, administrative workflows, integrations, deployment and release verification required by the agreed product scope.",
      outputs: [
        "Application and data architecture",
        "Authentication and permissions",
        "Operational or administrative workflows",
        "Deployment and release verification",
      ],
      appropriateProblem:
        "Useful when the project must move beyond a polished interface into a functioning and maintainable system.",
    },
  ],
} as const;

export const studioDeliveryModel = {
  eyebrow: "How the work moves",
  heading: "Decisions first. Working evidence throughout.",
  introduction:
    "Each engagement moves through explicit decision gates. The goal is not to produce activity - it is to reduce uncertainty, build the right system and verify that it is ready to be used.",
  founderStatement:
    "Sahil remains directly involved across product decisions, interface architecture, implementation and release verification.",
  stages: [
    {
      index: "01",
      title: "Frame",
      decision: "Agree on the problem, constraints and release boundary.",
      work:
        "Review the business context, users, existing systems, required workflows, technical constraints and evidence already available.",
      gate:
        "Proceed when the problem, ownership and first-release scope are explicit.",
    },
    {
      index: "02",
      title: "Shape",
      decision:
        "Establish how the product should work before full implementation begins.",
      work:
        "Define critical flows, information structure, interface direction, system boundaries and the data or permission model required by the scope.",
      gate:
        "Proceed when the core workflow can be explained, reviewed and implemented without relying on hidden assumptions.",
    },
    {
      index: "03",
      title: "Build",
      decision: "Turn the agreed model into verified working increments.",
      work:
        "Implement the interface and application in controlled slices, preserving working behavior while validating responsive states, data flows and operational paths.",
      gate:
        "Proceed when each agreed path works as a system rather than as an isolated screen.",
    },
    {
      index: "04",
      title: "Release",
      decision:
        "Confirm that the agreed product is ready to operate outside the development environment.",
      work:
        "Verify accessibility, responsive behavior, performance, failure states, deployment configuration and the handover information required to operate the release.",
      gate:
        "Complete when verification evidence is recorded and unresolved limitations are stated honestly.",
    },
  ],
} as const;

export const engagementPage = {
  eyebrow: "Engagements and pricing",
  heading: "Clear starting points. Final scope confirmed before the build.",
  introduction:
    "Deodar offers defined starting scopes for focused websites and menu experiences, with custom product and system work quoted after the workflows, data and operational requirements are understood.",
  pricingStatement:
    "Every listed price is a starting price. Final cost depends on content volume, page structure, workflows, data, integrations and the responsibilities included in the agreed release.",
  directAccountability:
    "Scope is reviewed directly with Sahil before work begins.",
  sharedPricingStatement:
    "Final pricing is confirmed after pages, content, workflows, integrations, responsibilities and release boundaries are agreed.",
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
    eyebrow: "Ready to define the scope?",
    heading: "Start with the problem and the first useful release.",
    copy:
      "Use the project brief to share the business context, required workflow, constraints and indicative budget.",
    primary: { label: "Send a project brief", href: "/#contact" },
    secondary: { label: "View selected work", href: "/#work" },
  },
} as const;

export const engagementOptions: EngagementOption[] = [
  {
    index: "01",
    slug: "focused-website",
    name: "Focused Website",
    sourceName: "Starter Website",
    startingPrice: "₹5,000",
    bestFor:
      "Independent professionals, small businesses and focused services that need one clear professional web presence.",
    summary:
      "One clear professional web presence for a focused service, offer or small business.",
    coreScope: [
      "One professionally structured page",
      "Up to six core sections",
      "Responsive implementation",
      "Clear service or offer explanation",
      "Contact and WhatsApp actions",
      "Business details, location or hours where relevant",
      "Basic page title, metadata and social sharing metadata",
      "Deployment on an appropriate free hosting platform",
      "Domain-connection assistance when the domain already exists",
    ],
    typicalStructure:
      "Hero / Context / Offer or Services / Evidence or Highlights / Business Details / Contact",
    timeline:
      "Indicatively 4-5 business days after content is complete and the scope is approved.",
    revisions: "1 agreed revision round",
    exclusions: [
      "Domain and paid-hosting fees",
      "Full branding",
      "Professional photography",
      "Advanced copywriting",
      "Database",
      "Admin dashboard",
      "Payments",
      "User accounts",
      "Advanced booking",
      "Ongoing maintenance",
      "Unlimited revisions",
    ],
    cta: "Discuss a Focused Website",
  },
  {
    index: "02",
    slug: "business-website",
    name: "Business Website",
    sourceName: "Business Website",
    startingPrice: "₹9,000",
    bestFor:
      "Service businesses and professional teams that need several pages or a more structured explanation of their work.",
    summary:
      "A structured multi-page presence for services, credibility and clearer contact paths.",
    coreScope: [
      "Up to five core pages or equivalent structured scope",
      "Custom homepage",
      "About or context page",
      "Service structure",
      "Contact page",
      "WhatsApp or contact flow",
      "Maps, location or hours where relevant",
      "Gallery or work evidence",
      "Team section where relevant",
      "Real testimonials only if supplied",
      "Responsive implementation",
      "Basic page metadata and social sharing metadata",
      "Deployment and domain assistance",
    ],
    timeline:
      "Indicatively 7-10 business days after content is complete and the scope is approved.",
    revisions: "2 agreed revision rounds",
    exclusions: [
      "Domain and hosting fees",
      "Premium third-party tools",
      "Full copywriting and photography",
      "Database",
      "Admin dashboard",
      "Authentication",
      "Payments",
      "Ecommerce",
      "Advanced booking",
      "Unlimited content entry",
      "Ongoing maintenance unless agreed",
    ],
    cta: "Discuss a Business Website",
  },
  {
    index: "03",
    slug: "menu-showcase-website",
    name: "Menu & Showcase Website",
    sourceName: "Menu & Showcase Website",
    startingPrice: "₹12,000",
    bestFor:
      "Cafes, restaurants, bakeries, product sellers and businesses with a structured menu, catalogue or price-led offer.",
    summary:
      "A content-led menu, catalogue or offer experience with clear WhatsApp enquiry or ordering paths.",
    coreScope: [
      "Custom homepage",
      "Structured menu or catalogue categories",
      "Item or service presentation",
      "Prices",
      "Featured items or offers",
      "Gallery",
      "Location and hours",
      "WhatsApp enquiry or order-summary flow",
      "Optional cart-style WhatsApp summary where appropriate to the agreed scope",
      "Responsive implementation",
      "Basic page metadata and social sharing metadata",
      "Deployment and domain assistance",
    ],
    importantBoundary:
      "The standard scope is content-driven. It does not automatically include an admin dashboard or database-backed content management.",
    timeline:
      "Indicatively 8-12 business days after content and item details are complete and the scope is approved.",
    revisions: "2 agreed revision rounds",
    exclusions: [
      "Admin dashboard",
      "Database content management",
      "Inventory management",
      "Customer accounts",
      "Delivery tracking",
      "Online payments",
      "Full ecommerce checkout",
      "Third-party ordering fees",
      "Unlimited item entry",
      "Ongoing maintenance unless agreed",
    ],
    cta: "Discuss a Menu & Showcase Website",
  },
  {
    index: "04",
    slug: "custom-product-web-system",
    name: "Custom Product or Web System",
    sourceName: "Custom Web Build",
    startingPrice: "₹20,000",
    qualification: "Final quote after product and technical scope review.",
    bestFor:
      "Products and business systems that need editable workflows, data, authentication, administration, integrations or functionality beyond a content-led website.",
    summary:
      "Scope-reviewed product and system work where the interface, data and operating logic must fit together.",
    coreScope: [
      "Product and workflow discovery",
      "Custom interface architecture",
      "Frontend and application implementation",
      "Data modelling",
      "Authentication",
      "Permissions",
      "Administrative workflows",
      "Integrations where included in the approved scope",
      "Deployment approach",
      "Release verification",
    ],
    systemAreas: [
      "Administrative workflows",
      "Database-backed content",
      "Authentication and permissions",
      "Dashboards or operational interfaces",
      "Third-party integrations",
      "Custom ordering or business automation",
    ],
    importantBoundary:
      "The starting price is not a fixed price for every listed system feature. Scope is confirmed after product and technical review.",
    timeline: "Scope-dependent.",
    revisions: "Defined in the approved proposal",
    exclusions: [
      "Any workflow, integration, third-party service, paid tool or operational responsibility not included in the approved scope is excluded.",
    ],
    cta: "Request a Custom Scope Review",
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

export const engagementFaqs: FAQItem[] = [
  {
    question: "Are the listed prices fixed?",
    answer:
      "No. They are starting prices for the described scope. Final cost is confirmed after pages, content, workflows, integrations and responsibilities are agreed.",
  },
  {
    question: "When does the delivery timeline begin?",
    answer:
      "After the scope is approved and all required content, access and decisions needed for the agreed work are available.",
  },
  {
    question: "Are domain and hosting costs included?",
    answer:
      "Domain fees, paid hosting, premium tools and third-party services are separate unless explicitly included in the proposal.",
  },
  {
    question: "Who owns the domain and accounts?",
    answer:
      "The client should own the domain and important service accounts. Deodar can assist with setup and connection without taking permanent ownership.",
  },
  {
    question: "What counts as a revision?",
    answer:
      "A revision is a grouped round of corrections within the approved structure and scope. New pages, workflows or major direction changes are additional scope.",
  },
  {
    question: "Does the menu option include an admin dashboard?",
    answer:
      "Not by default. The standard Menu & Showcase scope is content-driven. Editable administration and database-backed management require custom scope.",
  },
  {
    question: "Can an existing website or product be rebuilt?",
    answer:
      "Yes. Existing systems can be reviewed for structural, interface or technical improvement. The required scope depends on the current implementation and intended outcome.",
  },
  {
    question: "Is maintenance included after launch?",
    answer:
      "Not automatically. Maintenance, ongoing updates and operational support are included only when explicitly agreed.",
  },
];
