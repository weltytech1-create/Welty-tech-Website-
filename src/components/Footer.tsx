"use client";

import Link from "next/link";
import { FOOTER_CONTENT } from "@/data/welty";
import { openCookieSettings } from "@/lib/cookies";
import { INSTAGRAM_PROFILE_URL, LINKEDIN_URL, X_URL } from "@/lib/seo";

const INSTAGRAM_URL =
  FOOTER_CONTENT.socials.find((s) => s.name === "Instagram")?.href ||
  INSTAGRAM_PROFILE_URL;
const X_PROFILE_URL =
  FOOTER_CONTENT.socials.find((s) => s.name === "X")?.href || X_URL;
const LINKEDIN_PROFILE_URL =
  FOOTER_CONTENT.socials.find((s) => s.name === "LinkedIn")?.href ||
  LINKEDIN_URL;

function InstagramIcon({ className = "w-[2rem] h-[2rem]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect
        x="2.75"
        y="2.75"
        width="18.5"
        height="18.5"
        rx="5.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" />
    </svg>
  );
}

function XIcon({ className = "w-[1.8rem] h-[1.8rem]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-[1.95rem] h-[1.95rem]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
    </svg>
  );
}

function LocationPinIcon({ className = "w-[1.45rem] h-[1.45rem]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s-6.5-5.65-6.5-11a6.5 6.5 0 1 1 13 0c0 5.35-6.5 11-6.5 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white pt-[6rem] pb-[5rem] md:pt-[8rem] md:pb-[7rem]"
    >
      <div className="cb-container">
        {/* Welty Tech Brand Header inside Footer */}
        <div className="mb-[5rem] md:mb-[6rem] flex flex-col sm:flex-row sm:items-center justify-between gap-[2rem]">
          <div className="flex items-center gap-[1rem]">
            <span className="w-[4.6rem] h-[4.6rem] rounded-[1.1rem] bg-white p-[0.45rem] flex items-center justify-center shrink-0">
              <img
                src="/assets/welty-logo.svg"
                alt="Welty logo"
                width={44}
                height={44}
                className="w-full h-full object-contain block"
              />
            </span>
            <span className="text-[2.8rem] font-medium tracking-[-0.035em] leading-[1] translate-y-[0.02em] text-white">
              Welty
            </span>
          </div>
          <p className="text-[1.6rem] md:text-[1.8rem] text-white/65 font-normal">
            {FOOTER_CONTENT.tagline}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-[6rem]">
          {/* Left Contact Pills & Focus Summary (No Physical Addresses) */}
          <div className="max-w-[48rem]">
            <div className="flex flex-wrap items-center gap-[1.6rem]">
              <a
                href={`mailto:${FOOTER_CONTENT.email}`}
                className="cb-cta cb-cta-sm cb-cta-outline-inverse"
              >
                <span className="cb-cta-label">
                  <span data-text={FOOTER_CONTENT.email}>
                    {FOOTER_CONTENT.email}
                  </span>
                </span>
              </a>

              <Link
                href="/contacts"
                className="cb-cta cb-cta-sm cb-cta-outline-inverse"
              >
                <span className="cb-cta-label">
                  <span data-text="Start a project">Start a project</span>
                </span>
              </Link>
            </div>

            <p className="mt-[2.8rem] text-[1.5rem] md:text-[1.6rem] leading-[1.5] text-white/60">
              {FOOTER_CONTENT.summary}
            </p>
          </div>

          {/* Right 2x3 Navigation Grid */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-[6rem] gap-y-[2rem] md:gap-x-[8rem] md:gap-y-[2.2rem] text-[2rem] md:text-[2.2rem] leading-[1.3]"
          >
            {FOOTER_CONTENT.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white no-underline transition-colors duration-200 hover:text-[#E5FA3C]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Legal & Official Social Icons */}
        <div className="mt-[6rem] md:mt-[10rem] pt-[3.6rem] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[2.8rem]">
          <div className="flex flex-col items-start gap-[1.4rem]">
            <div className="flex flex-wrap items-center gap-x-[2.4rem] gap-y-[1.2rem] text-[1.6rem] leading-[1.3]">
              <Link
                href={FOOTER_CONTENT.privacyHref}
                className="text-white no-underline hover:text-[#E5FA3C] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href={FOOTER_CONTENT.cookiesHref}
                className="text-white no-underline hover:text-[#E5FA3C] transition-colors"
              >
                Cookies Policy
              </Link>
              <button
                type="button"
                onClick={openCookieSettings}
                className="cursor-pointer bg-transparent p-0 text-left text-[1.6rem] leading-[1.3] text-white/75 hover:text-[#E5FA3C] transition-colors"
              >
                Cookie Settings
              </button>
              <span className="text-white/50">{FOOTER_CONTENT.copyright}</span>
            </div>

            <div className="flex flex-wrap items-center gap-[1rem]">
              <div className="inline-flex flex-wrap items-center gap-[0.8rem] rounded-full border border-white/12 bg-white/[0.04] px-[1.4rem] py-[0.55rem] text-[1.35rem] leading-[1.3] text-white/65">
                <span
                  aria-hidden="true"
                  className="h-[0.6rem] w-[0.6rem] rounded-full bg-[#E5FA3C] shrink-0"
                />
                <span>MSME (Udyam) Reg. No:</span>
                <span className="font-medium tracking-[0.02em] text-white">
                  {FOOTER_CONTENT.udyamRegistration}
                </span>
              </div>

              <div className="inline-flex flex-wrap items-center gap-[0.7rem] rounded-full border border-white/12 bg-white/[0.04] px-[1.4rem] py-[0.55rem] text-[1.35rem] leading-[1.3] text-white/65">
                <LocationPinIcon className="w-[1.4rem] h-[1.4rem] text-[#FA823C] shrink-0" />
                <span>Location:</span>
                <span className="font-medium tracking-[0.02em] text-white">
                  {FOOTER_CONTENT.location}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[1.2rem]">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Welty Tech on Instagram"
              title="Instagram"
              className="w-[4.4rem] h-[4.4rem] rounded-full bg-[linear-gradient(135deg,#F58529_0%,#DD2A7B_50%,#8134AF_100%)] text-white flex items-center justify-center shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:bg-none hover:bg-[#E5FA3C] hover:text-black"
            >
              <InstagramIcon className="w-[2.05rem] h-[2.05rem]" />
            </a>

            <a
              href={X_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Welty Tech on X (Twitter)"
              title="X (Twitter)"
              className="w-[4.4rem] h-[4.4rem] rounded-full bg-[#141414] border border-white/20 text-white flex items-center justify-center shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E5FA3C] hover:bg-[#E5FA3C] hover:text-black"
            >
              <XIcon className="w-[1.8rem] h-[1.8rem]" />
            </a>

            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Welty Tech on LinkedIn"
              title="LinkedIn"
              className="w-[4.4rem] h-[4.4rem] rounded-full bg-[#0A66C2] text-white flex items-center justify-center shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5FA3C] hover:text-black"
            >
              <LinkedInIcon className="w-[1.95rem] h-[1.95rem]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
