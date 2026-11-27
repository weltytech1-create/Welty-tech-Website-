export interface ServiceItem {
  num: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  bgImage: string;
  deliverables: string[];
  process: { step: string; detail: string }[];
}

export interface ServicePillar {
  label: string;
  description: string;
  href: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: "timezone" | "spark" | "flexible" | "spectrum";
}

export interface BrandLogo {
  id: string;
  name: string;
  logoUrl: string;
  href?: string;
  tooltip: string;
}

export type ProjectCategory = "Websites" | "Applications" | "Branding";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  caption: string;
  categories: ProjectCategory[];
  client: string;
  year: string;
  role: string;
  href: string;
  imageUrl: string;
  videoUrl: string;
  column: "left" | "right";
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
}

export interface TestimonialItem {
  id: string;
  company: string;
  author?: string;
  role?: string;
  quote: string;
  logoType: "zelt" | "loanpro" | "potion" | "livespot" | "sca";
}

export interface BentoTile {
  id: string;
  tone: "lime" | "orange" | "peach";
  stat?: string;
  label?: string;
  title?: string;
  icon: "star" | "trophy" | "globe" | "briefcase" | "orbit";
}

export type BlogCategory =
  | "Product Design"
  | "Custom Software"
  | "ERP & CRM"
  | "AI & Automation"
  | "Private Cloud"
  | "Integrations & APIs";

export interface BlogEntry {
  id: string;
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
  imageUrl: string;
  serviceHref: string;
  serviceLabel: string;
  body: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  paragraphs: string[];
}

export const SERVICE_DROPDOWN_LINKS = [
  { label: "Digital Product Design", href: "/services/product-design" },
  { label: "Custom Software Development", href: "/services/custom-software-development" },
  { label: "ERP & CRM Solutions", href: "/services/erp-crm-solutions" },
  { label: "AI Solutions & Intelligent Automation", href: "/services/ai-solutions-automation" },
  { label: "On-Premises & Private Cloud Deployment", href: "/services/on-premises-private-cloud" },
  { label: "System Integration & API Development", href: "/services/system-integration-api" },
];

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const HERO_CONTENT = {
  title: "Digital product design, software & AI",
  subtitle:
    "Welty Tech brings together thoughtful design, modern software engineering and artificial intelligence to help businesses build digital products and streamline operations.",
};

export const PREVIEW_BANNER = {
  title: "AI & Motion Showcase",
  description:
    "Intelligent digital products, custom software platforms and AI-powered experiences built for modern businesses",
  ctaLabel: "Explore Services",
  ctaHref: "/services",
  videoUrl: "/assets/showreel/welty-hero.mp4",
  posterUrl: "/assets/showreel/welty-hero-poster.jpg",
};

export const WHAT_WE_DO = {
  label: "ABOUT WELTY TECH",
  text: "Welty Tech is a technology company focused on digital product design, custom software development and artificial intelligence. We bring together design, modern engineering and intelligent technologies to help businesses build digital products, streamline operations and solve real-world business challenges.",
};

