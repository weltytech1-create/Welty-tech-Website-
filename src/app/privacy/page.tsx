import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy and data handling practices for Welty Tech.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[12rem] pb-[10rem] md:pt-[20rem] md:pb-[14rem]">
          <div className="cb-container">
            <div className="max-w-[78rem]">
              <div className="uppercase text-[1.4rem] font-medium text-[#FA823C] mb-[1.6rem]">
                LEGAL
              </div>
              <h1 className="text-[4.5rem] md:text-[8rem] font-medium leading-[1.02] tracking-[-0.02em] mb-[4rem]">
                Privacy Policy
              </h1>

              <div className="grid gap-[2.8rem] text-[1.8rem] md:text-[2.1rem] leading-[1.55] text-black/80">
                <p>
                  Welty respects your privacy and is committed to protecting the
                  personal information you share with us when you visit our
                  website or submit a project inquiry.
                </p>
                <h2 className="text-[2.6rem] md:text-[3.2rem] font-medium text-black pt-[1.6rem]">
                  Information we collect
                </h2>
                <p>
                  When you submit our contact form, we collect your name, email
                  address, project description, and any optional attachments solely
                  to evaluate and respond to your inquiry.
                </p>
                <h2 className="text-[2.6rem] md:text-[3.2rem] font-medium text-black pt-[1.6rem]">
                  How we use information
                </h2>
                <p>
                  We never sell or rent your contact details to third parties.
                  Project materials and briefs are kept confidential and reviewed
                  only by relevant Welty team members.
                </p>
                <h2 className="text-[2.6rem] md:text-[3.2rem] font-medium text-black pt-[1.6rem]">
                  Cookies &amp; preferences
                </h2>
                <p>
                  We use essential storage to keep forms and core navigation
                  reliable, along with optional analytics and experience cookies
                  when consented. Review full details or update your choices in
                  our{" "}
                  <Link
                    href="/cookies"
                    className="text-black underline hover:text-[#FA823C]"
                  >
                    Cookies Policy
                  </Link>
                  .
                </p>
                <h2 className="text-[2.6rem] md:text-[3.2rem] font-medium text-black pt-[1.6rem]">
                  Contact
                </h2>
                <p>
                  For privacy questions or data deletion requests, contact us at{" "}
                  <a
                    href="mailto:info@welty.in"
                    className="text-black underline hover:text-[#FA823C]"
                  >
                    info@welty.in
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
