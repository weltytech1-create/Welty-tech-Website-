"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/data/welty";

export function HeroSection() {
  const words = HERO_CONTENT.subtitle.split(" ");

  return (
    <section
      id="top"
      className="relative pt-[12rem] pb-[6rem] md:pt-[20rem] md:pb-[10rem]"
    >
      <div className="cb-container">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "40%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4.5rem] md:text-[9rem] font-medium leading-[1.08] pb-[0.06em] tracking-[-0.01em] text-left md:text-center md:max-w-[90%] md:mx-auto [text-wrap:balance]"
          >
            {HERO_CONTENT.title}
          </motion.h1>
        </div>

        <p className="mt-[3.2rem] max-w-[84rem] md:mx-auto text-left md:text-center text-[2rem] md:text-[2.4rem] leading-[1.3] md:leading-[1.2] tracking-[0.02em] font-normal">
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
                  delay: 0.08 + idx * 0.018,
                }}
                className="inline-block py-[0.14em] pr-[0.26em]"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
