"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { PREVIEW_BANNER } from "@/data/welty";

export function PreviewSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section className="relative z-[1]">
      <div className="cb-container">
        <motion.div
          ref={containerRef}
          initial={{ y: 24, scale: 0.99 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          data-cursor-text="Explore"
          className="relative grid w-full min-w-0 grid-cols-1 aspect-[355/250] md:aspect-[1920/780] rounded-[2rem] overflow-hidden transform-gpu bg-black"
        >
          <motion.div
            style={{ scale: videoScale }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              src={PREVIEW_BANNER.videoUrl}
              poster={PREVIEW_BANNER.posterUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <Link
            href={PREVIEW_BANNER.ctaHref}
            aria-label={PREVIEW_BANNER.title}
            className="absolute inset-0 z-[1]"
          />

          <div
            className="relative w-full min-w-0 flex flex-col justify-center gap-[1.5rem] md:gap-[2.6rem] px-[2.2rem] py-[2.2rem] md:px-[10rem] md:py-[4.8rem] text-white pointer-events-none"
            style={{
              background: "var(--color-banner-gradient)",
            }}
          >
            <div className="grid min-w-0 gap-[0.8rem] md:gap-[1.6rem] max-w-full md:max-w-[48.4rem]">
              <h2 className="text-[2.4rem] md:text-[6.8rem] font-medium leading-[1.12] md:leading-[1] tracking-[-0.01em]">
                {PREVIEW_BANNER.title}
              </h2>
              <p className="text-[1.4rem] md:text-[2.5rem] leading-[1.35] md:leading-[1.22] font-normal text-white/95">
                {PREVIEW_BANNER.description}
              </p>
            </div>

            <div className="relative z-[2] self-start pointer-events-auto">
              <Link
                href={PREVIEW_BANNER.ctaHref}
                className="cb-cta cb-cta-md cb-cta-banner-mobile cb-cta-fill-inverse"
              >
                <span className="cb-cta-label">
                  <span data-text={PREVIEW_BANNER.ctaLabel}>
                    {PREVIEW_BANNER.ctaLabel}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
