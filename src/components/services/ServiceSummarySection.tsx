"use client";

import { motion } from "framer-motion";
import { SummaryRowItem } from "@/data/serviceDetails";
import { WaveDivider } from "@/components/WaveDivider";
import { ServiceIcon } from "./ServiceIcons";

export function ServiceSummarySection({
  heading,
  rows,
}: {
  heading: string;
  rows: SummaryRowItem[];
}) {
  return (
    <section className="relative my-[8rem] md:my-[15rem]">
      <div className="cb-container">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4.5rem] md:text-[8rem] font-medium leading-[1] tracking-[-0.02em] mb-[4rem] md:mb-[12rem]"
        >
          {heading}
        </motion.h2>

        <div>
          {rows.map((row) => (
            <div key={row.id}>
              <div className="my-[4rem] md:mt-[10rem] md:mb-[4.5rem] text-black">
                <WaveDivider />
              </div>

              <div className="group flex flex-col md:flex-row gap-[2.4rem] md:gap-0">
                <div className="md:flex-1">
                  <div className="text-[#FA823C]">
                    <ServiceIcon
                      name={row.iconKey}
                      className="w-[5.2rem] h-[5.2rem] md:w-[6.4rem] md:h-[6.4rem]"
                    />
                  </div>
                </div>

                <div className="md:flex-1">
                  <h3 className="uppercase text-[1.4rem] md:text-[1.28rem] font-medium leading-[1.2] tracking-[0.04em] text-black mb-[1.6rem] inline-flex items-center gap-[0.8rem]">
                    <span className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#FA823C] inline-block" />
                    <span>{row.caption}</span>
                  </h3>
                  <p className="text-[2rem] md:text-[2.6rem] leading-[1.25] tracking-[0.02em] font-normal text-black max-w-[50rem]">
                    {row.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