export const SERVICES_FEATURES: ServiceItem[] = [
  {
    num: "01",
    slug: "product-design",
    title: "Digital Product Design",
    tagline: "Intuitive, scalable and user-focused digital experiences.",
    description:
      "We design intuitive, scalable and user-focused digital experiences that turn ideas into products people love to use.",
    href: "/services/product-design",
    bgImage: "/assets/services/1.webp",
    deliverables: [
      "UX Research & Strategy",
      "UI/UX Design",
      "Wireframing & Prototyping",
      "Figma-Based Interface Design",
      "Design Systems & Component Libraries",
      "Web & Mobile Application Design",
    ],
    process: [
      {
        step: "01 / UX Research & Strategy",
        detail:
          "Stakeholder workshops, user research, and journey mapping to align business outcomes with real user behavior.",
      },
      {
        step: "02 / Wireframing & Prototyping",
        detail:
          "Structuring key workflows and validating interactive Figma prototypes before full visual polish.",
      },
      {
        step: "03 / Design Systems & Handoff",
        detail:
          "Scalable component libraries and tokenized web and mobile interfaces ready for engineering.",
      },
    ],
  },
  {
    num: "02",
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Tailored software engineered for complex business challenges.",
    description:
      "We engineer tailored software solutions that solve complex business challenges, improve operations and support long-term growth.",
    href: "/services/custom-software-development",
    bgImage: "/assets/services/2.webp",
    deliverables: [
      "Custom Web Application Development",
      "Mobile Application Development",
      "Enterprise Software Development",
      "SaaS Platform Development",
      "AI-Powered Application Development",
      "Backend & Database Engineering",
    ],
    process: [
      {
        step: "01 / Architecture & Discovery",
        detail:
          "Defining technical architecture, data models, and scalability targets around your business workflows.",
      },
      {
        step: "02 / Full-Stack Engineering",
        detail:
          "Iterative sprints across web, mobile, backend services, and AI-powered application modules.",
      },
      {
        step: "03 / QA, Launch & Evolution",
        detail:
          "Automated testing, security hardening, production deployment, and long-term platform support.",
      },
    ],
  },
  {
    num: "03",
    slug: "erp-crm-solutions",
    title: "ERP & CRM Solutions",
    tagline: "Intelligent business management systems unified around your data.",
    description:
      "We build and integrate intelligent business management systems that bring operations, customers and organisational data together.",
    href: "/services/erp-crm-solutions",
    bgImage: "/assets/services/3.webp",
    deliverables: [
      "Custom ERP Development",
      "CRM Development & Implementation",
      "Business Process Automation",
      "Inventory & Operations Management",
      "Customer Relationship Management",
      "ERP & CRM Customisation",
    ],
    process: [
      {
        step: "01 / Operations & Data Audit",
        detail:
          "Mapping inventory, finance, sales pipelines, and cross-team operational bottlenecks.",
      },
      {
        step: "02 / System Build & Customisation",
        detail:
          "Tailoring ERP and CRM modules, approval rules, and automated business processes to your workflows.",
      },
      {
        step: "03 / Rollout & Team Adoption",
        detail:
          "Clean data migration, role-based access configuration, and team onboarding with zero downtime.",
      },
    ],
  },
  {
    num: "04",
    slug: "ai-solutions-automation",
    title: "AI Solutions & Intelligent Automation",
    tagline: "Applied AI that automates workflows and powers smarter decisions.",
    description:
      "We integrate artificial intelligence into business operations to automate workflows, enhance decision-making and create smarter digital experiences.",
    href: "/services/ai-solutions-automation",
    bgImage: "/assets/services/4.webp",
    deliverables: [
      "AI Agent Development",
      "AI Chatbots & Virtual Assistants",
      "Intelligent Workflow Automation",
      "Large Language Model (LLM) Integration",
      "Document Intelligence & Processing",
      "AI-Powered Business Applications",
    ],
    process: [
      {
        step: "01 / AI Opportunity Mapping",
        detail:
          "Identifying high-ROI manual workflows, document bottlenecks, and customer touchpoints ready for AI.",
      },
      {
        step: "02 / Agent & LLM Engineering",
        detail:
          "Building reliable AI agents, RAG pipelines, document processors, and guarded LLM integrations.",
      },
      {
        step: "03 / Evaluation & Deployment",
        detail:
          "Benchmarking accuracy, latency, and security controls before deploying into live operations.",
      },
    ],
  },
  {
    num: "05",
    slug: "on-premises-private-cloud",
    title: "On-Premises & Private Cloud Deployment",
    tagline: "Full infrastructure control on dedicated and client-managed servers.",
    description:
      "We develop and deploy software within dedicated infrastructure, private cloud environments and client-managed servers, giving businesses greater control over their technology and data.",
    href: "/services/on-premises-private-cloud",
    bgImage: "/assets/services/5.webp",
    deliverables: [
      "On-Premises Software Development & Deployment",
      "Private Cloud Infrastructure",
      "Self-Hosted AI Solutions",
      "Hybrid Cloud Architecture",
      "DevOps & CI/CD Implementation",
      "Infrastructure Configuration & Maintenance",
    ],
    process: [
      {
        step: "01 / Security & Topology Design",
        detail:
          "Designing compliant on-premises, private cloud, or hybrid infrastructure aligned with governance policies.",
      },
      {
        step: "02 / Automated Provisioning & CI/CD",
        detail:
          "Setting up reproducible deployments, container orchestration, and self-hosted AI model serving.",
      },
      {
        step: "03 / Monitoring & Maintenance",
        detail:
          "24/7 observability, patching, backup automation, and ongoing infrastructure reliability.",
      },
    ],
  },
  {
    num: "06",
    slug: "system-integration-api",
    title: "System Integration & API Development",
    tagline: "Seamless connectivity across applications, databases, and enterprise platforms.",
    description:
      "We connect applications, platforms and business systems through reliable integrations, enabling seamless communication and unified business operations.",
    href: "/services/system-integration-api",
    bgImage: "/assets/services/1.webp",
    deliverables: [
      "Custom API Development",
      "Third-Party Software Integration",
      "ERP & CRM Integrations",
      "AI & Application Integrations",
      "Database Integration & Migration",
      "Enterprise System Connectivity",
    ],
    process: [
      {
        step: "01 / System & Schema Mapping",
        detail:
          "Auditing legacy databases, third-party APIs, and event flows to eliminate data silos.",
      },
      {
        step: "02 / Resilient API & Middleware Build",
        detail:
          "Engineering versioned REST/GraphQL APIs, webhook pipelines, and fault-tolerant sync layers.",
      },
      {
        step: "03 / Migration & Live Verification",
        detail:
          "Zero-data-loss database migrations, end-to-end integration testing, and live SLA monitoring.",
      },
    ],
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    label: "DIGITAL PRODUCT DESIGN",
    description:
      "We combine UX research, Figma-based interface craft, and scalable design systems to create web and mobile products people love to use.",
    href: "/services/product-design",
  },
  {
    label: "SOFTWARE, ERP & CRM",
    description:
      "From bespoke SaaS platforms and enterprise web applications to custom ERP and CRM systems, we engineer software aligned with real business operations.",
    href: "/services/custom-software-development",
  },
  {
    label: "AI, CLOUD & INTEGRATIONS",
    description:
      "We deploy intelligent AI automation, private-cloud and on-premises infrastructure, and reliable API integrations that unify your entire technology stack.",
    href: "/services/ai-solutions-automation",
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "timezones",
    title: "DIRECT SENIOR COLLABORATION",
    description:
      "Work directly with the product designers, software architects, and AI engineers building your platform — fast feedback loops with zero agency layers.",
    icon: "timezone",
  },
  {
    id: "impossible",
    title: "MODERN DESIGN, CODE & AI",
    description:
      "Fresh to the market with a modern stack, we unite Figma-first UI/UX, full-stack software engineering, and practical AI agents built for real business workflows.",
    icon: "spark",
  },
  {
    id: "flexible",
    title: "FLEXIBLE WORK TERMS",
    description:
      "Whether you need a rapid 0→1 product sprint, custom ERP/CRM deployment, or dedicated engineering support, we structure engagements around your goals.",
    icon: "flexible",
  },
  {
    id: "spectrum",
    title: "FULL SPECTRUM OF SERVICES",
    description:
      "From UX research and custom software to self-hosted private cloud, AI automation, and API integrations, Welty Tech delivers everything in-house.",
    icon: "spectrum",
  },
];

