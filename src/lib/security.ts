const SINGLE_LINE_CONTROL_REGEX =
  /[\u0000-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g;
const MULTILINE_CONTROL_REGEX =
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g;

export const INPUT_LIMITS = {
  name: 120,
  email: 254,
  phone: 30,
  message: 5000,
  attachmentLink: 500,
} as const;

/**
 * Removes control characters, CR/LF sequences, and Unicode bidirectional
 * overrides from single-line inputs to prevent header and log injection.
 */
export function sanitizeSingleLineInput(
  value: string,
  maxLength: number
): string {
  return value
    .replace(SINGLE_LINE_CONTROL_REGEX, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/**
 * Normalizes line endings and strips null bytes, control characters, and
 * Unicode bidirectional overrides from multiline text inputs.
 */
export function sanitizeMultilineInput(
  value: string,
  maxLength: number
): string {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(MULTILINE_CONTROL_REGEX, "")
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates an email address with practical RFC length and domain checks.
 */
export function isValidEmailAddress(rawValue: string): boolean {
  const email = sanitizeSingleLineInput(rawValue, INPUT_LIMITS.email + 1);
  if (!email || email.length > INPUT_LIMITS.email) return false;
  if (email.includes("..")) return false;

  const atIndex = email.indexOf("@");
  if (atIndex <= 0 || atIndex !== email.lastIndexOf("@")) return false;

  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex + 1);
  if (localPart.length > 64 || domainPart.length > 253) return false;
  if (localPart.startsWith(".") || localPart.endsWith(".")) return false;

  return (
    /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(localPart) &&
    /^[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,63}$/.test(domainPart)
  );
}

/**
 * Validates an optional phone input against safe characters and digit count.
 */
export function isValidPhoneInput(rawValue: string): boolean {
  const cleaned = sanitizeSingleLineInput(rawValue, INPUT_LIMITS.phone + 1);
  if (!cleaned) return true;
  if (cleaned.length > INPUT_LIMITS.phone) return false;
  if (!/^[+\d\s().-]{6,30}$/.test(cleaned)) return false;

  const digits = cleaned.match(/\d/g)?.length ?? 0;
  return digits >= 6 && digits <= 15;
}

function isPrivateOrReservedIpv4(ip: string): boolean {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) {
    return true;
  }

  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a >= 224) return true;
  return false;
}

function isPrivateOrReservedHostname(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/\.+$/, "");
  if (!host) return true;

  if (
    host === "localhost" ||
    host.endsWith(".localhost") ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    host.endsWith(".arpa")
  ) {
    return true;
  }

  if (host.startsWith("[") || host.includes(":")) {
    return true;
  }

  if (/^\d+$/.test(host) || /^0x[0-9a-f]+$/i.test(host)) {
    return true;
  }

  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
    return isPrivateOrReservedIpv4(host);
  }

  return !/^[a-z0-9-]+(\.[a-z0-9-]+)*\.(?:[a-z]{2,63}|xn--[a-z0-9]{2,59})$/.test(
    host
  );
}

export type AttachmentValidationResult =
  | { valid: true; normalizedUrl: string }
  | { valid: false; error: string };

/**
 * Validates an optional project brief / document link.
 * Blocks javascript:, data:, file:, http:, embedded credentials, and internal/SSRF hosts.
 */
export function validateSafeAttachmentUrl(
  rawValue: string
): AttachmentValidationResult {
  const cleaned = sanitizeSingleLineInput(
    rawValue,
    INPUT_LIMITS.attachmentLink + 1
  );
  if (!cleaned) {
    return { valid: true, normalizedUrl: "" };
  }

  if (cleaned.length > INPUT_LIMITS.attachmentLink) {
    return {
      valid: false,
      error: `Attachment link must be ${INPUT_LIMITS.attachmentLink} characters or fewer.`,
    };
  }

  if (/\s/.test(cleaned)) {
    return {
      valid: false,
      error: "Please enter a valid https:// link without spaces.",
    };
  }

  const hasExplicitScheme = /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(cleaned);
  if (hasExplicitScheme && !/^https:\/\//i.test(cleaned)) {
    return {
      valid: false,
      error:
        "For your security, only https:// links (e.g. https://drive.google.com/...) are accepted.",
    };
  }

  const candidate = hasExplicitScheme ? cleaned : `https://${cleaned}`;

  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== "https:") {
      return {
        valid: false,
        error: "Only https:// document links are allowed.",
      };
    }

    if (parsed.username || parsed.password) {
      return {
        valid: false,
        error: "Links cannot contain embedded usernames or passwords.",
      };
    }

    if (isPrivateOrReservedHostname(parsed.hostname)) {
      return {
        valid: false,
        error:
          "Please provide a public https:// link (Google Drive, Figma, Notion, Dropbox, etc.).",
      };
    }

    return { valid: true, normalizedUrl: parsed.toString() };
  } catch {
    return {
      valid: false,
      error:
        "Please enter a valid https:// link (e.g. https://drive.google.com/...).",
    };
  }
}
