"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_EVENT_CHANGE,
  CookieConsentState,
  openCookieSettings,
  readCookieConsent,
} from "@/lib/cookies";

export function CookieSettingsTrigger() {
  const [consent, setConsent] = useState<CookieConsentState | null>(null);

  useEffect(() => {
    setConsent(readCookieConsent());

    const handleChange = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsentState>;
      setConsent(customEvent.detail ?? readCookieConsent());
    };

    window.addEventListener(COOKIE_EVENT_CHANGE, handleChange);
    return () => {
      window.removeEventListener(COOKIE_EVENT_CHANGE, handleChange);
    };
  }, []);

  const statusText = !consent
    ? "Not set yet — using essential protection"
    : consent.analytics && consent.preferences
      ? "All cookies enabled"
      : !consent.analytics && !consent.preferences
        ? "Essential cookies only"
        : `Custom (${consent.analytics ? "Analytics on" : "Analytics off"}, ${
            consent.preferences ? "Preferences on" : "Preferences off"
          })`;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[2rem] rounded-[2rem] border border-black/10 bg-black/[0.03] p-[2.4rem] md:p-[3rem]">
      <div>
        <div className="text-[1.2rem] font-medium uppercase tracking-[0.14em] text-[#FA823C]">
          Current preference
        </div>
        <p className="mt-[0.6rem] text-[1.7rem] md:text-[1.9rem] font-medium text-black">
          {statusText}
        </p>
      </div>

      <button
        type="button"
        onClick={openCookieSettings}
        className="cb-cta cb-cta-md cb-cta-fill shrink-0 cursor-pointer"
      >
        <span className="cb-cta-label" data-text="Manage Cookie Preferences">
          <span>Manage Cookie Preferences</span>
        </span>
      </button>
    </div>
  );
}
