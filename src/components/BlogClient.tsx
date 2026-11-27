"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OutroSection } from "@/components/OutroSection";
import { BLOG_CATEGORIES, BLOG_ENTRIES, BlogCategory } from "@/data/welty";

export function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<
    "All Posts" | BlogCategory
  >("All Posts");

  const filtered =
    activeCategory === "All Posts"
      ? BLOG_ENTRIES
      : BLOG_ENTRIES.filter((entry) => entry.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-[12rem] pb-[5rem] md:pt-[20rem] md:pb-[7rem]">
          <div className="cb-container">
            <motion.h1
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[4.5rem] md:text-[9rem] font-medium leading-[1] tracking-[-0.02em] text-left md:text-center"
            >
              Blog
            </motion.h1>
            <p className="mt-[2.4rem] text-[2rem] md:text-[2.4rem] leading-[1.3] text-black/75 text-left md:text-center max-w-[68rem] md:mx-auto">
              Insights and engineering notes on digital product design, custom software development and practical AI by Welty Tech.
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-[4.5rem] md:mt-[6rem] flex flex-wrap md:justify-center gap-[1rem] md:gap-[2rem] border-b border-black/10 pb-[1.6rem]">
              {BLOG_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-[1.4rem] py-[0.8rem] text-[1.7rem] md:text-[2rem] bg-transparent border-0 transition-colors duration-200 ${
                      isActive
                        ? "text-black font-medium"
                        : "text-black/45 hover:text-[#FA823C]"
                    }`}
                  >
                    <span>{cat}</span>
                    {isActive && (
                      <motion.span
                        layoutId="blog-filter-indicator"
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 right-0 -bottom-[1.6rem] h-[3px] bg-[#FA823C] rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-[10rem] md:pb-[15rem]">
          <div className="cb-container">
            <div className="grid gap-[5rem] md:grid-cols-3 md:gap-x-[2.4rem] md:gap-y-[6rem]">
              {filtered.map((entry) => (
                <Link
                  key={entry.id}
                  href={entry.href}
                  data-cursor-text="Read"
                  className="group block no-underline text-black"
                >
                  <div className="aspect-square rounded-[2rem] overflow-hidden relative bg-neutral-100 transition-transform duration-400 group-hover:scale-[0.98]">
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

                  <div className="mt-[2.4rem] inline-block uppercase rounded-full border border-black/15 px-[1.4rem] py-[0.6rem] text-[1.3rem] font-medium text-black group-hover:bg-[#E5FA3C] group-hover:border-[#E5FA3C] transition-colors">
                    {entry.category}
                  </div>

                  <h2 className="mt-[1.6rem] text-[2.4rem] md:text-[2.6rem] leading-[1.3] font-medium text-black group-hover:text-[#FA823C] transition-colors">
                    {entry.title}
                  </h2>

                  <p className="mt-[1rem] text-[1.7rem] leading-[1.45] text-black/65 line-clamp-2">
                    {entry.excerpt}
                  </p>

                  <div className="mt-[1.4rem] text-[1.5rem] text-black/45 font-medium">
                    {entry.date} · {entry.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <OutroSection />
      </main>
      <Footer />
    </>
  );
}
