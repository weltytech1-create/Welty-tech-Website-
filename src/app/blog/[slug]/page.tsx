import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OutroSection } from "@/components/OutroSection";
import { BLOG_ENTRIES } from "@/data/welty";
import {
  SITE_URL,
  buildArticleJsonLd,
  buildPageMetadata,
  serializeJsonLd,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_ENTRIES.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_ENTRIES.find((p) => p.slug === slug);
  if (!post) {
    return {
      ...buildPageMetadata({
        title: "Blog",
        description:
          "Design, custom software engineering and AI insights from Welty Tech.",
        path: "/blog",
      }),
      robots: { index: false, follow: false },
    };
  }
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: [post.category, "Welty Tech Blog"],
    type: "article",
    image: post.imageUrl,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_ENTRIES.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_ENTRIES.filter((p) => p.slug !== slug).slice(0, 2);
  const articleJsonLd = buildArticleJsonLd({
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}${post.href}`,
    imageUrl: post.imageUrl,
    datePublished: post.date,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />
      <Navbar />
      <main>
        <article className="pt-[12rem] pb-[8rem] md:pt-[20rem] md:pb-[12rem]">
          <div className="cb-container">
            <Link
              href="/blog"
              className="inline-flex items-center gap-[0.8rem] text-[1.6rem] text-black/60 no-underline hover:text-[#FA823C] transition-colors mb-[3rem]"
            >
              <span>←</span>
              <span>Back to blog</span>
            </Link>

            <div className="flex flex-wrap items-center gap-[1.4rem] mb-[2.4rem]">
              <span className="uppercase rounded-full bg-[#E5FA3C] px-[1.6rem] py-[0.6rem] text-[1.3rem] font-medium text-black">
                {post.category}
              </span>
              <span className="text-[1.6rem] text-black/50">
                {post.date} · {post.readTime}
              </span>
            </div>

            <h1 className="text-[3.8rem] md:text-[7.2rem] font-medium leading-[1.06] tracking-[-0.02em] max-w-[96rem]">
              {post.title}
            </h1>

            <p className="mt-[2.4rem] text-[2rem] md:text-[2.6rem] leading-[1.35] text-black/75 max-w-[78rem]">
              {post.excerpt}
            </p>

            <div className="mt-[5rem] aspect-[16/9] rounded-[2rem] overflow-hidden bg-neutral-100">
              <img
                src={post.imageUrl}
                alt={post.title}
                width={1400}
                height={788}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-[6rem] max-w-[76rem] grid gap-[2.8rem] text-[1.9rem] md:text-[2.2rem] leading-[1.6] text-black/85">
              {post.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Related Service Callout */}
            <div className="mt-[5.6rem] max-w-[76rem] rounded-[2rem] bg-[#FFF4EC] border border-[#FA823C]/25 p-[3rem] md:p-[4rem] flex flex-col sm:flex-row sm:items-center justify-between gap-[2rem]">
              <div>
                <div className="uppercase text-[1.3rem] font-medium text-[#FA823C] mb-[0.6rem]">
                  RELATED WELTY TECH SERVICE
                </div>
                <div className="text-[2.2rem] md:text-[2.6rem] font-medium text-black leading-[1.2]">
                  {post.category}
                </div>
              </div>
              <Link
                href={post.serviceHref}
                className="cb-cta cb-cta-md cb-cta-fill w-full sm:w-auto shrink-0"
              >
                <span className="cb-cta-label">
                  <span data-text="Explore service">Explore service</span>
                </span>
              </Link>
            </div>

            {/* Related Articles */}
            <div className="mt-[8rem] pt-[5rem] border-t border-black/10">
              <h2 className="text-[3.2rem] md:text-[4.8rem] font-medium tracking-[-0.02em] mb-[4rem]">
                More insights
              </h2>
              <div className="grid gap-[3rem] md:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    data-cursor-text="Read"
                    className="group block no-underline text-black rounded-[2rem] bg-[#FFF4EC] p-[3rem] hover:bg-[#E5FA3C] transition-colors duration-300"
                  >
                    <div className="uppercase text-[1.3rem] font-medium text-[#FA823C] group-hover:text-black mb-[1rem]">
                      {item.category}
                    </div>
                    <h3 className="text-[2.2rem] md:text-[2.6rem] font-medium leading-[1.25] text-black">
                      {item.title}
                    </h3>
                    <div className="mt-[1.4rem] text-[1.5rem] text-black/55">
                      {item.date} · {item.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>

        <OutroSection />
      </main>
      <Footer />
    </>
  );
}