export const BRAND_LOGOS: BrandLogo[] = [
  {
    id: "mapbox",
    name: "mapbox",
    logoUrl: "/assets/brands/mapbox.svg",
    tooltip: "Location data platform & developer mapping tools.",
  },
  {
    id: "cisco",
    name: "cisco",
    logoUrl: "/assets/brands/cisco.svg",
    href: "/projects/cisco",
    tooltip: "Building a scalable design foundation for a global technology leader.",
  },
  {
    id: "spark",
    name: "spark",
    logoUrl: "/assets/brands/spark.svg",
    tooltip: "New Zealand's leading telecommunications & digital services provider.",
  },
  {
    id: "tradingview",
    name: "tradingview",
    logoUrl: "/assets/brands/tradingview.svg",
    tooltip: "Charting platform and social network for global financial traders.",
  },
  {
    id: "sca",
    name: "sca",
    logoUrl: "/assets/brands/sca.svg",
    href: "/projects/sca",
    tooltip: "Modernizing the digital presence of a nationwide industry leader.",
  },
  {
    id: "puntopago",
    name: "puntopago",
    logoUrl: "/assets/brands/puntopago.svg",
    href: "/projects/puntopago",
    tooltip: "Next-generation fintech payment ecosystem and merchant experience.",
  },
  {
    id: "flipaclip",
    name: "flipaclip",
    logoUrl: "/assets/brands/flipaclip.svg",
    href: "/projects/flipaclip",
    tooltip: "Bringing the creativity of millions of artists into an immersive web experience.",
  },
  {
    id: "etihad",
    name: "etihad",
    logoUrl: "/assets/brands/etihad.svg",
    tooltip: "Digital banking & mobile financial platform in the Middle East.",
  },
  {
    id: "raiffeisen",
    name: "raiffeisen",
    logoUrl: "/assets/brands/raiffeisen.svg",
    tooltip: "Enterprise banking interfaces and financial product design.",
  },
  {
    id: "ikea",
    name: "ikea",
    logoUrl: "/assets/brands/ikea.svg",
    tooltip: "Interactive digital retail experiences and spatial commerce.",
  },
  {
    id: "mcdonalds",
    name: "mcdonalds",
    logoUrl: "/assets/brands/mcdonalds.svg",
    tooltip: "High-volume consumer ordering and mobile campaign experiences.",
  },
  {
    id: "housing",
    name: "housing",
    logoUrl: "/assets/brands/housing.svg",
    tooltip: "Real estate discovery platform and property search experience.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "puntopago",
    slug: "puntopago",
    title: "Punto Pago",
    caption:
      "The first super-app in Latin America that lets users pay, transfer, and manage bills effortlessly",
    categories: ["Applications", "Branding"],
    client: "Punto Pago",
    year: "2025",
    role: "Product Design, Mobile App, Brand Identity",
    href: "/projects/puntopago",
    imageUrl: "/assets/projects/puntopago-cover.jpg",
    videoUrl: "/assets/projects/puntopago-cover.mp4",
    column: "left",
    challenge:
      "Legacy financial kiosks and fragmented payment apps made everyday utility payments slow and confusing across Latin America.",
    solution:
      "We crafted a bold fintech identity and intuitive mobile super-app combining QR payments, bill tracking, and instant transfers with tactile motion feedback.",
    metrics: [
      { value: "2.4x", label: "Faster Checkout Flow" },
      { value: "1.2M+", label: "Monthly Active Users" },
      { value: "4.9★", label: "App Store Rating" },
    ],
  },
  {
    id: "sca",
    slug: "sca",
    title: "SCA",
    caption: "Modernizing the digital presence of a nationwide industry leader",
    categories: ["Websites", "Branding"],
    client: "Sweeping Corp of America",
    year: "2025",
    role: "Web Design, Creative Development, Visual System",
    href: "/projects/sca",
    imageUrl: "/assets/projects/sca-cover.jpg",
    videoUrl: "/assets/projects/sca-cover.mp4",
    column: "left",
    challenge:
      "America's largest power sweeping enterprise needed a modern digital flagship reflecting its national scale and sustainability focus.",
    solution:
      "Welty built an editorial web platform featuring interactive 3D fleet visuals, streamlined municipal quote flows, and clear service discovery.",
    metrics: [
      { value: "+140%", label: "Enterprise Quote Leads" },
      { value: "0.8s", label: "First Contentful Paint" },
      { value: "42", label: "States Covered" },
    ],
  },
  {
    id: "flipaclip",
    slug: "flipaclip",
    title: "FlipaClip",
    caption:
      "Bringing the creativity of millions of artists into an immersive web experience",
    categories: ["Websites", "Applications"],
    client: "Visual Blasters / FlipaClip",
    year: "2025",
    role: "Interactive Web, Motion Design, Product Showcase",
    href: "/projects/flipaclip",
    imageUrl: "/assets/projects/flipaclip-cover.jpg",
    videoUrl: "/assets/projects/flipaclip-cover.mp4",
    column: "left",
    challenge:
      "Translate the joy of frame-by-frame 2D animation into a browser experience that celebrates FlipaClip's global creator community.",
    solution:
      "We designed a tactile, brush-inspired web platform packed with playable creator loops, tool demos, and effortless cross-device onboarding.",
    metrics: [
      { value: "50M+", label: "Creator Downloads" },
      { value: "+68%", label: "Web-to-App Conversion" },
      { value: "SOTD", label: "Awwwards Recognition" },
    ],
  },
  {
    id: "zelt",
    slug: "zelt",
    title: "Zelt",
    caption:
      "Designing a product that brings payroll, HR and IT together in one seamless experience",
    categories: ["Websites", "Branding"],
    client: "Zelt",
    year: "2024",
    role: "Rebranding, Web Design, Motion Engineering",
    href: "/projects/zelt",
    imageUrl: "/assets/projects/zelt-cover.jpg",
    videoUrl: "/assets/projects/zelt-cover.mp4",
    column: "left",
    challenge:
      "B2B HR and IT software often feels sterile and fragmented. Zelt needed a flagship brand and site worthy of a unified modern operating system.",
    solution:
      "We created an unmistakable editorial system with fluid interactive product modules that explain payroll, device management, and onboarding in seconds.",
    metrics: [
      { value: "SOTD", label: "Awwwards Site of the Day" },
      { value: "+95%", label: "Demo Requests" },
      { value: "3-in-1", label: "Unified Platform" },
    ],
  },
  {
    id: "cisco",
    slug: "cisco",
    title: "Cisco",
    caption:
      "Building a scalable design foundation for one of the world's technology leaders",
    categories: ["Applications", "Branding"],
    client: "Cisco",
    year: "2024",
    role: "Design System, UI Architecture, Prototyping",
    href: "/projects/cisco",
    imageUrl: "/assets/projects/cisco-cover.jpg",
    videoUrl: "/assets/projects/cisco-cover.mp4",
    column: "left",
    challenge:
      "Unify disparate enterprise networking dashboards under one cohesive, accessible visual language without slowing product teams.",
    solution:
      "Welty architected modular component tokens, high-density data patterns, and interactive guidelines adopted across multiple product suites.",
    metrics: [
      { value: "120+", label: "Core UI Components" },
      { value: "40%", label: "Faster Feature Shipping" },
      { value: "AA", label: "WCAG Contrast Compliance" },
    ],
  },
  {
    id: "find",
    slug: "find",
    title: "Find",
    caption:
      "Building a complete real estate brand and digital platform from the ground up",
    categories: ["Websites", "Branding"],
    client: "FIND Real Estate",
    year: "2025",
    role: "Brand Identity, Web Platform, UX/UI Design",
    href: "/projects/find",
    imageUrl: "/assets/projects/find-cover.jpg",
    videoUrl: "/assets/projects/find-cover.mp4",
    column: "right",
    challenge:
      "Luxury property buyers expect architectural calm and clarity, yet real estate portals are overwhelmed by clutter and slow filters.",
    solution:
      "We crafted an editorial real estate brand and fast map-first browsing platform where photography, neighborhood stories, and listings shine.",
    metrics: [
      { value: "3.1x", label: "Session Duration" },
      { value: "+110%", label: "Qualified Inquiries" },
      { value: "100%", label: "Custom Design System" },
    ],
  },
  {
    id: "daoway",
    slug: "daoway",
    title: "Daoway",
    caption:
      "Turning an ambitious idea into a complete mobile product and brand from scratch",
    categories: ["Applications", "Branding"],
    client: "DaoWay",
    year: "2025",
    role: "0→1 Product Design, Branding, Mobile UI",
    href: "/projects/daoway",
    imageUrl: "/assets/projects/daoway-cover.jpg",
    videoUrl: "/assets/projects/daoway-cover.mp4",
    column: "right",
    challenge:
      "Help modern travelers plan multi-stop itineraries and collaborative bookings without juggling spreadsheets and chat threads.",
    solution:
      "We designed a serene yet playful mobile app with smart time-block cards, live calendar previews, and a cohesive visual identity.",
    metrics: [
      { value: "60s", label: "Avg. Trip Setup" },
      { value: "92%", label: "Onboarding Completion" },
      { value: "iOS/Web", label: "Cross-Platform System" },
    ],
  },
  {
    id: "riyadh",
    slug: "riyadh",
    title: "Riyadh",
    caption:
      "Creating a digital experience worthy of one of the world's fastest-growing capitals",
    categories: ["Websites"],
    client: "Riyadh Season / Official Portal",
    year: "2024",
    role: "Creative Direction, Web Design, Motion",
    href: "/projects/riyadh",
    imageUrl: "/assets/projects/riyadh-cover.jpg",
    videoUrl: "/assets/projects/riyadh-cover.mp4",
    column: "right",
    challenge:
      "Showcase architectural landmarks, cultural events, and tourism guides for millions of global visitors in an inspiring digital format.",
    solution:
      "Welty delivered a bilingual, media-rich web destination with fluid section choreography and lightning-fast mobile discovery.",
    metrics: [
      { value: "5M+", label: "Seasonal Visitors" },
      { value: "2", label: "Bilingual Layouts" },
      { value: "99", label: "Performance Score" },
    ],
  },
  {
    id: "qvino",
    slug: "qvino",
    title: "Qvino",
    caption:
      "Building a connected ecosystem where discovering, learning and buying wine feels effortless",
    categories: ["Applications", "Websites"],
    client: "Qvino",
    year: "2024",
    role: "Mobile App, E-Commerce UX, Motion",
    href: "/projects/qvino",
    imageUrl: "/assets/projects/qvino-cover.jpg",
    videoUrl: "/assets/projects/qvino-cover.mp4",
    column: "right",
    challenge:
      "Demystify fine wine discovery for curious buyers while preserving sommelier-grade provenance and tasting depth.",
    solution:
      "We built an approachable visual system with interactive flavor profiles, scan-to-learn bottle views, and one-tap cellar ordering.",
    metrics: [
      { value: "+84%", label: "Repeat Orders" },
      { value: "4.8★", label: "User Satisfaction" },
      { value: "10k+", label: "Curated Labels" },
    ],
  },
  {
    id: "potion",
    slug: "potion",
    title: "Potion",
    caption: "Reimagining a B2B product through branding, storytelling and motion",
    categories: ["Websites", "Branding"],
    client: "Potion",
    year: "2024",
    role: "Brand Refresh, Marketing Site, 3D Motion",
    href: "/projects/potion",
    imageUrl: "/assets/projects/potion-cover.jpg",
    videoUrl: "/assets/projects/potion-cover.mp4",
    column: "right",
    challenge:
      "Stand out in the crowded AI video outreach market with a warm, human, and unmistakable brand identity.",
    solution:
      "We paired expressive 3D motion assets with crisp product storytelling and interactive demo previews that doubled trial signups.",
    metrics: [
      { value: "2.1x", label: "Trial Signups" },
      { value: "+55%", label: "Landing Engagement" },
      { value: "14d", label: "Campaign Rollout" },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "zelt",
    company: "zelt.",
    author: "Chris P.",
    role: "Founder & CEO, Zelt",
    logoType: "zelt",
    quote:
      "Welty completed a rebranding of our company website zelt.app. The quality of the team's work exceeded my expectations, and since completion we have won a number of awards, including the Site of Day awwward.",
  },
  {
    id: "loanpro",
    company: "LoanPro",
    author: "Colton P.",
    role: "VP of Marketing, LoanPro",
    logoType: "loanpro",
    quote:
      "We worked with the Welty team over a several month project on a complete website rehaul, that included new copy, design, and code. Several things stood out in our interaction with Welty.",
  },
  {
    id: "potion",
    company: "Potion",
    author: "Kanad B.",
    role: "Co-founder, Potion",
    logoType: "potion",
    quote:
      "Welty was engaged in developing our website and additional marketing materials, including theming and various creative assignments. Their efforts were highly satisfactory, and we were impressed with the Welty team's collaborative approach.",
  },
  {
    id: "livespot",
    company: "LIVESPOT",
    author: "Elena M.",
    role: "Head of Digital, Livespot",
    logoType: "livespot",
    quote:
      "I'd like to extend a heartfelt gratitude to the Welty team for their exceptional support throughout the website development process. Your responsiveness to our requests has been invaluable, and we're thrilled with the end result.",
  },
  {
    id: "sca",
    company: "SCA",
    author: "Mark R.",
    role: "Director of Brand, SCA",
    logoType: "sca",
    quote:
      "We had a great experience working with Welty on our website redesign project. Their team brought a strong mix of creativity, technical skill and strategic thinking to the project.",
  },
];

export const WHY_WELTY = {
  label: "WHY WELTY TECH",
  text: "Our Vision: To make technology more accessible, intelligent and useful for businesses through thoughtful design, innovative software and practical AI solutions. Welty Tech pairs product craft with modern engineering to help ambitious companies build what's next.",
};

export const BENTO_TILES: BentoTile[] = [
  {
    id: "years",
    tone: "lime",
    stat: "0→1",
    label: "PRODUCT DESIGN TO PRODUCTION",
    icon: "star",
  },
  {
    id: "awards",
    tone: "peach",
    title: "Thoughtful UX research, UI/UX & Figma-based design",
    icon: "trophy",
  },
  {
    id: "projects",
    tone: "orange",
    stat: "6",
    label: "CORE SOFTWARE, CLOUD & AI DISCIPLINES",
    icon: "globe",
  },
  {
    id: "partnerships",
    tone: "peach",
    title: "Custom ERP/CRM, AI agents & enterprise API connectivity",
    icon: "briefcase",
  },
  {
    id: "inhouse",
    tone: "peach",
    title: "On-premises, private cloud & in-house delivery",
    icon: "orbit",
  },
];

export const ABOUT_CONTENT = {
  heroTitle: "Engineering What's Next",
  goalLabel: "ABOUT WELTY TECH",
  goalText:
    "Welty Tech is a technology company focused on digital product design, custom software development and artificial intelligence. We bring together design, modern engineering and intelligent technologies to help businesses build digital products, streamline operations and solve real-world business challenges.",
  statementTitle: "Accessible, intelligent and useful technology",
  statementText:
    "Our Vision: To make technology more accessible, intelligent and useful for businesses through thoughtful design, innovative software and practical AI solutions.",
  stats: [
    { value: "6", label: "core engineering & AI disciplines" },
    { value: "0→1", label: "product design to deployment" },
    { value: "100%", label: "in-house design, code & cloud ownership" },
  ],
  awardsTitle:
    "To make technology more accessible, intelligent and useful for businesses",
  awardsText:
    "Through thoughtful design, innovative software engineering and practical AI solutions, Welty Tech helps companies modernize workflows, launch standout digital products, and retain full control over their infrastructure and data.",
  foundersLabel: "FRESH TO THE MARKET",
  foundersTitle: "Welty Tech — Engineering What's Next.",
  foundersParagraphs: [
    "Welty Tech enters the market with a clear, practical purpose: bringing digital product design, custom software development and artificial intelligence together under one focused engineering team — free from legacy bloat.",
    "Whether designing intuitive Figma-based interfaces, engineering ERP & CRM platforms, deploying AI agents and LLM workflows, or configuring secure on-premises and private cloud infrastructure and API integrations, we build technology aligned with real business needs.",
  ],
};

export const BLOG_CATEGORIES: ("All Posts" | BlogCategory)[] = [
  "All Posts",
  "Product Design",
  "Custom Software",
  "ERP & CRM",
  "AI & Automation",
  "Private Cloud",
  "Integrations & APIs",
];

export const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: "digital-product-design-guide",
    slug: "ux-research-and-figma-design-systems-guide",
    category: "Product Design",
    title: "How UX Research & Figma Design Systems Accelerate Digital Product Design",
    excerpt:
      "Why pairing user research, interactive wireframing, and tokenized Figma component libraries turns product ideas into interfaces users adopt fast.",
    date: "11/24/2026",
    readTime: "6 min read",
    href: "/blog/ux-research-and-figma-design-systems-guide",
    imageUrl: "/assets/blog/art-1.webp",
    serviceHref: "/services/product-design",
    serviceLabel: "Explore Digital Product Design",
    body: [
      "Strong digital products rarely start in visual polish tools—they begin with structured UX research & strategy. Understanding real user tasks, decision friction, and business goals prevents teams from building features nobody needs.",
      "Before engineering writes a single component, interactive wireframing and clickable Figma prototypes validate navigation hierarchies, onboarding flows, and edge cases with stakeholders and test users.",
      "Once core flows are proven, Welty Tech translates those screens into Figma-based interface systems backed by reusable design tokens, responsive spacing scales, and accessible component libraries for both web and mobile applications.",
      "The payoff is measurable: product designers and software engineers work from one shared system, shipping new features faster while keeping every screen consistent and intuitive.",
    ],
  },
  {
    id: "custom-software-architecture",
    slug: "building-scalable-web-mobile-enterprise-software",
    category: "Custom Software",
    title: "Engineering Custom Web, Mobile & Enterprise Software Built to Scale",
    excerpt:
      "How tailored SaaS platforms, AI-ready backends, and clean database architecture solve complex operational bottlenecks that off-the-shelf tools cannot.",
    date: "11/18/2026",
    readTime: "7 min read",
    href: "/blog/building-scalable-web-mobile-enterprise-software",
    imageUrl: "/assets/blog/art-2.webp",
    serviceHref: "/services/custom-software-development",
    serviceLabel: "Explore Custom Software Development",
    body: [
      "Growing companies inevitably outgrow spreadsheets and rigid SaaS tools that force teams into awkward manual workarounds. Custom software engineering gives you architecture shaped directly around how your business operates.",
      "Whether building multi-tenant SaaS platforms, customer-facing web and mobile applications, or internal enterprise tools, long-term reliability depends on clean backend and database engineering from day one.",
      "At Welty Tech, we design modular APIs, strict data schemas, and AI-powered application modules that integrate smoothly with existing systems while remaining fast, maintainable, and ready for future scale.",
    ],
  },
  {
    id: "practical-ai-agents-automation",
    slug: "practical-ai-agents-llms-and-workflow-automation",
    category: "AI & Automation",
    title: "Practical AI Agents, LLM Integration & Document Automation for Modern Businesses",
    excerpt:
      "Moving beyond hype: deploying reliable AI agents, chatbots, document intelligence, and LLM workflows that deliver measurable daily efficiency.",
    date: "11/12/2026",
    readTime: "6 min read",
    href: "/blog/practical-ai-agents-llms-and-workflow-automation",
    imageUrl: "/assets/blog/art-3.webp",
    serviceHref: "/services/ai-solutions-automation",
    serviceLabel: "Explore AI Solutions & Intelligent Automation",
    body: [
      "Artificial intelligence creates real ROI when embedded directly into day-to-day operational bottlenecks rather than bolted on as a novelty widget.",
      "High-impact starting points include AI chatbots and virtual assistants grounded in verified company knowledge, document intelligence pipelines that extract structured data from invoices or forms, and intelligent workflow automation connecting approvals across teams.",
      "Welty Tech engineers guardrailed Large Language Model (LLM) integrations and custom AI agents with clear audit logs, human-in-the-loop verification, and latency monitoring built right into your business applications.",
    ],
  },
  {
    id: "erp-crm-unification",
    slug: "custom-erp-and-crm-for-unified-operations",
    category: "ERP & CRM",
    title: "Custom ERP & CRM Solutions: Unifying Operations, Inventory & Customer Workflows",
    excerpt:
      "Eliminate fragmented spreadsheets by connecting inventory, operations, sales pipelines, and customer relationships in one tailored system.",
    date: "11/05/2026",
    readTime: "6 min read",
    href: "/blog/custom-erp-and-crm-for-unified-operations",
    imageUrl: "/assets/services/3.webp",
    serviceHref: "/services/erp-crm-solutions",
    serviceLabel: "Explore ERP & CRM Solutions",
    body: [
      "When finance, inventory, operations, and sales run inside disconnected tools, leadership loses real-time visibility and teams waste hours reconciling duplicate records.",
      "Custom ERP development and tailored CRM implementation bring purchase orders, stock movements, billing approvals, and customer lifecycle tracking into a single source of truth.",
      "At Welty Tech, we customize ERP & CRM workflows around your exact business rules and automate repetitive handoffs—so teams spend less time on data entry and more time serving customers.",
    ],
  },
  {
    id: "private-cloud-self-hosted-ai",
    slug: "on-premises-and-private-cloud-deployment-for-data-control",
    category: "Private Cloud",
    title: "On-Premises & Private Cloud Deployment: Full Data Control & Self-Hosted AI",
    excerpt:
      "How dedicated servers, private cloud environments, DevOps automation, and self-hosted AI models protect sensitive business data.",
    date: "10/28/2026",
    readTime: "7 min read",
    href: "/blog/on-premises-and-private-cloud-deployment-for-data-control",
    imageUrl: "/assets/services/5.webp",
    serviceHref: "/services/on-premises-private-cloud",
    serviceLabel: "Explore On-Premises & Private Cloud",
    body: [
      "For regulated industries and security-conscious enterprises, sending proprietary data to public multi-tenant cloud services or external LLM APIs is often a non-starter.",
      "On-premises deployment and private cloud infrastructure give your organization complete authority over where applications run, how sensitive databases are isolated, and who accesses internal models.",
      "Welty Tech configures containerized private clouds, hybrid architectures, automated CI/CD pipelines, and self-hosted AI inference environments on client-managed or dedicated hardware with predictable performance.",
    ],
  },
  {
    id: "system-integration-custom-apis",
    slug: "system-integration-and-custom-api-architecture",
    category: "Integrations & APIs",
    title: "System Integration & Custom APIs: Connecting ERP, CRM & AI Platforms Seamlessly",
    excerpt:
      "A practical approach to custom API development, third-party connectors, database migrations, and reliable enterprise system connectivity.",
    date: "10/19/2026",
    readTime: "5 min read",
    href: "/blog/system-integration-and-custom-api-architecture",
    imageUrl: "/assets/services/1.webp",
    serviceHref: "/services/system-integration-api",
    serviceLabel: "Explore System Integration & API Development",
    body: [
      "Modern businesses rely on dozens of software platforms—ERPs, CRMs, payment gateways, warehouses, and AI services. Without clean integrations, data silos slow down every department.",
      "Welty Tech designs versioned REST and GraphQL APIs, resilient webhook sync layers, and structured database migrations that keep records synchronized across third-party and custom platforms.",
      "With idempotent retries, clear API documentation, and real-time health monitoring, your interconnected systems communicate reliably as transaction volume scales.",
    ],
  },
];

