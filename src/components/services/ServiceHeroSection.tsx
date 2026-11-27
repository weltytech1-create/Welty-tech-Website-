"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceHeroSectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  bgImage: string;
}

export function ServiceHeroSection({
  title,
  subtitle,
  ctaLabel,
  bgImage,
}: ServiceHeroSectionProps) {
  const words = subtitle.split(" ");

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[69.2rem] flex items-center justify-center md:block md:min-h-0 pt-[12rem] pb-[8rem] md:pt-[24rem] md:pb-[15rem]">
      {/* Dark Geometric Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={bgImage}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-85"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(65% 65% at 50% 45%, rgba(250, 130, 60, 0.14) 0%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 0.85) 100%)",
          }}
        />
      </div>

      <div className="cb-container relative z-[1]">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "35%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[5rem] md:text-[9rem] font-normal leading-[1.08] pb-[0.06em] tracking-[-0.02em] md:tracking-[-0.01em] text-left md:text-center md:max-w-[92%] md:mx-auto [text-wrap:balance]"
          >
            {title}
          </motion.h1>
        </div>

        <p className="mt-[3.2rem] md:mt-[4rem] max-w-[78.2rem] md:mx-auto text-left md:text-center text-[2rem] md:text-[2.4rem] leading-[1.3] md:leading-[1.4] font-normal text-white/95">
          {words.map((word, idx) => (
            <span
              key={`${word}-${idx}`}
              className="inline-block overflow-hidden align-top"
            >
              <motion.span
                initial={{ y: "60%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.06 + idx * 0.015,
                }}
                className="inline-block pr-[0.26em]"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>

        <div className="mt-[3.6rem] md:mt-[4.8rem] flex justify-start md:justify-center">
          <Link
            href="/contacts"
            className="cb-cta cb-cta-md cb-cta-fill-inverse"
          >
            <span className="cb-cta-label">
              <span data-text={ctaLabel}>{ctaLabel}</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
