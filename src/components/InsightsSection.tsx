"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BLOG_ENTRIES } from "@/data/welty";

export function InsightsSection() {
  const featuredEntries = BLOG_ENTRIES.slice(0, 3);

  return (
    <section id="blog" className="relative text-white pt-[8rem] md:pt-[15rem]">
      <div className="absolute inset-0 bg-black md:rounded-t-[8rem] z-0" />

      <div className="cb-container relative z-[1]">
        <div className="relative">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "200px 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4.5rem] md:text-[8rem] font-medium leading-[1] tracking-[-0.02em] mb-[4rem] md:mb-[12rem]"
          >
            Insights
          </motion.h2>

          <div className="hidden md:block absolute top-0 right-0">
            <Link href="/blog" className="cb-cta cb-cta-lg cb-cta-outline-inverse">
              <span className="cb-cta-label">
                <span data-text="Visit blog">Visit blog</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="grid gap-[6rem] md:grid-cols-3 md:gap-[2rem]">
          {featuredEntries.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ y: 22 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "200px 0px" }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: idx * 0.06,
              }}
            >
              <Link
                href={entry.href}
                data-cursor-text="Read"
                className="group block text-white no-underline"
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden relative bg-neutral-900 transition-transform duration-400 group-hover:scale-[0.98]">
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    width={800}
                    height={800}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover scale-[1.01] transition-transform duration-400 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="uppercase text-[#FA823C] mt-[2rem] md:mt-[2.4rem] text-[1.6rem] leading-[1.3] font-normal">
                  {entry.category}
                </div>

                <h3 className="mt-[0.8rem] text-[2.4rem] leading-[1.4] font-normal text-white group-hover:text-[#E5FA3C] transition-colors duration-300">
                  {entry.title}
                </h3>

                <div className="opacity-50 mt-[0.8rem] text-[1.8rem] font-medium leading-[1.1]">
                  {entry.date}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden text-center mt-[6rem] grid">
          <Link href="/blog" className="cb-cta cb-cta-lg cb-cta-outline-inverse">
            <span className="cb-cta-label">
              <span data-text="Visit blog">Visit blog</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
