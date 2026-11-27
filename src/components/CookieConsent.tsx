"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  COOKIE_EVENT_OPEN,
  isCookieBannerDismissedForSession,
  markCookieBannerDismissedForSession,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookies";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
// Starts cleanly after PageLoader finishes its 2450ms hold + 550ms exit fade.
const INITIAL_REVEAL_DELAY_MS = 3200;

function CookieIcon({ className = "h-[1.9rem] w-[1.9rem]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.5C6.753 2.5 2.5 6.753 2.5 12C2.5 17.247 6.753 21.5 12 21.5C17.247 21.5 21.5 17.247 21.5 12C21.5 11.46 21.454 10.93 21.367 10.415C20.224 10.676 18.98 10.223 18.27 9.193C17.575 8.185 17.61 6.842 18.268 5.875C16.647 3.82 14.47 2.5 12 2.5Z"
        fill="#FA823C"
        fillOpacity="0.18"
        stroke="#FA823C"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="9.5" r="1.25" fill="#FA823C" />
      <circle cx="13.5" cy="8.25" r="1.05" fill="#000000" />
      <circle cx="15.5" cy="14" r="1.35" fill="#FA823C" />
      <circle cx="9.25" cy="15.25" r="1.15" fill="#000000" />
      <circle cx="12.25" cy="12" r="0.9" fill="#FA823C" />
    </svg>
  );
}

interface ToggleRowProps {
  id: string;
  title: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onToggle?: () => void;
}

