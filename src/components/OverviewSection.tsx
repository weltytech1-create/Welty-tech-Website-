"use client";

import { motion } from "framer-motion";
import { BentoTile } from "@/data/welty";
import { WaveDivider } from "./WaveDivider";
import { ServiceIcon } from "./services/ServiceIcons";

interface OverviewSectionProps {
  id?: string;
  label: string;
  text: string;
  showDivider?: boolean;
  tiles?: BentoTile[];
}

export function OverviewSection({
  id,
  label,
  text,
  showDivider = false,
  tiles,
}: OverviewSectionProps) {
  return (
    <section
      id={id}
      className="relative my-[8rem] md:my-[12rem]"
    >
      <div className="cb-container">
        {showDivider && (
          <div className="mb-[2.5rem] md:mb-[4.5rem] text-black">
            <WaveDivider />
          </div>
        )}

        <div className="md:flex">
          <div className="mb-[2rem] md:mb-0 md:flex-[0_0_28%]">
            <motion.h2
              initial={{ y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "200px 0px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="uppercase text-[1.4rem] md:text-[1.6rem] leading-[1.1] font-normal tracking-normal text-black inline-flex items-center gap-[0.8rem]"
            >
              <span className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#FA823C] inline-block" />
              <span>{label}</span>
            </motion.h2>
          </div>

          <div className="flex-1 min-w-0">
            <motion.p
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "200px 0px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2rem] md:text-[2.56rem] leading-[1.3] tracking-[0.01em] max-w-[94%] md:max-w-[86%] font-normal text-black"
            >
              {text}
            </motion.p>
          </div>
        </div>

        {tiles && tiles.length > 0 && (
          <div className="grid gap-[0.8rem] mt-[2rem] md:grid-cols-12 md:gap-[1.6rem] md:mt-[7.2rem]">
            {tiles.map((tile, index) => {
              const spanClass =
                index >= 3 ? "md:col-span-6" : "md:col-span-4";
              const bgClass =
                tile.tone === "lime"
                  ? "bg-[#E5FA3C]"
                  : tile.tone === "orange"
                  ? "bg-[#FA823C]"
                  : "bg-[#FFF4EC]";
              const iconColorClass =
                tile.tone === "peach" ? "text-[#FA823C]" : "text-black";

              return (
                <motion.div
                  key={tile.id}
                  initial={{ y: 18 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "200px 0px" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.04,
                  }}
                  whileHover={{ y: -4 }}
                  className={`${spanClass} ${bgClass} rounded-[2rem] flex flex-col justify-between gap-[2.2rem] p-[3rem] md:p-[4rem] h-[20.8rem] md:h-[30rem] transition-shadow duration-300 hover:shadow-[var(--shadow-card-elevated)]`}
                >
                  <div className={iconColorClass}>
                    <ServiceIcon name={tile.icon} className="w-[4rem] h-[4rem]" />
                  </div>

                  {tile.stat ? (
                    <div className="text-black tracking-[-0.03em]">
                      <div className="text-[6rem] md:text-[8rem] font-normal leading-[1]">
                        {tile.stat}
                      </div>
                      <div className="uppercase text-[1.4rem] md:text-[1.6rem] leading-[1.1] mt-[0.6rem] font-medium">
                        {tile.label}
                      </div>
                    </div>
                  ) : (
                    <div className="text-[2.4rem] md:text-[2.8rem] leading-[1.2] tracking-[-0.03em] text-black max-w-[28rem]">
                      {tile.title}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
