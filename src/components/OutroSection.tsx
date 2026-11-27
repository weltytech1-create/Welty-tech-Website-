"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { OUTRO_CONTENT } from "@/data/welty";

export function OutroSection({
  title = OUTRO_CONTENT.title,
  text = OUTRO_CONTENT.text,
  ctaLabel = OUTRO_CONTENT.ctaLabel,
  ctaHref = OUTRO_CONTENT.ctaHref,
}: {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white text-center grid items-center justify-center min-h-[55.4rem] md:min-h-[69.2rem] py-[8rem] overflow-hidden"
    >
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img
          src={OUTRO_CONTENT.bgImage}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Subtle Welty ambient orange/lime highlight over backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 65%, rgba(250, 130, 60, 0.22) 0%, rgba(229, 250, 60, 0.08) 45%, transparent 75%)",
        }}
      />

      <div className="cb-container relative z-[1]">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[5rem] md:text-[8rem] leading-[1.1] tracking-[-0.03em] text-center font-normal md:max-w-[65rem] md:mx-auto"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
          className="mt-[3.2rem] mx-auto text-center text-[2rem] md:text-[2.4rem] leading-[1.3] md:leading-[1.4] md:max-w-[65rem] text-white/90"
        >
          {text}
        </motion.p>

        <div className="mt-[3.2rem]">
          <Link href={ctaHref} className="cb-cta cb-cta-md cb-cta-accent">
            <span className="cb-cta-label">
              <span data-text={ctaLabel}>
                {ctaLabel}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
