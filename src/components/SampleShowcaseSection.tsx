"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SAMPLE_SHOWCASES, SampleShowcaseItem } from "@/data/welty";

function SampleVideoCard({ item }: { item: SampleShowcaseItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldMountVideo, setShouldMountVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShouldMountVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setShouldMountVideo(true);
          const vid = videoRef.current;
          if (vid) {
            vid.play().catch(() => {});
          }
        } else {
          const vid = videoRef.current;
          if (vid) {
            vid.pause();
          }
        }
      },
      { rootMargin: "160px 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShouldMountVideo(true);
    const vid = videoRef.current;
    if (vid) {
      vid.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "220px 0px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={item.href}
        data-cursor-text="Explore"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cb-project-card block no-underline group"
      >
        <div className="cb-project-preview bg-neutral-900">
          <div className="cb-project-media w-full h-full absolute inset-0">
            <img
              src={item.imageUrl}
              alt={item.title}
              width={1000}
              height={1350}
              loading="eager"
              decoding="async"
              className={`w-full h-full object-cover transition-all duration-500 ${
                videoReady
                  ? "opacity-0"
                  : isHovering
                  ? "opacity-100 scale-[1.03]"
                  : "opacity-100"
              }`}
            />
          </div>

          {shouldMountVideo && (
            <div className="cb-project-media w-full h-full absolute inset-0">
              <video
                ref={videoRef}
                src={item.videoUrl}
                poster={item.imageUrl}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onCanPlay={() => setVideoReady(true)}
                onPlaying={() => setVideoReady(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  videoReady ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}
        </div>

        <div className="mt-[1.8rem] md:mt-[2.2rem]">
          <span className="inline-block uppercase rounded-full bg-white/10 border border-white/15 px-[1.2rem] py-[0.4rem] text-[1.15rem] tracking-[0.04em] text-[#E5FA3C] mb-[1rem]">
            Sample · {item.tag}
          </span>
          <h3 className="text-[2rem] md:text-[2.35rem] font-medium leading-[1.2] text-white group-hover:text-[#FA823C] transition-colors duration-300">
            {item.title}
          </h3>
          <p className="mt-[0.7rem] text-[1.55rem] md:text-[1.75rem] leading-[1.4] font-normal text-white/75">
            {item.caption}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function SampleShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rightColY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  const leftItems = SAMPLE_SHOWCASES.filter((s) => s.column === "left");
  const rightItems = SAMPLE_SHOWCASES.filter((s) => s.column === "right");

  return (
    <section
      ref={sectionRef}
      id="showcases"
      className="relative text-white pt-[7rem] pb-[7rem] md:pt-[12rem] md:pb-[10rem]"
    >
      <div className="absolute inset-0 bg-black md:rounded-[8rem] z-0" />

      <div className="cb-container relative z-[1]">
        <div className="mb-[4.5rem] md:mb-[7rem]">
          <p className="uppercase text-[1.4rem] md:text-[1.6rem] tracking-[0.04em] text-[#FA823C] mb-[1.6rem] font-medium">
            CONCEPTS &amp; SAMPLE BUILDS
          </p>
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "200px 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4.5rem] md:text-[8rem] font-medium leading-[1] tracking-[-0.02em] max-w-[82rem]"
          >
            Sample showcases
          </motion.h2>
          <p className="mt-[2rem] text-[1.8rem] md:text-[2.2rem] leading-[1.4] text-white/70 max-w-[68rem]">
            Interactive sample demonstrations showcasing the UI/UX craft, custom software, ERP/CRM workflows, and AI automation standards we deliver at Welty Tech.
          </p>
        </div>

        <div className="grid gap-[4.5rem] md:grid-cols-2 md:gap-x-[5rem] lg:gap-x-[7rem] text-white">
          <div className="min-w-0 grid auto-rows-min gap-[4.5rem] md:gap-[6.5rem]">
            {leftItems.map((item) => (
              <SampleVideoCard key={item.id} item={item} />
            ))}
          </div>

          <motion.div
            style={{ y: rightColY }}
            className="min-w-0 grid auto-rows-min gap-[4.5rem] md:gap-[6.5rem] md:mt-[6.5rem]"
          >
            {rightItems.map((item) => (
              <SampleVideoCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-[5.5rem] md:mt-[9rem] grid md:block">
          <Link href="/services" className="cb-cta cb-cta-lg cb-cta-outline-inverse">
            <span className="cb-cta-label">
              <span data-text="Explore all services">Explore all services</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
