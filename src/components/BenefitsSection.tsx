"use client";

import { motion } from "framer-motion";
import { BENEFITS, BenefitItem } from "@/data/welty";

function BenefitIcon({ type }: { type: BenefitItem["icon"] }) {
  switch (type) {
    case "timezone":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[5.2rem] h-[5.2rem]">
          <circle cx="24" cy="24" r="18" />
          <path strokeLinecap="round" d="M24 24V14" />
          <motion.line
            x1="24"
            y1="24"
            x2="32"
            y2="24"
            strokeLinecap="round"
            style={{ transformOrigin: "24px 24px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            strokeLinecap="round"
            d="M9 12l4 3m26-3l-4 3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );
    case "spark":
      return (
        <motion.svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-[5.2rem] h-[5.2rem]"
          animate={{ scale: [1, 1.07, 1], y: [0, -1.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M26 6L12 26h12l-2 16 14-20H24l2-16z" />
        </motion.svg>
      );
    case "flexible":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[5.2rem] h-[5.2rem]">
          <path strokeLinecap="round" d="M8 16h32M8 32h32" />
          <motion.circle
            cy="16"
            r="4"
            fill="#000"
            animate={{ cx: [16, 26, 16] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cy="32"
            r="4"
            fill="#000"
            animate={{ cx: [32, 20, 32] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );
    case "spectrum":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[5.2rem] h-[5.2rem]">
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M24 7l16 8.5-16 8.5L8 15.5 24 7z"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 24l16 8.5L40 24"
            animate={{ y: [0, -1, 0], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
          />
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 32.5L24 41l16-8.5"
            animate={{ y: [0, 1, 0], opacity: [0.45, 0.95, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      );
  }
}

export function BenefitsSection({
  roundedBottom = false,
}: {
  roundedBottom?: boolean;
}) {
  return (
    <section
      className={`relative bg-black text-white pt-[8rem] pb-[8rem] md:pt-[14rem] md:pb-[12rem] ${
        roundedBottom ? "md:rounded-[8rem]" : "md:rounded-t-[8rem]"
      }`}
    >
      <div className="cb-container">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "180px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4.5rem] md:text-[8rem] font-medium leading-[1.05] tracking-[-0.02em] mb-[5rem] md:mb-[10rem] max-w-[78rem]"
        >
          Benefits of working with us
        </motion.h2>

        <div>
          {BENEFITS.map((item, idx) => (
            <div key={item.id}>
              <div className="h-[1px] w-full bg-white/15" />
              <motion.div
                initial={{ y: 16 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "180px 0px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.05,
                }}
                className="py-[4.5rem] md:py-[6rem] grid gap-[2.4rem] md:grid-cols-[28%_1fr] md:items-start"
              >
                <div className="text-[#E5FA3C]">
                  <BenefitIcon type={item.icon} />
                </div>

                <div className="min-w-0 max-w-[68rem]">
                  <h3 className="uppercase text-[1.6rem] md:text-[1.8rem] font-medium tracking-[0.04em] text-[#FA823C] mb-[1.6rem]">
                    {item.title}
                  </h3>
                  <p className="text-[2rem] md:text-[2.6rem] leading-[1.35] text-white/90 font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-[1px] w-full bg-white/15" />
        </div>
      </div>
    </section>
  );
}
