import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OverviewSection } from "@/components/OverviewSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { OutroSection } from "@/components/OutroSection";
import { WaveDivider } from "@/components/WaveDivider";
import { ABOUT_CONTENT } from "@/data/welty";
import { AREAS_OF_FOCUS, SITE_URL, buildPageMetadata, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Welty Tech — Digital Product Design, Custom Software & AI",
  description:
    "Welty Tech is a technology company focused on digital product design, custom software development and artificial intelligence. Vision: making technology more accessible, intelligent and useful.",
  path: "/about",
  keywords: [
    "About Welty Tech",
    "Welty Tech Vision",
    "Engineering What's Next",
    "Software and AI Company",
  ],
});

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Welty Tech",
    url: `${SITE_URL}/about`,
    description: ABOUT_CONTENT.goalText,
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(aboutJsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-[12rem] pb-[5rem] md:pt-[20rem] md:pb-[8rem]">
          <div className="cb-container">
            <p className="text-[1.5rem] md:text-[1.8rem] uppercase tracking-[0.04em] text-[#FA823C] font-medium mb-[2rem] md:text-center">
              About Welty Tech
            </p>
            <h1 className="text-[4.5rem] md:text-[9rem] font-medium leading-[1] tracking-[-0.02em] text-left md:text-center md:max-w-[85%] md:mx-auto [text-wrap:balance]">
              {ABOUT_CONTENT.heroTitle}
            </h1>
          </div>
        </section>

        {/* Full-width Rounded Studio Banner */}
        <section>
          <div className="cb-container">
            <div className="relative aspect-[355/240] md:aspect-[1920/900] rounded-[2rem] overflow-hidden bg-black">
              <video
                src="/assets/showreel/welty-studio.mp4"
                poster="/assets/showreel/welty-studio-poster.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ABOUT WELTY TECH */}
        <OverviewSection
          label={ABOUT_CONTENT.goalLabel}
          text={ABOUT_CONTENT.goalText}
        />

        {/* Statement & 3 Stats */}
        <section className="my-[8rem] md:my-[14rem]">
          <div className="cb-container">
            <div className="text-black mb-[4rem]">
              <WaveDivider />
            </div>

            <div className="grid gap-[3rem] md:grid-cols-[28%_1fr]">
              <div className="uppercase text-[1.4rem] md:text-[1.6rem] leading-[1.1] inline-flex items-center gap-[0.8rem] self-start">
                <span className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#FA823C] inline-block" />
                <span>OUR VISION</span>
              </div>

              <div>
                <h2 className="text-[3.6rem] md:text-[6.4rem] font-medium leading-[1.05] tracking-[-0.02em] max-w-[78rem]">
                  {ABOUT_CONTENT.statementTitle}
                </h2>
                <p className="mt-[2.8rem] text-[2rem] md:text-[2.56rem] leading-[1.35] text-black/80 max-w-[76rem]">
                  {ABOUT_CONTENT.statementText}
                </p>

                <div className="mt-[5rem] grid gap-[1.6rem] md:grid-cols-3">
                  {ABOUT_CONTENT.stats.map((stat, idx) => (
                    <div
                      key={stat.label}
                      className={`min-w-0 rounded-[2rem] p-[2.6rem] sm:p-[3.2rem] md:p-[4rem] ${
                        idx === 0
                          ? "bg-[#E5FA3C]"
                          : idx === 1
                          ? "bg-[#FA823C]"
                          : "bg-[#FFF4EC]"
                      }`}
                    >
                      <div className="text-[5.5rem] md:text-[7.2rem] font-normal leading-[1] tracking-[-0.03em] text-black">
                        {stat.value}
                      </div>
                      <div className="mt-[1.2rem] uppercase text-[1.4rem] md:text-[1.6rem] font-medium text-black/80">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Focus + Vision Card */}
        <section className="my-[8rem] md:my-[12rem]">
          <div className="cb-container">
            <div className="rounded-[2rem] bg-[#FFF4EC] border border-[#FA823C]/20 p-[2.4rem] sm:p-[3.5rem] md:p-[7rem] grid gap-[3rem] md:grid-cols-[28%_1fr] items-start">
              <div className="uppercase text-[1.4rem] md:text-[1.6rem] font-medium text-[#FA823C]">
                AREAS OF FOCUS
              </div>
              <div className="min-w-0">
                <h2 className="text-[3.2rem] md:text-[5rem] font-medium leading-[1.1] tracking-[-0.02em] text-black max-w-[68rem]">
                  {ABOUT_CONTENT.awardsTitle}
                </h2>
                <p className="mt-[2.4rem] text-[1.9rem] md:text-[2.2rem] leading-[1.4] text-black/80 max-w-[68rem]">
                  {ABOUT_CONTENT.awardsText}
                </p>

                <div className="mt-[4rem] grid gap-[1.6rem] sm:grid-cols-2">
                  {AREAS_OF_FOCUS.map((area) => (
                    <Link
                      key={area.title}
                      href={area.href}
                      className="min-w-0 rounded-[1.6rem] bg-white p-[2.4rem] border border-black/8 no-underline text-black transition-all duration-300 hover:border-[#FA823C] hover:-translate-y-0.5"
                    >
                      <div className="text-[1.9rem] font-medium leading-[1.25] text-black">
                        {area.title}
                      </div>
                      <p className="mt-[0.8rem] text-[1.5rem] leading-[1.45] text-black/70">
                        {area.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Dark Section */}
        <BenefitsSection roundedBottom />

        {/* Mission Story */}
        <section className="my-[8rem] md:my-[14rem]">
          <div className="cb-container">
            <div className="grid gap-[3rem] md:grid-cols-[28%_1fr]">
              <div className="uppercase text-[1.4rem] md:text-[1.6rem] font-medium text-[#FA823C]">
                {ABOUT_CONTENT.foundersLabel}
              </div>
              <div className="min-w-0 max-w-[74rem]">
                <h2 className="text-[3.6rem] md:text-[6.4rem] font-medium leading-[1.05] tracking-[-0.02em] mb-[3.2rem]">
                  {ABOUT_CONTENT.foundersTitle}
                </h2>
                <div className="grid gap-[2.4rem] text-[2rem] md:text-[2.4rem] leading-[1.45] text-black/85">
                  {ABOUT_CONTENT.foundersParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <OutroSection />
      </main>
      <Footer />
    </>
  );
}
