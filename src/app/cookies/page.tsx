import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieSettingsTrigger } from "@/components/CookieSettingsTrigger";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookies Policy",
  description:
    "How Welty Tech uses essential, analytics, and preference cookies across welty.in and how you can manage your choices anytime.",
  path: "/cookies",
});

const COOKIE_CATEGORIES = [
  {
    badge: "Always Active",
    name: "Strictly Necessary Cookies",
    summary:
      "Keep core site navigation, form submission reliability, and your saved cookie consent preference working cleanly.",
    retention: "Session to 6 months",
  },
  {
    badge: "Optional",
    name: "Analytics & Performance",
    summary:
      "Help us understand page load performance and which engineering or design service guides visitors find most useful.",
    retention: "Up to 6 months",
  },
  {
    badge: "Optional",
    name: "Experience & Preferences",
    summary:
      "Remember smooth-scrolling, motion, and showcase playback preferences between visits for a consistent browsing feel.",
    retention: "Up to 6 months",
  },
];

export default function CookiesPolicyPage() {
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
                Cookies Policy
              </h1>

              <div className="grid gap-[3rem] text-[1.8rem] md:text-[2.1rem] leading-[1.55] text-black/80">
                <p>
                  This Cookies Policy explains how Welty Tech (&ldquo;Welty&rdquo;)
                  uses cookies and browser storage technologies on welty.in to
                  keep the website reliable, secure, and tailored to your
                  preferences.
                </p>

                <CookieSettingsTrigger />

                <h2 className="text-[2.6rem] md:text-[3.2rem] font-medium text-black pt-[1.2rem]">
                  What are cookies?
                </h2>
                <p>
                  Cookies and local storage entries are small pieces of data
                  saved in your browser when you visit a website. They allow
                  pages to remember your consent choices, keep interactive
                  forms responsive, and preserve interface preferences without
                  requiring you to re-enter them on every visit.
                </p>

                <h2 className="text-[2.6rem] md:text-[3.2rem] font-medium text-black pt-[1.2rem]">
                  Categories of cookies we use
                </h2>

                <div className="grid gap-[1.6rem]">
                  {COOKIE_CATEGORIES.map((category) => (
                    <div
                      key={category.name}
                      className="rounded-[1.8rem] border border-black/10 p-[2.2rem] md:p-[2.6rem]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-[1rem] mb-[1rem]">
                        <h3 className="text-[2rem] md:text-[2.3rem] font-medium text-black">
                          {category.name}
                        </h3>
                        <span className="rounded-full bg-black text-white px-[1.2rem] py-[0.4rem] text-[1.2rem] font-medium">
                          {category.badge}
                        </span>
                      </div>
                      <p className="text-[1.65rem] md:text-[1.85rem] leading-[1.5] text-black/75">
                        {category.summary}
                      </p>
                      <div className="mt-[1.2rem] text-[1.35rem] font-medium text-[#FA823C]">
                        Retention: {category.retention}
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-[2.6rem] md:text-[3.2rem] font-medium text-black pt-[1.2rem]">
                  Third-party services
                </h2>
                <p>
                  When you submit a project inquiry on our website, requests are
                  processed securely via Formspree solely to deliver your
                  message to our engineering team. You can also control or
                  clear cookies directly inside your browser settings at any
                  time.
                </p>

                <h2 className="text-[2.6rem] md:text-[3.2rem] font-medium text-black pt-[1.2rem]">
                  Related policies &amp; contact
                </h2>
                <p>
                  For broader details on how we handle inquiry data, see our{" "}
                  <Link
                    href="/privacy"
                    className="text-black underline hover:text-[#FA823C]"
                  >
                    Privacy Policy
                  </Link>
                  . If you have questions about cookies or data preferences,
                  contact us at{" "}
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