export interface SampleShowcaseItem {
  id: string;
  tag: string;
  title: string;
  caption: string;
  href: string;
  imageUrl: string;
  videoUrl: string;
  column: "left" | "right";
}

export const SAMPLE_SHOWCASES: SampleShowcaseItem[] = [
  {
    id: "fintech-mobile",
    tag: "Digital Product Design",
    title: "FinTech Mobile Super-App UX",
    caption:
      "Intuitive mobile payment flows, instant transfers, and tactile balance tracking built for everyday speed.",
    href: "/services/product-design",
    imageUrl: "/assets/projects/puntopago-cover.jpg",
    videoUrl: "/assets/projects/puntopago-cover.mp4",
    column: "left",
  },
  {
    id: "enterprise-portal",
    tag: "Custom Software",
    title: "Enterprise Operations Web Platform",
    caption:
      "High-performance web architecture featuring interactive service workflows and streamlined customer onboarding.",
    href: "/services/custom-software-development",
    imageUrl: "/assets/projects/sca-cover.jpg",
    videoUrl: "/assets/projects/sca-cover.mp4",
    column: "left",
  },
  {
    id: "creative-canvas",
    tag: "UI/UX & Prototyping",
    title: "Interactive Studio & Media Engine",
    caption:
      "Responsive frame-by-frame browser controls and expressive visual interfaces designed for modern creators.",
    href: "/services/product-design",
    imageUrl: "/assets/projects/flipaclip-cover.jpg",
    videoUrl: "/assets/projects/flipaclip-cover.mp4",
    column: "left",
  },
  {
    id: "unified-erp",
    tag: "ERP & CRM Solutions",
    title: "Unified Operations & People Suite",
    caption:
      "Connecting payroll, operations, customer data, and internal workflows inside one cohesive business platform.",
    href: "/services/erp-crm-solutions",
    imageUrl: "/assets/projects/zelt-cover.jpg",
    videoUrl: "/assets/projects/zelt-cover.mp4",
    column: "left",
  },
  {
    id: "design-system",
    tag: "Design Systems",
    title: "Scalable Component & Token Architecture",
    caption:
      "Modular Figma component libraries and enterprise dashboard patterns built for consistent multi-team shipping.",
    href: "/services/product-design",
    imageUrl: "/assets/projects/cisco-cover.jpg",
    videoUrl: "/assets/projects/cisco-cover.mp4",
    column: "right",
  },
  {
    id: "spatial-discovery",
    tag: "Web Applications",
    title: "Real-Time Search & Discovery Portal",
    caption:
      "Fast map-first browsing, clean editorial hierarchy, and responsive filtering across mobile and desktop.",
    href: "/services/custom-software-development",
    imageUrl: "/assets/projects/find-cover.jpg",
    videoUrl: "/assets/projects/find-cover.mp4",
    column: "right",
  },
  {
    id: "smart-itinerary",
    tag: "Mobile & APIs",
    title: "Collaborative Planning Mobile Experience",
    caption:
      "Smart time-block scheduling, live calendar previews, and reliable backend synchronization.",
    href: "/services/system-integration-api",
    imageUrl: "/assets/projects/daoway-cover.jpg",
    videoUrl: "/assets/projects/daoway-cover.mp4",
    column: "right",
  },
  {
    id: "ai-automation-media",
    tag: "AI & Automation",
    title: "AI-Powered Video & Workflow Studio",
    caption:
      "Intelligent automation and LLM-assisted media workflows engineered for fast, personalized customer touchpoints.",
    href: "/services/ai-solutions-automation",
    imageUrl: "/assets/projects/potion-cover.jpg",
    videoUrl: "/assets/projects/potion-cover.mp4",
    column: "right",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What does the typical website redesign or revamp process look like?",
    paragraphs: [
      "Every project starts with understanding your business, users and goals. Before designing anything, we analyze your current website, identify pain points and define opportunities for improvement.",
      "Our typical process includes Discovery, UX research, information architecture, wireframing, UI design, prototyping, development, QA and launch. Throughout the project, you'll have full visibility into progress, regular design reviews and direct communication with our team.",
      "Whether it's a landing page or a large enterprise platform, our goal is always the same: create a website that looks exceptional, performs flawlessly and helps your business grow.",
    ],
  },
  {
    id: "faq-2",
    question: "What services does Welty Tech provide?",
    paragraphs: [
      "Welty Tech focuses on six interconnected areas: Digital Product Design (UX research, UI/UX and Figma-based design), Custom Software Development (web applications, mobile apps and enterprise software), and ERP & CRM Solutions.",
      "We also specialize in AI & Intelligent Automation (AI agents, chatbots, LLM workflows and AI-powered business applications), On-Premises & Private Cloud deployment, and System Integration & API Development to connect your platforms seamlessly.",
    ],
  },
  {
    id: "faq-3",
    question: "Do you build custom web apps, mobile apps, and AI solutions in-house?",
    paragraphs: [
      "Yes. We design and engineer everything in-house — pairing Figma design systems with modern web, mobile, backend, database, ERP/CRM, and AI agent architectures.",
      "We choose the architecture around your security, performance, and business requirements, supporting both cloud-native deployments and self-hosted on-premises or private cloud infrastructure.",
    ],
  },
  {
    id: "faq-4",
    question: "Can Welty Tech help launch an MVP or internal business platform quickly?",
    paragraphs: [
      "Yes. As an agile, modern technology company, we move quickly from UX wireframes and Figma prototypes to production-ready MVPs and tailored business systems.",
      "Our team works closely with founders and operations leaders to prioritize high-impact workflows so your product or internal platform ships cleanly and evolves without costly rewrites.",
    ],
  },
  {
    id: "faq-5",
    question: "Which CMS do you recommend?",
    paragraphs: [
      "There isn't a single CMS that's right for every project. The best choice depends on your content structure, editorial workflow, scalability requirements and technical needs.",
      "For simple marketing websites, platforms like Webflow or WordPress can work well. For more complex websites and digital products, we often recommend headless CMS solutions like Strapi, which provide greater flexibility, performance and long-term scalability.",
      "We'll help you choose the solution that best fits your project rather than recommending a platform simply because it's popular.",
    ],
  },
  {
    id: "faq-6",
    question: "Do you work on fixed-price projects or Time & Materials?",
    paragraphs: [
      "Both pricing models are available. For projects with a clearly defined scope, timeline and deliverables, a fixed-price model provides predictable budgeting and milestones.",
      "For evolving products, startups or long-term partnerships, Time & Materials offers greater flexibility, allowing priorities to change as the project grows.",
    ],
  },
  {
    id: "faq-7",
    question: "Do you offer SEO services?",
    paragraphs: [
      "Yes. We build every website following technical SEO best practices, including semantic HTML, clean code, optimized performance, structured metadata, accessibility, Core Web Vitals and search engine indexing.",
      "If you need a broader SEO strategy, we can also help with technical audits, content recommendations, site architecture, keyword research and ongoing optimization together with trusted SEO specialists.",
    ],
  },
  {
    id: "faq-8",
    question: "My website has poor PageSpeed scores. Can you help improve them?",
    paragraphs: [
      "Absolutely. Low PageSpeed scores are usually caused by a combination of factors rather than a single issue. We begin with a technical audit to identify bottlenecks such as unoptimized images, excessive JavaScript, render-blocking resources, inefficient third-party scripts, poor caching or server configuration.",
      "Based on our findings, we optimize both the frontend and backend, improve loading strategies, implement modern image formats, reduce unnecessary code, fine-tune Core Web Vitals and configure CDN and caching where appropriate.",
      "In many cases, these improvements lead not only to better PageSpeed scores but also to faster user experiences, higher conversion rates and improved SEO performance.",
    ],
  },
];

