import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureSection } from "@/components/FeatureSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WaveDivider } from "@/components/WaveDivider";
import { SERVICE_PILLARS } from "@/data/welty";
import {
  buildPageMetadata,
  buildServicesCollectionJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Our Services — Digital Product Design, Custom Software, ERP/CRM, AI & Cloud",
  description:
    "Building digital experiences. Engineering intelligent solutions. Explore Welty Tech services: Digital Product Design, Custom Software Development, ERP & CRM Solutions, AI & Intelligent Automation, On-Premises & Private Cloud, and System Integration & API Development.",
  path: "/services",
  keywords: [
    "Welty Tech Services",
    "Digital Product Design Services",
    "Custom Software Engineering",
    "ERP and CRM Implementation",
    "AI Agent and LLM Development",
    "Private Cloud Infrastructure",
    "Enterprise API Integration",
  ],
});

export default function ServicesPage() {
  const servicesJsonLd = buildServicesCollectionJsonLd(SERVICE_PILLARS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesJsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-[12rem] pb-[5rem] md:pt-[20rem] md:pb-[8rem]">
          <div className="cb-container">
            <p className="text-[1.6rem] md:text-[2rem] uppercase tracking-[0.04em] text-[#FA823C] font-medium mb-[2rem] md:text-center">
              Our Services · Welty Tech
            </p>
            <h1 className="text-[4.5rem] md:text-[9rem] font-medium leading-[1] tracking-[-0.02em] text-left md:text-center md:max-w-[92%] md:mx-auto [text-wrap:balance]">
              Building digital experiences. Engineering intelligent solutions.
            </h1>
            <p className="mt-[2.8rem] md:mt-[3.6rem] text-[2rem] md:text-[2.4rem] leading-[1.4] text-black/80 text-left md:text-center md:max-w-[82rem] md:mx-auto">
              We combine thoughtful design, modern software engineering and artificial intelligence to help businesses build, transform and scale. From designing digital products to developing enterprise platforms and deploying intelligent automation, we deliver technology aligned with real business needs.
            </p>
          </div>
        </section>

        {/* Rounded Showreel Banner */}
        <section>
          <div className="cb-container">
            <div className="relative aspect-[355/240] md:aspect-[1920/900] rounded-[2rem] overflow-hidden bg-black">
              <video
                src="/assets/showreel/welty-neural.mp4"
                poster="/assets/showreel/welty-neural-poster.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.45) 100%)",
                }}
              />
            </div>
          </div>
        </section>

        {/* Our Solutions 3 Split Rows */}
        <section className="my-[8rem] md:my-[14rem]">
          <div className="cb-container">
            <h2 className="text-[4.5rem] md:text-[8rem] font-medium leading-[1] tracking-[-0.02em] mb-[4rem] md:mb-[8rem]">
              Our solutions
            </h2>

            <div>
              {SERVICE_PILLARS.map((pillar) => (
                <div key={pillar.label}>
                  <div className="text-black/20">
                    <WaveDivider />
                  </div>
                  <div className="py-[4.5rem] md:py-[6.5rem] grid gap-[2.4rem] md:grid-cols-[28%_1fr] md:items-start">
                    <h3 className="uppercase text-[1.4rem] md:text-[1.6rem] leading-[1.2] tracking-[0.02em] font-medium text-black inline-flex items-center gap-[0.8rem]">
                      <span className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#FA823C] inline-block" />
                      <span>{pillar.label}</span>
                    </h3>

                    <div className="min-w-0 max-w-[68rem]">
                      <p className="text-[2rem] md:text-[2.6rem] leading-[1.35] text-black">
                        {pillar.description}
                      </p>
                      <div className="mt-[3rem]">
                        <Link
                          href={pillar.href}
                          className="cb-cta cb-cta-sm border border-black/20 text-black hover:bg-black hover:text-[#E5FA3C] hover:border-black"
                        >
                          <span className="cb-cta-label">
                            <span data-text="Read more">Read more</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-[1px] w-full bg-black/15" />
            </div>
          </div>
        </section>

        {/* Full 6 Capability Cards */}
        <FeatureSection />

        {/* Closing Statement */}
        <section className="my-[6rem] md:my-[10rem]">
          <div className="cb-container">
            <p className="text-[2.6rem] md:text-[4.2rem] font-normal leading-[1.2] tracking-[-0.02em] text-black md:text-center md:max-w-[90rem] md:mx-auto [text-wrap:balance]">
              From product design to intelligent automation, we engineer technology that moves businesses forward.
            </p>
          </div>
        </section>

        {/* Benefits Dark Section flowing seamlessly into Footer */}
        <BenefitsSection />
      </main>
      <Footer />
    </>
  );
}
