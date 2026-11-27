import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { FaqSection } from "@/components/FaqSection";
import { OutroSection } from "@/components/OutroSection";
import { Footer } from "@/components/Footer";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceBentoSection } from "@/components/services/ServiceBentoSection";
import {
  ServiceCapabilitiesSection,
  ServiceTimelinesSection,
  ServiceWhyWeltySection,
} from "@/components/services/ServiceOverviewGrid";
import { ServiceQuickContact } from "@/components/services/ServiceQuickContact";
import { ServiceProcessSection } from "@/components/services/ServiceProcessSection";
import { ServiceSummarySection } from "@/components/services/ServiceSummarySection";
import { SERVICE_DETAILS, ServiceSlug } from "@/data/serviceDetails";
import {
  SITE_URL,
  buildPageMetadata,
  buildServiceJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

const SLUGS = Object.keys(SERVICE_DETAILS) as ServiceSlug[];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug as ServiceSlug];
  if (!service) {
    return buildPageMetadata({
      title: "Service",
      description:
        "Digital product design, custom software development, ERP & CRM, AI automation, private cloud and API integrations by Welty Tech.",
      path: `/services/${slug}`,
    });
  }
  return buildPageMetadata({
    title: service.metaTitle.replace(/\s*\|\s*Welty Tech$/i, ""),
    description: service.metaDescription,
    path: `/services/${slug}`,
    keywords: [service.heroTitle, `${service.heroTitle} Welty Tech`],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug as ServiceSlug];
  if (!service) notFound();

  const serviceJsonLd = buildServiceJsonLd({
    name: service.heroTitle,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${slug}`,
    faqs: service.faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }}
      />
      <Navbar />
      <main>
        {/* 1. Dark Geometric Hero */}
        <ServiceHeroSection
          title={service.heroTitle}
          subtitle={service.heroSubtitle}
          ctaLabel={service.heroCtaLabel}
          bgImage={service.heroBgImage}
        />

        {/* 2. Asymmetric 4-Card Bento Grid */}
        <ServiceBentoSection
          heading={service.bentoHeading}
          cards={service.bentoCards}
        />

        {/* 3. Capabilities Grid (omitted on product-design) */}
        {service.capabilities && (
          <ServiceCapabilitiesSection
            heading={service.capabilities.heading}
            variant={service.capabilities.variant}
            tiles={service.capabilities.tiles}
          />
        )}

        {/* 4. Inline Quick Contact Form */}
        <ServiceQuickContact heading={service.quickContactHeading} />

        {/* 5. Scroll-Driven Process Steps (01-05) */}
        <ServiceProcessSection
          heading={service.processHeading}
          steps={service.processSteps}
        />

        {/* 6. Typical Timelines Grid (omitted on product-design) */}
        {service.timelines && (
          <ServiceTimelinesSection
            heading={service.timelines.heading}
            variant={service.timelines.variant}
            tiles={service.timelines.tiles}
            note={service.timelines.note}
            noteLink={service.timelines.noteLink}
          />
        )}

        {/* 7. Audience / Engagement Model 3-Row Summary */}
        <ServiceSummarySection
          heading={service.summaryHeading}
          rows={service.summaryRows}
        />

        {/* 8. Why Welty Tech + 5 Stat/Benefit Bento Tiles */}
        <ServiceWhyWeltySection text={service.whyWeltyText} />

        {/* 9. Dark Rounded-Top FAQ Accordion */}
        <FaqSection items={service.faqs} roundedTop />

        {/* 13. Full-Bleed Outro CTA */}
        <OutroSection
          title={service.outroTitle}
          text={service.outroSubtitle}
        />
      </main>
      {/* 14. Footer */}
      <Footer />
    </>
  );
}
