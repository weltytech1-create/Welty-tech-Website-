import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT_CONFIG, FOOTER_CONTENT } from "@/data/welty";
import {
  AREAS_OF_FOCUS,
  buildContactPageJsonLd,
  buildPageMetadata,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Welty Tech — Start Your Product, Software or AI Project",
  description:
    "Get in touch with Welty Tech for digital product design, custom software development, ERP & CRM solutions, AI automation, private cloud, and API integrations.",
  path: "/contacts",
  keywords: [
    "Contact Welty Tech",
    "Hire custom software engineers",
    "AI development consultation",
    "Digital product design agency contact",
  ],
});

export default function ContactsPage() {
  const contactJsonLd = buildContactPageJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactJsonLd) }}
      />
      <Navbar />
      <main>
        <section className="pt-[12rem] pb-[10rem] md:pt-[20rem] md:pb-[15rem]">
          <div className="cb-container">
            <h1 className="text-[4.5rem] md:text-[9rem] font-medium leading-[1.02] tracking-[-0.02em] max-w-[78rem] mb-[6rem] md:mb-[8rem]">
              {CONTACT_CONFIG.title}
            </h1>

            <div className="grid gap-[6rem] lg:grid-cols-[1fr_36rem] lg:gap-[8rem] items-start">
              <div className="min-w-0">
                <ContactForm />
              </div>

              <aside className="min-w-0 rounded-[2rem] bg-[#FFF4EC] border border-[#FA823C]/20 p-[2.6rem] sm:p-[3.2rem] md:p-[4rem] grid gap-[3rem]">
                <div>
                  <div className="uppercase text-[1.3rem] text-[#FA823C] font-medium mb-[0.8rem]">
                    DIRECT CONTACT
                  </div>
                  <a
                    href={`mailto:${FOOTER_CONTENT.email}`}
                    className="block text-[2rem] font-medium text-black no-underline hover:text-[#FA823C] transition-colors"
                  >
                    {FOOTER_CONTENT.email}
                  </a>
                  <p className="mt-[0.8rem] text-[1.5rem] leading-[1.45] text-black/65">
                    Share your product idea, software requirements, or AI automation goals. We reply within one business day.
                  </p>
                </div>

                <div>
                  <div className="uppercase text-[1.3rem] text-black/45 font-medium mb-[1rem]">
                    AREAS OF FOCUS
                  </div>
                  <ul className="grid gap-[1rem] list-none p-0 m-0">
                    {AREAS_OF_FOCUS.map((area) => (
                      <li key={area.title}>
                        <Link
                          href={area.href}
                          className="flex items-center gap-[1rem] text-[1.6rem] leading-[1.4] text-black no-underline hover:text-[#FA823C] transition-colors"
                        >
                          <span className="w-[0.6rem] h-[0.6rem] rounded-full bg-[#FA823C] shrink-0" />
                          <span>{area.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-[2rem] border-t border-black/10">
                  <div className="uppercase text-[1.3rem] text-black/45 font-medium mb-[0.6rem]">
                    OUR VISION
                  </div>
                  <p className="text-[1.5rem] leading-[1.5] text-black/75">
                    To make technology more accessible, intelligent and useful for businesses through thoughtful design, innovative software and practical AI solutions.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