export const CONTACT_CONFIG = {
  title: "Hey! Tell us all the things",
  interests: [
    "Digital Product Design",
    "Custom Software Development",
    "ERP & CRM Solutions",
    "AI Solutions & Automation",
    "On-Premises & Private Cloud",
    "System Integration & APIs",
    "SaaS Platform",
    "UI/UX Design",
  ],
  budgets: ["₹50K – ₹1L", "₹1L – ₹3L", "₹3L – ₹7L", "₹7L – ₹15L", "₹15L+"],
};

export const OUTRO_CONTENT = {
  title: "Have a product to build or rethink?",
  text: "Tell us where the product is today, what you are trying to achieve and what is getting in the way.",
  ctaLabel: "Get in touch",
  ctaHref: "/contacts",
  bgImage: "/assets/outro-bg.jpg",
};

export const FOOTER_CONTENT = {
  email: "info@welty.in",
  tagline: "Welty Tech — Engineering What's Next.",
  summary:
    "Digital Product Design, Custom Software Development, ERP & CRM Solutions, AI & Intelligent Automation, On-Premises & Private Cloud, and System Integration & API Development.",
  links: [
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "AI & Cloud", href: "/services/ai-solutions-automation" },
    { label: "Product Design", href: "/services/product-design" },
    { label: "Contacts", href: "/contacts" },
  ],
  privacyHref: "/privacy",
  cookiesHref: "/cookies",
  copyright: "© 2026 Welty Tech",
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/weltytech?cnvx=MWVjNmswaGs0eXE3aA%3D%3D&utm_source=qr",
    },
    {
      name: "X",
      href: "https://x.com/weltytech",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/welty-tech/about/?viewAsMember=true",
    },
  ],
};
