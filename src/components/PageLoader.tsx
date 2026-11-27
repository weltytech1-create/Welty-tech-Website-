"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DROPLETS = [
  { angle: -90, colorStart: "#FF5E57", colorEnd: "#FA823C", delay: 0.0 },
  { angle: -30, colorStart: "#FA823C", colorEnd: "#FFB347", delay: 0.08 },
  { angle: 30, colorStart: "#F9B233", colorEnd: "#E5FA3C", delay: 0.16 },
  { angle: 90, colorStart: "#E5FA3C", colorEnd: "#FFB347", delay: 0.06 },
  { angle: 150, colorStart: "#FFC837", colorEnd: "#FA823C", delay: 0.14 },
  { angle: 210, colorStart: "#FF6B4A", colorEnd: "#F5515F", delay: 0.11 },
];

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 2450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] bg-white pointer-events-none flex items-center justify-center overflow-hidden"
        >
          {/* Subtle ambient radial tint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.9, 0.5], scale: [0.6, 1.15, 1] }}
            transition={{ duration: 1.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[34rem] h-[34rem] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(250,130,60,0.14) 0%, rgba(229,250,60,0.10) 45%, transparent 72%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-[1.8rem]">
            <div className="relative w-[14rem] h-[14rem] flex items-center justify-center">
              {/* Stage 1 & 2: Colorful liquid droplets gather, coalesce, and bloom into the Welty emblem */}
              <motion.svg
                viewBox="0 0 180 180"
                className="absolute inset-0 w-full h-full overflow-visible"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0] }}
                transition={{
                  duration: 1.75,
                  times: [0, 0.72, 1],
                  ease: "easeOut",
                }}
              >
                <defs>
                  <filter
                    id="welty-liquid-goo"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="5.5"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -9"
                      result="goo"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="goo"
                      operator="atop"
                    />
                  </filter>

                  {DROPLETS.map((drop, idx) => (
                    <linearGradient
                      key={`grad-${idx}`}
                      id={`drop-grad-${idx}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor={drop.colorStart} />
                      <stop offset="100%" stopColor={drop.colorEnd} />
                    </linearGradient>
                  ))}
                </defs>

                <g filter="url(#welty-liquid-goo)">
                  {/* Central molten droplet nucleus */}
                  <motion.circle
                    cx="90"
                    cy="90"
                    r="13"
                    fill="#FA823C"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 0.45, 1.35, 0.9],
                      opacity: [0, 0.9, 1, 1],
                    }}
                    transition={{
                      duration: 1.4,
                      times: [0, 0.32, 0.72, 1],
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: "90px 90px" }}
                  />

                  {/* 6 colorful teardrop droplets rushing inward to form the logo */}
                  {DROPLETS.map((drop, idx) => (
                    <g
                      key={drop.angle}
                      transform={`translate(90, 90) rotate(${drop.angle})`}
                    >
                      {/* Main teardrop shape pointing inward */}
                      <motion.path
                        d="M -14 0 C -14 -7.5, -2 -10, 12 -5.5 C 18 -3.5, 18 3.5, 12 5.5 C -2 10, -14 7.5, -14 0 Z"
                        fill={`url(#drop-grad-${idx})`}
                        initial={{
                          x: 72,
                          scale: 0.35,
                          opacity: 0,
                        }}
                        animate={{
                          x: [72, 30, 8, 18],
                          scale: [0.35, 1.05, 0.95, 1.15],
                          opacity: [0, 1, 1, 0.95],
                        }}
                        transition={{
                          duration: 1.4,
                          delay: drop.delay,
                          times: [0, 0.42, 0.74, 1],
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />

                      {/* Trailing micro-droplet splash */}
                      <motion.circle
                        cx="0"
                        cy="0"
                        r="4.5"
                        fill={drop.colorStart}
                        initial={{ x: 86, scale: 0.4, opacity: 0 }}
                        animate={{
                          x: [86, 44, 12],
                          scale: [0.4, 0.95, 0.2],
                          opacity: [0, 0.95, 0],
                        }}
                        transition={{
                          duration: 1.05,
                          delay: drop.delay + 0.06,
                          times: [0, 0.45, 1],
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </g>
                  ))}
                </g>
              </motion.svg>

              {/* Stage 3: True high-res Welty SVG emblem blooms cleanly from the merged droplets */}
              <motion.img
                src="/assets/welty-logo.svg"
                alt="Welty"
                width={96}
                height={96}
                initial={{ opacity: 0, scale: 0.45, rotate: -28 }}
                animate={{
                  opacity: [0, 1, 1],
                  scale: [0.45, 1.07, 1],
                  rotate: [-28, 3, 0],
                }}
                transition={{
                  duration: 0.95,
                  delay: 1.12,
                  times: [0, 0.65, 1],
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-[8.2rem] h-[8.2rem] object-contain block relative z-[1]"
              />
            </div>

            {/* Clean masked reveal of the Welty wordmark */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{
                  duration: 0.65,
                  delay: 1.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-[3rem] font-medium tracking-[-0.035em] leading-[1.05] text-black"
              >
                Welty
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
