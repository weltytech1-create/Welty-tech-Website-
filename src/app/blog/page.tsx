import type { Metadata } from "next";
import { BlogClient } from "@/components/BlogClient";
import { BLOG_ENTRIES } from "@/data/welty";
import {
  buildBlogCollectionJsonLd,
  buildPageMetadata,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog — Product Design, Custom Software & AI Insights",
  description:
    "Articles and guides from Welty Tech covering digital product design, Next.js software engineering, Figma design tokens, and practical AI solutions.",
  path: "/blog",
  keywords: [
    "Welty Tech Blog",
    "Digital Product Design Insights",
    "Custom Software & AI Articles",
  ],
});

export default function BlogPage() {
  const blogJsonLd = buildBlogCollectionJsonLd(BLOG_ENTRIES);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(blogJsonLd) }}
      />
      <BlogClient />
    </>
  );
}
