"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProcessStepItem } from "@/data/serviceDetails";

export function ServiceProcessSection({
  heading,
  steps,
}: {
  heading: string;
  steps: ProcessStepItem[];
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;
    const updateActiveOnScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight * 0.52;
        let closestIdx = 0;
        let closestDist = Infinity;

        itemRefs.current.forEach((el, idx) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - viewportCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });

        setActiveIndex(closestIdx);
        ticking = false;
      });
    };

    updateActiveOnScroll();
    window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveOnScroll);
  }, []);

  return (
    <section className="my-[8rem] md:my-[10rem]">
      <div className="cb-container">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4.2rem] md:text-[8rem] font-medium leading-[1.1] md:leading-[1] tracking-[-0.01em] mb-[4rem] md:mb-[10rem]"
        >
          {heading}
        </motion.h2>

        <div className="grid gap-[1rem]">
          {steps.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={item.num}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                initial={{ y: 18 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "200px 0px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-[2rem] p-[3rem] md:p-[6rem] overflow-hidden cursor-pointer transition-colors duration-500 ${
                  isActive ? "text-white ring-1 ring-[#FA823C]/30" : "text-black"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-[inherit] transition-colors duration-500 ${
                    isActive ? "bg-[#0a0a0a]" : "bg-[#eeeeee]"
                  }`}
                />

                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "radial-gradient(55% 85% at 88% 85%, rgba(250, 130, 60, 0.18) 0%, rgba(229, 250, 60, 0.06) 45%, transparent 75%)",
                  }}
                />

                <div
                  className={`absolute top-0 bottom-0 right-0 w-full md:w-[55%] pointer-events-none mix-blend-lighten transition-opacity duration-500 ${
                    isActive ? "opacity-90" : "opacity-0"
                  }`}
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 45%, black 100%)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 45%, black 100%)",
                  }}
                >
                  <img
                    src={item.bgImage}
                    alt=""
                    width={800}
                    height={600}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>

                <div className="relative z-[1] grid gap-[1.6rem] md:flex md:flex-row-reverse md:justify-between md:items-center">
                  <div
                    className={`text-[2rem] md:text-[2.6rem] leading-[1.1] md:text-right transition-colors duration-300 ${
                      isActive ? "text-[#FA823C]" : "text-black/20"
                    }`}
                  >
                    {item.num}
                  </div>
                  <h3 className="text-[3.2rem] md:text-[4.2rem] font-normal leading-[1.1]">
                    {item.title}
                  </h3>
                </div>

                <div
                  className={`relative z-[1] grid items-start transition-[grid-template-rows] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-rows-[1fr] ${
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden transition-opacity duration-400 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="mt-[2.4rem] md:mt-[3.2rem] md:max-w-[56rem] text-[2rem] leading-[1.4] tracking-[0.02em]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
