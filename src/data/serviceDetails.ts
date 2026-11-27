import { FaqItem } from "./welty";

export type ServiceSlug =
  | "product-design"
  | "custom-software-development"
  | "erp-crm-solutions"
  | "ai-solutions-automation"
  | "on-premises-private-cloud"
  | "system-integration-api"
  | "web-design-development"
  | "ux-ui-design"
  | "creative-development"
  | "brand-identity";

export interface BentoCardData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  large?: boolean;
}

export interface OverviewTileData {
  id: string;
  title: string;
  description?: string;
  stat?: string;
  highlighted?: boolean;
  iconKey?: string;
  iconImage?: string;
  colSpan?: "4" | "5" | "6" | "7";
}

export interface StackedWorkItem {
  id: string;
  brand: string;
  category: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface ProcessStepItem {
  num: string;
  title: string;
  description: string;
  bgImage: string;
}

export interface SummaryRowItem {
  id: string;
  caption: string;
  description: string;
  iconKey: string;
}

export interface ServiceDetailConfig {
  slug: ServiceSlug;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaLabel: string;
  heroBgImage: string;

  bentoHeading: string;
  bentoCards: BentoCardData[];

  capabilities?: {
    heading: string;
    variant: "compact" | "detailed-3x3" | "detailed-3x2" | "detailed-5-7";
    tiles: OverviewTileData[];
  };

  selectedWork: StackedWorkItem[];

  quickContactHeading: string;

  processHeading: string;
  processSteps: ProcessStepItem[];

  timelines?: {
    heading: string;
    variant: "4-grid" | "5-grid";
    tiles: OverviewTileData[];
    note: string;
    noteLink?: { label: string; href: string };
  };

  summaryHeading: string;
  summaryRows: SummaryRowItem[];

  whyWeltyText: string;

  testimonialsHeading: string;

  faqs: (FaqItem & { link?: { label: string; href: string } })[];

