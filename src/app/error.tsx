"use client";

import Link from "next/link";

export default function Error({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <main className="min-h-[80dvh] flex items-center py-[12rem] bg-white text-black">
      <div className="cb-container">
        <div className="max-w-[68rem]">
          <div className="uppercase text-[1.4rem] font-medium tracking-[0.06em] text-[#FA823C] mb-[1.6rem]">
            Temporary Error
          </div>
          <h1 className="text-[4.2rem] md:text-[6.8rem] font-medium leading-[1.05] tracking-[-0.02em] text-black">
            Something went wrong.
          </h1>
          <p className="mt-[2.2rem] text-[1.9rem] md:text-[2.2rem] leading-[1.45] text-black/70">
            We couldn&apos;t complete this request cleanly. Please try again or
            return to the homepage.
          </p>
          <div className="mt-[4rem] flex flex-wrap gap-[1.4rem]">
            <button
              type="button"
              onClick={() => retry()}
              className="cb-cta cb-cta-md cb-cta-fill cursor-pointer"
            >
              <span className="cb-cta-label">
                <span data-text="Try again">Try again</span>
              </span>
            </button>
            <Link
              href="/"
              className="cb-cta cb-cta-md border border-black/15 text-black hover:bg-black hover:text-white"
            >
              <span className="cb-cta-label">
                <span data-text="Back to home">Back to home</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
