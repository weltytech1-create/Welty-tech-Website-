"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bot,
  Building2,
  Code2,
  Cookie,
  Cpu,
  Database,
  FileText,
  Layers,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { BLOG_ENTRIES, NAV_LINKS, SERVICE_DROPDOWN_LINKS } from "@/data/welty";

type DesktopTab = "services" | "about" | "blog";

interface MegaMenuItem {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
  badgeClass: string;
  previewImage: string;
  previewDescription: string;
}

const SERVICE_MENU_ITEMS: MegaMenuItem[] = [
  {
    title: "Digital Product Design",
    subtitle: "UX research, UI/UX & Figma systems",
    href: "/services/product-design",
    icon: Layers,
    badgeClass: "bg-[#F4FCE3] text-[#4D7C0F] border-[#84CC16]/25",
    previewImage: "/assets/services/product-design/bento-1.webp",
    previewDescription:
      "User research, interactive wireframing, and scalable Figma design systems built for clarity and conversion.",
  },
  {
    title: "Custom Software",
    subtitle: "Web, mobile & enterprise platforms",
    href: "/services/custom-software-development",
    icon: Code2,
    badgeClass: "bg-[#EFF6FF] text-[#2563EB] border-[#3B82F6]/20",
    previewImage: "/assets/services/web-design-development/bento-1.webp",
    previewDescription:
      "Full-stack SaaS applications, mobile experiences, and reliable backend architectures tailored to your workflow.",
  },
  {
    title: "ERP & CRM Solutions",
    subtitle: "Unified business & customer systems",
    href: "/services/erp-crm-solutions",
    icon: Database,
    badgeClass: "bg-[#ECFDF5] text-[#059669] border-[#10B981]/20",
    previewImage: "/assets/projects/zelt-cover.jpg",
    previewDescription:
      "Custom ERP modules and tailored CRM pipelines connecting operations, inventory, billing, and sales teams.",
  },
  {
    title: "AI & Automation",
    subtitle: "AI agents, chatbots & LLM workflows",
    href: "/services/ai-solutions-automation",
    icon: Sparkles,
    badgeClass: "bg-[#F5F3FF] text-[#7C3AED] border-[#8B5CF6]/20",
    previewImage: "/assets/projects/potion-cover.jpg",
    previewDescription:
      "Practical AI agents, document intelligence, and guardrailed LLM pipelines integrated directly into your apps.",
  },
  {
    title: "On-Prem & Private Cloud",
    subtitle: "Private infrastructure & self-hosted AI",
    href: "/services/on-premises-private-cloud",
    icon: Server,
    badgeClass: "bg-[#FFFBEB] text-[#D97706] border-[#F59E0B]/25",
    previewImage: "/assets/services/5.webp",
    previewDescription:
      "Dedicated private cloud deployments, DevOps automation, and self-hosted AI with complete data sovereignty.",
  },
  {
    title: "Integrations & APIs",
    subtitle: "Connected tools & custom API layers",
    href: "/services/system-integration-api",
    icon: Workflow,
    badgeClass: "bg-[#FFF4EC] text-[#FA823C] border-[#FA823C]/25",
    previewImage: "/assets/projects/daoway-cover.jpg",
    previewDescription:
      "Resilient REST and GraphQL APIs, third-party platform bridges, and structured enterprise data synchronization.",
  },
];

