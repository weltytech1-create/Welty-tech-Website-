export const COOKIE_STORAGE_KEY = "welty_cookie_consent";
export const COOKIE_SESSION_DISMISSED_KEY = "welty_cookie_dismissed";
export const COOKIE_EVENT_OPEN = "welty:open-cookie-settings";
export const COOKIE_EVENT_CHANGE = "welty:cookie-consent-change";

export interface CookieConsentState {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
  updatedAt: string;
}

const MAX_CONSENT_PAYLOAD_LENGTH = 512;

function parseConsentPayload(raw: string): CookieConsentState | null {
  if (!raw || raw.length > MAX_CONSENT_PAYLOAD_LENGTH) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<CookieConsentState> | null;
    if (
      parsed &&
      typeof parsed === "object" &&
      parsed.necessary === true &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.preferences === "boolean" &&
      typeof parsed.updatedAt === "string" &&
      parsed.updatedAt.length <= 40 &&
      Number.isFinite(Date.parse(parsed.updatedAt))
    ) {
      return {
        necessary: true,
        analytics: parsed.analytics,
        preferences: parsed.preferences,
        updatedAt: parsed.updatedAt,
      };
    }
  } catch {
    return null;
  }

  return null;
}

function readConsentCookieFallback(): CookieConsentState | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie ? document.cookie.split(";") : [];
  for (const rawCookie of cookies) {
    const [rawName, ...rawValueParts] = rawCookie.trim().split("=");
    if (rawName === "welty_consent_prefs") {
      try {
        return parseConsentPayload(
          decodeURIComponent(rawValueParts.join("="))
        );
      } catch {
        return null;
      }
    }
  }

  return null;
}

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (raw) {
      const parsed = parseConsentPayload(raw);
      if (parsed) return parsed;
    }
  } catch {
    // Fallback to cookie storage below if localStorage is blocked.
  }

  return readConsentCookieFallback();
}

export function isCookieBannerDismissedForSession(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(COOKIE_SESSION_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

export function markCookieBannerDismissedForSession(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(COOKIE_SESSION_DISMISSED_KEY, "1");
  } catch {
    // Ignore storage restriction errors cleanly.
  }
}

export function writeCookieConsent(choices: {
  analytics: boolean;
  preferences: boolean;
}): CookieConsentState {
  const nextState: CookieConsentState = {
    necessary: true,
    analytics: choices.analytics,
    preferences: choices.preferences,
    updatedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(nextState));
      window.sessionStorage.removeItem(COOKIE_SESSION_DISMISSED_KEY);
    } catch {
      // Ignore storage quota or private-mode restriction errors cleanly.
    }

    try {
      const serialized = encodeURIComponent(JSON.stringify(nextState));
      const secureAttr =
        window.location.protocol === "https:" ? "; Secure" : "";
      document.cookie = `welty_consent_prefs=${serialized}; path=/; max-age=15552000; SameSite=Lax${secureAttr}`;
    } catch {
      // Ignore cookie write errors cleanly.
    }

    window.dispatchEvent(
      new CustomEvent<CookieConsentState>(COOKIE_EVENT_CHANGE, {
        detail: nextState,
      })
    );
  }

  return nextState;
}

export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(COOKIE_EVENT_OPEN));
}