function CookieCategoryRow({
  id,
  title,
  description,
  checked,
  locked = false,
  onToggle,
}: ToggleRowProps) {
  return (
    <div className="flex items-center justify-between gap-[1.4rem] rounded-[1.4rem] border border-black/8 bg-[#F4F4F2]/80 px-[1.4rem] py-[1.05rem] transition-colors hover:border-black/15">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-[0.8rem]">
          <span
            id={id}
            className="text-[1.4rem] font-medium leading-[1.25] text-black"
          >
            {title}
          </span>
          {locked && (
            <span className="rounded-full bg-[#E5FA3C] px-[0.9rem] py-[0.15rem] text-[1.1rem] font-medium tracking-[0.02em] text-black">
              Always active
            </span>
          )}
        </div>
        <p className="mt-[0.25rem] text-[1.25rem] leading-[1.4] text-[#555555]">
          {description}
        </p>
      </div>

      {locked ? (
        <div
          aria-label={`${title} always enabled`}
          className="flex h-[2.4rem] w-[4.2rem] shrink-0 items-center justify-end rounded-full bg-black px-[0.3rem]"
        >
          <span className="h-[1.8rem] w-[1.8rem] rounded-full bg-[#E5FA3C]" />
        </div>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby={id}
          onClick={onToggle}
          className={`relative flex h-[2.4rem] w-[4.2rem] shrink-0 cursor-pointer items-center rounded-full px-[0.3rem] transition-colors duration-300 ${
            checked ? "bg-[#FA823C]" : "bg-black/15 hover:bg-black/25"
          }`}
        >
          <span
            className={`h-[1.8rem] w-[1.8rem] rounded-full bg-white shadow-sm transition-transform duration-300 ease-out ${
              checked ? "translate-x-[1.8rem]" : "translate-x-0"
            }`}
          />
        </button>
      )}
    </div>
  );
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [preferences, setPreferences] = useState(true);

  useEffect(() => {
    const saved = readCookieConsent();
    const dismissedForSession = isCookieBannerDismissedForSession();
    let revealTimer: number | undefined;

    if (saved) {
      setAnalytics(saved.analytics);
      setPreferences(saved.preferences);
    } else if (!dismissedForSession) {
      revealTimer = window.setTimeout(() => {
        setIsVisible(true);
      }, INITIAL_REVEAL_DELAY_MS);
    }

    const handleOpenSettings = () => {
      if (revealTimer !== undefined) {
        window.clearTimeout(revealTimer);
      }
      const latest = readCookieConsent();
      if (latest) {
        setAnalytics(latest.analytics);
        setPreferences(latest.preferences);
      }
      setIsCustomizing(true);
      setIsVisible(true);
    };

    window.addEventListener(COOKIE_EVENT_OPEN, handleOpenSettings);
    return () => {
      if (revealTimer !== undefined) {
        window.clearTimeout(revealTimer);
      }
      window.removeEventListener(COOKIE_EVENT_OPEN, handleOpenSettings);
    };
  }, []);

  const persistAndClose = (nextAnalytics: boolean, nextPreferences: boolean) => {
    writeCookieConsent({
      analytics: nextAnalytics,
      preferences: nextPreferences,
    });
    setAnalytics(nextAnalytics);
    setPreferences(nextPreferences);
    setIsCustomizing(false);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    markCookieBannerDismissedForSession();
    setIsCustomizing(false);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="pointer-events-none fixed inset-x-0 bottom-[1.4rem] z-[190] flex justify-center px-[1.4rem] md:bottom-[2.4rem] md:px-[2.4rem]">
          <motion.aside
            key="welty-cookie-banner"
            role="dialog"
            aria-modal="false"
            aria-label="Cookie preferences"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="pointer-events-auto relative w-full max-w-[72rem] overflow-hidden rounded-[2.2rem] border border-black/10 bg-white/96 text-black shadow-[0_24px_64px_-16px_rgba(0,0,0,0.16),0_6px_24px_-6px_rgba(250,130,60,0.14)] backdrop-blur-md"
          >
            {/* Top gradient accent hairline matching Welty orange -> electric lime */}
            <div
              aria-hidden="true"
              className="pointer-events-none h-[0.3rem] w-full bg-gradient-to-r from-[#FA823C] via-[#E5FA3C] to-[#FA823C]"
            />

            {/* Soft warm-modern corner ambient tints */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FFF4EC]/80 via-white/40 to-[#F8FCE3]/75"
            />

            <div className="relative max-h-[calc(100dvh-10rem)] overflow-y-auto px-[2rem] py-[1.6rem] md:px-[2.6rem] md:py-[2rem]">
              {/* Header Row: Cookie Icon + Pill + Dismiss */}
              <div className="flex items-center justify-between gap-[1rem]">
                <div className="flex items-center gap-[0.9rem]">
                  <div className="flex h-[3.4rem] w-[3.4rem] shrink-0 items-center justify-center rounded-[1.1rem] border border-[#FA823C]/25 bg-[#FFF4EC] shadow-[0_3px_10px_rgba(250,130,60,0.12)]">
                    <CookieIcon className="h-[1.95rem] w-[1.95rem]" />
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[#FA823C]/25 bg-[#FFF4EC] px-[1.1rem] py-[0.4rem] text-[1.1rem] font-medium uppercase tracking-[0.12em] text-black">
                    Cookies &amp; Privacy
                  </span>
                </div>

                <button
                  type="button"
                  aria-label="Close cookie preferences"
                  onClick={handleDismiss}
                  className="flex h-[3rem] w-[3rem] shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-black/65 transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L11 11M11 1L1 11"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Headline & Summary */}
              <div className="mt-[1.1rem]">
                <h2 className="text-[1.95rem] md:text-[2.2rem] font-medium leading-[1.18] tracking-[-0.02em] text-black">
                  Your privacy, tuned cleanly.
                </h2>
                <p className="mt-[0.5rem] text-[1.35rem] md:text-[1.42rem] leading-[1.48] text-black/72">
                  Welty Tech uses essential cookies for reliable forms and
                  navigation, plus optional analytics and experience cookies.{" "}
                  <Link
                    href="/cookies"
                    onClick={() => setIsVisible(false)}
                    className="font-medium text-black underline decoration-[#FA823C] decoration-[1.5px] underline-offset-4 transition-colors hover:text-[#FA823C]"
                  >
                    Read Cookies Policy
                  </Link>
                </p>
              </div>

              {/* Expandable Preference Switches */}
              <AnimatePresence initial={false}>
                {isCustomizing && (
                  <motion.div
                    key="cookie-customize-panel"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.34, ease: EASE_OUT_EXPO }}
                    className="overflow-hidden"
                  >
                    <div className="mt-[1.3rem] flex flex-col gap-[0.8rem] border-t border-black/8 pt-[1.3rem]">
                      <CookieCategoryRow
                        id="cookie-cat-necessary"
                        title="Strictly Necessary"
                        description="Required for inquiry form reliability, security, and saving your privacy preference."
                        checked
                        locked
                      />
                      <CookieCategoryRow
                        id="cookie-cat-analytics"
                        title="Analytics & Performance"
                        description="Helps us measure Core Web Vitals and improve our design & software guides."
                        checked={analytics}
                        onToggle={() => setAnalytics((prev) => !prev)}
                      />
                      <CookieCategoryRow
                        id="cookie-cat-preferences"
                        title="Experience & Preferences"
                        description="Remembers smooth scrolling, showcase video playback, and motion settings."
                        checked={preferences}
                        onToggle={() => setPreferences((prev) => !prev)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Balanced Desktop Row + Clean Mobile 2-Row Grid */}
              <div className="mt-[1.5rem] grid grid-cols-2 gap-[0.85rem] sm:flex sm:items-center sm:gap-[1rem]">
                <button
                  type="button"
                  onClick={() => persistAndClose(true, true)}
                  className="col-span-2 inline-flex h-[4.1rem] cursor-pointer items-center justify-center rounded-full bg-[#FA823C] px-[2.2rem] text-[1.38rem] font-medium text-white shadow-[0_6px_18px_rgba(250,130,60,0.28)] transition-all duration-200 hover:bg-black hover:shadow-none active:scale-[0.98] sm:col-span-1 sm:flex-1"
                >
                  Accept all
                </button>

                <button
                  type="button"
                  onClick={() => persistAndClose(false, false)}
                  className="inline-flex h-[4.1rem] cursor-pointer items-center justify-center rounded-full border border-black/12 bg-[#F4F4F2] px-[1.8rem] text-[1.35rem] font-normal text-black transition-all duration-200 hover:border-black/20 hover:bg-[#E5FA3C] active:scale-[0.98] sm:flex-1"
                >
                  Essential only
                </button>

                {isCustomizing ? (
                  <button
                    type="button"
                    onClick={() => persistAndClose(analytics, preferences)}
                    className="col-span-2 inline-flex h-[4.1rem] cursor-pointer items-center justify-center rounded-full border border-black/15 bg-[#E5FA3C] px-[2.2rem] text-[1.35rem] font-medium text-black transition-all duration-200 hover:bg-black hover:text-white active:scale-[0.98] sm:col-span-1 sm:min-w-[16rem]"
                  >
                    Save preferences
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsCustomizing(true)}
                    className="inline-flex h-[4.1rem] cursor-pointer items-center justify-center gap-[0.65rem] rounded-full border border-black/12 bg-white px-[1.8rem] text-[1.35rem] font-medium text-black/85 transition-colors hover:border-black hover:text-black sm:min-w-[15rem]"
                  >
                    <span>Customize</span>
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1.25L5.5 5.75L10 1.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