const ABOUT_MENU_ITEMS: MegaMenuItem[] = [
  {
    title: "About Welty Tech",
    subtitle: "Vision, philosophy & engineering focus",
    href: "/about",
    icon: Building2,
    badgeClass: "bg-[#FFF4EC] text-[#FA823C] border-[#FA823C]/25",
    previewImage: "/assets/projects/cisco-cover.jpg",
    previewDescription:
      "Making technology more accessible, intelligent, and useful through thoughtful design, software engineering, and AI.",
  },
  {
    title: "All Services",
    subtitle: "Explore our six core capabilities",
    href: "/services",
    icon: Cpu,
    badgeClass: "bg-[#EFF6FF] text-[#2563EB] border-[#3B82F6]/20",
    previewImage: "/assets/services/1.webp",
    previewDescription:
      "Discover how Welty Tech takes products from UX research and prototyping to enterprise deployment.",
  },
  {
    title: "Privacy Policy",
    subtitle: "Inquiry confidentiality & data care",
    href: "/privacy",
    icon: ShieldCheck,
    badgeClass: "bg-[#ECFDF5] text-[#059669] border-[#10B981]/20",
    previewImage: "/assets/services/2.webp",
    previewDescription:
      "Transparent handling of project materials, contact inquiries, and client data privacy.",
  },
  {
    title: "Cookies Policy",
    subtitle: "Browser storage & consent settings",
    href: "/cookies",
    icon: Cookie,
    badgeClass: "bg-[#F4FCE3] text-[#4D7C0F] border-[#84CC16]/25",
    previewImage: "/assets/services/3.webp",
    previewDescription:
      "Review strictly necessary, analytics, and preference cookie controls for welty.in.",
  },
];

const BLOG_MENU_ITEMS: MegaMenuItem[] = [
  {
    title: "UX Research & Figma Systems",
    subtitle: BLOG_ENTRIES[0]?.date || "Product Design",
    href: BLOG_ENTRIES[0]?.href || "/blog",
    icon: Layers,
    badgeClass: "bg-[#F4FCE3] text-[#4D7C0F] border-[#84CC16]/25",
    previewImage: BLOG_ENTRIES[0]?.imageUrl || "/assets/blog/art-1.webp",
    previewDescription:
      BLOG_ENTRIES[0]?.excerpt ||
      "Why pairing user research and tokenized Figma libraries accelerates product velocity.",
  },
  {
    title: "Scalable Custom Software",
    subtitle: BLOG_ENTRIES[1]?.date || "Custom Software",
    href: BLOG_ENTRIES[1]?.href || "/blog",
    icon: Code2,
    badgeClass: "bg-[#EFF6FF] text-[#2563EB] border-[#3B82F6]/20",
    previewImage: BLOG_ENTRIES[1]?.imageUrl || "/assets/blog/art-2.webp",
    previewDescription:
      BLOG_ENTRIES[1]?.excerpt ||
      "Tailored SaaS platforms, AI-ready backends, and clean database architecture.",
  },
  {
    title: "Practical AI Agents & LLMs",
    subtitle: BLOG_ENTRIES[2]?.date || "AI & Automation",
    href: BLOG_ENTRIES[2]?.href || "/blog",
    icon: Bot,
    badgeClass: "bg-[#F5F3FF] text-[#7C3AED] border-[#8B5CF6]/20",
    previewImage: BLOG_ENTRIES[2]?.imageUrl || "/assets/blog/art-3.webp",
    previewDescription:
      BLOG_ENTRIES[2]?.excerpt ||
      "Deploying guardrailed AI agents, chatbots, and document workflows with measurable ROI.",
  },
  {
    title: "All Engineering Insights",
    subtitle: "Explore all guides & field notes",
    href: "/blog",
    icon: FileText,
    badgeClass: "bg-[#FFF4EC] text-[#FA823C] border-[#FA823C]/25",
    previewImage: "/assets/services/4.webp",
    previewDescription:
      "Read every guide across digital product design, ERP/CRM systems, private cloud, and API engineering.",
  },
];

const TAB_DEFAULT_SPOTLIGHT: Record<
  DesktopTab,
  {
    badge: string;
    title: string;
    description: string;
    href: string;
    ctaLabel: string;
    previewImage?: string;
    gradientCard?: boolean;
  }