  outroTitle: string;
  outroSubtitle: string;
}

export const WHY_WELTY_TILES: OverviewTileData[] = [
  {
    id: "years",
    stat: "0→1",
    title: "PRODUCT DESIGN TO PRODUCTION",
    highlighted: true,
    iconKey: "star",
    colSpan: "4",
  },
  {
    id: "awards",
    title: "Thoughtful UX research, UI/UX & Figma-based design",
    highlighted: false,
    iconKey: "trophy",
    colSpan: "4",
  },
  {
    id: "projects",
    stat: "6",
    title: "CORE SOFTWARE, CLOUD & AI DISCIPLINES",
    highlighted: true,
    iconKey: "globe",
    colSpan: "4",
  },
  {
    id: "partnerships",
    title: "Custom ERP/CRM, AI agents & enterprise API connectivity",
    highlighted: false,
    iconKey: "briefcase",
    colSpan: "6",
  },
  {
    id: "inhouse",
    title: "On-premises, private cloud & in-house delivery",
    highlighted: false,
    iconKey: "orbit",
    colSpan: "6",
  },
];

const DEFAULT_WHY_WELTY_TEXT =
  "At Welty Tech, our vision is to make technology more accessible, intelligent and useful for businesses through thoughtful design, innovative software and practical AI solutions. Every team brings together UX craft, full-stack software engineering, and secure infrastructure delivery.";

export const SERVICE_DETAILS: Record<ServiceSlug, ServiceDetailConfig> = {
  "web-design-development": {
    slug: "web-design-development",
    metaTitle: "Web Design & Development | Welty Tech",
    metaDescription:
      "Custom websites that make complex businesses easier to understand and harder to ignore. Strategy, UX, UI, motion, and development by Welty.",
    heroTitle: "Web Design & Development",
    heroSubtitle:
      "We design and build custom websites that make complex businesses easier to understand and harder to ignore. From strategy and UX to visual design, motion and development, everything is created as one connected experience.",
    heroCtaLabel: "Get in touch",
    heroBgImage: "/assets/services/web-design-development/hero-bg.webp",
    bentoHeading: "What we build",
    bentoCards: [
      {
        id: "saas-b2b",
        title: "SaaS & B2B Websites",
        description:
          "Websites that make complex products easier to understand and guide potential customers toward a demo, trial or conversation.",
        imageUrl: "/assets/services/web-design-development/bento-1.webp",
      },
      {
        id: "corporate-enterprise",
        title: "Corporate & Enterprise Websites",
        description:
          "Complex websites that bring multiple services, audiences and business areas into one clear digital system.",
        imageUrl: "/assets/services/web-design-development/bento-2.webp",
        large: true,
      },
      {
        id: "product-campaign",
        title: "Product & Campaign Websites",
        description:
          "Focused experiences for launches, new products and campaigns, combining strong storytelling with motion and interaction.",
        imageUrl: "/assets/services/web-design-development/bento-3.webp",
        large: true,
      },
      {
        id: "website-redesigns",
        title: "Website Redesigns",
        description:
          "Complete redesigns for companies whose existing websites no longer reflect the business, support marketing or scale with the company.",
        imageUrl: "/assets/services/web-design-development/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "compact",
      tiles: [
        { id: "strategy", title: "Strategy", iconKey: "compass" },
        { id: "ux-design", title: "UX design", iconKey: "layers" },
        { id: "ui-design", title: "UI design", iconKey: "palette" },
        { id: "motion", title: "Motion", iconKey: "sparkles" },
        { id: "development", title: "Development", iconKey: "code" },
        { id: "cms", title: "CMS", iconKey: "database" },
      ],
    },
    selectedWork: [
      {
        id: "bornbred",
        brand: "Born&Bred",
        category: "A brand and design agency",
        description:
          "Born&Bred came to us for a website that could better reflect the agency's energy, personality and quality of work. We developed a bold digital experience that puts its portfolio front and center, makes the agency easier to understand and gives the brand a distinctive online presence that feels as confident as the work itself.",
        imageUrl: "/assets/services/work/bornbred.webp",
        href: "/projects",
      },
      {
        id: "flipaclip",
        brand: "FlipaClip",
        category: "The tool for stop-motion animation",
        description:
          "We created a new website for FlipaClip to bring the personality of the animation app into its digital presence. The experience combines custom motion, 3D and interactive storytelling, turning a compact marketing site into a memorable showcase that introduces the product clearly while making the brand feel far more expressive online.",
        imageUrl: "/assets/services/work/flipaclip.webp",
        href: "/projects/flipaclip",
      },
      {
        id: "sca",
        brand: "SCA",
        category: "Sweeping Corporation of America",
        description:
          "Sweeping Corporation of America had a long-standing digital presence that no longer reflected the scale, reliability and operational maturity of the company. The challenge was not only to redesign the website visually, but to modernize a business-critical platform for a large nationwide organization without disrupting its daily operations.",
        imageUrl: "/assets/services/work/sca.webp",
        href: "/projects/sca",
      },
    ],
    quickContactHeading: "Have a website to build or redesign?",
    processHeading: "Our process",
    processSteps: [
      {
        num: "01",
        title: "Website Strategy",
        description:
          "We define the role of the website, priority audiences, business goals and key conversion paths before deciding how the structure and experience should work.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "UX & Wireframing",
        description:
          "We organize the sitemap, navigation and page hierarchy around how visitors understand the business, making important content easier to find and act on.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "Visual & Motion Design",
        description:
          "We establish the visual direction through key pages, then extend it across the website with responsive layouts, reusable components and purposeful motion.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "Frontend & Backend Development",
        description:
          "We turn the approved design into a responsive website, developing interactions, CMS functionality, integrations and the technical logic behind the experience.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "QA & Launch",
        description:
          "We test the website across supported browsers and devices, review content, forms, CMS behavior and performance, then deploy to production and run final checks.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    timelines: {
      heading: "Typical website timelines",
      variant: "4-grid",
      tiles: [
        {
          id: "t1",
          title: "Focused visual refresh",
          stat: "4-6 WEEKS",
          highlighted: true,
          iconKey: "clock",
          colSpan: "5",
        },
        {
          id: "t2",
          title: "Small custom marketing website",
          stat: "1.5-2 MONTHS",
          highlighted: false,
          iconKey: "layout",
          colSpan: "7",
        },
        {
          id: "t3",
          title: "Complete corporate or SaaS redesign",
          stat: "2–3 MONTHS",
          highlighted: false,
          iconKey: "layers",
          colSpan: "7",
        },
        {
          id: "t4",
          title: "Complex enterprise website",
          stat: "4+ MONTHS",
          highlighted: true,
          iconKey: "globe",
          colSpan: "5",
        },
      ],
      note: "The timeline depends on much more than page count. Content readiness, the number of unique templates, motion, integrations and technical requirements can have a much greater impact on the schedule.",
      noteLink: {
        label: "See how we structure B2B websites and redesigns.",
        href: "/blog/how-to-structure-a-b2b-website",
      },
    },
    summaryHeading: "Who we work with",
    summaryRows: [
      {
        id: "startups",
        caption: "STARTUPS",
        description:
          "Launch a website that explains your offering, builds credibility and gives potential customers and investors a clear next step.",
        iconKey: "rocket",
      },
      {
        id: "growing",
        caption: "GROWING PRODUCTS",
        description:
          "Redesign a website your business has outgrown, with clearer messaging, easier navigation and a CMS that supports new content and campaigns.",
        iconKey: "trending",
      },
      {
        id: "enterprise",
        caption: "ENTERPRISE",
        description:
          "Bring multiple services, audiences and markets into one clear website, with consistent design and a content structure your teams can manage.",
        iconKey: "building",
      },
    ],
    whyWeltyText: DEFAULT_WHY_WELTY_TEXT,
    testimonialsHeading: "See what our customers say",
    faqs: [
      {
        id: "wdd-1",
        question: "Does Welty provide both web design and development?",
        paragraphs: [
          "Yes. We can handle the complete project from website strategy and information architecture to visual design, motion, frontend and backend development, CMS integration, QA and launch. We can also work with an existing development team when only strategy and design are required.",
        ],
      },
      {
        id: "wdd-2",
        question: "What do you need to estimate a website redesign?",
        paragraphs: [
          "Usually, the best starting point is your current website, a short explanation of what is no longer working and what you want the redesign to achieve. It also helps to know the expected scope, CMS or technology stack, required integrations, content status, preferred launch date and approximate budget.",
          "You don't need to prepare a detailed technical specification before contacting us. We can help define the scope during the initial discussions.",
        ],
      },
      {
        id: "wdd-3",
        question: "Do you work on a fixed-price or Time&Materials basis?",
        paragraphs: [
          "We work with both models. Fixed price works well when the scope and deliverables can be clearly defined before the project starts. Time&Materials is better suited to projects where requirements may evolve during strategy, design or development.",
          "We recommend the model that makes the most sense for the scope and explain how changes will be handled before the project begins.",
        ],
      },
      {
        id: "wdd-4",
        question: "How long does it take to design and develop a website?",
        paragraphs: [
          "A focused redesign may take around 4-6 weeks. A small custom marketing website usually takes 1.5-2 months, while most corporate and SaaS websites require around 2-3 months. Complex enterprise and highly interactive projects may take four months or longer.",
          "The timeline depends on much more than page count, including content, unique templates, motion, integrations and technical requirements.",
        ],
      },
      {
        id: "wdd-5",
        question: "Can Welty work with our existing CMS?",
        paragraphs: [
          "Yes, if the existing CMS can support the new website properly. We first review its content structure, publishing workflow and technical limitations.",
          "If it works well for the project, there is no reason to replace it. If it creates significant limitations, we can recommend a more suitable solution.",
        ],
      },
      {
        id: "wdd-6",
        question: "Do you consider SEO when designing and developing a website?",
        paragraphs: [
          "We consider SEO requirements from the start, including site structure, content hierarchy, mobile usability and performance. For redesigns, we plan URL changes and redirects to help preserve existing search visibility. If you need keyword research, SEO content or ongoing optimization, we'll clarify the scope before the project begins.",
        ],
      },
      {
        id: "wdd-7",
        question: "Do you build websites in Webflow or Framer?",
        paragraphs: [
          "Yes, when either platform is a good fit for the project. Webflow or Framer can work well for marketing websites that do not require complex backend functionality or highly custom technical architecture.",
          "For more complex websites, advanced interactions or specific CMS and integration requirements, we may recommend custom development instead.",
        ],
      },
      {
        id: "wdd-8",
        question: "My website has poor PageSpeed scores. Can you help improve them?",
        paragraphs: [
          "Yes. We can audit the website and identify what is affecting performance, including frontend code, images and video, animation, third-party scripts, CMS configuration, hosting and CDN setup.",
          "The right solution depends on the website itself. A highly interactive site with video, 3D or complex motion has a different performance profile from a lightweight marketing website, so we first identify the bottlenecks before recommending changes.",
        ],
      },
    ],
    outroTitle: "Let's talk about your website",
    outroSubtitle:
      "Tell us what you're planning to launch. We'd like to hear your goals, priorities and target timeline.",
  },

  "product-design": {
    slug: "product-design",
    metaTitle: "Digital Product Design | Welty Tech",
    metaDescription:
      "We design intuitive, scalable and user-focused digital experiences that turn ideas into products people love to use.",
    heroTitle: "Digital Product Design",
    heroSubtitle:
      "We design intuitive, scalable and user-focused digital experiences that turn ideas into products people love to use.",
    heroCtaLabel: "Get in touch",
    heroBgImage: "/assets/services/product-design/hero-bg.webp",
    bentoHeading: "What we design",
    bentoCards: [
      {
        id: "web-platforms",
        title: "Web platforms",
        description:
          "Complex web products, dashboards and marketplaces built around real user workflows.",
        imageUrl: "/assets/services/product-design/bento-1.webp",
      },
      {
        id: "mobile-apps",
        title: "Mobile apps",
        description:
          "Native and cross-platform experiences designed around the way people actually use them.",
        imageUrl: "/assets/services/product-design/bento-2.webp",
        large: true,
      },
      {
        id: "new-products-mvps",
        title: "New products & MVPs",
        description:
          "From early product definition and prototypes to launch-ready experiences.",
        imageUrl: "/assets/services/product-design/bento-3.webp",
        large: true,
      },
      {
        id: "product-redesigns",
        title: "Product redesigns",
        description:
          "Rethinking products that have become complex, inconsistent or difficult to scale.",
        imageUrl: "/assets/services/product-design/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "detailed-3x2",
      tiles: [
        {
          id: "pd-cap-1",
          title: "UX Research & Strategy",
          description:
            "Uncovering real user needs, product friction, and market opportunities to anchor design decisions in evidence.",
          iconKey: "search",
        },
        {
          id: "pd-cap-2",
          title: "UI/UX Design",
          description:
            "Crafting intuitive user journeys and crisp visual interfaces that balance clarity, craft, and conversion.",
          iconKey: "palette",
        },
        {
          id: "pd-cap-3",
          title: "Wireframing & Prototyping",
          description:
            "Validating structure, edge cases, and interactive flows early through testable prototypes before engineering.",
          iconKey: "play",
        },
        {
          id: "pd-cap-4",
          title: "Figma-Based Interface Design",
          description:
            "Pixel-accurate auto-layout screens, responsive breakpoints, and interactive specs built natively in Figma.",
          iconKey: "layout",
        },
        {
          id: "pd-cap-5",
          title: "Design Systems & Component Libraries",
          description:
            "Tokenized typography, color, and reusable UI libraries that keep product and engineering squads aligned.",
          iconKey: "layers",
        },
        {
          id: "pd-cap-6",
          title: "Web & Mobile Application Design",
          description:
            "Cohesive cross-platform product experiences tailored for desktop SaaS platforms, iOS, and Android.",
          iconKey: "globe",
        },
      ],
    },
    selectedWork: [
      {
        id: "puntopago",
        brand: "Punto Pago",
        category: "Super-App",
        description:
          "Punto Pago came to us when the company was moving beyond utility payments and turning the product into a much broader financial platform. We helped rethink the product structure, UX/UI and visual identity, bringing multiple services into one mobile experience. The main goal was to keep the product simple and intuitive while creating a system flexible enough to support new features and future growth.",
        imageUrl: "/assets/services/work/puntopago.webp",
        href: "/projects/puntopago",
      },
      {
        id: "zelt",
        brand: "Zelt",
        category: "HR platform",
        description:
          "Zelt came to us as the company was growing and needed a stronger brand and digital presence to match the maturity of its product. We reworked the visual identity and translated the new direction into a complete website experience, creating a more distinctive and consistent way for Zelt to present its platform, communicate its value and stand out in a crowded HR tech market.",
        imageUrl: "/assets/services/work/zelt.webp",
        href: "/projects/zelt",
      },
      {
        id: "find",
        brand: "FIND",
        category: "Real estate company",
        description:
          "FIND came to us with the idea of building a new real estate brand and digital platform from the ground up. We worked on the project end to end, from identity and product structure to UX/UI, motion and development. The goal was to connect property search, services, agents and content in one clear experience that would work equally well for buyers, sellers, renters and the internal FIND team.",
        imageUrl: "/assets/services/work/find.webp",
        href: "/projects/find",
      },
    ],
    quickContactHeading: "Have a product to build or rethink?",
    processHeading: "How we design digital products",
    processSteps: [
      {
        num: "01",
        title: "Product Discovery",
        description:
          "We start by understanding the business, users, market, product goals and technical constraints. This gives us a clear foundation before we define the experience.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "UX Design",
        description:
          "We explore user needs, map key journeys and identify the workflows, features and interactions that matter most.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "UI Design",
        description:
          "We turn the product structure into a clear visual system, from wireframes and prototypes to polished interfaces, interactions and motion.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "Product Development",
        description:
          "Designers and developers work closely throughout implementation, building the product, integrating required functionality and making sure the experience remains consistent and scalable.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "QA & Launch",
        description:
          "We test the product across devices and real-world scenarios, refine the details and prepare everything for a stable release.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    summaryHeading: "Built for different product stages",
    summaryRows: [
      {
        id: "startups",
        caption: "STARTUPS",
        description:
          "Turn an idea into a focused MVP that is ready for users, investors and market validation.",
        iconKey: "rocket",
      },
      {
        id: "growing",
        caption: "GROWING PRODUCTS",
        description:
          "Rethink fragmented experiences, improve key workflows and build a design system that can support the next stage of growth.",
        iconKey: "trending",
      },
      {
        id: "enterprise",
        caption: "ENTERPRISE",
        description:
          "Simplify complex workflows, modernize legacy products and create systems that can work across teams, departments and markets.",
        iconKey: "building",
      },
    ],
    whyWeltyText: DEFAULT_WHY_WELTY_TEXT,
    testimonialsHeading: "See what our customers say",
    faqs: [
      {
        id: "pd-1",
        question: "What does a digital product design agency do?",
        paragraphs: [
          "A digital product design agency helps turn a business idea, product concept or existing platform into a clear and usable digital experience. Depending on the project, this can include product strategy, UX research, user flows, interface design, prototyping, design systems, motion and development.",
          "At Welty, we usually work across the full product lifecycle rather than treating UX, visual design and development as separate disciplines.",
        ],
      },
      {
        id: "pd-2",
        question: "Can Welty design and develop the complete product?",
        paragraphs: [
          "Yes. We can handle the complete process from discovery and product strategy through UX, UI design, prototyping, development, QA and launch.",
          "Our designers and developers work together throughout the project, which helps us make design decisions that are both visually strong and realistic to implement. We can also work alongside an existing internal development team if only strategy and design are required.",
        ],
      },
      {
        id: "pd-3",
        question: "Can you redesign an existing product?",
        paragraphs: [
          "Yes. Many of our projects start with an existing product rather than a new idea.",
          "We first look at how the current product works, where users experience friction and which parts of the system have become inconsistent or difficult to scale. From there, we can rethink key workflows, improve the interface and create a more flexible design system without necessarily rebuilding everything from scratch.",
        ],
      },
      {
        id: "pd-4",
        question: "How long does digital product design take?",
        paragraphs: [
          "It depends on the product, the number of user flows and whether the scope includes development.",
          "A focused UX/UI design project may take around 6–10 weeks, while a complete digital product involving discovery, complex UX, design, development and testing usually takes several months.",
          "After the initial discussion, we define the scope, team and timeline based on the actual complexity of the product.",
        ],
      },
    ],
    outroTitle: "Have a product to build or rethink?",
    outroSubtitle:
      "Tell us where the product is today, what you are trying to achieve and what is getting in the way.",
  },

  "ux-ui-design": {
    slug: "ux-ui-design",
    metaTitle: "UX Research & UI Design | Welty Tech",
    metaDescription:
      "Evidence-based UX research, user flows, prototypes, and scalable design systems crafted by Welty.",
    heroTitle: "UX Research & UI Design",
    heroSubtitle:
      "We research how people use digital products, find where the experience breaks down and design interfaces that make complex systems easier to understand and use. From UX research and product structure to UI design, prototypes and scalable design systems.",
    heroCtaLabel: "Get in touch",
    heroBgImage: "/assets/services/ux-ui-design/hero-bg.webp",
    bentoHeading: "What we help solve",
    bentoCards: [
      {
        id: "ux-research-complex",
        title: "UX Research",
        description:
          "Products that have grown over time and become difficult to navigate, with features, roles and workflows spread across disconnected areas.",
        imageUrl: "/assets/services/ux-ui-design/bento-1.webp",
      },
      {
        id: "friction-journeys",
        title: "Friction in Key User Journeys",
        description:
          "Onboarding, checkout, search, account setup and other important flows where unnecessary steps or unclear decisions prevent users from completing the task.",
        imageUrl: "/assets/services/ux-ui-design/bento-2.webp",
        large: true,
      },
      {
        id: "inconsistent-interfaces",
        title: "Inconsistent Interfaces",
        description:
          "Products where different teams, features or platforms have introduced competing patterns, components and interaction logic.",
        imageUrl: "/assets/services/ux-ui-design/bento-3.webp",
        large: true,
      },
      {
        id: "no-longer-scale",
        title: "Products That No Longer Scale",
        description:
          "Interfaces built around one-off screens and decisions that make it increasingly difficult for product and engineering teams to add new features consistently.",
        imageUrl: "/assets/services/ux-ui-design/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "detailed-3x3",
      tiles: [
        {
          id: "ux-research",
          title: "UX Research",
          description:
            "We study users, product behavior and existing data to understand where the experience creates friction and what needs to change.",
          iconKey: "search",
        },
        {
          id: "ux-strategy",
          title: "UX Strategy",
          description:
            "We turn research into clear product priorities, defining which journeys, audiences and problems should be addressed first.",
          iconKey: "compass",
        },
        {
          id: "info-arch",
          title: "Information Architecture",
          description:
            "We organize navigation, content and product areas into a structure that feels predictable and easy to understand.",
          iconKey: "sitemap",
        },
        {
          id: "user-flows",
          title: "User Flows",
          description:
            "We map the steps, decisions and possible failure points behind important tasks before moving into detailed interface design.",
          iconKey: "flow",
        },
        {
          id: "wireframing",
          title: "Wireframing",
          description:
            "We define hierarchy, functionality and screen structure early, when changes are still fast and inexpensive to make.",
          iconKey: "layout",
        },
        {
          id: "ui-design",
          title: "UI Design",
          description:
            "We turn product logic into a clear visual system covering typography, hierarchy, components, states and responsive behavior.",
          iconKey: "palette",
        },
        {
          id: "prototyping",
          title: "Prototyping",
          description:
            "We create interactive prototypes to test important journeys, demonstrate complex interactions and align the team before development.",
          iconKey: "play",
        },
        {
          id: "usability-testing",
          title: "Usability Testing",
          description:
            "We test how real users understand the experience and use the findings to refine flows, terminology and interaction patterns.",
          iconKey: "check",
        },
        {
          id: "design-systems",
          title: "Design Systems",
          description:
            "We create reusable components, rules and patterns that help design and engineering teams keep the product consistent as it grows.",
          iconKey: "layers",
        },
      ],
    },
    selectedWork: [
      {
        id: "daoway",
        brand: "DaoWay",
        category: "Astrology planning app",
        description:
          "DaoWay started as a list of MVP features for a new astrology planner. We researched the market, defined the product structure and user flows, then designed the complete iOS and Android experience from the ground up. The result turns a complex Ba-Zi system into a clear daily planning tool that users can understand without needing to learn the methodology behind it.",
        imageUrl: "/assets/services/work/daoway.webp",
        href: "/projects/daoway",
      },
      {
        id: "qvino",
        brand: "Qvino",
        category: "Wine marketplace app",
        description:
          "Qvino combines wine discovery, shopping, education, label recognition and comparison within one mobile product. We organized these different functions into a clear UX/UI system, making it easy for new users to explore and choose wine while giving more experienced users access to deeper information without overwhelming the experience.",
        imageUrl: "/assets/services/work/qvino.webp",
        href: "/projects/qvino",
      },
      {
        id: "cisco",
        brand: "Cisco",
        category: "Cloud management platform",
        description:
          "Cisco's cloud management platform had grown into a complex system with 18 sections and a visual language that could no longer support new functionality. Over 10 months, we redesigned the interface and created a complete UI kit with reusable components and patterns, giving the product greater consistency and Cisco's team a scalable foundation for future development.",
        imageUrl: "/assets/services/work/cisco.webp",
        href: "/projects/cisco",
      },
    ],
    quickContactHeading: "Have a product to build or rethink?",
    processHeading: "Our process",
    processSteps: [
      {
        num: "01",
        title: "Product & UX Audit",
        description:
          "We start with the product, its users, business goals and the reason for the project. We review the existing experience, available analytics, customer feedback, research and technical constraints before deciding what needs to change.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "UX Research & Strategy",
        description:
          "We use the research methods that fit the problem, from user and stakeholder interviews to usability testing, analytics review and competitor research. The findings are translated into practical product priorities rather than research for its own sake.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "Information Architecture & User Flows",
        description:
          "We organize the product around how people actually use it, defining navigation, hierarchy, key journeys and the relationships between different areas before moving into detailed interface design.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "UI Design & Prototyping",
        description:
          "We turn the approved structure into a complete visual interface, covering real product states, responsive behavior and interaction. Important journeys can be prototyped to evaluate behavior before development begins.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "Testing & Design System",
        description:
          "We test important assumptions, refine the experience and turn approved patterns into reusable components and design-system rules. When development is included, our designers stay involved during development and design QA.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    timelines: {
      heading: "Typical UX/UI timelines",
      variant: "4-grid",
      tiles: [
        {
          id: "ux-t1",
          title: "UX audit & focused research",
          stat: "2-4 WEEKS",
          highlighted: true,
          iconKey: "search",
          colSpan: "5",
        },
        {
          id: "ux-t2",
          title: "Critical journey redesign",
          stat: "4-6 WEEKS",
          highlighted: false,
          iconKey: "flow",
          colSpan: "7",
        },
        {
          id: "ux-t3",
          title: "Complex platform or design system",
          stat: "3–6 MONTHS",
          highlighted: false,
          iconKey: "layers",
          colSpan: "7",
        },
        {
          id: "ux-t4",
          title: "Complete product UX/UI",
          stat: "8-16 WEEKS",
          highlighted: true,
          iconKey: "palette",
          colSpan: "5",
        },
      ],
      note: "The timeline depends much more on product complexity than on the number of screens. User roles, workflows, research requirements, platforms, prototype depth and the size of the design system can all have a greater impact on the schedule.",
    },
    summaryHeading: "Who we work with",
    summaryRows: [
      {
        id: "startups",
        caption: "STARTUPS",
        description:
          "Define the first product experience, validate important journeys and build a UX/UI system that is ready for an MVP and future development.",
        iconKey: "rocket",
      },
      {
        id: "growing",
        caption: "GROWING PRODUCTS",
        description:
          "Rethink experiences, improve onboarding and critical workflows and create a design system that can support the next stage of growth.",
        iconKey: "trending",
      },
      {
        id: "enterprise",
        caption: "ENTERPRISE",
        description:
          "Simplify complex workflows, modernize legacy products and create scalable systems that can work across teams, roles, departments and platforms.",
        iconKey: "building",
      },
    ],
    whyWeltyText: DEFAULT_WHY_WELTY_TEXT,
    testimonialsHeading: "See what our customers say",
    faqs: [
      {
        id: "ux-1",
        question: "Does Welty provide both UX research and UI design?",
        paragraphs: [
          "Yes. We can handle the complete process from product research and UX strategy to information architecture, user flows, interface design, prototypes and design systems. We can also work with an existing product or research team when only part of the process is required.",
        ],
      },
      {
        id: "ux-2",
        question: "What do you need to estimate a UX/UI project?",
        paragraphs: [
          "Usually, the best starting point is the existing product or concept, an explanation of what is not working and what you want to improve. Access to analytics, research, user feedback or product documentation can also help, but you do not need to prepare a complete specification before contacting us.",
        ],
      },
      {
        id: "ux-3",
        question: "Can you redesign an existing product?",
        paragraphs: [
          "Yes. We can review the current experience, identify the highest-impact usability problems and redesign either the complete product or a specific area such as onboarding, navigation, dashboards, checkout or another critical workflow.",
        ],
      },
      {
        id: "ux-4",
        question: "Can Welty work with our internal product team?",
        paragraphs: [
          "Yes. We can lead the complete UX/UI process or work alongside an internal product, research and engineering team. Responsibilities, communication and deliverables are defined before the project starts.",
        ],
      },
      {
        id: "ux-5",
        question: "Can Welty work with our existing CMS?",
        paragraphs: [
          "Yes, if the existing CMS can support the new website properly. We first review its content structure, publishing workflow and technical limitations.",
          "If it works well for the project, there is no reason to replace it. If it creates significant limitations, we can recommend a more suitable solution.",
        ],
      },
      {
        id: "ux-6",
        question: "Do you create clickable prototypes?",
        paragraphs: [
          "Yes. We use interactive prototypes when they help test an important journey, validate product behavior, align stakeholders or communicate complex interactions before development.",
        ],
      },
      {
        id: "ux-7",
        question: "Do you build design systems?",
        paragraphs: [
          "Yes. Depending on the project, this can include visual foundations, reusable components, states, interaction patterns, responsive rules, motion principles and documentation for product and engineering teams.",
        ],
      },
      {
        id: "ux-8",
        question: "How long does UX/UI design take?",
        paragraphs: [
          "A focused UX audit or critical-flow redesign may take around 2–6 weeks. A complete product UX/UI project usually takes 8–16 weeks, while complex platforms and large design systems may require several months.",
        ],
      },
      {
        id: "ux-9",
        question: "Can you also develop the product?",
        paragraphs: [
          "Yes. When development is part of the scope, designers and developers work together through development, testing and launch. For projects that require complete product strategy, UX/UI and development, see our Digital Product Design service.",
        ],
        link: {
          label: "Explore Digital Product Design",
          href: "/services/product-design",
        },
      },
    ],
    outroTitle: "Have a product to rethink?",
    outroSubtitle:
      "Tell us where the product is today, what you are trying to achieve and what is getting in the way.",
  },

  "creative-development": {
    slug: "creative-development",
    metaTitle: "Creative Development Agency | Welty Tech",
    metaDescription:
      "Interactive websites, WebGL, 3D, product demonstrations, and fluid motion engineering built by Welty.",
    heroTitle: "Creative Development Agency",
    heroSubtitle:
      "We design and build interactive websites, product demonstrations and digital brand experiences. Our team combines creative frontend development, motion and 3D to make complex ideas easier to explore and understand.",
    heroCtaLabel: "Discuss your idea",
    heroBgImage: "/assets/services/creative-development/hero-bg.webp",
    bentoHeading: "What we help solve",
    bentoCards: [
      {
        id: "difficult-to-explain",
        title: "Your product is difficult to explain",
        description:
          "Text and screenshots do not always show how your product works. We create interactive demonstrations that let visitors explore its features and understand how they would use it.",
        imageUrl: "/assets/services/creative-development/bento-1.webp",
      },
      {
        id: "express-brand",
        title: "Your website does not express your brand",
        description:
          "You have a distinctive brand, but your website does little to convey it. We bring its character into animations, transitions and interactions, making the way the site behaves part of its identity.",
        imageUrl: "/assets/services/creative-development/bento-2.webp",
        large: true,
      },
      {
        id: "test-idea",
        title: "You need to test an idea before building it",
        description:
          "You have an idea for an animation or interactive feature, but need to see it in action before committing to full development. We build a prototype to explore the interaction and test its performance on different devices.",
        imageUrl: "/assets/services/creative-development/bento-3.webp",
        large: true,
      },
      {
        id: "help-building",
        title: "You have a design but need help building it",
        description:
          "Your design includes custom animations or interactive features that need an experienced development team. We work with your designers to build the website, refine the details and adapt the interactions for desktop and mobile.",
        imageUrl: "/assets/services/creative-development/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "detailed-3x2",
      tiles: [
        {
          id: "creative-direction",
          title: "Creative Direction",
          description:
            "We develop the visual concept and define how animation and interaction will support it. References and early experiments help establish a clear direction for design and development.",
          iconKey: "sparkles",
        },
        {
          id: "motion-interaction",
          title: "Motion & Interaction",
          description:
            "We design how the website moves and responds, from page transitions and scrolling to animated typography and interface feedback. Each interaction follows the brand's character and helps people navigate the content.",
          iconKey: "orbit",
        },
        {
          id: "creative-frontend",
          title: "Creative Frontend",
          description:
            "We build custom websites with responsive layouts, animation and interactive features. We also connect the frontend to the CMS and other services your team needs to manage content.",
          iconKey: "code",
        },
        {
          id: "webgl-3d",
          title: "WebGL & 3D",
          description:
            "We create interactive 3D scenes, product views and visual effects that run in the browser. Visitors can explore objects and control the experience, with graphics adapted for different devices.",
          iconKey: "cube",
        },
        {
          id: "creative-prototyping",
          title: "Creative Prototyping",
          description:
            "We build working prototypes to test ideas before full development. This helps the team evaluate how an interaction feels, how it performs and what it will take to build.",
          iconKey: "play",
        },
        {
          id: "performance-qa",
          title: "Performance & QA",
          description:
            "We optimize loading, animation and rendering, then test across browsers and devices. We also check touch controls, keyboard navigation and reduced-motion behavior so more people can use the experience comfortably.",
          iconKey: "gauge",
        },
      ],
    },
    selectedWork: [
      {
        id: "catchers",
        brand: "Catchers",
        category: "Influencer marketing agency",
        description:
          "For Catchers, we built the website around the people behind its influencer marketing business. Animated typography and a dynamic creator gallery bring the agency's talent into focus, while clear navigation helps brands explore potential partnerships and creators find out how to join.",
        imageUrl: "/assets/services/work/catchers.webp",
        href: "/projects",
      },
      {
        id: "livespot",
        brand: "Livespot360",
        category: "Live entertainment & production",
        description:
          "We brought the energy of Livespot360's events and productions into its website. Full-screen video, animated typography and scrolling transitions give visitors a feel for the company's work, while connecting its projects and services into a portfolio that invites exploration.",
        imageUrl: "/assets/services/work/livespot.webp",
        href: "/projects",
      },
      {
        id: "magma",
        brand: "Magma",
        category: "Interactive 3D digital twins",
        description:
          "Magma needed a clear way to explain the connection between physical buildings and their digital twins. We turned that idea into an interactive 3D story, using WebGL and scroll-controlled sequences to reveal the building's structure and show how the platform connects it to digital information.",
        imageUrl: "/assets/services/work/magma.webp",
        href: "/projects",
      },
    ],
    quickContactHeading: "Have an idea you want to bring to life?",
    processHeading: "Our process",
    processSteps: [
      {
        num: "01",
        title: "Discovery",
        description:
          "We start with what you want to communicate and who you want to reach. Together, we review your content, references and technical requirements, then decide where animation or interaction can help explain the idea.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "Creative Prototyping",
        description:
          "We explore visual concepts and build quick prototypes of the key interactions. Testing them in the browser helps us see how they feel and whether they will work before committing to a direction.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "Experience Design",
        description:
          "We develop the chosen concept into complete page designs, including animation and interaction details. We work through how people will navigate the content and how the experience should adapt to desktop and mobile.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "Development",
        description:
          "Our developers and designers work together to bring the designs into the browser. We build the layouts, connect the CMS where needed, and refine animation timing and behavior as the website takes shape.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "Testing and Launch",
        description:
          "We test the website across browsers and devices, checking loading speed, interactions and accessibility. After launch, we verify that everything works on the live site and can continue supporting the website as new needs arise.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    timelines: {
      heading: "Estimated project timelines",
      variant: "5-grid",
      tiles: [
        {
          id: "cd-t1",
          title: "Interaction prototype",
          stat: "1-3 WEEKS",
          highlighted: true,
          iconKey: "play",
          colSpan: "4",
        },
        {
          id: "cd-t2",
          title: "Interactive product demo",
          stat: "2-4 WEEKS",
          highlighted: false,
          iconKey: "sparkles",
          colSpan: "4",
        },
        {
          id: "cd-t3",
          title: "Animation & interaction for an existing website",
          stat: "3–6 WEEKS",
          highlighted: true,
          iconKey: "orbit",
          colSpan: "4",
        },
        {
          id: "cd-t4",
          title: "Interactive marketing website",
          stat: "4–8 WEEKS",
          highlighted: false,
          iconKey: "code",
          colSpan: "6",
        },
        {
          id: "cd-t5",
          title: "Complex WebGL or 3D experience",
          stat: "1+ MONTHS OR MORE",
          highlighted: false,
          iconKey: "cube",
          colSpan: "6",
        },
      ],
      note: "These are indicative timelines for different project scopes. We confirm the schedule after reviewing the concept, content, asset requirements and approval process.",
    },
    summaryHeading: "Ways to work with us",
    summaryRows: [
      {
        id: "complete",
        caption: "COMPLETE EXPERIENCE",
        description:
          "We lead the project from concept and design through development and launch, whether you need an interactive website, a campaign experience or a product demonstration.",
        iconKey: "sparkles",
      },
      {
        id: "collab",
        caption: "DEVELOPMENT COLLABORATION",
        description:
          "We work alongside your team to bring an existing design into the browser. We review the layouts and planned interactions, then handle frontend development, animation and any 3D integration the project requires.",
        iconKey: "code",
      },
      {
        id: "prototype",
        caption: "FOCUSED PROTOTYPE",
        description:
          "We build a prototype to explore an idea, support internal approval or test technical feasibility before committing to full development.",
        iconKey: "play",
      },
    ],
    whyWeltyText: DEFAULT_WHY_WELTY_TEXT,
    testimonialsHeading: "See what our customers say",
    faqs: [
      {
        id: "cd-1",
        question: "What does a creative development agency do?",
        paragraphs: [
          "A creative development agency combines design and engineering to build interactive digital experiences. At Welty, this includes custom websites, product demonstrations, motion systems, WebGL experiences and prototypes.",
        ],
      },
      {
        id: "cd-2",
        question: "How does creative development differ from web development?",
        paragraphs: [
          "Creative development focuses on custom interaction, motion and real-time visuals. It is useful when these behaviors are central to the concept and need to be explored alongside the design. A project may also include website structure, CMS integration and other development work.",
        ],
      },
      {
        id: "cd-3",
        question: "Can you work with an existing design or website?",
        paragraphs: [
          "Yes. We can develop a concept created by your team or add an interactive section to an existing website. We first review the design, technical architecture and responsive behavior to define a workable scope.",
        ],
      },
      {
        id: "cd-4",
        question: "Do you provide WebGL and 3D development?",
        paragraphs: [
          "Yes. We build browser-based experiences for product visualization, interactive storytelling and custom visual effects. The approach depends on the concept, available 3D assets, supported devices and performance requirements.",
        ],
      },
      {
        id: "cd-5",
        question: "Will the experience work on mobile?",
        paragraphs: [
          "We plan mobile layouts and touch interactions as part of the project. Some effects need simpler rendering or alternative behavior on smaller or less powerful devices. We test these versions to preserve the content and essential actions.",
        ],
      },
      {
        id: "cd-6",
        question: "How long does creative development take?",
        paragraphs: [
          "A focused interaction prototype may take 1–3 weeks, while a complete interactive website may take 8–16 weeks. Complex WebGL or 3D projects involving extensive asset production may take 4–6 months or longer. We confirm the schedule after reviewing the scope.",
        ],
      },
      {
        id: "cd-7",
        question: "What technologies do you use?",
        paragraphs: [
          "We choose the stack around the project's interaction, content and maintenance requirements. It may include JS frameworks, GSAP, Framer Motion, Canvas, WebGL and Three.js, along with CMS and API integrations.",
        ],
      },
      {
        id: "cd-8",
        question: "Can you support the project after launch?",
        paragraphs: [
          "Yes. We can continue monitoring performance, resolving issues and improving the experience after release. The support scope depends on your team, update plans and the technical needs of the project.",
        ],
      },
    ],
    outroTitle: "Have a creative project in mind?",
    outroSubtitle:
      "Share your concept, references or the challenge you want to solve.",
  },

  "brand-identity": {
    slug: "brand-identity",
    metaTitle: "Brand Identity Agency | Welty Tech",
    metaDescription:
      "Distinctive brand identities, visual systems, motion identity, and guidelines built for products and websites by Welty.",
    heroTitle: "Brand Identity Agency",
    heroSubtitle:
      "We create brand identities that make companies easier to recognize, understand and remember. From strategy and visual identity to motion and digital design, we build brands that work across products, websites and marketing materials.",
    heroCtaLabel: "Get in touch",
    heroBgImage: "/assets/services/brand-identity/hero-bg.webp",
    bentoHeading: "What we help solve",
    bentoCards: [
      {
        id: "launching-new",
        title: "You are launching a new company or product",
        description:
          "You need more than a logo for launch. We help define the positioning, visual identity and brand system so the company starts with a clear and recognizable presence.",
        imageUrl: "/assets/services/brand-identity/bento-1.webp",
      },
      {
        id: "no-longer-reflects",
        title: "Your brand no longer reflects the business",
        description:
          "Your company has grown and your offering has changed. We evolve your identity to reflect where the business is today and where it is heading.",
        imageUrl: "/assets/services/brand-identity/bento-2.webp",
        large: true,
      },
      {
        id: "too-similar",
        title: "You look too similar to competitors",
        description:
          "The brand feels professional, but not distinctive enough. We sharpen your positioning and develop a distinctive visual identity so customers can recognize your brand and understand what sets it apart.",
        imageUrl: "/assets/services/brand-identity/bento-3.webp",
        large: true,
      },
      {
        id: "feels-inconsistent",
        title: "Your brand feels inconsistent",
        description:
          "Your website, product, presentations and marketing materials look disconnected. We bring them together through shared visual principles and practical guidelines your team can use.",
        imageUrl: "/assets/services/brand-identity/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "detailed-5-7",
      tiles: [
        {
          id: "brand-strategy",
          title: "Brand Strategy",
          description:
            "We define the audience, competitive context, brand architecture and core principles that give the identity a clear direction before visual work begins.",
          iconKey: "compass",
          colSpan: "5",
        },
        {
          id: "positioning",
          title: "Positioning & Messaging",
          description:
            "We clarify what makes the company different, how it should be positioned and which messages should lead across different channels.",
          iconKey: "sparkles",
          colSpan: "7",
        },
        {
          id: "logo-visual",
          title: "Logo & Visual Identity",
          description:
            "We design logos, typography, color palettes and graphic elements that give your brand a distinctive, recognizable look across formats.",
          iconKey: "palette",
          colSpan: "7",
        },
        {
          id: "art-direction",
          title: "Art Direction",
          description:
            "We define the visual approach to photography, illustration, 3D and composition, giving your team a clear direction for creating branded content.",
          iconKey: "cube",
          colSpan: "5",
        },
        {
          id: "motion-identity",
          title: "Motion Identity",
          description:
            "We define how your brand moves through logo animation, typography, transitions and interface interactions, creating a consistent sense of character and rhythm.",
          iconKey: "orbit",
          colSpan: "5",
        },
        {
          id: "brand-applications",
          title: "Brand Applications",
          description:
            "We extend the identity into the materials teams actually use, including presentations, social content, campaign assets, packaging and other launch or marketing touchpoints.",
          iconKey: "briefcase",
          colSpan: "7",
        },
        {
          id: "digital-brand-systems",
          title: "Digital Brand Systems",
          description:
            "We translate your identity into practical rules for websites and digital products, covering typography, color, layouts, components and interaction.",
          iconKey: "layers",
          colSpan: "7",
        },
        {
          id: "brand-guidelines",
          title: "Brand Guidelines",
          description:
            "We document the identity with clear rules and examples so your team and external partners can apply it consistently.",
          iconKey: "check",
          colSpan: "5",
        },
      ],
    },
    selectedWork: [
      {
        id: "find-brand",
        brand: "FIND",
        category: "Real estate company",
        description:
          "FIND was built from the ground up as a new real estate brand and digital platform. We created the identity, visual language and digital experience as one system, giving the company a recognizable foundation that could work across property discovery, services, agent communication and future digital applications.",
        imageUrl: "/assets/services/work/find-brand.webp",
        href: "/projects/find",
      },
      {
        id: "kzero",
        brand: "Kzero",
        category: "A passwordless login solution",
        description:
          "We worked with Kzero end to end, rethinking how a complex cybersecurity product should look, communicate and behave online. The project covered brand identity, marketing materials, UX/UI, motion, 3D and development, creating a distinctive digital presence around its passwordless authentication technology.",
        imageUrl: "/assets/services/work/kzero.webp",
        href: "/projects",
      },
      {
        id: "appflowy",
        brand: "AppFlowy",
        category: "Self-hosted AI Workspace",
        description:
          "For AppFlowy, we focused on branding and digital design, creating a clearer and more recognizable visual direction for its AI-powered workspace. The system needed to support a broad product ecosystem while remaining flexible and consistent across different use cases.",
        imageUrl: "/assets/services/work/appflowy.webp",
        href: "/projects",
      },
    ],
    quickContactHeading: "Building a new brand or evolving an existing one?",
    processHeading: "Our process",
    processSteps: [
      {
        num: "01",
        title: "Discovery & Brand Audit",
        description:
          "We start by understanding your business, audience, market and goals. For existing brands, we review the identity and its applications to identify what should change and what is worth keeping.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "Brand Strategy",
        description:
          "We define your brand's positioning, value proposition and core principles to guide the creative work. Depending on the project, we also develop key messages and clarify how different products or services fit within the brand.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "Creative Direction",
        description:
          "We explore distinct creative directions, showing how your brand could look, feel and communicate through examples of real applications. Together, we evaluate how each direction supports your positioning and choose one to develop into a complete identity.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "Identity System",
        description:
          "We develop the approved direction into a complete visual identity, including the logo, typography, color palette and graphic elements. We define how these work together across imagery, motion and digital interfaces to create a consistent and recognizable brand.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "Brand Rollout",
        description:
          "We apply the identity to key materials, from websites and presentations to marketing content, and check how it works in practice. We then prepare the assets, templates and guidelines your team needs to use the brand consistently.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    timelines: {
      heading: "Typical branding timelines",
      variant: "5-grid",
      tiles: [
        {
          id: "bi-t1",
          title: "Focused identity refresh",
          stat: "1-2 WEEKS",
          highlighted: true,
          iconKey: "clock",
          colSpan: "4",
        },
        {
          id: "bi-t2",
          title: "Core visual identity",
          stat: "3-4 WEEKS",
          highlighted: false,
          iconKey: "palette",
          colSpan: "4",
        },
        {
          id: "bi-t3",
          title: "Full brand identity system",
          stat: "4–5 WEEKS",
          highlighted: true,
          iconKey: "layers",
          colSpan: "4",
        },
        {
          id: "bi-t4",
          title: "Brand identity + website design",
          stat: "5-6 WEEKS",
          highlighted: false,
          iconKey: "layout",
          colSpan: "6",
        },
        {
          id: "bi-t5",
          title: "Complex corporate rebrand",
          stat: "2+ MONTHS",
          highlighted: false,
          iconKey: "briefcase",
          colSpan: "6",
        },
      ],
      note: "The timeline depends on the scope of the brand system, not just the logo. Research, positioning, the number of applications, motion, digital requirements and stakeholder involvement can all affect the schedule.",
    },
    summaryHeading: "Who we work with",
    summaryRows: [
      {
        id: "startups",
        caption: "STARTUPS",
        description:
          "We define your positioning and identity and bring them to your website and launch materials, giving your brand a clear foundation for future growth.",
        iconKey: "rocket",
      },
      {
        id: "growing-companies",
        caption: "GROWING COMPANIES",
        description:
          "We evolve your identity as you introduce new products and enter new markets, preserving what customers recognize while giving your brand room to grow.",
        iconKey: "trending",
      },
      {
        id: "enterprise",
        caption: "ENTERPRISE",
        description:
          "We build brand systems that help teams work consistently across products and markets, with clear rules and practical tools for everyday design decisions.",
        iconKey: "building",
      },
    ],
    whyWeltyText:
      "Our experience designing and building digital products shapes how we approach branding. We consider how an identity will work on a website, inside an app, in motion and across marketing materials. With strategy, design and development in one team, we can carry that direction through to implementation and help it evolve as the business grows.",
    testimonialsHeading: "What our clients say",
    faqs: [
      {
        id: "bi-1",
        question: "What does a brand identity agency do?",
        paragraphs: [
          "A brand identity agency defines how a company should be recognized and expressed across different touchpoints. The work may include strategy, positioning, logo design, typography, color, art direction, motion, digital applications and brand guidelines.",
        ],
      },
      {
        id: "bi-2",
        question: "What is included in a brand identity?",
        paragraphs: [
          "The exact scope depends on the company, but a complete identity may include positioning, messaging, a logo system, typography, color, imagery, graphic elements, motion principles and guidelines for digital and physical applications.",
        ],
      },
      {
        id: "bi-3",
        question: "What is the difference between branding and visual identity?",
        paragraphs: [
          "Branding is the broader idea of how a company is positioned, communicated and perceived. Visual identity is the design system used to express that brand through the logo, typography, color, imagery, layout and motion.",
        ],
      },
      {
        id: "bi-4",
        question: "Does Welty create complete visual identity systems?",
        paragraphs: [
          "Yes. We develop the visual direction and build it into a complete identity system that can include logo design, typography, color, graphic language, art direction, illustration, 3D, motion and digital applications.",
          "When needed, we also help clarify positioning and messaging so the visual direction has a clear foundation and reflects how the company wants to be perceived.",
        ],
      },
      {
        id: "bi-5",
        question: "Can Welty create the brand and website together?",
        paragraphs: [
          "Yes. Brand and website projects can be developed as one connected process, allowing the visual system, content, motion and digital behavior to evolve together rather than passing the identity to a separate web team later.",
        ],
      },
      {
        id: "bi-6",
        question: "Do you work with existing brands?",
        paragraphs: [
          "Yes. We can complete a full rebrand, refresh an existing identity or expand a strong brand into a more complete digital and motion system.",
        ],
      },
      {
        id: "bi-7",
        question: "Can you support implementation after the identity is approved?",
        paragraphs: [
          "Yes. We can carry the identity into a website, digital product, motion, campaigns and launch materials, or work alongside an internal team during rollout.",
        ],
      },
    ],
    outroTitle: "Ready to build a stronger brand?",
    outroSubtitle:
      "Tell us what you need to change. We'll help define the right identity and scope.",
  },

  "custom-software-development": {
    slug: "custom-software-development",
    metaTitle: "Custom Software Development | Welty Tech",
    metaDescription:
      "We engineer tailored software solutions that solve complex business challenges, improve operations and support long-term growth.",
    heroTitle: "Custom Software Development",
    heroSubtitle:
      "We engineer tailored software solutions that solve complex business challenges, improve operations and support long-term growth.",
    heroCtaLabel: "Get in touch",
    heroBgImage: "/assets/services/web-design-development/hero-bg.webp",
    bentoHeading: "What we engineer",
    bentoCards: [
      {
        id: "csd-web",
        title: "Custom Web Applications",
        description:
          "Resilient, high-performance web platforms architected around your operational logic and user roles.",
        imageUrl: "/assets/services/web-design-development/bento-1.webp",
      },
      {
        id: "csd-saas",
        title: "SaaS & Enterprise Platforms",
        description:
          "Multi-tenant SaaS products and enterprise-grade software designed for security, reliability, and scale.",
        imageUrl: "/assets/services/web-design-development/bento-2.webp",
        large: true,
      },
      {
        id: "csd-mobile",
        title: "Mobile & AI-Powered Apps",
        description:
          "Cross-platform mobile apps and intelligent software workflows embedded with modern AI capabilities.",
        imageUrl: "/assets/services/product-design/bento-2.webp",
        large: true,
      },
      {
        id: "csd-backend",
        title: "Backend & Data Foundations",
        description:
          "Clean APIs, scalable database schemas, and modular architectures built for years of product evolution.",
        imageUrl: "/assets/services/web-design-development/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "detailed-3x2",
      tiles: [
        {
          id: "csd-cap-1",
          title: "Custom Web Application Development",
          description:
            "Modern React, Next.js, and full-stack web applications tailored to demanding product and business workflows.",
          iconKey: "code",
        },
        {
          id: "csd-cap-2",
          title: "Mobile Application Development",
          description:
            "Smooth iOS, Android, and cross-platform mobile applications engineered for reliability and speed.",
          iconKey: "play",
        },
        {
          id: "csd-cap-3",
          title: "Enterprise Software Development",
          description:
            "Mission-critical internal tools, portals, and governance-ready platforms built for complex organizations.",
          iconKey: "building",
        },
        {
          id: "csd-cap-4",
          title: "SaaS Platform Development",
          description:
            "End-to-end SaaS engineering covering multi-tenancy, billing, permissions, analytics, and onboarding.",
          iconKey: "layers",
        },
        {
          id: "csd-cap-5",
          title: "AI-Powered Application Development",
          description:
            "Embedding smart automation, semantic search, and LLM features directly into production software.",
          iconKey: "cpu",
        },
        {
          id: "csd-cap-6",
          title: "Backend & Database Engineering",
          description:
            "Fault-tolerant services, optimized relational/NoSQL databases, and high-throughput data pipelines.",
          iconKey: "database",
        },
      ],
    },
    selectedWork: [
      {
        id: "zelt-csd",
        brand: "Zelt",
        category: "Unified HR, Payroll & IT Platform",
        description:
          "We helped shape the digital flagship and product presentation for Zelt's unified platform, connecting payroll, onboarding, and device workflows in a crisp experience built for scale.",
        imageUrl: "/assets/services/work/zelt.webp",
        href: "/projects/zelt",
      },
      {
        id: "cisco-csd",
        brand: "Cisco",
        category: "Cloud Management Platform",
        description:
          "Partnering across 18 complex enterprise platform modules, we established a modular UI architecture and engineering-ready component system built for long-term product velocity.",
        imageUrl: "/assets/services/work/cisco.webp",
        href: "/projects/cisco",
      },
      {
        id: "sca-csd",
        brand: "SCA",
        category: "Enterprise Digital Platform",
        description:
          "Modernizing a business-critical nationwide operations platform with zero disruption, pairing clean software architecture with streamlined workflows.",
        imageUrl: "/assets/services/work/sca.webp",
        href: "/projects/sca",
      },
    ],
    quickContactHeading: "Need custom software engineered for scale?",
    processHeading: "Our process",
    processSteps: [
      {
        num: "01",
        title: "Technical Discovery & Architecture",
        description:
          "We align on business objectives, system constraints, security standards, and data models before writing production code.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "UX & System Blueprinting",
        description:
          "Translating complex operational requirements into clear screen architectures, API contracts, and sprint milestones.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "Agile Full-Stack Engineering",
        description:
          "Shipping tested frontend, mobile, backend, and database increments in transparent bi-weekly releases.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "AI & Third-Party Integration",
        description:
          "Connecting payment gateways, identity providers, AI services, and enterprise data sources seamlessly.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "QA, Launch & Long-Term Support",
        description:
          "End-to-end automated testing, load verification, clean deployment, and continuous evolution post-launch.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    timelines: {
      heading: "Typical engineering timelines",
      variant: "4-grid",
      tiles: [
        {
          id: "csd-t1",
          title: "MVP web or mobile product",
          stat: "6–10 WEEKS",
          highlighted: true,
          iconKey: "rocket",
          colSpan: "5",
        },
        {
          id: "csd-t2",
          title: "Custom SaaS platform v1",
          stat: "2–4 MONTHS",
          highlighted: false,
          iconKey: "layers",
          colSpan: "7",
        },
        {
          id: "csd-t3",
          title: "Enterprise platform modernization",
          stat: "3–6 MONTHS",
          highlighted: false,
          iconKey: "building",
          colSpan: "7",
        },
        {
          id: "csd-t4",
          title: "Dedicated engineering squad",
          stat: "ONGOING",
          highlighted: true,
          iconKey: "code",
          colSpan: "5",
        },
      ],
      note: "Schedules depend on domain complexity, regulatory compliance, data migrations, and integration scope. We define clear milestones before kickoff.",
    },
    summaryHeading: "Who we work with",
    summaryRows: [
      {
        id: "startups",
        caption: "STARTUPS",
        description:
          "Move from concept to a production-grade MVP or SaaS platform built on clean code that never needs a rewrite.",
        iconKey: "rocket",
      },
      {
        id: "growing",
        caption: "GROWING BUSINESSES",
        description:
          "Replace spreadsheets and fragile off-the-shelf tools with custom web and mobile software tailored to your operations.",
        iconKey: "trending",
      },
      {
        id: "enterprise",
        caption: "ENTERPRISE",
        description:
          "Modernize legacy software, unify distributed backends, and ship secure platforms across teams and regions.",
        iconKey: "building",
      },
    ],
    whyWeltyText: DEFAULT_WHY_WELTY_TEXT,
    testimonialsHeading: "See what our customers say",
    faqs: [
      {
        id: "csd-1",
        question: "What technologies does Welty use for custom software development?",
        paragraphs: [
          "We choose proven modern stacks matched to your product: TypeScript, React, Next.js, Node.js, Python, Go, PostgreSQL, Redis, and native or cross-platform mobile frameworks.",
        ],
      },
      {
        id: "csd-2",
        question: "Can you build both the product design and the full software?",
        paragraphs: [
          "Yes. Our product designers and software engineers work together from discovery through launch so UX craft and backend engineering stay tightly aligned.",
        ],
      },
      {
        id: "csd-3",
        question: "Do we own 100% of the source code and IP?",
        paragraphs: [
          "Always. All repositories, architecture documentation, infrastructure configurations, and intellectual property belong exclusively to your organization.",
        ],
      },
      {
        id: "csd-4",
        question: "Can you modernize an existing legacy application?",
        paragraphs: [
          "Yes. We audit existing codebases and databases, design an incremental migration path, and modernize interfaces and backend services without halting operations.",
        ],
      },
    ],
    outroTitle: "Have software to build or modernize?",
    outroSubtitle:
      "From product design to intelligent automation, we engineer technology that moves businesses forward.",
  },

  "erp-crm-solutions": {
    slug: "erp-crm-solutions",
    metaTitle: "ERP & CRM Solutions | Welty Tech",
    metaDescription:
      "We build and integrate intelligent business management systems that bring operations, customers and organisational data together.",
    heroTitle: "ERP & CRM Solutions",
    heroSubtitle:
      "We build and integrate intelligent business management systems that bring operations, customers and organisational data together.",
    heroCtaLabel: "Get in touch",
    heroBgImage: "/assets/services/ux-ui-design/hero-bg.webp",
    bentoHeading: "What we unify",
    bentoCards: [
      {
        id: "erp-custom",
        title: "Custom ERP Platforms",
        description:
          "Operations, procurement, finance, and multi-warehouse workflows unified in one tailored system.",
        imageUrl: "/assets/services/ux-ui-design/bento-1.webp",
      },
      {
        id: "crm-pipelines",
        title: "Intelligent CRM Systems",
        description:
          "Pipeline visibility, customer lifecycle tracking, and automated account workflows built around your sales motion.",
        imageUrl: "/assets/services/ux-ui-design/bento-2.webp",
        large: true,
      },
      {
        id: "erp-automation",
        title: "Automated Business Processes",
        description:
          "Eliminate manual handoffs between sales, inventory, invoicing, and fulfillment with rule-driven automation.",
        imageUrl: "/assets/services/ux-ui-design/bento-3.webp",
        large: true,
      },
      {
        id: "erp-customisation",
        title: "Tailored Customisation",
        description:
          "Adapting existing ERP and CRM platforms—or extending them with custom modules—without breaking upgrades.",
        imageUrl: "/assets/services/ux-ui-design/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "detailed-3x2",
      tiles: [
        {
          id: "erp-cap-1",
          title: "Custom ERP Development",
          description:
            "Bespoke resource planning platforms built around your exact operational, financial, and reporting structure.",
          iconKey: "building",
        },
        {
          id: "erp-cap-2",
          title: "CRM Development & Implementation",
          description:
            "End-to-end CRM platforms designed to capture every lead, interaction, renewal, and support touchpoint.",
          iconKey: "briefcase",
        },
        {
          id: "erp-cap-3",
          title: "Business Process Automation",
          description:
            "Automating approvals, invoicing, task routing, and cross-departmental triggers to save hours daily.",
          iconKey: "flow",
        },
        {
          id: "erp-cap-4",
          title: "Inventory & Operations Management",
          description:
            "Real-time stock visibility, vendor tracking, order orchestration, and warehouse operational dashboards.",
          iconKey: "database",
        },
        {
          id: "erp-cap-5",
          title: "Customer Relationship Management",
          description:
            "360-degree customer timelines, segmentation, retention metrics, and collaborative team workspaces.",
          iconKey: "globe",
        },
        {
          id: "erp-cap-6",
          title: "ERP & CRM Customisation",
          description:
            "Extending, tailoring, and modernizing existing ERP/CRM deployments with custom UIs, modules, and workflows.",
          iconKey: "layout",
        },
      ],
    },
    selectedWork: [
      {
        id: "find-erp",
        brand: "FIND",
        category: "Operations & CRM Platform",
        description:
          "Connecting property discovery, agent workflows, client inquiries, and internal operations into a single unified digital platform.",
        imageUrl: "/assets/services/work/find.webp",
        href: "/projects/find",
      },
      {
        id: "puntopago-erp",
        brand: "Punto Pago",
        category: "Merchant & Operations Ecosystem",
        description:
          "Unifying high-volume financial transactions, customer accounts, and merchant service operations inside one intuitive ecosystem.",
        imageUrl: "/assets/services/work/puntopago.webp",
        href: "/projects/puntopago",
      },
      {
        id: "sca-erp",
        brand: "SCA",
        category: "Nationwide Fleet & Operations",
        description:
          "Streamlining municipal quote management, regional operations, and enterprise customer requests across 42 states.",
        imageUrl: "/assets/services/work/sca.webp",
        href: "/projects/sca",
      },
    ],
    quickContactHeading: "Ready to unify your operations and customer data?",
    processHeading: "Our process",
    processSteps: [
      {
        num: "01",
        title: "Operations & Workflow Audit",
        description:
          "Mapping how sales, operations, inventory, and finance actually work today—and where data gets stuck in spreadsheets.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "Data & System Architecture",
        description:
          "Designing clean relational schemas, role-based permissions, and single-source-of-truth entities across teams.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "Module Build & Customisation",
        description:
          "Developing custom ERP/CRM modules, intuitive operator interfaces, and automated approval workflows.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "Integration & Data Migration",
        description:
          "Importing historical customer and inventory records cleanly while connecting accounting, email, and third-party tools.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "Training, Rollout & Support",
        description:
          "Staged team onboarding, live verification, and ongoing refinements as your business processes evolve.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    timelines: {
      heading: "Typical ERP & CRM timelines",
      variant: "4-grid",
      tiles: [
        {
          id: "erp-t1",
          title: "CRM implementation & customisation",
          stat: "4–6 WEEKS",
          highlighted: true,
          iconKey: "briefcase",
          colSpan: "5",
        },
        {
          id: "erp-t2",
          title: "Custom operations or inventory portal",
          stat: "6–10 WEEKS",
          highlighted: false,
          iconKey: "database",
          colSpan: "7",
        },
        {
          id: "erp-t3",
          title: "Full custom ERP / CRM platform",
          stat: "3–5 MONTHS",
          highlighted: false,
          iconKey: "building",
          colSpan: "7",
        },
        {
          id: "erp-t4",
          title: "Multi-department enterprise rollout",
          stat: "4–6 MONTHS",
          highlighted: true,
          iconKey: "flow",
          colSpan: "5",
        },
      ],
      note: "Timelines reflect module count, legacy data cleanup complexity, and third-party ERP/accounting integrations.",
    },
    summaryHeading: "Who we work with",
    summaryRows: [
      {
        id: "growing-ops",
        caption: "SCALING TEAMS",
        description:
          "Outgrow disconnected spreadsheets and manual order tracking with a unified operational core.",
        iconKey: "trending",
      },
      {
        id: "mid-market",
        caption: "MID-MARKET BUSINESSES",
        description:
          "Bridge gaps between sales CRMs, warehouses, and finance without forcing teams into rigid off-the-shelf software.",
        iconKey: "briefcase",
      },
      {
        id: "enterprise",
        caption: "ENTERPRISE",
        description:
          "Consolidate multi-region operations, role governance, and custom reporting into one secure management layer.",
        iconKey: "building",
      },
    ],
    whyWeltyText: DEFAULT_WHY_WELTY_TEXT,
    testimonialsHeading: "See what our customers say",
    faqs: [
      {
        id: "erp-1",
        question: "Should we build a custom ERP/CRM or customize an existing platform?",
        paragraphs: [
          "We recommend whichever delivers the highest ROI. When off-the-shelf platforms cover 80%+ of your workflow, customizing and extending them is faster. When your business model relies on proprietary operations, a custom ERP/CRM avoids licensing bloat and rigid workarounds.",
        ],
      },
      {
        id: "erp-2",
        question: "Can you migrate our existing spreadsheets and legacy CRM data?",
        paragraphs: [
          "Yes. We clean, deduplicate, validate, and migrate historical customer, order, and inventory records with full audit trails.",
        ],
      },
      {
        id: "erp-3",
        question: "Can our ERP and CRM integrate with accounting and third-party tools?",
        paragraphs: [
          "Yes. We build reliable two-way integrations with finance systems, payment gateways, warehouses, email, and analytics platforms.",
        ],
      },
      {
        id: "erp-4",
        question: "Do you build role-based permissions and audit logs?",
        paragraphs: [
          "Yes. Granular team permissions, approval chains, and activity logging are built into every ERP and CRM system we deliver.",
        ],
      },
    ],
    outroTitle: "Ready to unify your business systems?",
    outroSubtitle:
      "From product design to intelligent automation, we engineer technology that moves businesses forward.",
  },

  "ai-solutions-automation": {
    slug: "ai-solutions-automation",
    metaTitle: "AI Solutions & Intelligent Automation | Welty Tech",
    metaDescription:
      "We integrate artificial intelligence into business operations to automate workflows, enhance decision-making and create smarter digital experiences.",
    heroTitle: "AI Solutions & Intelligent Automation",
    heroSubtitle:
      "We integrate artificial intelligence into business operations to automate workflows, enhance decision-making and create smarter digital experiences.",
    heroCtaLabel: "Get in touch",
    heroBgImage: "/assets/services/creative-development/hero-bg.webp",
    bentoHeading: "What we automate & build",
    bentoCards: [
      {
        id: "ai-agents",
        title: "Autonomous AI Agents",
        description:
          "Task-oriented AI agents that reason across tools, databases, and APIs to execute multi-step operational workflows.",
        imageUrl: "/assets/services/creative-development/bento-1.webp",
      },
      {
        id: "ai-assistants",
        title: "AI Chatbots & Virtual Assistants",
        description:
          "Context-aware customer and internal assistants grounded in your live knowledge base and business rules.",
        imageUrl: "/assets/services/creative-development/bento-2.webp",
        large: true,
      },
      {
        id: "ai-docs",
        title: "Document Intelligence & Processing",
        description:
          "Automated extraction, classification, and verification across PDFs, invoices, contracts, and forms.",
        imageUrl: "/assets/services/creative-development/bento-3.webp",
        large: true,
      },
      {
        id: "ai-apps",
        title: "AI-Powered Business Apps",
        description:
          "Embedding reliable LLM capabilities directly into your existing SaaS, CRM, and operational software.",
        imageUrl: "/assets/services/creative-development/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "detailed-3x2",
      tiles: [
        {
          id: "ai-cap-1",
          title: "AI Agent Development",
          description:
            "Multi-step agents with tool calling, human-in-the-loop approvals, and deterministic guardrails.",
          iconKey: "cpu",
        },
        {
          id: "ai-cap-2",
          title: "AI Chatbots & Virtual Assistants",
          description:
            "24/7 conversational support and internal copilot assistants trained safely on your proprietary documentation.",
          iconKey: "sparkles",
        },
        {
          id: "ai-cap-3",
          title: "Intelligent Workflow Automation",
          description:
            "Replacing repetitive triage, data entry, and routing with resilient AI-driven operational pipelines.",
          iconKey: "flow",
        },
        {
          id: "ai-cap-4",
          title: "Large Language Model (LLM) Integration",
          description:
            "Production-grade RAG architectures, prompt evaluation, and model routing across cloud or private LLMs.",
          iconKey: "orbit",
        },
        {
          id: "ai-cap-5",
          title: "Document Intelligence & Processing",
          description:
            "Accurate OCR, structured data extraction, summarization, and compliance checks at scale.",
          iconKey: "search",
        },
        {
          id: "ai-cap-6",
          title: "AI-Powered Business Applications",
          description:
            "Custom internal and customer-facing products built from the ground up around intelligent automation.",
          iconKey: "layout",
        },
      ],
    },
    selectedWork: [
      {
        id: "appflowy-ai",
        brand: "AppFlowy",
        category: "Self-Hosted AI Workspace",
        description:
          "Crafting a clear, recognizable visual direction and product system for an AI-powered collaborative workspace.",
        imageUrl: "/assets/services/work/appflowy.webp",
        href: "/projects",
      },
      {
        id: "daoway-ai",
        brand: "DaoWay",
        category: "Intelligent Daily Planning",
        description:
          "Turning complex rule engines and structured data into a clear, personalized daily planning product.",
        imageUrl: "/assets/services/work/daoway.webp",
        href: "/projects/daoway",
      },
      {
        id: "kzero-ai",
        brand: "Kzero",
        category: "Next-Gen Authentication Tech",
        description:
          "Explaining sophisticated cybersecurity and automated verification technology through clear product storytelling.",
        imageUrl: "/assets/services/work/kzero.webp",
        href: "/projects",
      },
    ],
    quickContactHeading: "Ready to put AI to work in your operations?",
    processHeading: "Our process",
    processSteps: [
      {
        num: "01",
        title: "Use-Case & ROI Discovery",
        description:
          "Evaluating where AI agents, document intelligence, or LLM workflows deliver measurable time and cost savings.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "Data & Retrieval Architecture",
        description:
          "Preparing clean vector indexes, access permissions, and structured knowledge pipelines for accurate responses.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "Prototype & Accuracy Evals",
        description:
          "Testing prompts, tool calls, and edge cases against real business datasets before scaling.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "Production Integration & Guardrails",
        description:
          "Connecting models safely into your web apps, ERP/CRM, and internal tools with fallback controls and logging.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "Monitoring & Continuous Tuning",
        description:
          "Tracking latency, token cost, and output quality as your data and operational workflows evolve.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    timelines: {
      heading: "Typical AI project timelines",
      variant: "4-grid",
      tiles: [
        {
          id: "ai-t1",
          title: "AI proof-of-concept / workflow pilot",
          stat: "2–3 WEEKS",
          highlighted: true,
          iconKey: "sparkles",
          colSpan: "5",
        },
        {
          id: "ai-t2",
          title: "RAG assistant or document pipeline",
          stat: "4–6 WEEKS",
          highlighted: false,
          iconKey: "search",
          colSpan: "7",
        },
        {
          id: "ai-t3",
          title: "Custom AI agent & ERP/CRM automation",
          stat: "6–10 WEEKS",
          highlighted: false,
          iconKey: "cpu",
          colSpan: "7",
        },
        {
          id: "ai-t4",
          title: "Full AI-powered product platform",
          stat: "2–4 MONTHS",
          highlighted: true,
          iconKey: "orbit",
          colSpan: "5",
        },
      ],
      note: "We deploy both API-based frontier models and self-hosted open-weight models inside private infrastructure depending on your security and latency needs.",
    },
    summaryHeading: "Who we work with",
    summaryRows: [
      {
        id: "product-teams",
        caption: "PRODUCT TEAMS",
        description:
          "Add reliable AI assistants, semantic search, and intelligent automation natively inside your digital product.",
        iconKey: "rocket",
      },
      {
        id: "operations",
        caption: "OPERATIONS & SUPPORT",
        description:
          "Automate document intake, ticket triage, and repetitive back-office workflows with human-verified accuracy.",
        iconKey: "flow",
      },
      {
        id: "enterprise-ai",
        caption: "REGULATED ENTERPRISES",
        description:
          "Deploy private, auditable LLM and document intelligence workflows with zero external data leakage.",
        iconKey: "shield",
      },
    ],
    whyWeltyText: DEFAULT_WHY_WELTY_TEXT,
    testimonialsHeading: "See what our customers say",
    faqs: [
      {
        id: "ai-1",
        question: "Can Welty integrate AI into our existing software or ERP/CRM?",
        paragraphs: [
          "Yes. Most of our AI engagements embed directly into existing web apps, internal portals, CRMs, and document pipelines rather than forcing teams into a separate tool.",
        ],
      },
      {
        id: "ai-2",
        question: "How do you prevent hallucinations and ensure accuracy?",
        paragraphs: [
          "We pair retrieval-augmented generation (RAG) over verified data with structured outputs, citation links, automated evaluation suites, and human-in-the-loop checkpoints for sensitive actions.",
        ],
      },
      {
        id: "ai-3",
        question: "Can we run AI models privately without sending data to third-party APIs?",
        paragraphs: [
          "Yes. Through our On-Premises & Private Cloud practice, we deploy self-hosted open-weight LLMs and document processors completely within your dedicated servers or VPC.",
        ],
      },
      {
        id: "ai-4",
        question: "What types of documents can Document Intelligence handle?",
        paragraphs: [
          "Invoices, purchase orders, contracts, onboarding forms, compliance PDFs, and scanned records—extracting clean JSON directly into your ERP or database.",
        ],
      },
    ],
    outroTitle: "Ready to automate with intelligent AI?",
    outroSubtitle:
      "From product design to intelligent automation, we engineer technology that moves businesses forward.",
  },

  "on-premises-private-cloud": {
    slug: "on-premises-private-cloud",
    metaTitle: "On-Premises & Private Cloud Deployment | Welty Tech",
    metaDescription:
      "We develop and deploy software within dedicated infrastructure, private cloud environments and client-managed servers, giving businesses greater control over their technology and data.",
    heroTitle: "On-Premises & Private Cloud Deployment",
    heroSubtitle:
      "We develop and deploy software within dedicated infrastructure, private cloud environments and client-managed servers, giving businesses greater control over their technology and data.",
    heroCtaLabel: "Get in touch",
    heroBgImage: "/assets/services/brand-identity/hero-bg.webp",
    bentoHeading: "Infrastructure under your control",
    bentoCards: [
      {
        id: "op-onprem",
        title: "On-Premises Software Deployment",
        description:
          "Production applications packaged cleanly to run inside your own data centers and air-gapped or client-managed servers.",
        imageUrl: "/assets/services/brand-identity/bento-1.webp",
      },
      {
        id: "op-private-cloud",
        title: "Private & Hybrid Cloud",
        description:
          "Isolated VPCs, dedicated bare-metal clusters, and hybrid topologies combining local sovereignty with cloud elasticity.",
        imageUrl: "/assets/services/brand-identity/bento-2.webp",
        large: true,
      },
      {
        id: "op-selfhosted-ai",
        title: "Self-Hosted AI Solutions",
        description:
          "Running private LLMs, vector stores, and inference pipelines inside your perimeter with zero external data exposure.",
        imageUrl: "/assets/services/brand-identity/bento-3.webp",
        large: true,
      },
      {
        id: "op-devops",
        title: "DevOps, CI/CD & Maintenance",
        description:
          "Automated pipelines, containerized deployments, observability, and hardened infrastructure operations.",
        imageUrl: "/assets/services/brand-identity/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "detailed-3x2",
      tiles: [
        {
          id: "op-cap-1",
          title: "On-Premises Software Development & Deployment",
          description:
            "Building and packaging software engineered specifically for client-owned hardware and strict internal networks.",
          iconKey: "server",
        },
        {
          id: "op-cap-2",
          title: "Private Cloud Infrastructure",
          description:
            "Dedicated single-tenant cloud environments configured with network isolation, encryption, and zero-trust access.",
          iconKey: "shield",
        },
        {
          id: "op-cap-3",
          title: "Self-Hosted AI Solutions",
          description:
            "Deploying private inference servers, local LLMs, and secure RAG systems entirely on your GPU infrastructure.",
          iconKey: "cpu",
        },
        {
          id: "op-cap-4",
          title: "Hybrid Cloud Architecture",
          description:
            "Bridging sensitive on-premises databases with private cloud workloads cleanly and securely.",
          iconKey: "globe",
        },
        {
          id: "op-cap-5",
          title: "DevOps & CI/CD Implementation",
          description:
            "Infrastructure-as-code, Docker/Kubernetes orchestration, zero-downtime release pipelines, and automated rollbacks.",
          iconKey: "flow",
        },
        {
          id: "op-cap-6",
          title: "Infrastructure Configuration & Maintenance",
          description:
            "Continuous monitoring, backup verification, OS/container patching, and SLA-backed operational support.",
          iconKey: "gauge",
        },
      ],
    },
    selectedWork: [
      {
        id: "appflowy-op",
        brand: "AppFlowy",
        category: "Self-Hosted AI Workspace",
        description:
          "Supporting privacy-first organizations with self-hosted deployment narratives and cohesive digital product architecture.",
        imageUrl: "/assets/services/work/appflowy.webp",
        href: "/projects",
      },
      {
        id: "cisco-op",
        brand: "Cisco",
        category: "Enterprise Infrastructure UI",
        description:
          "Redesigning complex cloud and network infrastructure management tools for clarity across enterprise engineering teams.",
        imageUrl: "/assets/services/work/cisco.webp",
        href: "/projects/cisco",
      },
      {
        id: "kzero-op",
        brand: "Kzero",
        category: "Security & Authentication",
        description:
          "Translating zero-trust authentication architecture into a clean, trustworthy digital product and brand experience.",
        imageUrl: "/assets/services/work/kzero.webp",
        href: "/projects",
      },
    ],
    quickContactHeading: "Need software running on your own infrastructure?",
    processHeading: "Our process",
    processSteps: [
      {
        num: "01",
        title: "Security & Compliance Assessment",
        description:
          "Reviewing data residency requirements, network topology, hardware specs, and internal governance policies.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "Infrastructure & Topology Design",
        description:
          "Architecting reproducible on-premises, private cloud, or hybrid clusters with high availability and failover.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "Containerization & CI/CD Setup",
        description:
          "Packaging applications, databases, and self-hosted AI services with automated build and deployment pipelines.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "Hardened Deployment & Verification",
        description:
          "Deploying onto client-managed servers, running penetration/load checks, and verifying automated backups.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "Handover & Ongoing Maintenance",
        description:
          "Full runbooks for internal IT teams plus optional ongoing monitoring, patching, and infrastructure support.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    timelines: {
      heading: "Typical deployment timelines",
      variant: "4-grid",
      tiles: [
        {
          id: "op-t1",
          title: "CI/CD & containerization setup",
          stat: "2–3 WEEKS",
          highlighted: true,
          iconKey: "flow",
          colSpan: "5",
        },
        {
          id: "op-t2",
          title: "Private cloud / VPC environment",
          stat: "3–5 WEEKS",
          highlighted: false,
          iconKey: "shield",
          colSpan: "7",
        },
        {
          id: "op-t3",
          title: "Self-hosted AI cluster deployment",
          stat: "4–8 WEEKS",
          highlighted: false,
          iconKey: "cpu",
          colSpan: "7",
        },
        {
          id: "op-t4",
          title: "Full on-premises enterprise rollout",
          stat: "6–12 WEEKS",
          highlighted: true,
          iconKey: "server",
          colSpan: "5",
        },
      ],
      note: "Schedules depend on security review cycles, hardware provisioning, and air-gapped network constraints.",
    },
    summaryHeading: "Who we work with",
    summaryRows: [
      {
        id: "regulated",
        caption: "REGULATED INDUSTRIES",
        description:
          "Finance, healthcare, legal, and public-sector teams requiring strict data residency and zero third-party cloud exposure.",
        iconKey: "shield",
      },
      {
        id: "ai-privacy",
        caption: "PRIVACY-FIRST AI TEAMS",
        description:
          "Organizations adopting LLMs and automation who must keep proprietary data strictly inside private servers.",
        iconKey: "cpu",
      },
      {
        id: "enterprise-it",
        caption: "ENTERPRISE IT",
        description:
          "Internal technology teams seeking modern DevOps pipelines, hybrid architecture, and reliable on-premises delivery.",
        iconKey: "server",
      },
    ],
    whyWeltyText: DEFAULT_WHY_WELTY_TEXT,
    testimonialsHeading: "See what our customers say",
    faqs: [
      {
        id: "op-1",
        question: "Can Welty deploy software on our existing company servers or private cloud?",
        paragraphs: [
          "Yes. We package and deploy applications directly onto your bare-metal servers, VMware/Proxmox clusters, private OpenStack, or isolated AWS/Azure/GCP VPCs.",
        ],
      },
      {
        id: "op-2",
        question: "How do self-hosted AI solutions work on-premises?",
        paragraphs: [
          "We deploy open-weight LLMs, embedding models, and vector databases inside containerized GPU environments on your own servers—giving you AI capabilities without external API calls.",
        ],
      },
      {
        id: "op-3",
        question: "Do you support air-gapped or restricted network environments?",
        paragraphs: [
          "Yes. We build offline-capable container bundles, internal artifact registries, and reproducible deployment scripts tailored for restricted environments.",
        ],
      },
      {
        id: "op-4",
        question: "Do you provide ongoing maintenance after deployment?",
        paragraphs: [
          "Yes. We provide complete documentation for your internal IT staff and offer ongoing SLA maintenance, security patching, and observability support.",
        ],
      },
    ],
    outroTitle: "Want full control over your infrastructure?",
    outroSubtitle:
      "From product design to intelligent automation, we engineer technology that moves businesses forward.",
  },

  "system-integration-api": {
    slug: "system-integration-api",
    metaTitle: "System Integration & API Development | Welty Tech",
    metaDescription:
      "We connect applications, platforms and business systems through reliable integrations, enabling seamless communication and unified business operations.",
    heroTitle: "System Integration & API Development",
    heroSubtitle:
      "We connect applications, platforms and business systems through reliable integrations, enabling seamless communication and unified business operations.",
    heroCtaLabel: "Get in touch",
    heroBgImage: "/assets/services/web-design-development/hero-bg.webp",
    bentoHeading: "What we connect",
    bentoCards: [
      {
        id: "si-apis",
        title: "Custom API Platforms",
        description:
          "Clean, versioned, well-documented REST, GraphQL, and webhook APIs engineered for partners and internal apps.",
        imageUrl: "/assets/services/web-design-development/bento-1.webp",
      },
      {
        id: "si-erp-crm",
        title: "ERP, CRM & Core Systems",
        description:
          "Reliable bidirectional sync connecting sales, billing, inventory, and customer support with zero duplicate entry.",
        imageUrl: "/assets/services/ux-ui-design/bento-2.webp",
        large: true,
      },
      {
        id: "si-ai-apps",
        title: "AI & Third-Party Integrations",
        description:
          "Bridging payment providers, identity platforms, logistics APIs, and AI engines into a unified workflow.",
        imageUrl: "/assets/services/creative-development/bento-3.webp",
        large: true,
      },
      {
        id: "si-db-migration",
        title: "Database Integration & Migration",
        description:
          "Zero-data-loss migrations, ETL pipelines, and real-time replication across legacy and modern data stores.",
        imageUrl: "/assets/services/web-design-development/bento-4.webp",
      },
    ],
    capabilities: {
      heading: "Our capabilities",
      variant: "detailed-3x2",
      tiles: [
        {
          id: "si-cap-1",
          title: "Custom API Development",
          description:
            "Designing secure, rate-limited, OpenAPI-documented REST and GraphQL APIs built for high reliability.",
          iconKey: "plug",
        },
        {
          id: "si-cap-2",
          title: "Third-Party Software Integration",
          description:
            "Connecting Stripe, HubSpot, Salesforce, SAP, Slack, shipping carriers, and domain SaaS platforms seamlessly.",
          iconKey: "globe",
        },
        {
          id: "si-cap-3",
          title: "ERP & CRM Integrations",
          description:
            "Keeping orders, customer profiles, invoices, and stock synchronized automatically across departments.",
          iconKey: "briefcase",
        },
        {
          id: "si-cap-4",
          title: "AI & Application Integrations",
          description:
            "Wiring LLM endpoints, vector search, and automated agents directly into your existing application events.",
          iconKey: "cpu",
        },
        {
          id: "si-cap-5",
          title: "Database Integration & Migration",
          description:
            "Consolidating fragmented databases, transforming schemas safely, and verifying integrity end to end.",
          iconKey: "database",
        },
        {
          id: "si-cap-6",
          title: "Enterprise System Connectivity",
          description:
            "Event-driven middleware, message queues, and resilient retry logic connecting legacy and cloud ecosystems.",
          iconKey: "flow",
        },
      ],
    },
    selectedWork: [
      {
        id: "puntopago-si",
        brand: "Punto Pago",
        category: "Multi-Rail Payment Integrations",
        description:
          "Unifying banking rails, utility billers, QR payments, and wallet services inside one reliable fintech architecture.",
        imageUrl: "/assets/services/work/puntopago.webp",
        href: "/projects/puntopago",
      },
      {
        id: "qvino-si",
        brand: "Qvino",
        category: "Commerce, Inventory & Recognition APIs",
        description:
          "Connecting label recognition, curated cellar inventory, order fulfillment, and personalized recommendations.",
        imageUrl: "/assets/services/work/qvino.webp",
        href: "/projects/qvino",
      },
      {
        id: "zelt-si",
        brand: "Zelt",
        category: "HR, Payroll & IT System Sync",
        description:
          "Bringing payroll, employee records, compliance, and IT device provisioning together into one seamless experience.",
        imageUrl: "/assets/services/work/zelt.webp",
        href: "/projects/zelt",
      },
    ],
    quickContactHeading: "Need your applications and data working as one?",
    processHeading: "Our process",
    processSteps: [
      {
        num: "01",
        title: "System & Contract Discovery",
        description:
          "Auditing existing APIs, rate limits, webhooks, data formats, and failure modes across every connected platform.",
        bgImage: "/assets/services/1.webp",
      },
      {
        num: "02",
        title: "Integration & Schema Design",
        description:
          "Defining canonical data models, idempotency rules, authentication flows, and error-handling strategies.",
        bgImage: "/assets/services/2.webp",
      },
      {
        num: "03",
        title: "API & Middleware Engineering",
        description:
          "Building resilient connectors, queues, and custom APIs with clean TypeScript/Node, Python, or Go services.",
        bgImage: "/assets/services/3.webp",
      },
      {
        num: "04",
        title: "Migration & End-to-End Testing",
        description:
          "Validating payload edge cases, staging data migrations, and load-testing throughput before cutover.",
        bgImage: "/assets/services/4.webp",
      },
      {
        num: "05",
        title: "Observability & Live Support",
        description:
          "Dead-letter alerting, audit logs, API documentation, and ongoing maintenance as external APIs evolve.",
        bgImage: "/assets/services/5.webp",
      },
    ],
    timelines: {
      heading: "Typical integration timelines",
      variant: "4-grid",
      tiles: [
        {
          id: "si-t1",
          title: "Single third-party API / webhook sync",
          stat: "1–3 WEEKS",
          highlighted: true,
          iconKey: "plug",
          colSpan: "5",
        },
        {
          id: "si-t2",
          title: "Custom public or partner API",
          stat: "3–6 WEEKS",
          highlighted: false,
          iconKey: "code",
          colSpan: "7",
        },
        {
          id: "si-t3",
          title: "Database migration & ETL pipeline",
          stat: "4–8 WEEKS",
          highlighted: false,
          iconKey: "database",
          colSpan: "7",
        },
        {
          id: "si-t4",
          title: "Multi-system enterprise connectivity",
          stat: "2–4 MONTHS",
          highlighted: true,
          iconKey: "flow",
          colSpan: "5",
        },
      ],
      note: "Exact schedules depend on third-party API quality, legacy database complexity, and compliance verification.",
    },
    summaryHeading: "Who we work with",
    summaryRows: [
      {
        id: "saas-teams",
        caption: "SAAS PLATFORMS",
        description:
          "Ship public APIs, webhooks, and native customer integrations that accelerate enterprise adoption.",
        iconKey: "plug",
      },
      {
        id: "operations-si",
        caption: "GROWING OPERATIONS",
        description:
          "Eliminate manual CSV exports and brittle no-code zaps with engineered, fault-tolerant middleware.",
        iconKey: "flow",
      },
      {
        id: "enterprise-si",
        caption: "ENTERPRISE",
        description:
          "Connect legacy on-premises databases, ERPs, CRMs, and modern cloud apps with full auditability.",
        iconKey: "building",
      },
    ],
    whyWeltyText: DEFAULT_WHY_WELTY_TEXT,
    testimonialsHeading: "See what our customers say",
    faqs: [
      {
        id: "si-1",
        question: "How do you prevent data loss or duplicate records during syncs?",
        paragraphs: [
          "We design integrations with idempotency keys, transactional checkpoints, dead-letter queues, and automated reconciliation alerts so transient API failures never corrupt data.",
        ],
      },
      {
        id: "si-2",
        question: "Can you integrate legacy systems that lack modern REST APIs?",
        paragraphs: [
          "Yes. We build secure adapter services around SOAP endpoints, SFTP batch files, legacy SQL databases, and proprietary protocols.",
        ],
      },
      {
        id: "si-3",
        question: "Do you deliver full API documentation and developer portals?",
        paragraphs: [
          "Yes. Every custom API ships with OpenAPI/Swagger specifications, authentication guides, and example payloads for internal or partner developers.",
        ],
      },
      {
        id: "si-4",
        question: "Can you handle database migrations with minimal downtime?",
        paragraphs: [
          "Yes. We use staged backfill and dual-write or CDC replication strategies to migrate production databases safely with verified checksums.",
        ],
      },
    ],
    outroTitle: "Ready to connect your technology stack?",
    outroSubtitle:
      "From product design to intelligent automation, we engineer technology that moves businesses forward.",
  },
};
