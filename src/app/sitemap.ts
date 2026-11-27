import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { BLOG_ENTRIES } from "@/data/welty";
import { SERVICE_DETAILS } from "@/data/serviceDetails";

function parsePostDate(dateStr: string): Date {
  const parts = dateStr.split("/");
  if (parts.length === 3) {
    const [month, day, year] = parts.map(Number);
    const parsed = new Date(Date.UTC(year, month - 1, day));
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const defaultOgImage = `${SITE_URL}/opengraph-image`;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [defaultOgImage, `${SITE_URL}/assets/showreel/welty-hero-poster.jpg`],
      videos: [
        {
          title: "Welty Tech — AI & Motion Showcase",
          thumbnail_loc: `${SITE_URL}/assets/showreel/welty-hero-poster.jpg`,
          description:
            "Intelligent digital products, custom software platforms, and AI-powered experiences engineered by Welty Tech.",
          content_loc: `${SITE_URL}/assets/showreel/welty-hero.mp4`,
        },
      ],
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [defaultOgImage],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [defaultOgImage],
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [defaultOgImage],
    },
    {
      url: `${SITE_URL}/contacts`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [defaultOgImage],
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const primaryServiceSlugs = new Set([
    "product-design",
    "custom-software-development",
    "erp-crm-solutions",
    "ai-solutions-automation",
    "on-premises-private-cloud",
    "system-integration-api",
  ]);

  const serviceRoutes: MetadataRoute.Sitemap = Object.entries(
    SERVICE_DETAILS
  ).map(([slug, service]) => {
    const heroImage = service.heroBgImage?.startsWith("http")
      ? service.heroBgImage
      : service.heroBgImage
        ? `${SITE_URL}${service.heroBgImage}`
        : defaultOgImage;

    return {
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: primaryServiceSlugs.has(slug) ? 0.9 : 0.75,
      images: [heroImage],
    };
  });

  const blogRoutes: MetadataRoute.Sitemap = BLOG_ENTRIES.map((post) => ({
    url: `${SITE_URL}${post.href}`,
    lastModified: parsePostDate(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [`${SITE_URL}${post.imageUrl}`],
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
