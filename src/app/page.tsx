import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PreviewSection } from "@/components/PreviewSection";
import { OverviewSection } from "@/components/OverviewSection";
import { FeatureSection } from "@/components/FeatureSection";
import { SampleShowcaseSection } from "@/components/SampleShowcaseSection";
import { InsightsSection } from "@/components/InsightsSection";
import { FaqSection } from "@/components/FaqSection";
import { OutroSection } from "@/components/OutroSection";
import { Footer } from "@/components/Footer";
import { BENTO_TILES, FAQ_ITEMS, WHAT_WE_DO, WHY_WELTY } from "@/data/welty";
import { buildFaqJsonLd, buildPageMetadata, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Welty Tech — Engineering What's Next | Digital Product Design, Custom Software & AI",
  description:
    "Welty Tech is a technology company focused on digital product design, custom software development, ERP & CRM solutions, AI automation, private cloud, and API integrations.",
  path: "/",
});

export default function Home() {
  const faqJsonLd = buildFaqJsonLd(FAQ_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <PreviewSection />
        <OverviewSection
          id="what-we-do"
          label={WHAT_WE_DO.label}
          text={WHAT_WE_DO.text}
        />
        <FeatureSection />
        <SampleShowcaseSection />
        <OverviewSection
          id="why-welty"
          label={WHY_WELTY.label}
          text={WHY_WELTY.text}
          showDivider
          tiles={BENTO_TILES}
        />
        <InsightsSection />
        <FaqSection />
        <OutroSection />
      </main>
      <Footer />
    </>
  );
}
