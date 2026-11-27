"use client";

import { motion } from "framer-motion";
import { BentoCardData } from "@/data/serviceDetails";

export function ServiceBentoSection({
  heading,
  cards,
}: {
  heading: string;
  cards: BentoCardData[];
}) {
  return (
    <section className="relative my-[8rem] md:my-[15rem]">
      <div className="cb-container">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-[4.2rem] md:text-[8rem] font-medium leading-[1.1] md:leading-[1] tracking-[-0.01em] mb-[4rem] md:mb-[10rem]"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 gap-[1.2rem] md:grid-cols-3 md:gap-[1.6rem]">
          {cards.map((card, idx) => {
            const isLarge = Boolean(card.large);
            return (
              <motion.article
                key={card.id}
                initial={{ y: 18 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "200px 0px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.04,
                }}
                whileHover={{ y: -3 }}
                className={`min-w-0 bg-[#FFF4EC] rounded-[2rem] overflow-hidden flex flex-col justify-between transition-shadow duration-300 hover:shadow-[var(--shadow-card-elevated)] border border-[#FA823C]/10 ${
                  isLarge
                    ? "md:col-span-2 md:flex-col-reverse"
                    : "md:col-span-1"
                }`}
              >
                <div
                  className={`p-[3rem] ${
                    isLarge ? "md:px-[4rem] md:pt-0 md:pb-[4rem]" : "md:px-[4rem] md:pt-[4rem] md:pb-0"
                  }`}
                >
                  <h3 className="text-[3.2rem] md:text-[4.2rem] font-normal leading-[1.1] tracking-[-0.01em] text-black">
                    {card.title}
                  </h3>
                  <p className="mt-[1.6rem] md:mt-[2rem] text-[1.8rem] md:text-[2rem] leading-[1.4] text-black/80 max-w-[56rem]">
                    {card.description}
                  </p>
                </div>

                <div className="w-full overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    width={960}
                    height={560}
                    loading="eager"
                    decoding="async"
                    className={`w-full object-cover ${
                      isLarge
                        ? "h-[24rem] md:h-[32rem]"
                        : "h-[24rem] md:h-[28rem]"
                    }`}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
