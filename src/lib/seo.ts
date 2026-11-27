import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://welty.in";

export const SITE_NAME = "Welty Tech";
export const SITE_TAGLINE = "Engineering What's Next.";
export const SITE_EMAIL = "info@welty.in";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/welty-tech/about/?viewAsMember=true";
export const INSTAGRAM_PROFILE_URL =
  "https://www.instagram.com/weltytech?cnvx=MWVjNmswaGs0eXE3aA%3D%3D&utm_source=qr";
export const INSTAGRAM_CANONICAL_URL = "https://www.instagram.com/weltytech/";
export const X_URL = "https://x.com/weltytech";

export const SITE_DESCRIPTION =
  "Welty Tech is a technology company focused on digital product design, custom software development, ERP & CRM solutions, AI automation, private cloud, and API integrations.";

export const CORE_KEYWORDS = [
  "Welty Tech",
  "Welty Tech Engineering What's Next",
  "Digital Product Design",
  "Custom Software Development",
  "ERP & CRM Solutions",
  "AI Solutions & Intelligent Automation",
  "On-Premises & Private Cloud Deployment",
  "System Integration & API Development",
  "UI/UX Design & Figma Design Systems",
  "AI Agent Development",
  "LLM Integration",
  "Self-Hosted AI Solutions",
  "Enterprise Software Development",
  "SaaS Platform Development",
];

export const AREAS_OF_FOCUS = [
  {
    title: "Digital Product Design",
    summary: "UX research, UI/UX and Figma-based design.",
    href: "/services/product-design",
  },
  {
    title: "Custom Software Development",
    summary: "Web applications, mobile apps and enterprise software.",
    href: "/services/custom-software-development",
  },
  {
    title: "ERP & CRM Solutions",
    summary: "Business management and customer relationship systems.",
    href: "/services/erp-crm-solutions",
  },
  {
    title: "AI & Intelligent Automation",
    summary:
      "AI agents, chatbots, intelligent workflows and AI-powered applications.",
    href: "/services/ai-solutions-automation",
  },
  {
    title: "On-Premises & Private Cloud",
    summary:
      "Private infrastructure, self-hosted solutions and secure deployment.",
    href: "/services/on-premises-private-cloud",
  },
  {
    title: "System Integration & API Development",
    summary: "Connecting applications, platforms and business systems.",
    href: "/services/system-integration-api",
  },
];

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  image = "/opengraph-image",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
}): Metadata {
  const canonicalUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const absoluteImageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return {
    title,
    description,
    keywords: [...CORE_KEYWORDS, ...keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_US",
      url: canonicalUrl,
      title,
      description,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@weltytech",
      creator: "@weltytech",
      title,
      description,
      images: [absoluteImageUrl],
    },
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ["Welty", "Welty Tech Agency"],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/welty-logo.svg`,
        },
        email: SITE_EMAIL,
        slogan: SITE_TAGLINE,
        description: SITE_DESCRIPTION,
        sameAs: [LINKEDIN_URL, INSTAGRAM_CANONICAL_URL, X_URL],
        knowsAbout: AREAS_OF_FOCUS.map((item) => item.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Welty Tech Services",
          itemListElement: AREAS_OF_FOCUS.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.summary,
              url: `${SITE_URL}${item.href}`,
            },
          })),
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SITE_EMAIL,
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };
}

export function buildFaqJsonLd(
  faqs: { question: string; paragraphs: string[] }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.paragraphs.join(" "),
      },
    })),
  };
}

export function buildServicesCollectionJsonLd(
  pillars: { label: string; description: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Welty Tech Services",
        url: `${SITE_URL}/services`,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: pillars.map((pillar, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: pillar.label,
            description: pillar.description,
            url: `${SITE_URL}${pillar.href}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
        ],
      },
    ],
  };
}

export function buildBlogCollectionJsonLd(
  posts: {
    title: string;
    excerpt: string;
    href: string;
    date: string;
    imageUrl: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Welty Tech Blog",
        url: `${SITE_URL}/blog`,
        description:
          "Engineering notes and guides on digital product design, custom software development, ERP/CRM systems, and practical AI.",
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `${SITE_URL}${post.href}`,
          image: `${SITE_URL}${post.imageUrl}`,
          datePublished: post.date,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
        ],
      },
    ],
  };
}

export function buildContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: "Contact Welty Tech",
        url: `${SITE_URL}/contacts`,
        description:
          "Start a project inquiry with Welty Tech for digital product design, custom software development, ERP & CRM solutions, AI automation, private cloud, and API integrations.",
        inLanguage: "en",
        mainEntity: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contacts",
            item: `${SITE_URL}/contacts`,
          },
        ],
      },
    ],
  };
}

export function buildServiceJsonLd({
  name,
  description,
  url,
  faqs,
}: {
  name: string;
  description: string;
  url: string;
  faqs?: { question: string; paragraphs: string[] }[];
}) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      name,
      description,
      url,
      inLanguage: "en",
      areaServed: "Worldwide",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      serviceType: name,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name,
          item: url,
        },
      ],
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.paragraphs.join(" "),
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildArticleJsonLd({
  headline,
  description,
  url,
  imageUrl,
  datePublished,
}: {
  headline: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
}) {
  const absoluteImageUrl = imageUrl.startsWith("http")
    ? imageUrl
    : `${SITE_URL}${imageUrl}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline,
        description,
        url,
        inLanguage: "en",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        image: absoluteImageUrl,
        datePublished,
        dateModified: datePublished,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: headline,
            item: url,
          },
        ],
      },
    ],
  };
}
