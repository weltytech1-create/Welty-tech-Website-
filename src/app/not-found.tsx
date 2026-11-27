import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found on Welty Tech.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[80dvh] flex items-center py-[12rem] bg-white text-black">
      <div className="cb-container">
        <div className="max-w-[68rem]">
          <div className="uppercase text-[1.4rem] font-medium tracking-[0.06em] text-[#FA823C] mb-[1.6rem]">
            404 · Not Found
          </div>
          <h1 className="text-[4.2rem] md:text-[7.2rem] font-medium leading-[1.04] tracking-[-0.02em] text-black">
            This page does not exist.
          </h1>
          <p className="mt-[2.2rem] text-[1.9rem] md:text-[2.2rem] leading-[1.45] text-black/70">
            The link may have moved or is unavailable. Return to the Welty Tech
            homepage or explore our services.
          </p>
          <div className="mt-[4rem] flex flex-wrap gap-[1.4rem]">
            <Link href="/" className="cb-cta cb-cta-md cb-cta-fill">
              <span className="cb-cta-label">
                <span data-text="Back to home">Back to home</span>
              </span>
            </Link>
            <Link
              href="/services"
              className="cb-cta cb-cta-md border border-black/15 text-black hover:bg-black hover:text-white"
            >
              <span className="cb-cta-label">
                <span data-text="Explore services">Explore services</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
