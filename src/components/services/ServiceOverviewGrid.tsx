"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { OverviewTileData, WHY_WELTY_TILES } from "@/data/serviceDetails";
import { WaveDivider } from "@/components/WaveDivider";
import { ServiceIcon } from "./ServiceIcons";

interface CapabilitiesProps {
  heading: string;
  variant: "compact" | "detailed-3x3" | "detailed-3x2" | "detailed-5-7";
  tiles: OverviewTileData[];
}

export function ServiceCapabilitiesSection({
  heading,
  variant,
  tiles,
}: CapabilitiesProps) {
  return (
    <section className="relative my-[8rem] md:my-[14rem]">
      <div className="cb-container">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4.5rem] md:text-[8rem] font-medium leading-[1] tracking-[-0.02em] mb-[2rem] md:mb-[6rem]"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 gap-[0.8rem] mt-[2rem] md:grid-cols-12 md:gap-[1.6rem] md:mt-[7.2rem]">
          {tiles.map((tile, idx) => {
            const colSpanClass =
              variant === "detailed-5-7"
                ? tile.colSpan === "7"
                  ? "md:col-span-7"
                  : "md:col-span-5"
                : "md:col-span-4";

            const isCompact = variant === "compact";

            return (
              <motion.div
                key={tile.id}
                initial={{ y: 16 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "200px 0px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.03,
                }}
                whileHover={{ y: -3 }}
                className={`${colSpanClass} bg-[#FFF4EC] rounded-[2rem] p-[3rem] md:p-[4rem] flex flex-col justify-between gap-[2.2rem] ${
                  isCompact ? "min-h-[16rem] md:min-h-[20rem]" : "min-h-[22rem] md:min-h-[28rem]"
                } transition-shadow duration-300 hover:shadow-[var(--shadow-card-elevated)]`}
              >
                <div className="text-[#FA823C]">
                  <ServiceIcon name={tile.iconKey} className="w-[4rem] h-[4rem]" />
                </div>

                <div>
                  <h3 className="text-[2.4rem] md:text-[2.8rem] font-normal leading-[1.2] tracking-[-0.02em] text-black">
                    {tile.title}
                  </h3>
                  {tile.description && (
                    <p className="mt-[1.2rem] text-[1.7rem] md:text-[1.8rem] leading-[1.45] text-black/75">
                      {tile.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface TimelinesProps {
  heading: string;
  variant: "4-grid" | "5-grid";
  tiles: OverviewTileData[];
  note: string;
  noteLink?: { label: string; href: string };
}

export function ServiceTimelinesSection({
  heading,
  tiles,
  note,
  noteLink,
}: TimelinesProps) {
  return (
    <section className="relative my-[8rem] md:my-[14rem]">
      <div className="cb-container">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4.5rem] md:text-[8rem] font-medium leading-[1] tracking-[-0.02em] mb-[2rem] md:mb-[6rem]"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 gap-[0.8rem] mt-[2rem] md:grid-cols-12 md:gap-[1.6rem] md:mt-[7.2rem]">
          {tiles.map((tile, idx) => {
            const colSpanClass =
              tile.colSpan === "7"
                ? "md:col-span-7"
                : tile.colSpan === "5"
                ? "md:col-span-5"
                : tile.colSpan === "6"
                ? "md:col-span-6"
                : "md:col-span-4";

            const bgClass = tile.highlighted ? "bg-[#F8FCE3]" : "bg-[#FFF4EC]";

            return (
              <motion.div
                key={tile.id}
                initial={{ y: 16 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "200px 0px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.04,
                }}
                whileHover={{ y: -3 }}
                className={`${colSpanClass} ${bgClass} rounded-[2rem] p-[3rem] md:p-[4rem] flex flex-col justify-between gap-[2.2rem] min-h-[20.8rem] md:min-h-[28rem] transition-shadow duration-300 hover:shadow-[var(--shadow-card-elevated)]`}
              >
                <div>
                  {tile.iconImage ? (
                    <img
                      src={tile.iconImage}
                      alt=""
                      width={56}
                      height={56}
                      loading="eager"
                      decoding="async"
                      className="w-[4.8rem] h-[4.8rem] object-contain"
                    />
                  ) : (
                    <div className={tile.highlighted ? "text-black" : "text-[#FA823C]"}>
                      <ServiceIcon name={tile.iconKey} className="w-[4rem] h-[4rem]" />
                    </div>
                  )}
                </div>

                <div className="text-black">
                  <div className="text-[2.2rem] md:text-[2.6rem] leading-[1.2] tracking-[-0.02em] font-normal">
                    {tile.title}
                  </div>
                  {tile.stat && (
                    <div className="mt-[1rem] inline-flex items-center px-[1.4rem] py-[0.5rem] rounded-full bg-black text-[#E5FA3C] uppercase text-[1.4rem] md:text-[1.5rem] font-medium tracking-[0.04em]">
                      {tile.stat}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-[3.2rem] md:mt-[4.8rem] max-w-[78rem]">
          <p className="text-[1.7rem] md:text-[1.9rem] leading-[1.5] text-black/70">
            {note}{" "}
            {noteLink && (
              <Link
                href={noteLink.href}
                className="text-black font-medium underline underline-offset-4 hover:text-[#FA823C] transition-colors"
              >
                {noteLink.label}
              </Link>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServiceWhyWeltySection({ text }: { text: string }) {
  return (
    <section className="relative my-[8rem] md:my-[14rem]">
      <div className="cb-container">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4.5rem] md:text-[8rem] font-medium leading-[1] tracking-[-0.02em] mb-[2.5rem] md:mb-[4.5rem]"
        >
          Why Welty
        </motion.h2>

        <div className="mb-[2.5rem] md:mb-[4.5rem] text-black">
          <WaveDivider />
        </div>

        <div className="md:flex">
          <div className="mb-[2rem] md:mb-0 md:flex-[0_0_28%]">
            <h3 className="uppercase text-[1.4rem] md:text-[1.6rem] leading-[1.1] font-normal text-black inline-flex items-center gap-[0.8rem]">
              <span className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#FA823C] inline-block" />
              <span>WHY WELTY</span>
            </h3>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[2rem] md:text-[2.56rem] leading-[1.3] tracking-[0.01em] max-w-[94%] md:max-w-[86%] font-normal text-black">
              {text}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[0.8rem] mt-[2rem] md:grid-cols-12 md:gap-[1.6rem] md:mt-[7.2rem]">
          {WHY_WELTY_TILES.map((tile, idx) => {
            const spanClass = tile.colSpan === "6" ? "md:col-span-6" : "md:col-span-4";
            const bgClass =
              idx === 0
                ? "bg-[#E5FA3C]"
                : idx === 2
                ? "bg-[#FA823C]"
                : tile.highlighted
                ? "bg-[#F8FCE3]"
                : "bg-[#FFF4EC]";
            const iconColorClass =
              idx === 0 || idx === 2 ? "text-black" : "text-[#FA823C]";

            return (
              <motion.div
                key={tile.id}
                initial={{ y: 18 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "200px 0px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.04,
                }}
                whileHover={{ y: -4 }}
                className={`${spanClass} ${bgClass} rounded-[2rem] flex flex-col justify-between gap-[2.2rem] p-[3rem] md:p-[4rem] h-[20.8rem] md:h-[30rem] transition-shadow duration-300 hover:shadow-[var(--shadow-card-elevated)]`}
              >
                <div className={iconColorClass}>
                  <ServiceIcon name={tile.iconKey} className="w-[4rem] h-[4rem]" />
                </div>

                {tile.stat ? (
                  <div className="text-black tracking-[-0.03em]">
                    <div className="text-[6rem] md:text-[8rem] font-normal leading-[1]">
                      {tile.stat}
                    </div>
                    <div className="uppercase text-[1.4rem] md:text-[1.6rem] leading-[1.1] mt-[0.6rem] font-medium">
                      {tile.title}
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
      </div>
    </section>
  );
}