> = {
  services: {
    badge: "Services",
    title: "End-to-End Digital Engineering",
    description:
      "From Figma product design to custom software, ERP/CRM and intelligent AI workflows — engineered for your business.",
    href: "/services",
    ctaLabel: "Explore all services",
    gradientCard: true,
  },
  about: {
    badge: "About",
    title: "Welty Tech",
    description:
      "Engineering What's Next. Thoughtful design, modern software engineering, and practical AI built in one studio.",
    href: "/about",
    ctaLabel: "About Welty Tech",
    previewImage: "/assets/projects/cisco-cover.jpg",
  },
  blog: {
    badge: "Blog",
    title: "Engineering Notes & Guides",
    description:
      "Practical architecture notes on product design systems, full-stack software, ERP/CRM, private cloud, and AI agents.",
    href: "/blog",
    ctaLabel: "Read all articles",
    previewImage: "/assets/blog/art-1.webp",
  },
};

function WeltyLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`inline-flex items-center ${
        compact ? "gap-[0.65rem]" : "gap-[0.85rem]"
      }`}
    >
      <img
        src="/assets/welty-logo.svg"
        alt="Welty logo"
        width={48}
        height={48}
        className={`${
          compact ? "w-[3.1rem] h-[3.1rem]" : "w-[3.5rem] h-[3.5rem]"
        } block object-contain shrink-0`}
      />
      <span
        className={`${
          compact ? "text-[2.1rem]" : "text-[2.25rem]"
        } font-medium tracking-[-0.035em] leading-[1] whitespace-nowrap text-black`}
      >
        Welty
      </span>
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<DesktopTab | null>(null);
  const [hoveredItem, setHoveredItem] = useState<MegaMenuItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
    return () => document.documentElement.classList.remove("no-scroll");
  }, [mobileOpen]);

  useEffect(() => {
    setActiveTab(null);
    setHoveredItem(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveTab(null);
        setHoveredItem(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openTab = (tab: DesktopTab) => {
    if (closeTimeout.current !== null) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    if (activeTab !== tab) {
      setHoveredItem(null);
    }
    setActiveTab(tab);
  };

  const keepOpen = () => {
    if (closeTimeout.current !== null) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const scheduleClose = () => {
    if (closeTimeout.current !== null) {
      window.clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = window.setTimeout(() => {
      setActiveTab(null);
      setHoveredItem(null);
    }, 160);
  };

  const isServicesActive = pathname?.startsWith("/services");
  const isAboutActive = pathname?.startsWith("/about");
  const isBlogActive = pathname?.startsWith("/blog");

  const currentItems =
    activeTab === "services"
      ? SERVICE_MENU_ITEMS
      : activeTab === "about"
        ? ABOUT_MENU_ITEMS
        : activeTab === "blog"
          ? BLOG_MENU_ITEMS
          : [];

  const defaultSpotlight = activeTab ? TAB_DEFAULT_SPOTLIGHT[activeTab] : null;
  const spotlightTitle = hoveredItem?.title ?? defaultSpotlight?.title ?? "";
  const spotlightDescription =
    hoveredItem?.previewDescription ?? defaultSpotlight?.description ?? "";
  const spotlightHref = hoveredItem?.href ?? defaultSpotlight?.href ?? "/services";
  const spotlightImage = hoveredItem?.previewImage ?? defaultSpotlight?.previewImage;
  const useGradientTile = !hoveredItem && defaultSpotlight?.gradientCard;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none">
      {/* Desktop Floating Pill Header with Smooth Expanding Mega Menu */}
      <div
        className={`hidden md:block w-full transition-[padding] duration-300 ${
          scrolled ? "pt-[1.4rem]" : "pt-[2.2rem]"
        } px-[2.4rem] lg:px-[4rem]`}
      >
        <div
          onMouseEnter={keepOpen}
          onMouseLeave={scheduleClose}
          className={`pointer-events-auto mx-auto w-full max-w-[126rem] border border-black/[0.08] bg-white/95 backdrop-blur-xl transition-[border-radius,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            activeTab
              ? "rounded-[2.8rem] shadow-[0_24px_64px_-12px_rgba(0,0,0,0.14),0_4px_20px_rgba(250,130,60,0.08)]"
              : "rounded-[3.6rem] shadow-[0_10px_32px_-10px_rgba(0,0,0,0.08)]"
          }`}
        >
          {/* Persistent Capsule Top Row */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[6.2rem] px-[2.8rem] lg:px-[3.6rem]">
            {/* Left: Welty Brand */}
            <div className="justify-self-start">
              <Link
                href="/"
                onClick={() => setActiveTab(null)}
                aria-label="Welty Tech — Digital Product Design, Custom Software & AI"
                className="inline-flex items-center no-underline transition-opacity duration-200 hover:opacity-80"
              >
                <WeltyLogo />
              </Link>
            </div>

            {/* Dead Center: Clean Nav Triggers */}
            <nav
              aria-label="Primary navigation"
              className="justify-self-center flex items-center gap-[3.2rem] lg:gap-[4.2rem]"
            >
              <Link
                href="/services"
                onMouseEnter={() => openTab("services")}
                onFocus={() => openTab("services")}
                onClick={() => setActiveTab(null)}
                aria-expanded={activeTab === "services"}
                className={`py-[0.8rem] text-[1.65rem] font-normal leading-[1.2] no-underline transition-colors duration-200 ${
                  activeTab === "services" || isServicesActive
                    ? "text-[#FA823C] font-medium"
                    : "text-black/80 hover:text-black"
                }`}
              >
                Services
              </Link>

              <Link
                href="/about"
                onMouseEnter={() => openTab("about")}
                onFocus={() => openTab("about")}
                onClick={() => setActiveTab(null)}
                aria-expanded={activeTab === "about"}
                className={`py-[0.8rem] text-[1.65rem] font-normal leading-[1.2] no-underline transition-colors duration-200 ${
                  activeTab === "about" || isAboutActive
                    ? "text-[#FA823C] font-medium"
                    : "text-black/80 hover:text-black"
                }`}
              >
                About
              </Link>

              <Link
                href="/blog"
                onMouseEnter={() => openTab("blog")}
                onFocus={() => openTab("blog")}
                onClick={() => setActiveTab(null)}
                aria-expanded={activeTab === "blog"}
                className={`py-[0.8rem] text-[1.65rem] font-normal leading-[1.2] no-underline transition-colors duration-200 ${
                  activeTab === "blog" || isBlogActive
                    ? "text-[#FA823C] font-medium"
                    : "text-black/80 hover:text-black"
                }`}
              >
                Blog
              </Link>
            </nav>

            {/* Right: Clean Contact Action */}
            <div className="justify-self-end">
              <Link
                href="/contacts"
                onClick={() => setActiveTab(null)}
                className={`inline-flex items-center gap-[0.6rem] rounded-full px-[1.8rem] py-[0.85rem] text-[1.55rem] font-medium no-underline transition-all duration-200 ${
                  pathname === "/contacts"
                    ? "bg-[#FA823C] text-white"
                    : "text-black hover:bg-[#FFF4EC] hover:text-[#FA823C]"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Unified Expanding Mega-Menu Drawer Inside Pill */}
          <AnimatePresence initial={false}>
            {activeTab && defaultSpotlight && (
              <motion.div
                key="desktop-mega-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-black/[0.08]"
              >
                <div className="px-[3.6rem] py-[3rem] grid grid-cols-[1.55fr_1fr] gap-[3.6rem] items-start">
                  {/* Left: 2-Column Icon Showcase Grid */}
                  <div className="grid grid-cols-2 gap-x-[2.2rem] gap-y-[1.2rem]">
                    {currentItems.map((item) => {
                      const Icon = item.icon;
                      const isCurrent = pathname === item.href;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onMouseEnter={() => setHoveredItem(item)}
                          onClick={() => setActiveTab(null)}
                          className={`group flex items-start gap-[1.3rem] rounded-[1.4rem] p-[1.1rem] no-underline transition-colors duration-200 ${
                            isCurrent
                              ? "bg-[#FFF4EC]/80"
                              : "hover:bg-black/[0.03]"
                          }`}
                        >
                          <span
                            className={`flex h-[3.8rem] w-[3.8rem] shrink-0 items-center justify-center rounded-[1rem] border transition-transform duration-200 group-hover:scale-105 ${item.badgeClass}`}
                          >
                            <Icon className="h-[1.8rem] w-[1.8rem]" />
                          </span>

                          <span className="min-w-0">
                            <span
                              className={`block text-[1.45rem] font-medium leading-[1.3] transition-colors ${
                                isCurrent
                                  ? "text-[#FA823C]"
                                  : "text-black group-hover:text-[#FA823C]"
                              }`}
                            >
                              {item.title}
                            </span>
                            <span className="mt-[0.2rem] block text-[1.25rem] leading-[1.35] text-black/55">
                              {item.subtitle}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Right: Split Spotlight Preview Card */}
                  <Link
                    href={spotlightHref}
                    onClick={() => setActiveTab(null)}
                    className="group grid grid-cols-[0.92fr_1.08fr] overflow-hidden rounded-[1.8rem] border border-black/[0.08] bg-white no-underline transition-all duration-300 hover:border-[#FA823C]/40 hover:shadow-[0_14px_34px_-12px_rgba(250,130,60,0.18)]"
                  >
                    <div className="relative min-h-[16.8rem] overflow-hidden bg-black">
                      {useGradientTile ? (
                        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#FA823C_0%,#FFB347_52%,#E5FA3C_100%)] p-[1.8rem]">
                          <span className="text-[2.2rem] font-medium tracking-[-0.02em] text-black">
                            {defaultSpotlight.badge}
                          </span>
                        </div>
                      ) : (
                        <img
                          src={spotlightImage || "/assets/services/1.webp"}
                          alt={spotlightTitle}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>

                    <div className="flex flex-col justify-between p-[2rem]">
                      <div>
                        <div className="text-[1.65rem] font-medium leading-[1.25] tracking-[-0.01em] text-black group-hover:text-[#FA823C] transition-colors">
                          {spotlightTitle}
                        </div>
                        <p className="mt-[0.8rem] text-[1.25rem] leading-[1.45] text-black/65 line-clamp-3">
                          {spotlightDescription}
                        </p>
                      </div>

                      <div className="mt-[1.2rem] inline-flex items-center gap-[0.5rem] text-[1.25rem] font-medium text-[#FA823C]">
                        <span>{hoveredItem ? "Learn more" : defaultSpotlight.ctaLabel}</span>
                        <ArrowRight className="h-[1.35rem] w-[1.35rem] transition-transform duration-200 group-hover:translate-x-[0.3rem]" />
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Blurred Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-[190] bg-black/35 backdrop-blur-sm md:hidden pointer-events-auto"
          />
        )}
      </AnimatePresence>

      {/* Unified Mobile Floating Header + Smooth Expanding Drawer */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[200] px-[1.5rem] pt-[1.5rem] pointer-events-none">
        <div
          className={`pointer-events-auto border border-black/10 bg-white/95 backdrop-blur-md transition-[border-radius,box-shadow,background-color] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen
              ? "rounded-[2.2rem] bg-white shadow-2xl"
              : "rounded-[2.8rem] shadow-sm"
          }`}
        >
          {/* Persistent Top Bar (never duplicates or jumps) */}
          <div className="flex items-center justify-between h-[5.4rem] px-[2rem]">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              aria-label="Welty — Digital Product Design, Custom Software & AI"
              className="inline-flex items-center text-black no-underline"
            >
              <WeltyLogo compact />
            </Link>

            <motion.button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              className="relative w-[3.8rem] h-[3.8rem] -mr-[0.4rem] rounded-full bg-transparent border-0 p-0 flex items-center justify-center shrink-0"
            >
              <motion.span
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 0 : -4,
                  width: mobileOpen ? "2rem" : "2.2rem",
                }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="absolute h-[1.8px] bg-black rounded-full block"
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? 0 : 4,
                  width: mobileOpen ? "2rem" : "2.2rem",
                }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="absolute h-[1.8px] bg-black rounded-full block"
              />
            </motion.button>
          </div>

          {/* Smooth Expandable Menu Body */}
          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                key="mobile-drawer-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-[2.4rem] pb-[2.4rem] pt-[0.6rem] max-h-[calc(100dvh-10rem)] overflow-y-auto">
                  <div className="text-[1.5rem] text-black/55 pb-[1.2rem] border-b border-black/10">
                    Menu
                  </div>

                  <nav className="flex flex-col gap-[1.8rem] py-[2.2rem]">
                    <div>
                      <div className="flex items-center justify-between gap-[1.2rem]">
                        <Link
                          href="/services"
                          onClick={() => setMobileOpen(false)}
                          className={`text-[3.2rem] leading-[1.15] font-normal no-underline ${
                            isServicesActive ? "text-[#FA823C]" : "text-black"
                          }`}
                        >
                          Services
                        </Link>
                        <motion.button
                          type="button"
                          aria-label="Toggle services submenu"
                          aria-expanded={mobileServicesOpen}
                          whileTap={{ scale: 0.92 }}
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="w-[4rem] h-[4rem] rounded-full bg-[#FFF4EC] border border-[#FA823C]/25 text-[#FA823C] flex items-center justify-center shrink-0 transition-colors hover:bg-[#FA823C] hover:text-white"
                        >
                          <motion.svg
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            viewBox="0 0 12 8"
                            fill="none"
                            className="w-[1.2rem] h-[0.8rem]"
                          >
                            <path
                              d="M1 1.5L6 6.5L11 1.5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </motion.button>
                      </div>

                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden flex flex-col gap-[1.1rem] pt-[1.4rem] pl-[1.2rem] ml-[0.4rem] border-l-2 border-[#FA823C]/25 list-none m-0"
                          >
                            <li className="flex items-start gap-[1rem]">
                              <span className="w-[0.6rem] h-[0.6rem] rounded-full bg-black/40 shrink-0 mt-[0.85rem]" />
                              <Link
                                href="/services"
                                onClick={() => setMobileOpen(false)}
                                className="text-[1.75rem] leading-[1.35] font-medium text-black no-underline"
                              >
                                All Services
                              </Link>
                            </li>
                            {SERVICE_DROPDOWN_LINKS.map((item) => {
                              const isCurrent = pathname === item.href;
                              return (
                                <li key={item.label} className="flex items-start gap-[1rem]">
                                  <span
                                    className={`w-[0.6rem] h-[0.6rem] rounded-full shrink-0 mt-[0.85rem] ${
                                      isCurrent ? "bg-[#FA823C]" : "bg-[#FA823C]/70"
                                    }`}
                                  />
                                  <Link
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-[1.75rem] leading-[1.35] no-underline ${
                                      isCurrent ? "text-[#FA823C] font-medium" : "text-black/80"
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>

                    {NAV_LINKS.map((link) => {
                      const active = pathname?.startsWith(link.href);
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`text-[3.2rem] leading-[1.15] no-underline ${
                            active ? "text-[#FA823C]" : "text-black"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>

                  <Link
                    href="/contacts"
                    onClick={() => setMobileOpen(false)}
                    className="cb-cta cb-cta-md cb-cta-fill w-full mt-[0.6rem]"
                  >
                    <span className="cb-cta-label">
                      <span data-text="Contact Us">Contact Us</span>
                    </span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
