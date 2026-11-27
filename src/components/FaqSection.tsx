"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_ITEMS, FaqItem } from "@/data/welty";

type FaqWithLink = FaqItem & { link?: { label: string; href: string } };

export function FaqSection({
  items = FAQ_ITEMS,
  roundedTop = false,
}: {
  items?: FaqWithLink[];
  roundedTop?: boolean;
}) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="faq"
      className={`relative bg-black text-white pt-[8rem] md:pt-[15rem] ${
        roundedTop ? "pb-[6rem] md:pb-[10rem] md:rounded-t-[8rem]" : ""
      }`}
    >
      <div className="cb-container">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4.5rem] md:text-[8rem] font-medium leading-[1] tracking-[-0.02em] mb-[4rem] md:mb-[12rem]"
        >
          FAQ
        </motion.h2>

        <div>
          {items.map((item) => {
            const isOpen = Boolean(openIds[item.id]);
            return (
              <div key={item.id} className="relative">
                <div className="h-[1px] w-full bg-white/20" />
                <div className="py-[4rem]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-start md:items-center justify-between gap-[1.6rem] text-left text-[2.4rem] leading-[1.2] tracking-[0.02em] text-white font-normal bg-transparent border-0 hover:text-[#E5FA3C] transition-colors duration-200"
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`relative shrink-0 w-[2rem] h-[2rem] mt-[1rem] md:mt-0 transition-all duration-500 ${
                        isOpen ? "rotate-[135deg] text-[#FA823C]" : "rotate-0"
                      }`}
                    >
                      <span className="absolute left-0 right-0 top-[calc(50%-1px)] h-[2px] bg-current" />
                      <span className="absolute top-0 bottom-0 left-[calc(50%-1px)] w-[2px] bg-current" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-[1.6rem] md:pt-[4rem] text-[1.8rem] leading-[1.5] text-white/75 max-w-[92rem]">
                          {item.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className={pIdx > 0 ? "mt-[1em]" : ""}>
                              {p}
                            </p>
                          ))}
                          {item.link && (
                            <p className="mt-[1.4em]">
                              <Link
                                href={item.link.href}
                                className="text-[#E5FA3C] underline underline-offset-4 hover:text-[#FA823C] transition-colors"
                              >
                                {item.link.label} →
                              </Link>
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
          <div className="h-[1px] w-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}
